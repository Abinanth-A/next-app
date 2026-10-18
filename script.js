document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check local storage or default to system
    let currentTheme = localStorage.getItem('theme');
    
    if (!currentTheme) {
        currentTheme = prefersDark.matches ? 'dark' : 'light';
    }
    
    // Apply theme function
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        if (iconSun && iconMoon) {
            if (theme === 'dark') {
                iconSun.style.display = 'block';
                iconMoon.style.display = 'none';
            } else {
                iconSun.style.display = 'none';
                iconMoon.style.display = 'block';
            }
        }
    };
    
    // Apply initial theme
    applyTheme(currentTheme);
    
    // Toggle theme on click
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
            applyTheme(currentTheme);
        });
    }
    
    // Update theme if system preference changes and no local override exists
    prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    // 2. Dynamic Release Information & Timeline Rendering
    if (window.RELEASES_DATA && window.RELEASES_DATA.length > 0) {
        const latestRelease = window.RELEASES_DATA[0];

        // Bind version to download button on main page
        const downloadBtn = document.getElementById('main-download-btn');
        if (downloadBtn) {
            downloadBtn.textContent = `Download ${latestRelease.version}`;
        }

        // Render timeline on Updates page
        const timelineContainer = document.getElementById('timeline-container');
        if (timelineContainer) {
            timelineContainer.innerHTML = window.RELEASES_DATA.map(rel => {
                const latestBadge = rel.isLatest ? `<span class="badge-latest">Latest</span>` : '';
                
                let contentHtml = '';
                if (rel.groups && rel.groups.length > 0) {
                    contentHtml = rel.groups.map(group => `
                        <div class="release-group">
                            <h3 class="release-group-title">${group.type}:</h3>
                            <ul class="release-list">
                                ${group.items.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('');
                } else if (rel.summary) {
                    contentHtml = `<p class="release-summary">${rel.summary}</p>`;
                }

                return `
                    <article class="timeline-item ${rel.isLatest ? 'latest' : ''}">
                        <div class="timeline-dot" aria-hidden="true"></div>
                        <div class="release-header">
                            <h2 class="release-version">${rel.version}</h2>
                            <span class="release-date">(${rel.date})</span>
                            ${latestBadge}
                        </div>
                        <div class="release-body">
                            ${contentHtml}
                        </div>
                    </article>
                `;
            }).join('');
        }
    }

    // 3. Scroll Reveal Animation
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Initialize Intersection Observer if motion is not reduced
    if (!prefersReducedMotion.matches) {
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once revealed to keep it visible
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.15, // Trigger when 15% of the element is visible
            rootMargin: "0px 0px -20px 0px"
        });
        
        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    } else {
        // Fallback: immediately show all elements if reduced motion is preferred
        document.querySelectorAll('.reveal').forEach(el => {
            el.classList.add('active');
        });
    }
});
