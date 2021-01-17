/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
} 

//let url = 'https://cors-anywhere.herokuapp.com/https://api.thecatapi.com/v1/images/search/'
//let url = 'https://api.thecatapi.com/v1/breeds/search?q=sib'
let url = 'https://api.thecatapi.com/v1/images/search?limit=1&breed_id='


/*
function getDog() {
    fetch(url)
    .then(response => response.json())
   .then(json => img.src = json[0].url)
//.then(json => console.log(json))
   .catch(err => console.log('Something went wrong', err))
}
*/
// Hook the anchor tags on menu to the REST API call and fetch data back and display in image tag
function getBreed(breed)  {
  url = 'https://api.thecatapi.com/v1/images/search?limit=1&breed_id='
  if (breed == 'Abyssinian'){
      url = url+'abys'
  }
  else if (breed == 'American Bobtail'){
      url = url+'abob'
  }
}

function displayImages(anchor){
    getBreed(anchor.innerHTML)
    fetch(url)
    .then(response => response.json())
  .then(json => {
        document.querySelector('img').src = json[0].url
  })
  .catch(err => console.log("something went wrong!", err))
}




