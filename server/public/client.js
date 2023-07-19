$(document).ready(onReady);

function onReady() {
    $.ajax({
        type: 'GET',
        url: '/artist'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    }).catch(function (error) {
        alert('error caught!');
        console.log('caught error', error);
    })

    // TODO Add ajax request for /songs and display on DOM

    $.ajax({
        type: 'GET',
        url: '/song'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let song = response[i];
            $('#songTableBody').append(`
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `);
        }
    }).catch(function (error) {
        alert('error caught!');
        console.log('caught error', error);
    })


    $.ajax({
        type: 'GET',
        url: '/title'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let album = response[i];
            $('#titleTableBody').append(`
            <tr>
                <td>${album.title}</td>
                <td>${album.year}</td>
            </tr>
        `);
        }
    }).catch(function (error) {
        alert('error caught!');
        console.log('caught error', error);
    });


};

