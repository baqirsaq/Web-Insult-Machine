document.getElementById('endMessage').classList.add('hidden');
//temp
document.getElementById('startgame').addEventListener('click', function() {
    document.getElementById('mainContent').classList.add('hidden');

    document.body.classList.add('theEnd');

    setTimeout(function() {
        document.getElementById('endMessage').classList.remove('hidden');
    }, 500)
})