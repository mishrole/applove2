/* Insertar previsualización de galería */

var texto = ["proyecto 1", "proyecto 2", "proyecto 3", "proyecto 4", "proyecto 5", "proyecto 6", "proyecto 7", "proyecto 8", "proyecto 9"];

function galleryText(param){
	return "assets/img/gallery/"+(param+1)+".jpg";
}

function insert(elem){
	var div = document.createElement("div");
	var figure = document.createElement("figure");
		figure.setAttribute("class", "figure-work");

	var img = document.createElement("img");
	var indice = texto.indexOf(elem);
		img.setAttribute("src", galleryText(indice));
		img.setAttribute("alt", elem);
		img.setAttribute("class", "img-gallery");
	var textoImagen = document.createElement("figcaption");
	var span = document.createElement("span");
		span.innerText = texto[indice]

	textoImagen.appendChild(span);
	figure.appendChild(img);
	figure.appendChild(textoImagen);
	div.appendChild(figure);

	/* Insertar muestra de modal */

	img.addEventListener('click',function(){
		
		var modal = document.getElementById("modal");
		modalImagen = document.getElementById("imagenes");

		modal.style.display = "block";
		modalImagen.src = this.src;
	});

	return div;

}

window.addEventListener("load", function(e){

	var gallery = texto.forEach(function(e){
		document.getElementById("gallery").appendChild(insert(e));
	});

	var close = document.getElementsByClassName("close")[0];

	close.onclick = function(){
		modal.style.display = "none";
	}

});
