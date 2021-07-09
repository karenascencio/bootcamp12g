$(document).ready(()=>{
    

    let bodyElement = $('body')

    $('#success-btn').click(  () =>{
        bodyElement.removeClass('bg-danger bg-warning').addClass('bg-success')
    })
    $('#danger-btn').click(  () =>{
        bodyElement.removeClass('bg-success bg-warning').addClass('bg-danger')
    })
    $('#warning-btn').click(  () =>{
        bodyElement.removeClass('bg-danger bg-sucess').addClass('bg-warning')
    })
        





});