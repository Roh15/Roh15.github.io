/* ========================================
   NEURAL.HUMAN - Main JavaScript
   Portfolio interactions and animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavigation();
    initNeuralNetwork();
    initProjectFilters();
    initThreadFilters();
    initThreadToggles();
    initScrollAnimations();
});

/* ========================================
   NAVIGATION
   ======================================== */
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(15, 15, 35, 0.95)';
            } else {
                navbar.style.background = 'rgba(15, 15, 35, 0.8)';
            }
        });
    }
}

/* ========================================
   NEURAL NETWORK ANIMATION
   ======================================== */
function initNeuralNetwork() {
    const svgContainer = document.querySelector('.connections');
    if (!svgContainer) return;

    const inputNeurons = document.querySelectorAll('.input-layer .neuron');
    const hiddenNeurons = document.querySelectorAll('.hidden-layer .neuron');
    const outputNeurons = document.querySelectorAll('.output-layer .neuron');

    // Clear existing connections
    svgContainer.innerHTML = '';

    // Helper function to get neuron position
    function getNeuronPosition(neuron) {
        const rect = neuron.getBoundingClientRect();
        const containerRect = svgContainer.getBoundingClientRect();
        return {
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2
        };
    }

    // Draw connections after a short delay to ensure layout is complete
    setTimeout(() => {
        // Input to Hidden connections
        inputNeurons.forEach((inputNeuron, i) => {
            hiddenNeurons.forEach((hiddenNeuron, j) => {
                const start = getNeuronPosition(inputNeuron);
                const end = getNeuronPosition(hiddenNeuron);
                createConnection(svgContainer, start, end, `ih-${i}-${j}`);
            });
        });

        // Hidden to Output connections
        hiddenNeurons.forEach((hiddenNeuron, i) => {
            outputNeurons.forEach((outputNeuron, j) => {
                const start = getNeuronPosition(hiddenNeuron);
                const end = getNeuronPosition(outputNeuron);
                createConnection(svgContainer, start, end, `ho-${i}-${j}`);
            });
        });

        // Animate random connections
        animateConnections();
    }, 100);
}

function createConnection(svg, start, end, id) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', start.x);
    line.setAttribute('y1', start.y);
    line.setAttribute('x2', end.x);
    line.setAttribute('y2', end.y);
    line.setAttribute('id', id);
    line.setAttribute('stroke', 'rgba(99, 102, 241, 0.3)');
    line.setAttribute('stroke-width', '1');
    svg.appendChild(line);
}

function animateConnections() {
    const connections = document.querySelectorAll('.connections line');
    if (connections.length === 0) return;

    // Randomly highlight connections to simulate "firing"
    setInterval(() => {
        // Reset all connections
        connections.forEach(conn => {
            conn.setAttribute('stroke', 'rgba(99, 102, 241, 0.3)');
            conn.setAttribute('stroke-width', '1');
        });

        // Highlight random path
        const numToHighlight = Math.floor(Math.random() * 3) + 2;
        for (let i = 0; i < numToHighlight; i++) {
            const randomConn = connections[Math.floor(Math.random() * connections.length)];
            randomConn.setAttribute('stroke', 'rgba(99, 102, 241, 0.8)');
            randomConn.setAttribute('stroke-width', '2');
        }
    }, 500);
}

/* ========================================
   PROJECT FILTERS
   ======================================== */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.project-filters .filter-btn');
    const projects = document.querySelectorAll('.project-card[data-category]');

    if (filterBtns.length === 0 || projects.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // Filter projects
            projects.forEach(project => {
                if (filter === 'all' || project.dataset.category === filter) {
                    project.classList.remove('hidden');
                    project.style.animation = 'fadeInUp 0.4s ease forwards';
                } else {
                    project.classList.add('hidden');
                }
            });
        });
    });
}

/* ========================================
   THREAD FILTERS
   ======================================== */
function initThreadFilters() {
    const filterBtns = document.querySelectorAll('.thread-filters .filter-btn');
    const threads = document.querySelectorAll('.thread-card[data-category]');

    if (filterBtns.length === 0 || threads.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // Filter threads
            threads.forEach(thread => {
                if (filter === 'all' || thread.dataset.category === filter) {
                    thread.classList.remove('hidden');
                    thread.style.animation = 'fadeInUp 0.4s ease forwards';
                } else {
                    thread.classList.add('hidden');
                }
            });
        });
    });
}

/* ========================================
   THREAD TOGGLES
   ======================================== */
function initThreadToggles() {
    const toggleBtns = document.querySelectorAll('.thread-toggle');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const thread = btn.closest('.thread-card');
            thread.classList.toggle('expanded');
            
            const isExpanded = thread.classList.contains('expanded');
            btn.setAttribute('aria-expanded', isExpanded);
            
            // Update button text
            const toggleText = btn.querySelector('.toggle-text');
            toggleText.textContent = isExpanded ? 'Close Thread' : 'Read Thread';
        });
    });
}

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.about-card, .link-card, .project-card, .thread-card, .resume-section'
    );

    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

/* ========================================
   TYPING EFFECT (Optional Enhancement)
   ======================================== */
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/* ========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ======================================== */
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

/* ========================================
   CONSOLE EASTER EGG 🥚
   ======================================== */
console.log(`
%c🧠 neural.human

%cHey there, curious dev! 👋

If you're reading this, you probably share my love for 
understanding how things work under the hood.

Let's connect and talk about:
- Making AI more human
- Healthcare ML
- Why backprop is still kind of magical

Built with vanilla JS, CSS, and a whole lot of ☕

`, 
'font-size: 24px; font-weight: bold;',
'font-size: 14px; color: #94a3b8;'
);
