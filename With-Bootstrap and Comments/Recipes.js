function searchCards() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().replace(/\s/g, '');
    const cardTitles = document.querySelectorAll('.card-title');
    let hasResults = false;
   
    cardTitles.forEach(function(title) {
      const cardTitle = title.textContent.toLowerCase().replace(/\s/g, '');
      const card = title.closest('.card');
   
      if (cardTitle.includes(searchTerm)) {
        card.style.display = 'block';
        hasResults = true;
      } else {
        card.style.display = 'none';
      }
    });
    if (!hasResults){
        alert("No results")
    }
   }
