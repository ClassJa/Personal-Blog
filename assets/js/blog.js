const themeSwitcher2 = document.querySelector('#light-dark-mode-toggle');
const container2 = document.querySelector('.container');
const blogBoxContainer = document.querySelector(".blog-box")
const submitButton = document.querySelector("#submit-button-style")
// const blogC = document.querySelectorAll('#bx')
// const subButton = document.querySelector('#submit-button-style')

// const prevPage = document.querySelector("#back-button")

// Figure out how to get the back button to connect to the click and take the user back to previous page
// prevPage.addEventListener('click', function(){
//     console.log(prevPage)
//     // history.pushState()
//     window.history.go(-1)
// })

// uncomment if needed
// const blogC = JSON.parse(localStorage.getItem("blogpost")) || [];
// function renderBlogsToScreen() {
//     for (const blogBox of blogC) {
//         console.log(blogBox)
//         // blogC.add
//     //     <div class="div-boxes bx">     
//     //     Blog Title
//     //     <p>Here is the content</p>
//     //     <footer> Posted By: </footer>
//     // </div>
// const blogBoxDiv = document.createElement("div")
// // add class to this 
// blogBoxDiv.textContent = "Title: " + blogBox.title
// const blogBoxContent = document.createElement("p")
// blogBoxContent.textContent = blogBox.content
// // blogBoxTitle.textContent = blogBox.title
// const blogBoxFooter = document.createElement("footer")
// blogBoxFooter.textContent = `Posted By: ${blogBox.name}`


//     console.log(blogBox.title)  
//     console.log(blogBox.name)
//     console.log(blogBox.content)


//     if (blogBox.content.trim() === "" || blogBox.title.trim() === "" || blogBox.name.trim() === "") {
//         console.log(blogBox.title)
//         console.log(blogBox.name)
//         console.log(blogBox.content)
//         alert("Please enter a name, title, and content to the blog form before you submit")
//     } else {
//         blogBoxDiv.append(blogBoxContent, blogBoxFooter)
//         blogBoxContainer.appendChild(blogBoxDiv)
//     }
        
//     }
// }

// uncomment here 

submitButton.addEventListener('click', function(){
    const blogC = JSON.parse(localStorage.getItem("blogpost")) || [];
    function renderBlogsToScreen() {
        for (const blogBox of blogC) {
            console.log(blogBox)
            // blogC.add
        //     <div class="div-boxes bx">     
        //     Blog Title
        //     <p>Here is the content</p>
        //     <footer> Posted By: </footer>
        // </div>
    const blogBoxDiv = document.createElement("div")
    // add class to this 
    blogBoxDiv.textContent = "Title: " + blogBox.title
    const blogBoxContent = document.createElement("p")
    blogBoxContent.textContent = blogBox.content
    // blogBoxTitle.textContent = blogBox.title
    const blogBoxFooter = document.createElement("footer")
    blogBoxFooter.textContent = `Posted By: ${blogBox.name}`
    
    
        console.log(blogBox.title)  
        console.log(blogBox.name)
        console.log(blogBox.content)
    
    
        if (blogBox.content.trim() === "" || blogBox.title.trim() === "" || blogBox.name.trim() === "") {
            console.log(blogBox.title)
            console.log(blogBox.name)
            console.log(blogBox.content)
            alert("Please enter a name, title, and content to the blog form before you submit")
        } else {
            blogBoxDiv.append(blogBoxContent, blogBoxFooter)
            blogBoxContainer.appendChild(blogBoxDiv)
        }
            
        }
    }
})
// renderBlogsToScreen()

// let mode = 'light';


// themeSwitcher2.addEventListener('click', function(){
//     console.log(mode)
//     if (mode === 'light') {
//         mode = 'dark';
//         document.body.setAttribute('class', 'dark');
//     } else {
//         mode = 'light'
//         document.body.setAttribute('class', 'light')
//     }
// })


