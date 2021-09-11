function burgerMenu(){
	burger = document.getElementsByClassName('burger__menu')[0]
	headerMenu = document.getElementsByClassName('header__menu')[0]
	burger.classList.toggle('burger__active');
	headerMenu.classList.toggle('header__active');
	secondLine=document.getElementsByClassName('burger__line')[0]
	secondLine.classList.toggle('line__hide');
	bodyLock=document.getElementById('body');
	bodyLock.classList.toggle('body-lock')
	console.log(bodyLock);
}