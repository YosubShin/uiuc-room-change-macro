function macro() {
	alert("Now starting macro.");
	localStorage.setItem('macro', true);
        location.reload();
}

function macrostop() {
	alert("Now stopping macro.");
	localStorage.removeItem('macro');
        location.reload();
}
