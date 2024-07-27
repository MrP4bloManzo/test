function goToIndexPage() {
    window.location.href = 'index.html';
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos, te responderemos pronto.');
    this.reset();
});

function loadReviews() {
    const reviews = [
        "Excelente servicio, muy profesionales.",
        "Rápidos y eficaces, totalmente recomendados.",
        "El mejor taller de mofles que he visitado."
    ];
    const reviewsContainer = document.getElementById('reviews');
    reviews.forEach(review => {
        const p = document.createElement('p');
        p.textContent = review;
        reviewsContainer.appendChild(p);
    });
}

window.onload = loadReviews;
