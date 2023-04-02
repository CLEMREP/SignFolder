(() => {
    const theme = localStorage.theme;
    if (theme === 'dark') {
        toDarkMode();
    } else if (theme === 'light') {
        toLightMode();
    } else {
        toSystemMode();
    }
})();

export const changeThemeMode = () => {
    const theme = localStorage.theme;
    if (theme === 'dark') {
        toLightMode();
    } else if (theme === 'light') {
        toSystemMode();
    } else {
        toDarkMode();
    }
}

function toDarkMode() {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
}

function toLightMode() {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
}

function toSystemMode() {
    localStorage.removeItem('theme');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newIsDark = e.matches;
    if (localStorage.theme === undefined) {
        if (newIsDark) {
            toDarkMode();
        } else {
            toLightMode();
        }
    }
});
