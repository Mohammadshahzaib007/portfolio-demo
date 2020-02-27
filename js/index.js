// for popup animation
let popup = document.querySelector('.popup');

// for popup btn
let forPopupbtn = document.querySelector('.forPopupbtn');

// for bg blur on opening popup
let blurBg = document.querySelector('.header');

// lets grab the popup closing button
let popupClose = document.querySelector('.icon');

let popupContentHeading = document.querySelector('.popup-content-heading');


let popupContentParagraph = document.querySelector('.popup-content-paragraph');


let icon = document.querySelector('.icon');

// for opening popup
forPopupbtn.addEventListener('click', () => {
	popup.style.opacity = "1";
	popup.style.visibility = "visible";
	popup.style.transform = "scale(1)";
	popup.style.transitionDelay = ".01s";
	blurBg.style.filter = "blur(1.5px)";

	// for heading
	popupContentHeading.style.opacity = "1";
	popupContentHeading.style.visibility = "visible";
	popupContentHeading.style.transform = "scale(1)";
	popupContentHeading.style.transitionDelay = ".5s";

	//for para
	popupContentParagraph.style.opacity = "1";
	popupContentParagraph.style.visibility = "visible";
	popupContentParagraph.style.transform = "scale(1)";
	popupContentParagraph.style.transitionDelay = ".5s";
	//for icon
	icon.style.opacity = "1";
	icon.style.visibility = "visible";
	icon.style.transform = "scale(1)";
	icon.style.transitionDelay = ".3s";

});

// lets do add event litener on cosing icon

popupClose.addEventListener('click', () => {
	popup.style.opacity = "0";
	popup.style.visibility = "hidden";
	popup.style.transform = "scale(0)";
	popup.style.transitionDelay = ".8s";
	blurBg.style.filter = "blur(0)";

	// for heading
	popupContentHeading.style.opacity = "0";
	popupContentHeading.style.visibility = "hidden";
	popupContentHeading.style.transform = "scale(0)";
	popupContentHeading.style.transitionDelay = ".7s";

	//for para
	popupContentParagraph.style.opacity = "0";
	popupContentParagraph.style.visibility = "hidden";
	popupContentParagraph.style.transform = "scale(0)";
	popupContentParagraph.style.transitionDelay = ".6s";

	//for icon
	icon.style.opacity = "0";
	icon.style.visibility = "hidden";
	icon.style.transform = "scale(0)";
	icon.style.transitionDelay = ".1s";
});

// for contact form

let contact = document.querySelector('.animation');

contact.addEventListener('click', () => {
	TweenMax.to('.form', 1, {scale: 1, opacity: 1, visibility: 'visible',  ease: "back.out(1.7)"} );
	TweenMax.to('.inp', 1, {scale: 1, opacity: 1, visibility: 'visible',  ease: "back.out(1.7)"});
	TweenMax.to('.form-btn', 1, {scale: 1, opacity: 1, visibility: 'visible'});
});

// for back to home
let home = document.querySelector('.home');
let work = document.querySelector('.work');
let about = document.querySelector('.about');
[home, work, about].forEach(item => 
			{
				item.addEventListener('click', () => {
		console.log('was clicked');
		TweenMax.to('.form', 1,  {scale: 0, visibility: 'hidden'} );
	TweenMax.to('.inp', 1, {scale: 0,  visibility: 'hidden'});
	TweenMax.to('.form-btn', 1, {scale: 0, visibility: 'hidden'});
})});