// Smooth scrolling
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Project filtering
const filterButtons = document.querySelectorAll('.filter button');
const posts = document.querySelectorAll('.post');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filter posts
    posts.forEach(post => {
      const tags = post.getAttribute('data-tags').split(',');
      if (filter === 'All' || tags.includes(filter)) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
});
