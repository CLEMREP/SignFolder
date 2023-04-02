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
    //alert(localStorage.theme)
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
    document.documentElement.classList.remove('dark');
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
        toDarkMode();
    } else {
        toLightMode();
    }
    localStorage.removeItem('theme');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newIsDark = e.matches;
    if (newIsDark) {
        toDarkMode();
    } else {
        toLightMode();
    }
});
