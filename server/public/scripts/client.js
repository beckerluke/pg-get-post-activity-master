console.log('in client');

$(document).ready(onReady);

function onReady() {
    $('#js-btn-submit-book').on('click', sendBookToServer);

    getBookData();
}

function sendBookToServer() {
    console.log('in sendBookToServer');
    

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

// function render(response) {
//     const listOfBooks = response;
//     $('#bookTableBody').empty();

//     for(let book of listOfBooks) {
//         $('#bookTableBody').append(`
//             <tr>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//             </tr>
//         `);
//     }
// }
