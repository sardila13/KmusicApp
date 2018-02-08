var plataformas = {
"Deezer" : {name : "Deezer", precio : 0.0047},
"Spotify" : {name : "Spotify", precio : 0.004},
"Google" : {name : "Google", precio : 0.0157},
"Tidal" : {name : "Tidal", precio : 0.012},
"Youtube" : {name : "Youtube", precio : 0.00175},
"Apple" : {name : "Apple", precio : 0.005},
};



function calcularValor(plataforma , streams){
	var valor = plataformas[plataforma.name].precio;
	return streams * valor;
}