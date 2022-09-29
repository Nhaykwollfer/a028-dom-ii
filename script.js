const elementoMain = document.querySelector(".container")

function adicionaItem (event) {
    event.preventDefault()
    
    const novoItem = document.createElement("article")
    const conteudo = document.createTextNode("Novo Item")
    novoItem.setAttribute("class", "item")
    novoItem.appendChild(conteudo)
    elementoMain.insertAdjacentElement("beforeend", novoItem)
}

function removeItem(event) {
    event.target.remove()
}