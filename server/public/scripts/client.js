console.log('in client');

$(document).ready(onReady);

function onReady() {
    $('#js-btn-submit-book').on('click', sendBookToServer);
}

function sendBookToServer() {
    console.log('in sendBookToServer');
    
}
