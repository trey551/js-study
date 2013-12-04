document.addEventListener('DOMContentLoaded', main, false);
function main(){
	var images = document.querySelectorAll('.holder img');
	randomImages(images);
}

function randomImages(img){
	function getRandomNumber(){
		var randomNumber = Math.floor(Math.random() * img.length);
		return randomNumber;
	}
	img[getRandomNumber()].style.display = "block";
}


