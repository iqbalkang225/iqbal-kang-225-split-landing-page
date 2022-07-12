const divEl = document.querySelectorAll('div');

divEl.forEach(div => {
  div.addEventListener('mouseleave', () => {
    div.classList.toggle('active');
  })

  div.addEventListener('mouseenter', () => {
    div.classList.toggle('active');
  })
});