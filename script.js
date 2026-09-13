const dialog = document.querySelector('#image-dialog');
const dialogImage = dialog.querySelector('img');

document.querySelectorAll('.zoomable .image-button').forEach((button) => {
  button.addEventListener('click', () => {
    const source = button.querySelector('img');
    dialogImage.src = source.src;
    dialogImage.alt = source.alt;
    dialog.showModal();
  });
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
