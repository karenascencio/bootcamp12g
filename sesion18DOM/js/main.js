let killers = [ 'jason', 'freddy', 'chucky' ]

let body = document.querySelector('body')

killers.forEach( item => {

            let parrafo = document.createElement('p')
            console.log(parrafo)
            let texto = document.createTextNode( item )
            parrafo.appendChild(texto)
            body.appendChild(parrafo)

} )