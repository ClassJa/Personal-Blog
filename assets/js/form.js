const submitEl = document.querySelector('#submit-button-style');
const titleInput = document.querySelector('#blog-title');
const usernameInput = document.querySelector('#username');
const blogPostInput = document.querySelector('#blog-post-content');
const submittedEntry = document.querySelector('#user-input')



// function showResponse(event) {
//     event.preventDefault();
//     console.log(event);
//     const response = titleInput.value + usernameInput.value + blogPostInput.value;

//     submittedEntry.textContent = response;

// }

// submitEl.addEventListener('click', showResponse);


function getUserame() {
    console.log(usernameInput.value)
    return localStorage.getItem("username");
  }

  function getTitle() {
    console.log(titleInput.value)
    return localStorage.getItem('blog-title')
  }

  function getBlogContent() {
    console.log(blogPostInput.value)
    return localStorage.getItem('blog-post-content')
  }
  
  function updateHTML() {
    var usernameInput = getName();
    var titleInput = getTitle();
    var blogPostInput = getBlogContent();

    document.getElementById("username").textContent = usernameInput;
    document.getElementById("blog-title").textContent = titleInput;
    document.getElementById("blog-post-content").textContent = blogPostInput;
  }


    function submitForm(event) {
        event.preventDefault()
        getUserame()
        getTitle()
        getBlogContent()
    }

    submitEl.addEventListener('click', submitForm);


  
  function myFunction() {
    // Gets input value
    var name = document.getElementById("myInput").value;
  
    // Saves data to retrieve later
    localStorage.setItem("userName", name);
    
    // Updates HTML
    updateHTML();
  }

// addEventListener('click', submitForm) {

// }


// localStorage.setItem()


