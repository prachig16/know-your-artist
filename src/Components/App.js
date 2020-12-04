import '../Styles/App.css';
import axios from 'axios';
import { Component } from 'react';
import ArtistDetails from './ArtistDetails.js';
import UserForm from './UserForm.js';
import firebase from '../firebase.js';


class App extends Component {
  
  constructor(){
    super();
    this.state ={
      artistsInfo: [],
      userSelection: '',
      searchedArtists: [],
      displaySearchResult: []
    }
    console.log("constructor lifecyle",this.state);
  }
  
  // setting the user selection to the value of the input form.....
  handleInputChange = (e) => {
    this.setState({
      userSelection: e.target.value
    })
  }

  // Call the API using the input provided by user......
  handleInputSubmit = (e) => {
    e.preventDefault();
    this.getArtistDetails(this.state.userSelection);
  }

  // calling a function to get the artist details which will use "userChoice" as an input parameter....
  getArtistDetails = (userChoice) => {
    axios({
      url: 'https://www.theaudiodb.com/api/v1/json/1/search.php',
      method: 'GET',
      responseType: 'json',
      params: {
        s: userChoice
      }
    }).then((apiData) => {
      console.log('api call here',apiData.data.artists);
      if (apiData.data.artists != null){
    
      this.setState({
        artistsInfo: apiData.data.artists
      })
      console.log(this.state.artistsInfo);

      this.pushTheInfo(this.state.artistsInfo[0]);
      }
      else{
        alert('Artist not found! Check the spelling or spaces!')
      }
    })
  }

  pushTheInfo = (infoReceived) =>{
    const dbRef = firebase.database().ref();
    console.log(dbRef);
    const newArtist = [];
    // this.state.searchedArtists;
    console.log('IMPORTANT', newArtist);
    const infoToPush = {
      name: infoReceived.strArtist,
      image: infoReceived.strArtistThumb
    }
    newArtist.push(infoToPush);
    console.log('inside', newArtist);

    dbRef.push(newArtist[0])
    console.log('check this!',dbRef);
    this.setState({
      // setting this new array with 2 objects to the set
      searchedArtists: newArtist
    })
    console.log(this.state.searchedArtists);
  }


  componentDidMount(){
    const dbRef = firebase.database().ref();
    console.log(dbRef);
    dbRef.on('value', (data) =>{
      console.log('component did mount',data.val());
      let myData = data.val();
      let newList = [];
      for (let key in myData){
        let newObj = {
          image:myData[key].image,
          name: myData[key].name
        }
        newList.push(newObj);
      }
      console.log('mounted artist', newList);
      this.setState({
        displaySearchResult: newList
      }) 
    })
    
  }

  render() { 
    return (
      <div className="wrapper">
        <header>
          <h1>Know your Artist!</h1>
        </header>

        <main>
          <UserForm 
            getInput = {this.handleInputChange}
            getSubmit={this.handleInputSubmit}
          />
          

          <section className="displayArtistInfo">
            {
              this.state.artistsInfo.map((artist, index) => {
                return (
                  <ArtistDetails
                    key={index}
                    artistImg={artist.strArtistThumb}
                    artistName={artist.strArtist}
                    artistLabel={artist.strLabel}
                    artistForm={artist.intFormedYear}
                    artistStyle={artist.strStyle}
                    artistGenre={artist.strGenre}
                    artistBio={artist.strBiographyEN}
                  />
                )
              })  
            }
          </section>

            {/*moving through the array created in database to check if the value is displayed in the console  */}
          <section className="searchedInfo">
            <h2>Recent Searches:</h2>
            <ul>
              {
                this.state.displaySearchResult.length === 0 ?
                <p>No recent searches.</p>
                :
                this.state.displaySearchResult.map((artistSearch, index)=>{
                  return(
                    <li key={index}>
                      <img src={artistSearch.image} alt="randomimage"/>
                      <p>{artistSearch.name}</p>
                    </li>
                  )
                })
              }
            </ul>
          </section>
        </main>

        <footer>
          <p> Copyright <i className="far fa-copyright"></i> <a href="https://junocollege.com/">2019 HackerYou</a> | 
           Created by Prachi G.</p>
        </footer>
      </div>
    )
  }
}


export default App;
