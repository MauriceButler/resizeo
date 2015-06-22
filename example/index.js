var crel = require('crel'),
    rotato = require('../'),
    imagePath = 'kitten.jpg',
    toDataUri = require('to-datauri');

window.addEventListener('load', function(){

    crel(document.body,
        crel('img', {src: imagePath})
    );

    toDataUri(imagePath, function (error, uri) {
        rotato(uri, 0.1, function(error, rotatedUri) {
            crel(document.body,
                crel('img', {src: rotatedUri})
            );
        });

        rotato(uri, 0.2, function(error, rotatedUri) {
            crel(document.body,
                crel('img', {src: rotatedUri})
            );
        });

        rotato(uri, 0.3, function(error, rotatedUri) {
            crel(document.body,
                crel('img', {src: rotatedUri})
            );
        });

        rotato(uri, 0.4, function(error, rotatedUri) {
            crel(document.body,
                crel('img', {src: rotatedUri})
            );
        });

        rotato(uri, 0.5, function(error, rotatedUri) {
            crel(document.body,
                crel('img', {src: rotatedUri})
            );
        });
    });
});