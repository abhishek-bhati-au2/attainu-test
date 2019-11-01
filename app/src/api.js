export function displayCities(){
    let url = "http://localhost:3000/getcities";
    return fetch(url)
           .then(data => data.json());
  }