//redirigir a Login
function redirigir() {
    window.location.href = "../Auth/authentication.html"; // Cambia por la URL de la vista a la que deseas redirigir
}

function redirigirP() {
    window.location.href = "pago.php"; // Cambia por la URL de la vista a la que deseas redirigir
}

function App(){}

	window.onload = function(event){
		var app = new App();
		window.app = app;
	}

	App.prototype.processingButton = function(event){

		const btn = event.currentTarget;
		const carruselList = event.currentTarget.parentNode;
		const track = event.currentTarget.parentNode.querySelector('#track');
		const carrusel = track.querySelectorAll('.carrusel');

		const carruselWidth = carrusel[0].offsetWidth;
		const trackWidth = track.offsetWidth;
		const listWidth = carruselList.offsetWidth;

		track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);
		btn.dataset.button == "button-prev" ? prevAction(leftPosition,carruselWidth,track) : nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
	}

	let prevAction = (leftPosition, carruselWidth, track) => {
		if (leftPosition > 0){
			track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
		}
	}

	let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
		if (leftPosition < (trackWidth - listWidth)){
			track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
		}
	}

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
  
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

document.getElementById('product-2').addEventListener('click', function() {
    console.log('AirPods Pro clicked');
});