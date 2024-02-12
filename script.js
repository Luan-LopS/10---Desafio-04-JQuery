$(document).ready(function(){

    $('form').on('submit',function(e){
        e.preventDefault()
        const input = $('form input').val()
        const novoLi = $(`<li>${input}</li>`)

        $(novoLi).appendTo('ol')
    })

    $('ol').on('click','li',function(e){
        $(this).toggleClass('feito')
    })

})