//alert('carregou');
//console.log('Olá!');

//DOM
//console.log(document);

//Selecionando (guardando em variáveis) os elementos que serão manipulados

var menu = document.querySelector('.menu');
var btnMenu = document.querySelector('.btn-menu');

//console.log(menu);
//console.log(btnMenu);

//add o evento de clique ao botão
btnMenu.addEventListener('click',function(){
    //console.log('clicou');

    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');

})


//evento de clique no menu
menu.addEventListener('click', function(){
    menu.classList.remove('menu-open');
})