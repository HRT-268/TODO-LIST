const input = document.getElementById("input")
const enterBtn = document.getElementById("btn")

const inputToDo = () => {

    const inputValue = input.value
    if (inputValue) {

        const main_content = document.getElementById("mainContent")
        // const h1btn = document.createElement("h1")
        // main_content.appendChild(h1btn)
        // h1btn.textContent("Task(s)")

        const newDiv = document.createElement("div")
        main_content.appendChild(newDiv)
        newDiv.className = "list_Buttons"
    
        const ul =document.createElement("ul")
        newDiv.appendChild(ul)
        //created  li
        const li = document.createElement("li")
        li.textContent = inputValue
        li.className = "listItem"
        ul.appendChild(li)
        input.value = ""

        
        
        //created done button
        const doneToDo = document.createElement("i")
        doneToDo.textContent = ""
        doneToDo.className = "fa-solid fa-square-check"
        newDiv.appendChild(doneToDo)

        doneToDo.addEventListener("click", () => {
            li.classList.toggle("done")
        })

        //created delete button
        const deleteTodo = document.createElement("i")
        deleteTodo.textContent = ""
        deleteTodo.className = "fa-solid fa-trash"
        newDiv.appendChild(deleteTodo)

        deleteTodo.addEventListener("click", () => {
            newDiv.classList.add("animateDeleteBtn")
            // li.parentNode.removeChild(li)
            // doneToDo.parentNode.removeChild(doneToDo)
            // deleteTodo.parentNode.removeChild(deleteTodo)
            // newDiv.parentNode.removeChild(newDiv)

            deleteTodo.addEventListener("animationend", () => {
                newDiv.parentNode.removeChild(newDiv)
    
            })

            setTimeout(() => {
                newDiv.parentNode.removeChild(newDiv)
    
            }, 100)

        })

        
        
        
    }
}
//click to enter todo
enterBtn.addEventListener("click", inputToDo)
//press enter to enter todo
input.addEventListener("keyup", e => {
    if(e.keyCode === 13){
        inputToDo()
   }
})

