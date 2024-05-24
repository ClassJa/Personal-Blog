const prevPage = document.querySelector("#back-button")

// Figure out how to get the back button to connect to the click and take the user back to previous page
prevPage.addEventListener('click', function(){
   window.history.go(-1)
})
