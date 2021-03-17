export const scrollFunction = (headerNav) => {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        headerNav.classList.add('bg');
    } else {
        headerNav.classList.remove('bg');
    }
};