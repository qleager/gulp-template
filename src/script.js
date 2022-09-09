let scrollToLinks = document.querySelectorAll('[href^="#"]');

scrollToLinks.forEach(element => {
  element.addEventListener('click', function(e) {
    e.preventDefault();
    let id = e.target.getAttribute('href');
    smoothScrollToById(id);
  })
});

function smoothScrollToById(id) {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
