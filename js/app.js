var plataformas = {
"Deezer" : {name : "Deezer", precio : 10},
"Spotify" : {name : "Spotify", precio : 10},
"Google" : {name : "Google", precio : 10},
"Tidal" : {name : "Tidal", precio : 10},
"Youtube" : {name : "Youtube", precio : 10},
"Apple" : {name : "Apple", precio : 10},
};



function calcularValor(plataforma , streams){
	var valor = plataformas[plataforma.name].precio;
	return streams * valor;
}