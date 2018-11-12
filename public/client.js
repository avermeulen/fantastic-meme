var socket = io();

var block = document.querySelector('.block');

socket.on('change', function (data) {
    // console.log(data);
    block.classList.remove('red');
    block.classList.remove('green');
    block.classList.remove('amber');

    if (data.color !== '') {
        block.classList.add(data.color);
    }
    
});
