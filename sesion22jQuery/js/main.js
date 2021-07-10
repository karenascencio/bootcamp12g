/*
arreglar el bug de que no se reinicia la lista de números
- crear una función que obtenga el producto de todos los 
números seleccionados y lo agregue al encabezado
- hacer que el encabezado sólo se muestre cuando damos click 
al botón ok
- permitir que los números puedan seleccionarse y deseleccionarse 
(*los números desactivados no deben formar parte del resultado )
*/



const printDivisibles = () => {
    //$("#card-wrapper").empty()
    let limit = $("#limit").val()
    let divisor = $("#divisor").val()

    for( let i = 1; i < limit; i++){
        i % divisor === 0 && printCard( i )
    }
    $(".number-card").click( ( event ) => {
        event.stopPropagation()
        $(event.target).toggleClass("active")
        
        let result = 1
        if ($(".active").length > 0){
            $(".result").removeClass("d-none")
            $(".active").each( function (){
                let value = $(this).text()
                result*= parseInt(value)
                $("span").text(String(result))
            })
        }
    })
    $("input").val("")
}



const printCard = number => {
    let cardHtml 
        cardHtml= `
        <div class="col-3">
            <div class="card number-card">
                <div class="card-body d-flex justify-content-center align-items-center">
                    <h1>${number}</h1>
                </div>
            </div>
        </div>
    `
    $("#card-wrapper").append(cardHtml)
}

$("input").click(() =>{
    $(".result").addClass("d-none")
    $("#card-wrapper").empty()
})


const printCardWrapper = () => {
    $("#go").click( printDivisibles )
    
}


printCardWrapper()
