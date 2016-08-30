//function to handle indentation through tabs
$(document).ready(function(){
	document.querySelector("#HTMLText").addEventListener('keydown',function(e) {
		if(e.keyCode === 9) { // tab was pressed
	    	// get caret position/selection
	    	var start = this.selectionStart;
	    	var end = this.selectionEnd;
			var target = e.target;
			var value = target.value;
			// set textarea value to: text before caret + tab + text after caret
	    	target.value = value.substring(0, start)+ "\t"+ value.substring(end);
			// put caret at right position again (add one for the tab)
	    	this.selectionStart = this.selectionEnd = start + 1;
			// prevent the focus lose
	    	e.preventDefault();
	   	}	
	},false);
	document.querySelector("#CSSText").addEventListener('keydown',function(e) {
		if(e.keyCode === 9) { // tab was pressed
	    	// get caret position/selection
	    	var start = this.selectionStart;
	    	var end = this.selectionEnd;
			var target = e.target;
			var value = target.value;
			// set textarea value to: text before caret + tab + text after caret
	    	target.value = value.substring(0, start)+ "\t"+ value.substring(end);
			// put caret at right position again (add one for the tab)
	    	this.selectionStart = this.selectionEnd = start + 1;
			// prevent the focus lose
	    	e.preventDefault();
	   	}	
	},false);
});

//The function to render the HTML code typed in the HTML text area onto the viewing area.
function func1(){
	var htmlcode = document.getElementById('HTMLText').value;
	document.getElementById('HTMLview').innerHTML = htmlcode;
}
	
//The function to render the CSS code typed in the CSS text area onto the viewing area.
function func2(){
	var sheet = document.createElement('style')
	sheet.innerHTML = document.getElementById('CSSText').value;
	document.getElementById('HTMLview').appendChild(sheet);
}

