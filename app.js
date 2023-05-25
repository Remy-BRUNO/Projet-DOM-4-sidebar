// recuperation element html
const sideBar = document.querySelector("nav")
const burger = document.querySelector("#burger")
const cross = document.querySelector("#cross")

burger.addEventListener("click", function () {
  sideBar.setAttribute("class", "show-bar")
})

cross.addEventListener("click", function () {
  sideBar.classList.remove("show-bar")
})
