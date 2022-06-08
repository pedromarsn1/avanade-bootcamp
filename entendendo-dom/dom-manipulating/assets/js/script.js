function changeMode() {
    changeClasses()
    changeText()
}

//Muda as classes
function changeClasses() {
    button.classList.toggle("dark-mode")
    h1.classList.toggle("dark-mode")
    body.classList.toggle("dark-mode")
    footer.classList.toggle("dark-mode")
}

//Muda os textos
function changeText() {
    if (body.classList.contains('dark-mode')) {
        button.innerHTML = "Dark Mode"
        h1.innerHTML = "Dark Mode ON"
    }else{
        button.innerHTML = "Light Mode"
        h1.innerHTML = 'Light Mode ON'
    }
}

const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName("body")[0]
const footer = document.getElementsByTagName("footer")[0]

console.log(body)
button.addEventListener('click', changeMode)

