const form = document.querySelector('form');
const input = form.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const noteText = input.value.trim();

  if (noteText !== '') {
    const noteItem = document.createElement('li');
    noteItem.textContent = noteText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = '&#10006;'; // Insert a delete cross
    noteItem.appendChild(deleteButton);

    ul.appendChild(noteItem);
    input.value = '';

    // Add a click event listener to delete button
    deleteButton.addEventListener('click', () => {
      noteItem.remove();
    });
  }
});








