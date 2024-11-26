document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            const target = tab.getAttribute('data-tab');

            // Hide all sections
            sections.forEach(section => section.classList.remove('visible'));

            // Show target section
            document.getElementById(target).classList.add('visible');
        });
    });
});
