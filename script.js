//Highlight a word
function highlighter(text) {
	const emily = document.getElementById("emily");
	let content = emily.innerHTML;
	let index = content.indexOf(text);
	if (index >= 0) {
		content = content.substring(0, index) + "<span class='highlighter'>" + content.substring(index, index+text.length) + "</span>" + content.substring(index + text.length);
		emily.innerHTML = content;
	}
}

//Find and replace using Regular Expressions
function regExpReplacer() {
	document.getElementById("issa").innerHTML = document.getElementById("issa").innerHTML.replace(/about average[.]/gi, 'just great, thank you!');
}

//Change the font color.
function fontColorChanger() {
	const walt = document.getElementById("walt");
	walt.style.color = "green";
}

//Change the font color back to black.
function colorReverter() {
	const walt = document.getElementById("walt");
	walt.style.color = "black";
}

//Change the font style.
window.addEventListener("keydown", event => {
	if(event.key === "p") {
		document.getElementById("issa").style.fontFamily = "impact";
	}
});

//Change the font family back to what it originally was.
window.addEventListener("keyup", event => {
	if(event.key === "p") {
		document.getElementById("issa").style.fontFamily = "";
	}
});

//Drag and drop
function allowDrop(event) {event.preventDefault();}
function drag(event) {event.dataTransfer.setData("text/html", event.target.id);}
function drop(event) {
	event.preventDefault();
	const data = event.dataTransfer.getData("text/html");
	event.target.appendChild(document.getElementById(data));
}