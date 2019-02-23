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
	const issa = document.getElementById("issa").innerHTML;
	const newIssa = issa.replace(/about average/ig, 'just great, thank you!');
	return newIssa;
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
		document.getElementById("issa").style.fontFamily = "papyrus";
	}
});

//Change the font family back to what it originally was.
window.addEventListener("keyup", event => {
	if(event.key === "p") {
		document.getElementById("issa").style.fontFamily = "";
	}
});