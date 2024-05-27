const themeSwitcher2 = document.querySelector('#light-dark-mode-toggle');
const container2 = document.querySelector('.container');
const blogBoxContainer = document.querySelector(".blog-box")
// const blogC = document.querySelectorAll('#bx')
// const subButton = document.querySelector('#submit-button-style')

const prevPage = document.querySelector("#back-button")

// Figure out how to get the back button to connect to the click and take the user back to previous page
prevPage.addEventListener('click', function(){
    console.log(prevPage)
    // history.pushState()
    window.history.go(-1)
})

const blogC = JSON.parse(localStorage.getItem("blogpost")) || [];
// console.log(blogC) 
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
blogBoxDiv.textContent = "Blog Title"
const blogBoxTitle = document.createElement("p")
blogBoxTitle.textContent = blogBox.title
const blogBoxFooter = document.createElement("footer")
blogBoxFooter.textContent = `Posted By: ${blogBox.name}`
blogBoxDiv.append(blogBoxTitle, blogBoxFooter)
blogBoxContainer.appendChild(blogBoxDiv)
    }
}

// blogC.addEventListener('submit', )
renderBlogsToScreen()

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


