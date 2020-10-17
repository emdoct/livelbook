
let btn = document.querySelector('.btn');
setTimeout(slowShow, 300);

function slowShow() {
	let textHide = document.querySelector('.first-screen__text');
	let bgHide = document.querySelector('.first-screen__bg');
	let logoHide = document.querySelector('.logo');
	textHide.classList.toggle('hidden');
	bgHide.classList.toggle('hidden');
	logoHide.classList.toggle('hidden');
	btn.classList.toggle('hidden');
	
}


btn.onclick = function() {
	event.preventDefault();
	let scroll = document.querySelector('.second-screen__anchor');
	scroll.scrollIntoView({behavior: 'smooth'});
}
