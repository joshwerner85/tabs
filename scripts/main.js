var tabButton1 = document.querySelector('.tab1');
var tabButton2 = document.querySelector('.tab2');
var tabButton3 = document.querySelector('.tab3');
var redPage = $('.red');
var greenPage = $('.green');
var bluePage = $('.blue');


tabButton1.addEventListener('click', function (){
	console.log('You clicked on the red tab');
	redPage.show();
	greenPage.hide();
	bluePage.hide();
});

tabButton2.addEventListener('click', function (){
	console.log('You clicked on the green tab');
	redPage.hide();
	greenPage.show();
	bluePage.hide();
});

tabButton3.addEventListener('click', function (){
	console.log('You clicked on the blue tab');
	redPage.hide();
	greenPage.hide();
	bluePage.show();
});