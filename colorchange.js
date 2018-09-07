onload = init;

function init() {

	var h1tags = document.getElementByTagName("h1");

	h1tags[0].onclick = changeColor;

}

function changeColor() {

	this.innerHTML = "Click Again";

}
