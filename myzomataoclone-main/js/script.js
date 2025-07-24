// Smooth Scrolling for Navigation Links
document.querySelectorAll('header ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Search Bar Functionality
const searchInput = document.querySelector('main section:nth-child(1) input');
searchInput?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            console.log(`Searching for: ${query}`);
            alert(`Searching for: ${query}`); // Replace with actual search functionality
        } else {
            alert('Please enter a search term.');
        }
    }
});

// Dynamic Theme Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Theme';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = '#ff5722';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#fff';
        toggleButton.style.backgroundColor = '#444';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        toggleButton.style.backgroundColor = '#ff5722';
    }
});
