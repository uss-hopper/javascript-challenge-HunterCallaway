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