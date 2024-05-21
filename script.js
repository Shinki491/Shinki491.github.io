$(document).ready(function() {
    $('.thumbnail').click(function() {
        var imageUrl = $(this).attr('src');
        window.open(imageUrl, '_blank');
    });
});

