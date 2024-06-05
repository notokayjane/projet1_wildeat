/*Bouton formulaire*/
function confirmSubmit(event) {
    // Afficher une boîte de dialogue de confirmation
    const isConfirmed = window.confirm("Voulez-vous vraiment soumettre ce formulaire ?");
    // Si l'utilisateur clique sur "Annuler", empêcher la soumission du formulaire
    if (!isConfirmed) {
        event.preventDefault();
    }
  }
  
  const button = document.getElementById('submitButton');
  button.addEventListener("click",confirmSubmit)