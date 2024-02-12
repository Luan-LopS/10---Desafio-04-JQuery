$(document).ready(function(){

    $('form').on('submit',function(e){
        e.preventDefault()
        const input = $('form input')
        const novoLi = $(`<li>${input.val()}</li>`)

        if(input.val()!==''){
            novoLi.appendTo('ol')
            $('form input').val('')
        } else{
            alert('Add tarefa')
        }
        
    })

    $('ol').on('click','li',function(e){
        $(this).toggleClass('feito')        
    })

})