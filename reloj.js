


(function () {
	var actualizarHora = function(){
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm, 
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();

		var pHoras = document.getElementById('horas'),
			pAMPM = document.getElementById('ampm'),
			pMinutos = document.getElementById('minutos'),
			pSegundos = document.getElementById('segundos'),
			pDiaSemana = document.getElementById('diaSemana'),
			pDia = document.getElementById('dia'),
			pMes = document.getElementById('mes'),
			pYear = document.getElementById('year');

		var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
		pDiaSemana.textContent = semana[diaSemana];

		pDia.textContent = dia; /* fecha */

		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
		pMes.textContent = meses[mes];

		pYear.textContent = year;

		if (horas >= 12) {
			horas = horas - 12;
			ampm = 'PM';
		} else {
			ampm = 'AM';
		}

		if (horas == 0) {
			horas =12;
		};
		pHoras.textContent = horas;
		pAMPM.textContent = ampm;

		if (minutos < 10) {
			minutos = "0" + minutos
		};

		if (segundos < 10) {
			segundos = "0" + segundos
		};

		pMinutos.textContent = minutos;
		pSegundos.textContent =segundos;
	};

	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000); /* 1000 = cada segundo */
}());

// Esta función se ejecutará
var numerociudad = ['Uno', 'Dos']; 
	
	for (var i=0; i<numerociudad.length;i++) {
	actualizarHoraCiudad(numerociudad[i]);	
}

	var actualizarHoraCiudad = function(numerociudad){
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm, 
			minutos = fecha.getMinutes();

		var pHoras = document.getElementById('horasCiudad' + numerociudad),
			pAMPM = document.getElementById('ampmCiudad' + numerociudad),
			pMinutos = document.getElementById('minutosCiudad' + numerociudad);

		if (horas >= 12) {
			horas = horas - 12;
			ampm = 'PM';
		} else {
			ampm = 'AM';
		}

		if (horas == 0) {
			horas =12;
		};
		pHoras.textContent = horas;
		pAMPM.textContent = ampm;

		if (minutos < 10) {
			minutos = "0" + minutos
		};

		pMinutos.textContent = minutos;


	setInterval(function(){
		actualizarHoraCiudad(numerociudad);
	}, 1000); /* 1000 = cada segundo */
};
// termina función 






