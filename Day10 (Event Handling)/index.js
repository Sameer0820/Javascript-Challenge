//Activity 1

let button = document.querySelector(".btn");
let para = document.getElementsByTagName("p")[0];

button.addEventListener("click", () => {
  para.innerText = "Javascript Challenge";
}); //Task 1

let image = document.querySelector("img");
let imgButton = document.querySelector(".img-btn");

imgButton.addEventListener("dblclick", () => {
  if (image.style.visibility == "hidden") {
    image.style.visibility = "visible";
    imgButton.innerText = "Hide Image";
  } else {
    image.style.visibility = "hidden";
    imgButton.innerText = "Show Image";
  }
}); //Task 2

//Activity 2

let container = document.querySelector(".container");

container.addEventListener("mouseover", () => {
  container.style.backgroundColor = "red";
}); //Task 3

container.addEventListener("mouseout", () => {
  container.style.backgroundColor = "pink";
}); //Task 4

//Activity 3

let input = document.querySelector("input")

input.addEventListener("keydown", (e) => {
    console.log("key pressed : ", e.key)
}) //Task 5

let displayText = document.querySelector(".dis-text")

input.addEventListener("keyup", (e)=>{
    displayText.textContent = `Display Text: ${e.target.value}`
}) //Task 6

//Activity 4

let newForm = document.getElementById("newForm")

newForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(`Name : ${newForm.elements.username.value}`);
}) //Task 7

let brand = document.getElementById("brand")
let dropdown = document.getElementById("dropdown")

dropdown.addEventListener("change", ()=>{
    brand.innerText = `The brand selected : ${dropdown.value}`
}) //Task 8

//Activity 5

let cars = document.getElementById("cars")
let carlist = document.getElementById("carlist")

carlist.addEventListener("click", (e) => {
    if(e.target.tagName == "LI"){
        console.log(e.target.textContent);
        cars.innerHTML = `The selected car brand: ${e.target.textContent}`
    }
}) //Task 9

let parent = document.getElementById("parent")
let addchild = document.getElementById("addchild")

let childCount = 1;
addchild.addEventListener("click", () => {
    childCount++;
    let newChild = document.createElement("li")
    newChild.textContent = `Child ${childCount}`
    parent.appendChild(newChild)
})

let child = document.getElementById("child")
parent.addEventListener('click', (e)=>{
    console.log(e.target.textContent);
    child.innerHTML = `The selected child: ${e.target.textContent}`
}) //Task 10
