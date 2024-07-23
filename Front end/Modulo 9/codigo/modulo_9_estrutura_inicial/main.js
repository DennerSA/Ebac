const form =  $('form');

$(document).ready(function(){

    $('header button').click(function(){
        form.slideDown();
    })

    $('#butao-cancelar').click(function(){
        form.slideUp();
    })

    form.on('submit', function(e){
        e.preventDefault();
        const novaImg = $('#nova-img').val();
        const novoItem = $('<li style ="display: none"></li>')
        $(` <img src= "${novaImg}" />`).appendTo(novoItem);
        $(` 
        <div class="imagem-link">
            <a href="${novaImg}" target="blank" title"Ver imagem em tamanho real">
            Ver imagem em tamanho real
            <a/>
        </div>`)
        .appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(3000);
        $('#nova-img').val('')
    })
})