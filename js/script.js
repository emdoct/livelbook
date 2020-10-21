
let btn = document.querySelector('.btn');
let text = document.querySelector('.first-screen__bottom__img');
let wtext = document.querySelector('.second-screen__top__img');
let inWidth = window.innerWidth;
let textWidth = text.offsetWidth;
let wtextWidth = wtext.offsetWidth;
let log = document.querySelector('.logo');

let value; 

if (inWidth >= 1024) {
	
	value = (inWidth)/10;
}

else {
	value = 200;
}
setTimeout(slowShow, 300);
setTimeout(slowShowbtn, 1400);

// window.addEventListener('scroll', WhiteTextAnimation);
// window.addEventListener('scroll', BlackTextAnimation);
window.addEventListener('scroll', slidecalc);


// text.style.setProperty('left', inWidth+textWidth+'px');
// wtext.style.setProperty('right', inWidth+textWidth+'px');


// if (text.classList.contains('hidden') && wtext.classList.contains('hidden')) {
	
// 	text.style.setProperty('left', inWidth+textWidth/100+"%");

// 	wtext.style.setProperty('right', inWidth+textWidth/100+"%");

// 	else if ()
// }






function slidecalc() {
	

	if ( value >= -5) {
		text.style.setProperty('left', value+"%");
		wtext.style.setProperty('right', value+"%");
		value = value - 4;
		console.log(value);
	}

	else if (value <= -5) {
			text.style.setProperty('left', 0+"%");
		wtext.style.setProperty('right', 0+"%");
	}

	
	
	

}


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

// function offset(el) {
// 	const rect = el.getBoundingClientRect(),
// 		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 	return { top: rect.top + scrollTop, left: rect.left + scrollLeft}

// }

// function WhiteTextAnimation() {
// 	let whiteText = document.querySelector('.second-screen__top__img');
// 	const whiteTextHeight = whiteText.offsetHeight;
// 	const whiteTextOffset = offset(whiteText).top;
// 	const start = 5;
// 	let whiteTextPoint = window.innerHeight - whiteTextHeight / start;

// 	if ((pageYOffset > whiteTextOffset - whiteTextPoint) && pageYOffset < (whiteTextOffset + whiteTextHeight)) {
// 		whiteText.classList.remove('hidden');
// 	}
// 	else {
// 		whiteText.classList.add('hidden');
// 	}
// }

// function BlackTextAnimation() {
// 	let blackText = document.querySelector('.first-screen__bottom__img');
// 	const blackTextHeight = blackText.offsetHeight;
// 	const blackTextOffset = offset(blackText).top;
// 	const start = 5;
// 	let blackTextPoint = window.innerHeight - blackTextHeight / start;

// 	if ((pageYOffset > blackTextOffset - blackTextPoint) && pageYOffset < (blackTextOffset + blackTextHeight)) {
// 		blackText.classList.remove('hidden');
// 	}

// 	else {
// 		blackText.classList.add('hidden');
// 	}
// }

