let scrollToLinks = document.querySelectorAll('[href^="#"]');

scrollToLinks.forEach(element => {
  element.addEventListener('click', function(event: Event) {
    event.preventDefault();
    let id = event.target.getAttribute('href');
    smoothScrollToById(id);
  })
});

function smoothScrollToById(id) {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
