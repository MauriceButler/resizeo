var crel = require('crel'),
    resizeo = require('../'),
    imagePath = 'kitten.jpg',
    toDataUri = require('to-datauri');

window.addEventListener('load', function(){

    crel(document.body,
        crel('img', {src: imagePath})
    );

    toDataUri(imagePath, function (error, uri) {
        resizeo(uri, 100, function(error, resizedUri) {
            crel(document.body,
                crel('img', {src: resizedUri})
            );
        });

        resizeo(uri, 200, function(error, resizedUri) {
            crel(document.body,
                crel('img', {src: resizedUri})
            );
        });

        resizeo(uri, 300, function(error, resizedUri) {
            crel(document.body,
                crel('img', {src: resizedUri})
            );
        });

        resizeo(uri, 400, function(error, resizedUri) {
            crel(document.body,
                crel('img', {src: resizedUri})
            );
        });

        resizeo(uri, 500, function(error, resizedUri) {
            crel(document.body,
                crel('img', {src: resizedUri})
            );
        });
    });
});