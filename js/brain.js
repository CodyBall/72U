var brainCanvas = document.getElementById("brainCanvas");
var ctx = brainCanvas.getContext('2d'),
    img = new Image();

/// we need to wait for the image to actually load:
img.onload = function() {

    /// image is loaded and we can raw it onto canvas
    ctx.drawImage(this, 0, 0);
    
    /// enable mouse click
    brainCanvas.onclick = function(e) {
        
        /// adjust mouse position to be relative to canvas
        var rect = brainCanvas.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        
        /// grab a pixel
        var data = ctx.getImageData(x, y, 1, 1).data;
        
        /// check it's alpha value to see if we're in a map point
        /// this of course assumes the map has transparent areas.
        /// if not just check for the color values instead.
        if (data[3] > 0) {
            alert('Land ahoy!');
        }
    };
};

/// get an image from a domain that allow cross-origin (or from the same server as the page)
img.src = 'Pictures/PS-new\ american\ dream.png ';
