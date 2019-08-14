console.log('in client');

$(document).ready(onReady);

function onReady() {
    $('#js-btn-submit-book').on('click', sendBookToServer);

    getBookData();
}

function sendBookToServer() {
    console.log('in sendBookToServer');

    const bookToSend = {
        title: $('#js-book-title').val(), 
        author: $('#js-author').val(),
        published: $('#js-published').val()
    };
    console.log(bookToSend);
    
    $.ajax({
        method: 'POST',
        url: 'api/books',
        data: bookToSend
    }).then((response) => {
        console.log(response);
        getBookData();
    }).catch((error) => {
        console.log('error in post', error);
    });
    $('#js-book-title').val('');
    $('#js-author').val('');
    $('#js-published').val('');
}

function getBookData() {
    $.ajax({
        method: 'GET',
        url: '/api/books'
    }).then((response) => {
        render(response);
    }).catch((error) => {
        console.log('error in song get', error);
    });
}

function render(response) {
    const listOfBooks = response;
    $('#bookTableBody').empty();

    for(let book of listOfBooks) {
        $('#bookTableBody').append(`
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.published}</td>
            </tr>
        `);
    }
}
