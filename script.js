const gridContainer = document.querySelector('.grid-container');
const items = [
    "Maths",
    "Philosophie",
    "SPE_Maths",
    "Anglais_LV1",
    "Maths_Experts",
    "Sport",
    "Espagnol",
    "Education_moral_&_civique"
];

for (let i = 0; i < items.length; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridItem.textContent = items[i];
  gridContainer.appendChild(gridItem);
  
  gridItem.addEventListener('click', async () => {
    const newUrl = `http://localhost:5173/courts/${items[i]}`;
    
    if (newUrl !== window.location.href) {
      try {
        const response = await fetch('courts.html');
        const html = await response.text();
        const parser = new DOMParser();
        const newDoc = parser.parseFromString(html, 'text/html');
        const content = newDoc.querySelector('.content');
        
        // Ajout du contenu chargé
        document.querySelector('.content').innerHTML = content.innerHTML;
        window.history.pushState({}, '', newUrl);

        // Suppression de la liste
        gridContainer.innerHTML = '';
      } catch (err) {
        console.error(err);
      }
    }
  });
}
