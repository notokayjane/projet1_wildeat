/*Bouton formulaire*/
function confirmSubmit(event) {
    // Afficher une boîte de dialogue de confirmation
    const isConfirmed = window.confirm("Voulez-vous vraiment soumettre ce formulaire ?");
    // Si l'utilisateur clique sur "Annuler", empêcher la soumission du formulaire
    if (!isConfirmed) {
        event.preventDefault();
        
    } else {
        const form = document.querySelector('.form');
        form.reset();
    }
  }
  
  const button = document.querySelector('.fancy');
  button.addEventListener("click",() => confirmSubmit());