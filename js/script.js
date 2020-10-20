
let btn = document.querySelector('.btn');

let log = document.querySelector('.logo');
setTimeout(slowShow, 300);
setTimeout(slowShowbtn, 1400);

window.addEventListener('scroll', WhiteTextAnimation);
window.addEventListener('scroll', BlackTextAnimation);



log.onclick = function() {
	let white = document.querySelector('.second-screen__top__img');
	white.classList.toggle('hidden');
}
btn.onclick = function() {
	event.preventDefault();
	let scroll = document.querySelector('.second-screen__anchor');
	scroll.scrollIntoView({behavior: 'smooth'});
}




function slowShow() {
	let textHide = document.querySelector('.first-screen__text');
	let bgHide = document.querySelector('.first-screen__bg');
	let logoHide = document.querySelector('.logo');
	textHide.classList.toggle('hidden');
	bgHide.classList.toggle('hidden');
	logoHide.classList.toggle('hidden');
	
	
}

function slowShowbtn() {
	btn.classList.toggle('hidden');
}

function offset(el) {
	const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft}

}

function WhiteTextAnimation() {
	let whiteText = document.querySelector('.second-screen__top__img');
	const whiteTextHeight = whiteText.offsetHeight;
	const whiteTextOffset = offset(whiteText).top;
	const start = 0.5;
	let whiteTextPoint = window.innerHeight - whiteTextHeight / start;

	if ((pageYOffset > whiteTextOffset - whiteTextPoint) && pageYOffset < (whiteTextOffset + whiteTextHeight)) {
		whiteText.classList.remove('hidden');
	}
	else {
		whiteText.classList.add('hidden');
	}
}

function BlackTextAnimation() {
	let blackText = document.querySelector('.first-screen__bottom__img');
	const blackTextHeight = blackText.offsetHeight;
	const blackTextOffset = offset(blackText).top;
	const start = 0.5;
	let blackTextPoint = window.innerHeight - blackTextHeight / start;

	if ((pageYOffset > blackTextOffset - blackTextPoint) && pageYOffset < (blackTextOffset + blackTextHeight)) {
		blackText.classList.remove('hidden');
	}

	else {
		blackText.classList.add('hidden');
	}
}

