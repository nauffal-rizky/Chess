document.addEventListener('DOMContentLoaded', () => {
  const pawns = document.querySelectorAll('.square');
  pawns.forEach((pawn) => {
    window.addEventListener('click', (e) => {
      if (e.target === pawn) {
        console.log(e.target.querySelector('i'));
      } else if (e.target === pawn.querySelector('i')) {
        console.log(e.target);
      }
    });
  });
});
