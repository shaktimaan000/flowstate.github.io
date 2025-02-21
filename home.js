let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const filterBtn = document.getElementById('filterBtn');
    const filterMenu = document.getElementById('filterMenu');
    const applyFilters = document.getElementById('applyFilters');
    const parkingSpotsContainer = document.getElementById('parkingSpots');
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');

    // State
    let filters = {
        sortBy: '',
        vehicleType: '',
        priceRange: 5000,
        features: '',
        rating: ''
    };

    // Event Listeners
    filterBtn.addEventListener('click', toggleFilterMenu);
    document.addEventListener('click', handleClickOutside);
    applyFilters.addEventListener('click', handleApplyFilters);

    // Initialize price range slider
    const priceRange = document.getElementById('priceRange');
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');

    priceRange.addEventListener('input', (e) => {
        const value = e.target.value;
        maxPrice.textContent = `₹${value}`;
    });

    // Functions
    function toggleFilterMenu() {
        filterMenu.classList.toggle('hidden');
    }

    function handleClickOutside(event) {
        if (!filterMenu.contains(event.target) && !filterBtn.contains(event.target)) {
            filterMenu.classList.add('hidden');
        }
    }

    function handleApplyFilters() {
        // Collect all filter values
        filters = {
            sortBy: document.querySelector('.sort-option:focus')?.dataset.sort || '',
            vehicleType: document.getElementById('vehicleType').value,
            priceRange: document.getElementById('priceRange').value,
            features: document.getElementById('features').value,
            rating: document.getElementById('rating').value
        };

        console.log('Applied filters:', filters);
        filterMenu.classList.add('hidden');
        showToast('Filters applied successfully');

        // Here you would typically fetch and update the parking spots based on filters
        updateParkingSpots();
    }

    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.remove('hidden');
        
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }

    function updateParkingSpots() {
        // Mock data - replace with actual API call in production
        const mockSpots = [
            {
                id: 1,
                name: "Rohini Sector 19",
                price: 250,
                rating: 2.5,
                features: ["Covered", "24/7"]
            },
            {
                id: 2,
                name: "Chandni Chowk",
                price: 350,
                rating: 3.8,
                features: ["CCTV","Covered"]
            },
            {
                id: 3,
                name: "Karol Bagh",
                price: 400,
                rating: 4.5,
                features: ["Covered"]
            },
            {
                id: 4,
                name: "Rajiv Chowk",
                price: 299,
                rating: 3.2,
                features: ["Covered"]
            },
            {
                id: 5,
                name: "Chawri Bazaar",
                price: 500,
                rating: 3.9,
                features: ["Covered"]
            },
            // Add more mock spots as needed
        ];

        // Clear existing spots
        parkingSpotsContainer.innerHTML = '';

        // Apply filters and sort
        let filteredSpots = mockSpots;
        
        // Filter by vehicle type
        if (filters.vehicleType) {
            filteredSpots = filteredSpots.filter(spot => spot.vehicleType === filters.vehicleType);
        }

        // Filter by price
        filteredSpots = filteredSpots.filter(spot => spot.price <= filters.priceRange);

        // Filter by rating
        if (filters.rating) {
            filteredSpots = filteredSpots.filter(spot => spot.rating >= parseInt(filters.rating));
        }

        // Sort spots
        if (filters.sortBy) {
            switch (filters.sortBy) {
                case 'price-asc':
                    filteredSpots.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    filteredSpots.sort((a, b) => b.price - a.price);
                    break;
                case 'rating':
                    filteredSpots.sort((a, b) => b.rating - a.rating);
                    break;
                // Add more sort options as needed
            }
        }

        // Render filtered spots
        filteredSpots.forEach(spot => {
            const spotElement = createParkingSpotElement(spot);
            parkingSpotsContainer.appendChild(spotElement);
        });
    }

    function createParkingSpotElement(spot) {
        const div = document.createElement('div');
        div.className = 'parking-spot';
        div.innerHTML = `
            <div style="background: white; padding: 1rem; border-radius: 0.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3 style="margin-bottom: 0.5rem;">${spot.name}</h3>
                <p style="color: #666;">Price: ₹${spot.price}/hr</p>
                <p style="color: #666;">Rating: ${spot.rating}⭐</p>
                <p style="color: #666;">Features: ${spot.features.join(', ')}</p>
                <button 
                    style="width: 100%; padding: 0.5rem; background: #333; color: white; border: none; border-radius: 0.25rem; margin-top: 1rem; cursor: pointer;"
                    onclick="alert('Booking functionality would go here')"
                >
                    Book Now
                </button>
            </div>
        `;
        return div;
    }

    // Initial load of parking spots
    updateParkingSpots();
});