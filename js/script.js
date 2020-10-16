let logoHide = document.querySelector('.logo');

logoHide.onclick = function() {
	let textHide = document.querySelector('.first-screen__text');
	let bgHide = document.querySelector('.first-screen__bg');
	let btn = document.querySelector('.btn');
	textHide.classList.toggle('hidden');
	bgHide.classList.toggle('hidden');
	logoHide.classList.toggle('hidden');
}