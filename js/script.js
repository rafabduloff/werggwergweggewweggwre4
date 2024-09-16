$(document).ready(function() {
    // Привязка ключевых слов и ссылок к страницам
    const linkToPageMapping = {
        'https://obrazovaka.ru/session/bb915d': 'page1.html',
        'link2': 'page2.html',
        'link3': 'page3.html'
    };

    $('#searchButton').click(function() {
        const searchInput = $('#searchInput').val().trim();
        const result = $('#result');

        // Найти страницу по введённому ключевому слову или ссылке
        const page = linkToPageMapping[searchInput];
        if (page) {
            result.html(`Redirecting to: <a href="${page}">${page}</a>`);
            window.location.href = page; // Перенаправление на найденную страницу
        } else {
            result.text('No solution found for this link or keyword.');
        }
    });
});
