var texto = ["PROYECTO 1", "PROYECTO 2", "PROYECTO 3", "PROYECTO 4", "PROYECTO 5", "PROYECTO 6", "PROYECTO 7", "PROYECTO 8", "PROYECTO 9"];

function galleryText(param){
	return "assets/img/gallery/"+(param+1)+".jpg";
}

function insert(elem){
	var div = document.createElement("div");
	var figure = document.createElement("figure");
		figure.setAttribute("class", "figure-work");

	var a = document.createElement("a");

	var img = document.createElement("img");
	var indice = texto.indexOf(elem);
		img.setAttribute("src", galleryText(indice));
		img.setAttribute("alt", elem);
	var textoImg = document.createElement("figcaption");
	var span = document.createElement("span");
		span.innerText = texto[indice]

	textoImg.appendChild(span);
	/*	a.appendChild(img)
	figure.appendChild(a); */
	figure.appendChild(img);
	figure.appendChild(textoImg);
	div.appendChild(figure);

	return div;

}

window.addEventListener("load", function(e){
	var gallery = texto.forEach(function(e){
		document.getElementById("gallery").appendChild(insert(e));
	});

	return gallery;
})