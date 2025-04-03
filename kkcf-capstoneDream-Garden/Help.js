function toggleFAQ(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
    const isOpen = content.style.display === 'block';

    document.querySelectorAll('.faq-content').forEach(c => c.style.display = 'none');
    document.querySelectorAll('.arrow').forEach(a => a.classList.remove('open'));

    if (!isOpen) {
        content.style.display = 'block';
        arrow.classList.add('open');
    }
}
