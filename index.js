load = function () {
    document.getElementById('btnRedirect')
        .addEventListener('click',
            function () {
                console.log('btnRedirect');
            });

    document.getElementById('btnOpenUrlAndClose')
        .addEventListener('click',
            function () {
                console.log('btnOpenUrlAndClose');
            });
}