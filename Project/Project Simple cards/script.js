const addBtn = document.getElementById("addBtn")
const inputText = document.getElementById("input")
const newCard = document.getElementById("cardBox")
let edit = null;

addBtn.addEventListener("click",() => {
    console.log("Clicked")
    let text = inputText.value.trim()

    if(text === "")
    {
        alert("Enter Data")
        return
    }

    if(edit != null)
    {
        edit.querySelector(".card-text").innerText = text;
        edit = null
        addBtn.innerText = "Create Card" 
    }
    else
    {
        createCard(text)
    }

    inputText.value = ""
})

function createCard(text)
{

    const card = document.createElement("div")
    card.classList.add("card")

    const cardText = document.createElement("div")
    cardText.classList.add("card-text")
    card.textContent = text

    const menu = document.createElement("div")
    menu.classList.add("card-actions")

    const editButton = document.createElement("button")
    editButton.innerText = "🖋️ Edit"
    editButton.classList.add("btn")
    editButton.classList.add("btn-warning")

    const removeButton = document.createElement("button")
    removeButton.innerText = "🗑️ Delete"
    removeButton.classList.add("btn")
    removeButton.classList.add("btn-danger")

    editButton.addEventListener("click",()=>{
        inputText.value = cardText.innerText
        edit = card
        addBtn.innerText = "Update Card"
    })

    removeButton.addEventListener("click",()=> {
        card.remove()
    })

    menu.appendChild(editButton)
    menu.appendChild(removeButton)

    card.appendChild(cardText)
    card.appendChild(menu)

    newCard.appendChild(card)
}