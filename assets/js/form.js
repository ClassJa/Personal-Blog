const submitEl = document.querySelector('#submit-button-style');
const titleInput = document.querySelector('#blog-title');
const usernameInput = document.querySelector('#username');
const blogPostInput = document.querySelector('#blog-post-content');
const submittedEntry = document.querySelector('#user-input');
const subButton = document.getElementById('submit-button-style');
const words = document.querySelector('.content-box');



    // submitEl.addEventListener('click', submitForm);
    submitEl.addEventListener('click', saveToLStorage);


    // check local storage for if there are other blog posts present
      // Saves data to retrieve later
    function saveToLStorage() {
        const name = document.getElementById("username").value;
        const title = document.getElementById("blog-title").value;
        const content = document.getElementById("blog-post-content").value;
        const testObj = {
            name: name,
            title: title,
            content: content,
        }
        const blogs = localStorage.getItem("blogpost1");
        const arrBlog = JSON.parse(blogs)
        const blogArray = arrBlog || [] 
        blogArray.push(testObj)

        // converts the blog object to string type so it's able to save to local storage 
        localStorage.setItem('blogpost1', JSON.stringify(blogArray))
    }


    // set up event listen so when submit is clicked the content of the blog post form is rendered in the div boxes on the blog webpage

    // function renderBlogsToScreen() {

    // }
    
let buttonClicked = false;
console.log(buttonClicked)
console.log(subButton)

subButton.addEventListener('click', function(event){
    event.preventDefault()
    buttonClicked = true
    console.log(subButton)
    console.log(buttonClicked)
})

if (buttonClicked){
    console.log(buttonClicked)
    console.log(blogC) 
    console.log(words.textContent)
    console.log(words.value)
    function renderBlogsToScreen() {
        for (const blogBox of blogC) {
            blogBox.textContent = words.value
        
        }
    }

subButton.addEventListener('click', renderBlogsToScreen)

}

 

