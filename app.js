document.addEventListener('DOMContentLoaded', () => {
  const pawns = document.querySelectorAll('.square');
  pawns.forEach((pawn) => {
    window.addEventListener('click', (e) => {
      if (e.target === pawn) {
        const element = e.target.querySelector('i');
        if (!element) return false;

        const classString = element.classList[1];

        if (classString.includes('pawn')) {
          console.log(`It's chess pawn!`);

          // MAKE THE FOOTSTEP OF THE MOVEMENTS
        } else if (classString.includes('knight')) {
          console.log(`It's chess knight!`);
        } else if (classString.includes('rook')) {
          console.log(`It's chess rook!`);
        } else if (classString.includes('bishop')) {
          console.log(`It's chess bishop!`);
        } else if (classString.includes('queen')) {
          console.log(`It's chess queen!`);
        } else if (classString.includes('king')) {
          console.log(`It's chess king!`);
        }
      } else if (e.target === pawn.querySelector('i')) {
        const element = e.target;
        const classString = element.classList[1];

        if (classString.includes('pawn')) {
          console.log(`It's chess pawn!`);

          // MAKE THE FOOTSTEP OF THE MOVEMENTS
        } else if (classString.includes('knight')) {
          console.log(`It's chess knight!`);
        } else if (classString.includes('rook')) {
          console.log(`It's chess rook!`);
        } else if (classString.includes('bishop')) {
          console.log(`It's chess bishop!`);
        } else if (classString.includes('queen')) {
          console.log(`It's chess queen!`);
        } else if (classString.includes('king')) {
          console.log(`It's chess king!`);
        }
      }
    });
  });
});
