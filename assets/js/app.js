
const moviesGrid = document.getElementById('moviesGrid');
const yearItems = document.querySelectorAll('.year-item');
const navItems = document.querySelectorAll('.nav-item');


let currentMovies = allMovies;
let selectedYear = null;
let selectedGenre = null;


document.addEventListener('DOMContentLoaded', function() {
    renderMovies(currentMovies);
    initializeEventListeners();
    initializeDropdowns();
});


function renderMovies(movies) {
    if (!moviesGrid) return;
    
    moviesGrid.innerHTML = '';
    
    movies.forEach((movie, index) => {
        const movieCard = createMovieCard(movie, index);
        moviesGrid.appendChild(movieCard);
    });
}


function createMovieCard(movie, index) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy">
        <div class="movie-badges">
            <span class="quality-badge badge-${movie.quality.toLowerCase()}">${movie.quality}</span>
        </div>
        <div class="movie-rating">
            <i class="fas fa-star rating-star"></i>
            <span>${movie.rating}</span>
        </div>
        <div class="movie-info">
            <h4 class="movie-title">${movie.title}</h4>
        </div>
    `;
    
    
    card.addEventListener('click', () => {
        showMovieDetails(movie);
    });
    
    return card;
}


function showMovieDetails(movie) {
    alert(`Movie: ${movie.title}\nRating: ${movie.rating}\nYear: ${movie.year}\nGenres: ${movie.genre.join(', ')}`);
}


function initializeEventListeners() {
       yearItems.forEach(yearItem => {
        yearItem.addEventListener('click', function() {
            const year = parseInt(this.textContent);
            filterByYear(year);
    
            yearItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
    

    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            const searchTerm = prompt('Search for movies:');
            if (searchTerm) {
                searchMovies(searchTerm);
            }
        });
    }
    
    
    navItems.forEach(item => {
        if (!item.classList.contains('dropdown')) {
            item.addEventListener('click', function() {
                const text = this.querySelector('span')?.textContent;
                handleNavigation(text);
            });
        }
    });
}


function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const links = dropdownContent.querySelectorAll('a');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const value = this.textContent;
                const dropdownType = dropdown.querySelector('span').textContent;
                
                if (dropdownType === 'Languages') {
                    filterByLanguage(value);
                } else if (dropdownType === 'Genres') {
                    filterByGenre(value);
                }
                
              
                dropdown.classList.remove('active');
            });
        });
    });
}

function filterByYear(year) {
    selectedYear = year;
    applyFilters();
}


function filterByGenre(genre) {
    selectedGenre = genre;
    applyFilters();
}


function filterByLanguage(language) {
    console.log(`Filtering by language: ${language}`);
    
}


function applyFilters() {
    let filteredMovies = allMovies;
    
    if (selectedYear) {
        filteredMovies = filteredMovies.filter(movie => movie.year === selectedYear);
    }
    
    if (selectedGenre) {
        filteredMovies = filteredMovies.filter(movie => 
            movie.genre.some(g => g.toLowerCase().includes(selectedGenre.toLowerCase()))
        );
    }
    
    currentMovies = filteredMovies;
    renderMovies(currentMovies);
    
    updateFilterStatus();
}

function updateFilterStatus() {
    const sectionTitle = document.querySelector('.section-title h3');
    if (!sectionTitle) return;
    
    let title = 'Recently Added';
    
    if (selectedYear || selectedGenre) {
        title = 'Filtered Results';
        if (selectedYear) title += ` - ${selectedYear}`;
        if (selectedGenre) title += ` - ${selectedGenre}`;
    }
    
    sectionTitle.textContent = title;
}


function searchMovies(searchTerm) {
    const filteredMovies = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.genre.some(genre => genre.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    currentMovies = filteredMovies;
    renderMovies(currentMovies);
    

    const sectionTitle = document.querySelector('.section-title h3');
    if (sectionTitle) {
        sectionTitle.textContent = `Search Results for "${searchTerm}"`;
    }
}

function handleNavigation(navText) {
    switch(navText) {
        case 'All Movies':
            resetFilters();
            break;
        case 'TV Shows':
            alert('TV Shows section coming soon!');
            break;
        case 'Years':
            
            document.querySelector('.release-years')?.scrollIntoView({ behavior: 'smooth' });
            break;
        default:
            console.log(`Navigation: ${navText}`);
    }
}

function resetFilters() {
    selectedYear = null;
    selectedGenre = null;
    currentMovies = allMovies;
    renderMovies(currentMovies);
    

    yearItems.forEach(item => item.classList.remove('active'));
    const sectionTitle = document.querySelector('.section-title h3');
    if (sectionTitle) {
        sectionTitle.textContent = 'Recently Added';
    }
}

function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


window.addEventListener('resize', debounce(() => {

    console.log('Window resized');
}, 250));


function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'Escape':
            
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            break;
        case '/':
           
            e.preventDefault();
            const searchTerm = prompt('Search for movies:');
            if (searchTerm) {
                searchMovies(searchTerm);
            }
            break;
    }
});


function showLoading() {
    if (moviesGrid) {
        moviesGrid.innerHTML = '<div class="loading">Loading movies...</div>';
    }
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}


document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://via.placeholder.com/200x280/333/ffffff?text=No+Image';
    }
}, true);


function initializeTooltips() {
    const elements = document.querySelectorAll('[data-tooltip]');
    elements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    console.log('Show tooltip:', e.target.dataset.tooltip);
}

function hideTooltip(e) {
    console.log('Hide tooltip');
}


const perfObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
            console.log(`${entry.name}: ${entry.duration}ms`);
        }
    }
});

if (typeof PerformanceObserver !== 'undefined') {
    perfObserver.observe({ entryTypes: ['measure'] });
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        renderMovies,
        filterByYear,
        filterByGenre,
        searchMovies,
        resetFilters
    };
}