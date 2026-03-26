// Sample bus data
const busData = [
    { id: 1, name: 'Express Bus 101', depart: '08:00', arrive: '14:00', price: 45, seats: 35 },
    { id: 2, name: 'Luxury Coach 205', depart: '10:30', arrive: '16:30', price: 65, seats: 28 },
    { id: 3, name: 'Standard Bus 302', depart: '12:00', arrive: '18:00', price: 40, seats: 42 },
    { id: 4, name: 'Express Bus 405', depart: '15:00', arrive: '21:00', price: 50, seats: 38 },
];

function handleSearch(event) {
    event.preventDefault();

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;

    // Show results section
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.classList.remove('hidden');

    // Display buses
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    busData.forEach(bus => {
        const busCard = document.createElement('div');
        busCard.className = 'bus-card';
        busCard.innerHTML = `
            <h3>${bus.name}</h3>
            <div class="bus-info">
                <div>
                    <p><strong>From:</strong> ${from}</p>
                    <p><strong>To:</strong> ${to}</p>
                    <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
                </div>
            </div>
            <div class="bus-info">
                <div>
                    <p><strong>Departs:</strong> ${bus.depart}</p>
                    <p><strong>Arrives:</strong> ${bus.arrive}</p>
                    <p><strong>Seats Available:</strong> ${bus.seats}</p>
                </div>
                <div class="price">$${bus.price}</div>
            </div>
            <button class="btn-book" onclick="bookTicket(${bus.id}, '${bus.name}', ${passengers}, ${bus.price})">Book Now</button>
        `;
        resultsList.appendChild(busCard);
    });

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function bookTicket(busId, busName, passengers, pricePerTicket) {
    const totalPrice = passengers * pricePerTicket;
    alert(`Booking confirmed!\n\nBus: ${busName}\nPassengers: ${passengers}\nTotal Price: $${totalPrice}\n\nProceeding to payment...`);
    
    // In a real app, this would redirect to a payment page
    console.log(`User is booking ${passengers} seats on bus ${busId}`);
}

// Set minimum date to today
window.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
});
