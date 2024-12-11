function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => (section.style.display = 'none'));

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.style.display = 'block';
}

// Show the dashboard by default
document.getElementById('dashboard').style.display = 'block';
