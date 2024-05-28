const submitEl = document.querySelector('#submit-button-style');
// const titleInput = document.querySelector('#blog-title');
// const usernameInput = document.querySelector('#username');
// const blogPostInput = document.querySelector('#blog-post-content');
const submittedEntry = document.querySelector('#user-input');
// const blogC = document.querySelectorAll('#bx')
// const subButton = document.querySelector('#submit-button-style');
// const subButton = document.getElementById('submit-button-style');
// const words = document.querySelector('.content-box');




  

    // check local storage for if there are other blog posts present
      // Saves data to retrieve later



    // function saveToLStorage() {
    //     const name = document.getElementById("username").value;
    //     const title = document.getElementById("blog-title").value;
    //     const content = document.getElementById("blog-post-content").value;
    //     const testObj = {
    //         name: name,
    //         title: title,
    //         content: content
    //     }
    //     const blogs = localStorage.getItem("blogpost");
    //     const arrBlog = JSON.parse(blogs)
    //     const blogArray = arrBlog || [] 
    //     blogArray.push(testObj)

    //     // converts the blog object to string type so it's able to save to local storage 
    //     localStorage.setItem('blogpost', JSON.stringify(blogArray))
    // }


    //   // submitEl.addEventListener('click', submitForm);
    //   submitEl.addEventListener('click', saveToLStorage);


    // function setBlogText(){
    //     blogC.textContent = testObj
    // }

      submitEl.addEventListener('click', function(event) {
        event.preventDefault()
        const name = document.getElementById("username").value;
        const title = document.getElementById("blog-title").value;
        const content = document.getElementById("blog-post-content").value;
        const testObj = {
            name: name,
            title: title,
            content: content
        }
        const blogs = localStorage.getItem("blogpost");
        const arrBlog = JSON.parse(blogs)
        const blogArray = arrBlog || [] 
        // blogArray.push(testObj)
        blogArray.push(blogs)
        // console.log(blogArray)
        // converts the blog object to string type so it's able to save to local storage 
        // const whatToPrint = localStorage.getItem('blogpost')


        localStorage.setItem('blogpost', JSON.stringify(blogArray))
        
        // for (let i = 0; i < blogC.length; i ++){
        //     blogC[i].textContent = blogs
        // }
      
      })



    // set up event listen so when submit is clicked the content of the blog post form is rendered in the div boxes on the blog webpage

    // function renderBlogsToScreen() {

    // }
    
// let buttonClicked = false;
// console.log(buttonClicked)
// console.log(submitEl.value)

// submitEl.addEventListener('click', function(event){
//     event.preventDefault()
//     buttonClicked = true
// })


// uncomment soon 

// let buttonClicked = false;
// console.log(buttonClicked)
// console.log(submitEl.textContent)
// console.log(blogPostInput.value)

// submitEl.addEventListener('click', function(event){
//     event.preventDefault()
//     buttonClicked = true


// function renderBlogsToScreen() {
//     if (buttonClicked){
//         console.log(titleInput.value)
//         console.log(usernameInput.value)
//         console.log(blogPostInput.value)
//         console.log("button Clicked")
//         console.log(blogPostInput.textContent) 
//         for (const blogBox of blogC) {
//             blogBox.textContent = blogPostInput.value
//             blogBox.setAttribute = blogPostInput.value
//         }
//     // submitEl.addEventListener('click', renderBlogsToScreen)
//     } else if (buttonClicked && titleInput.value === null || usernameInput.value === null || blogPostInput.value === null) {
//         alert("Please fill out a blog entry before clicking submit")
//     }
//     console.log("???")
// }

// renderBlogsToScreen()
// })

// function renderBlogsToScreen() {