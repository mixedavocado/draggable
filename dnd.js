

function DD(){
	"use strict";
	var self = this;
	var dragged;
	
	// draggable
	for( let elm of document.getElementsByClassName("draggable") ){
		elm.draggable=true;
		elm.addEventListener("dragstart",function(e){
			dragged = e.target;
			e.dataTransfer.setData( "text/plain" ,e.target.id );
		});
	}
	document.addEventListener("dragstart",function(e){
		
	});
	document.addEventListener("dragover",function(e){
		e.preventDefault();
	});
	
	// drop
	document.addEventListener("drop",function(e){
		e.preventDefault();
		if( !dragged || !e.target.classList ){return;}
		//var id = e.dataTransfer.getData("text/plain");
		
		if( e.target.classList.contains("dropzone") ){
			e.target.appendChild( dragged );
		}
		if( e.target.classList.contains("draggable") ){
			var endNode = e.target.parentNode;
			dragged.parentNode.appendChild( e.target.parentNode.removeChild(e.target) );
			endNode.appendChild( dragged.parentNode.removeChild(dragged) );
		}
		
	});
	
	//document.querySelectorAll();
}
DD.prototype = {

};
var dd = new DD();
