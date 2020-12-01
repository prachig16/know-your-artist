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