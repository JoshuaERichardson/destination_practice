const promiseBanner = fetch("../html/banner.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#main_banner").insertAdjacentHTML("afterbegin", data);
  });


  const promiseForm = fetch("../html/mainForm.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#main_form_container").innerHTML = data;
  });


  // const promiseHeader = fetch("../html/head.html")
  // .then(response => {
  //   return response.text()
  // })
  // .then(data => {
  //   document.querySelector("head").innerHTML = data;
  // });


  const headData = `<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Import Bootstrap: -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
  <!-- Import Jquery -->
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <!-- Import our own CSS: -->
  <link rel="stylesheet" href="../css/stylesheet.css">
  <!-- Import our own JS -->
  <script type="module">
      import { Button, Cards, FormSubmit } from '../js/script.js' ;
  </script>
  <title>Vacay!!!!!!!!!!!!!!!!!!!</title>`

  Promise.all([promiseBanner, promiseForm])
  .then((response) => {
    document.querySelector('head')
      .insertAdjacentHTML("afterbegin", headData);
  })
  .catch((error) => {
    console.log(`Failed to fetch: ${error}`)
  })