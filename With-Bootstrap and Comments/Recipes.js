// MY OWN CODE
function searchCards() { // Creates a function 
    const searchInput = document.getElementById('searchInput'); //Gets the input value
    const searchTerm = searchInput.value.toLowerCase().replace(/\s/g, ''); //Converts the input to lower case
    const cardTitles = document.querySelectorAll('.card-title'); //Method allowing to select multiple elements
    let hasResults = false; //Keeps track of results
   
    cardTitles.forEach(function(title) { //For each goes through each element and performs a function on it that takes argument title
      const cardTitle = title.textContent.toLowerCase().replace(/\s/g, ''); //Takes card title and converts to lowercase
      const card = title.closest('.card'); //looks for closest element that has class card and storing in this variable
   
      if (cardTitle.includes(searchTerm)) { //if check for matching input with card title
        card.style.display = 'block'; // displays recipe
        hasResults = true; // Has a result if its true
      } else {
        card.style.display = 'none'; //Hides recipes
      }
    });
    if (!hasResults){
        alert("No results") //No results alert
    }
   }

  //  END OF MY OWN CODE
