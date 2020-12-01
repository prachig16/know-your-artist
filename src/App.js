import './App.css';
import axios from 'axios';
import { Component } from 'react';
import ArtistDetails from './ArtistDetails.js';
import UserForm from './UserForm.js';
import firebase from './firebase.js';



class App extends Component {
  
  constructor(){
    super();
    this.state ={
      artistsInfo: [],
      userSelection: '',
      searchedArtists: []
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
      console.log(apiData.data.artists, 'api called');
      this.setState({
        artistsInfo: apiData.data.artists
      })
      console.log(this.state.artistsInfo);   
      // this.afterSearch(this.state.artistsInfo); 
      const dbRef = firebase.database().ref();
      dbRef.on('value', (returnedInfoObj) => {
        const newArtist = [];
        returnedInfoObj = this.state.artistsInfo;
        for (let key in returnedInfoObj) {
          const artistInfoObj = {
            name: returnedInfoObj[key].strArtist,
            image: returnedInfoObj[key].strArtistThumb
          }
          newArtist.push(artistInfoObj);
        }
        this.setState({
          searchedArtists: newArtist
        })
        console.log(this.state.searchedArtists);
      })
      dbRef.push(this.state.searchedArtists);  
    })
  }
  
 
  

  
  
  
  
  // writing a function that will take the API call as it's input....
  // These two parameter need to be saved and pushed as an object to the searchedArtists[]
  // console.log(this.state.artistsInfo.strArtist);
  // console.log(this.state.artistsInfo.strArtistThumb);


  // afterSearch = (returnedInfo) =>{
  
  //   console.log(this.state.artistsInfo);
  //     const newArtist = [];
  //     const returnedInfoObj = this.state.artistsInfo;

  //     for (let key in returnedInfoObj){
  //       const artistInfoObj={
  //         name: returnedInfoObj[key].strArtist,
  //         image: returnedInfoObj[key].strArtistThumb
  //       }
  //       newArtist.push(artistInfoObj);
  //     }
  //     console.log(newArtist);
  //     this.setState({
  //       searchedArtists: newArtist
  //     })
  //     console.log(this.state);


  //   // dbRef.on('value', (response) => {
  //   //   const newArtist = [];
  //   //   const searchedArtistImage = response.val();
  //   //   console.log(searchedArtistImage);
  
  //   //   // for (let property in searchedArtistImage) {
  //   //   //   console.log(property, searchedArtistImage[property]);
  //   //   // }


  //   //   this.setState({
  //   //     searchedArtists: newArtist
  //   //   })
  //   // });
  // }
  // variable that holds a reference to the database
  

  

  // showSearchedArtist = (searchedAristInfo) =>{
  //   const dbRef = firebase.database().ref();
  //   dbRef.on('value', (response) => {

  //     // Here we use Firebase's .val() method to parse our database info the way we want it
  //     console.log(response.val());
  //     const newArtist = [];
  //     const data = response.val();

  //     for (let key in data) {
  //       newArtist.push(data[key]);
  //     }

  //     this.setState({
  //       searchedArtists: newArtist
  //     })
  //   })
  // }

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
            <ul>
              {
                this.state.searchedArtists.map((artistSearch, index)=>{
                  return(
                    <li key={index}><img src={artistSearch.image} alt="randomimage" />{artistSearch.name}</li>
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
