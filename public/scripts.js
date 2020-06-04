const modalOverlay = document.querySelector('.modal-overlay');

const cards = document.querySelectorAll('.card');

for (const card of cards) {
  card.addEventListener('click', function () {
    const videoId = card.getAttribute('id');
    console.log(videoId);
    window.location.href = `/video?id=${videoId}`;
  });
}
