function exibirPopup(id) {
	containerPopup = document.querySelector('.popup');
	containerPopup.style.display = 'block';

	btnConfirmar = document.querySelector('.true');
	btnConfirmar.setAttribute('href', '../apagarAluno/' + id);
}

btnOcultarPopup = document.querySelector('.false');
btnOcultarPopup.addEventListener('click', () => {
	containerPopup = document.querySelector('.popup');
	containerPopup.style.display = 'none';
});
