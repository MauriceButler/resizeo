module.exports = function(dataUri, scale, callback){
    var source = new Image();

    source.addEventListener('load', function(){
        var canvas = document.createElement('canvas');
        canvas.width = source.width * scale;
        canvas.height = source.height * scale;

        var context = canvas.getContext('2d');

        context.drawImage(
            source,
            0,
            0,
            source.width,
            source.height,
            0,
            0,
            canvas.width,
            canvas.height
        );

        callback(null, canvas.toDataURL());
    });

    source.src = dataUri;
};