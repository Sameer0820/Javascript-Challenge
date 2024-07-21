//Activity 1

document.getElementById("name").innerHTML = "Sameer" //Task 1

document.getElementsByClassName("course")[0].style.backgroundColor = "red"; //Task 2

//Activity 2

let newDiv = document.createElement("div")
newDiv.innerText = "Doing day 9 of javascript challenge"
document.body.appendChild(newDiv); //Task 3

let newLi = document.createElement("li")
newLi.innerText = "Banana"
document.querySelector("ul").appendChild(newLi) //Task 4

//Activity 3

let remEle = document.querySelector("div")
remEle.remove() //Task 5

let remUl = document.querySelector("ul")
remUl.lastChild.remove() //Task 6

//Activity 4

let link = document.querySelector("a")
link.setAttribute("href", "https://www.facebook.com") //Task 7

let ulCss = document.querySelector("ul")
ulCss.style.backgroundColor = "cyan"
ulCss.removeAttribute("class") //Task 8

//Activity 5

let btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
    if(link.innerText == "Google")
        link.innerText = "Facebook"
    else
        link.innerText = "Google"
}) //Task 9

btn.addEventListener("mouseover", ()=>{
    btn.style.borderColor = "pink"
}) //Task 10
