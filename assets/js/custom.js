let cancelIcon = document.getElementById('cancel-icon');
let toggleIcon = document.getElementById('toggle-icon');
console.log(toggleIcon);

toggleIcon.addEventListener('click', () => {
  let toggleBar = document.querySelector('.toggle-bar');
  toggleBar.classList.remove('hidden');
});

cancelIcon.addEventListener('click', () => {
  let toggleBar = document.querySelector('.toggle-bar');
  toggleBar.classList.add('hidden');
});
