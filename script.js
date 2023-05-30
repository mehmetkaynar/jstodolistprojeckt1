let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo");

//? asagidaki kodda sunu demek istedim: click a tikladigimizda fonk. calistirmak istedim.
addToDoButton.addEventListener("click", function () {
  let paragraph = document.createElement("p"); //? paragraph imi olusturdum.
  paragraph.classList.add("paragraph-styling");
  toDoContainer.appendChild(paragraph); //? kutucukta yazdigim paragrafi otomatik asagikadi divimin icine eklemek icin yazdim.
  paragraph.innerHTML = inputText.value; //? paragrafa yazdigimi asagidaki dive koydum.
  inputText.value = ""; //?paragrafta yazdigimi otomatik olarak silmek icin yazdim.

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through"; //?textin uzerine bir defa tikladigimda uzerine cizgi cizilmesi icin yaptim.
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph); //?textin uzerine iki defa tikladigimda kaybettim.
  });

  clearToDo.addEventListener("click", function () {
    paragraph.remove(); //?clear isleminin gerceklestirdim.
  });
});
