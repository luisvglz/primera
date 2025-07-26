document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('cuadrito');
    input.addEventListener('keypress', function(e) {
        if (/\d/.test(e.key)) {
            e.preventDefault();
        }
    });
});