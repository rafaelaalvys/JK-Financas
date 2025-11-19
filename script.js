// 1 - CRIAR O MENU HAMBURGUER (DIV e ICON) NO HTML
// 2 - FORA DO @MEDIA, INSERIR UM DISPLAY NONE NA DIV QUE GUARDA O ICON DO HAMBURGUER E NA LISTA DO MENU MOBILE
// 3 - DENTRO DO @MEDIA INSERIR O DISPLAY NONE NO MENU DESKTOP
// 4 - DENTRO DO @MEDIA APLICAR O DISPLAY:FLEX NA DIV DO MENU MOBILE QUE ESTAVA OCULTA, COM ISSO ELA FICARÁ VISÍVEL
// 5 - REALIZAR A ESTILIZAÇÃO DO NAV DO MENU MOBILE NO CSS, ALINHAMENTO CORES E TRANSIÇÃO
// 6 - FAZER O JAVASCRIPT CONVERSAR COM O ICON DO MENU HAMBURGUER E REALIZAR A AÇÃO

//Seleciona o botão do menu (ícone de hambúrguer) pelo ID definido no HTML
const menuBtn = document.getElementById('menu-btn');

//Seleciona o elemento de navegação ( menu que será aberto/fechado)
const navMenu = document.getElementById('nav-menu');

//Dentro do botão, procura o elemento <i> (ícone da fonte Font awesome)
const menuIcon = menuBtn.querySelector('i');
//querySelector()  -> método reservado do javascript usado para buscar