// --- JAVASCRIPT FOR MODELS PAGE FILTERING ---

// Wait until the page is fully loaded to run the script
document.addEventListener('DOMContentLoaded', () => {

    // Select all the filter buttons and all the car cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const carCards = document.querySelectorAll('.car-card');

    // Check if we are on the models page by looking for the buttons
    if(filterButtons.length > 0) {
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                
                // Set the 'active' class on the button that was clicked
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Get the filter value from the button (e.g., 'suv', 'q5')
                const filter = button.getAttribute('data-filter');

                // Loop through each car card to show or hide it
                carCards.forEach(card => {
                    const cardTags = card.getAttribute('data-tags');

                    if (filter === 'all' || cardTags.includes(filter)) {
                        card.style.display = 'block'; // Show the card
                    } else {
                        card.style.display = 'none'; // Hide the card
                    }
                });
            });
        });
    }
});
// --- JAVASCRIPT FOR HAMBURGER MENU ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    // Toggles the 'active' class on both the hamburger and the menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});