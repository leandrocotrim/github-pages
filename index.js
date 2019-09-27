load = function () {
    document.getElementById('btnRedirect')
        .addEventListener('click',
            function () {                
                console.log('btnRedirect');
                window.location.href = 'https://www.cielo.com.br';
            });

    document.getElementById('btnOpenUrlAndClose')
        .addEventListener('click',
            function () {
                console.log('btnOpenUrlAndClose');
                window.open('https://www.cielo.com.br');
                window.close();
            });
}