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


//  *~~~~~~~~~~~~~~~ Scroll Reveal Animation ~~~~~~~~~~~~~~~~*

let animation = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 500,
  reset: true
})

animation.reveal('.animation-one');
animation.reveal('.animation-two', {
  delay: 500,
  scale: 0.05,
  duration: 1000
});
animation.reveal('.animation-three', {
  origin: 'left',
  distance: '60px',
});

animation.reveal('.animation-four');
