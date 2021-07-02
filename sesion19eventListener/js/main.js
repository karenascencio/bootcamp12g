let nameForm = document.querySelectorAll(".form-control")
let button = document.getElementById("btn")
let mentorArray = []

button.addEventListener("click", (event) =>{

    let mentorObject = {}
    mentorObject.name = nameForm[0].value
    mentorObject.lastName = nameForm[1].value
    mentorArray.push(mentorObject)
    nameForm.forEach ( input => {
        input.value=""
    })

    mentorArray.forEach( (person, index) =>  {
        let {name, lastName } = person 
        let personRow = document.createElement("tr")
        //<tr></tr>
        let indexTd = document.createElement("td")
        //<td></td>
        let nameTd = document.createElement("td")
        //<td></td>
        let lastnameTd = document.createElement("td")
        //<td></td>
        let buttonTd = document.createElement("td")
    
        let nameText = document.createTextNode( name )
        let lastnameText = document.createTextNode( lastName )
        let indexText = document.createTextNode( index + 1 )
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("btn", "btn-warning")
    
        let buttonText = document.createTextNode("Borrar")
        deleteButton.appendChild(buttonText)
    
        buttonTd.appendChild(deleteButton)
    
        indexTd.appendChild(indexText)
        nameTd.appendChild(nameText)
        lastnameTd.appendChild(lastnameText)
    
        personRow.appendChild( indexTd )
        personRow.appendChild( nameTd )
        personRow.appendChild( lastnameTd )
        personRow.appendChild( buttonTd )
    
        document.getElementById("person-table").appendChild( personRow )
    })
})

