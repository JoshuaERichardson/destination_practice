fetch("../html/banner.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#banner").innerHTML = data;
  });



  fetch("../html/mainForm.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#mainForm").innerHTML = data;
  });


  fetch("../html/head.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("head").innerHTML = data;
  });