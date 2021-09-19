var cb = 0;
setInterval(function() {
    document.getElementsByTagName("main")[0].style.backgroundImage = "url(https://picsum.photos/700/700/?random&cb=" + (++cb) + ")";
}, 9000)