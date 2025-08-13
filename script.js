// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.social-icon[title="Toggle Theme"]');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    // Update toggle icon based on current theme
    updateThemeIcon(currentTheme);
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('svg');
        if (theme === 'dark') {
            // Moon icon
            icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
            themeToggle.title = 'Switch to Light Mode';
        } else {
            // Sun icon
            icon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
            themeToggle.title = 'Switch to Dark Mode';
        }
    }
    
    // Smooth scrolling for anchor links
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
    
    // Add hover effects to experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
            this.style.transform = 'translateX(8px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Add typing effect to the main heading
    const heading = document.querySelector('.hero h1');
    if (heading) {
        const text = heading.textContent;
        heading.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heading.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
});

// Add CSS for dark mode
const darkModeStyles = `
    [data-theme="dark"] {
        --bg-primary: #0f0f0f;
        --bg-secondary: #1a1a1a;
        --text-primary: #ffffff;
        --text-secondary: #d1d5db;
        --border-color: #374151;
        --hover-bg: #374151;
    }
    
    [data-theme="dark"] body {
        background-color: var(--bg-primary);
        color: var(--text-primary);
    }
    
    [data-theme="dark"] .container {
        background-color: var(--bg-primary);
    }
    
    [data-theme="dark"] h2 {
        color: var(--text-primary);
    }
    
    [data-theme="dark"] .subtitle {
        color: var(--text-secondary);
    }
    
    [data-theme="dark"] .about p {
        color: var(--text-secondary);
    }
    
    [data-theme="dark"] .company-name {
        color: var(--text-primary);
    }
    
    [data-theme="dark"] .role {
        color: var(--text-secondary);
    }
    
    [data-theme="dark"] .dates {
        color: var(--text-secondary);
    }
    
    [data-theme="dark"] .experience-item {
        border-bottom-color: var(--border-color);
    }
    
    [data-theme="dark"] .education-item {
        border-bottom-color: var(--border-color);
    }
    
    [data-theme="dark"] .footer {
        border-top-color: var(--border-color);
    }
    
    [data-theme="dark"] .social-icons {
        background-color: var(--bg-secondary);
        border-color: var(--border-color);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    
    [data-theme="dark"] .social-icon {
        color: var(--text-primary);
    }
    
    [data-theme="dark"] .social-icon:hover {
        background-color: var(--hover-bg);
        color: var(--text-primary);
    }
    
    [data-theme="dark"] .divider {
        background-color: var(--border-color);
    }
    
    [data-theme="dark"] .link {
        color: var(--text-primary);
        text-decoration-color: var(--border-color);
    }
    
    [data-theme="dark"] .link:hover {
        text-decoration-color: var(--text-secondary);
    }
    
    [data-theme="dark"] .experience-item:hover {
        background-color: var(--bg-secondary);
    }
`;

// Inject dark mode styles
const styleSheet = document.createElement('style');
styleSheet.textContent = darkModeStyles;
document.head.appendChild(styleSheet);
