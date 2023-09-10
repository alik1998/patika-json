
// json dosyadan veri çektik
fetch("data/settings.json")
  .then((response) =>
    // console.log(response);
    response.json()
  )
  .then((responseJson) => {
    console.log(responseJson);
    console.log(responseJson.userName);
  });

// // apı üzerinden veri cektik
// fetch("https://jsonplaceholder.typicode.com/posts").then(
//     response => response.json()
// ).then(responseJson => {
//     responseJson.forEach(item => console.log(item))
// })