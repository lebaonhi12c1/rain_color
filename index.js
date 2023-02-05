$(document).ready(function () {
    $('#root').html(
        Array(200).fill().map(()=>{
            return `<div class="rain"></div>`
        })
    );
    $('.rain').each(function (index, element) {
        var pos = Math.floor(Math.random() * window.innerWidth)
        var width = Math.floor(Math.random()*10+1)
        var duration = Math.floor(Math.random()*8+2)
        var delay = Math.floor(Math.random()*5+1)
        var number1 =  Math.floor(Math.random()*255)
        var number2 =  Math.floor(Math.random()*255)
        var number3 =  Math.floor(Math.random()*255)
        console.log(pos)
        $(element).css({
            'left': `${pos}px`,
            'background': `linear-gradient(transparent,rgb(${number1},${number2},${number3})`,
            'animation-delay': `${delay}s`,
            'animation-duration': `${duration}s`,
            'width': `${width}px`
        });
    });
});