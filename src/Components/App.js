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

      if (apiData.data.artists != null){
        // Setting the API call to artsistInfo if the returned API is not null
        this.setState({
          artistsInfo: apiData.data.artists
        })
        
        this.pushTheInfo(this.state.artistsInfo[0]);
      }
      else{
        alert('Artist not found! Check the spelling or spaces!')
      }
    })
  }

  // writing a function, to push the details to db, which will take API call as an argument when submit is clicked..
  pushTheInfo = (infoReceived) =>{
    const dbRef = firebase.database().ref();
  
    const newArtist = [];
    
    console.log(infoReceived);
    const infoToPush = {
      name: infoReceived.strArtist,
      image: infoReceived.strArtistThumb,
      link: infoReceived.strLastFMChart
    }
    newArtist.push(infoToPush);

    dbRef.push(newArtist[0])
    
    this.setState({
      // setting this new array with 2 objects to the set
      searchedArtists: newArtist
    })
  }

 

  // When page loads..
  componentDidMount(){
    const dbRef = firebase.database().ref();
    
    dbRef.on('value', (data) =>{
      
      let myData = data.val();
      let list = [];
      let newList = [];
      for (let key in myData){
        let newObj = {
          image:myData[key].image,
          name: myData[key].name,
          link: myData[key].link
        }
        list.push(newObj);
        newList = list.reverse();
      }
      
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
          <button className="goTop"><a href="#"><i className="fas fa-chevron-circle-up"></i></a></button>
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
                    artistFB={artist.strFacebook}
                    artistTwitter={artist.strTwitter}
                    artistWebsite={artist.strWebsite}
                    artistLastFM={artist.strLastFMChart}
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
                      {/* Check if the default is image available */}
                      {
                        (artistSearch.image)
                        ? <img src={artistSearch.image} alt={artistSearch.name}/>
                          : <img src="https://i.ibb.co/B40DvyL/no-Photo-Found.png" alt={artistSearch.name} />
                      }

                      {/* Check if the default link is available */}
                      {
                        (artistSearch.link)
                          ? <p><a href={artistSearch.link}>{artistSearch.name}</a></p>
                          : <p><a href="https://www.last.fm/music">{artistSearch.name}</a></p>
                      }
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
