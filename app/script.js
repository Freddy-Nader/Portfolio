const redirect = (targetUrl, fallbackUrl = '/404.html') => {
    fetch(targetUrl, { mode: 'no-cors', method: 'HEAD' })
        .then(() => {
            window.location.href = targetUrl;
        })
        .catch((error) => {
            console.error("Redirection failed:", error);
            window.location.href = fallbackUrl;
        });
};

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Function to set theme
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // Check for saved user preference, if any, on load
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    } else {
        // If no saved preference, check system preference
        // Default is dark (because of CSS), so we only need to act if light is preferred
        // However, our CSS default is root without data-theme, which is dark.
        // If user prefers light, we set it.
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    // Toggle theme on click
    // Toggle theme logic
    const toggleTheme = () => {
        let theme = document.documentElement.getAttribute('data-theme');

        // If theme is currently light, switch to dark (remove attribute or set to dark)
        // If theme is not set (default dark) or 'dark', switch to light

        if (theme === 'light') {
            theme = 'dark';
        } else {
            theme = 'light';
        }

        setTheme(theme);
    };

    // Toggle theme on click
    themeToggle.addEventListener('click', toggleTheme);
});

// Toggle theme on 'l' key press
document.addEventListener('keydown', (e) => {
    // Don't trigger if user is typing in an input or textarea
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }

    if (e.key === 'l' || e.key === 'L') {
        toggleTheme();
    }
});
