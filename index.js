
const themeToggle = document.querySelector('.tog');
const themeIcon = themeToggle.querySelector('div');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeIcon.classList.toggle('icon-sun');
  themeIcon.classList.toggle('icon-moon');
});

const filterButtons = document.querySelectorAll('.btns button');

function filterCards(filter) {
  const cards = document.querySelectorAll('.cards .card');
  cards.forEach(card => {
    const toggle = card.querySelector('input[type="checkbox"]');
    if (filter === 'all') {
      card.style.display = 'block';
    } else if (filter === 'active') {
      card.style.display = toggle.checked ? 'block' : 'none';
    } else if (filter === 'inactive') {
      card.style.display = !toggle.checked ? 'block' : 'none';
    }
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.textContent.toLowerCase();
    filterCards(type);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".btns button");
  btns[0].classList.add("active");
  document.querySelectorAll(".cbotm button").forEach(removeBtn => {
    removeBtn.addEventListener("click", () => {
      removeBtn.closest(".card").remove();
    });
  });
});
