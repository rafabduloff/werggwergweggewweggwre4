$(document).ready(function() {
    const linkToPageMapping = {
        'https://obrazovaka.ru/session/c5a981': 'page1.html',
        'https://obrazovaka.ru/session/bb915d': 'page2.html',
        'https://obrazovaka.ru/session/4bbc67': 'page3.html'
    };

    // Search button click event
    $('#searchButton').click(function() {
        const searchInput = $('#searchInput').val().trim();
        const result = $('#result');
        const page = linkToPageMapping[searchInput];
        if (page) {
            result.html(`Redirecting to: <a href="${page}">${page}</a>`);
            window.location.href = page;
        } else {
            result.text('No solution found for this link or keyword.');
        }
    });

    // Form validation
    $('#myForm').submit(function(event) {
        event.preventDefault();
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        if (name === '' || email === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
        }
    });

    // Dynamic content loading
    $('#loadContentButton').click(function() {
        $('#dynamicContent').load('content.html', function(response, status, xhr) {
            if (status === 'error') {
                $('#dynamicContent').html('Error loading content.');
            }
        });
    });

    // Toggle visibility
    $('#toggleButton').click(function() {
        $('#toggleContent').toggle();
    });

    // Animate elements
    $('#animateButton').click(function() {
        $('#animateContent').animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });

    // Change CSS dynamically
    $('#changeCssButton').click(function() {
        $('#cssContent').css({
            'color': 'red',
            'font-size': '20px',
            'background-color': 'yellow'
        });
    });

    // Event delegation
    $('#parentDiv').on('click', '.childDiv', function() {
        alert('Child div clicked!');
    });

    // AJAX request
    $('#ajaxButton').click(function() {
        $.ajax({
            url: 'https://api.example.com/data',
            method: 'GET',
            success: function(data) {
                $('#ajaxContent').html(JSON.stringify(data));
            },
            error: function() {
                $('#ajaxContent').html('Error fetching data.');
            }
        });
    });

    // Local storage
    $('#saveButton').click(function() {
        const data = $('#localStorageInput').val();
        localStorage.setItem('myData', data);
        alert('Data saved to local storage.');
    });

    $('#loadButton').click(function() {
        const data = localStorage.getItem('myData');
        $('#localStorageOutput').text(data);
    });

    // Session storage
    $('#saveSessionButton').click(function() {
        const data = $('#sessionStorageInput').val();
        sessionStorage.setItem('mySessionData', data);
        alert('Data saved to session storage.');
    });

    $('#loadSessionButton').click(function() {
        const data = sessionStorage.getItem('mySessionData');
        $('#sessionStorageOutput').text(data);
    });

    // Event handling
    $('#hoverDiv').hover(
        function() {
            $(this).css('background-color', 'lightblue');
        },
        function() {
            $(this).css('background-color', 'lightgray');
        }
    );

    // Countdown timer
    let countdown = 10;
    const countdownInterval = setInterval(function() {
        $('#countdown').text(countdown);
        countdown--;
        if (countdown < 0) {
            clearInterval(countdownInterval);
            $('#countdown').text('Time\'s up!');
        }
    }, 1000);

    // Modal popup
    $('#openModalButton').click(function() {
        $('#myModal').show();
    });

    $('#closeModalButton').click(function() {
        $('#myModal').hide();
    });

    // Tabs
    $('.tablinks').click(function() {
        const tabId = $(this).attr('data-tab');
        $('.tabcontent').hide();
        $('#' + tabId).show();
        $('.tablinks').removeClass('active');
        $(this).addClass('active');
    });

    // Tooltip
    $('#tooltipElement').hover(
        function() {
            $('#tooltip').show();
        },
        function() {
            $('#tooltip').hide();
        }
    );

    // Accordion
    $('.accordion').click(function() {
        $(this).toggleClass('active');
        const panel = $(this).next();
        if (panel.css('max-height') === '0px') {
            panel.css('max-height', panel.prop('scrollHeight') + 'px');
        } else {
            panel.css('max-height', '0px');
        }
    });

    // Carousel
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = $('.mySlides');
        slides.hide();
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides.eq(slideIndex - 1).show();
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
});