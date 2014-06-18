(function(window, document) {
    //利用canvas元素制作自定义icon
    var cxt = document.getElementById("icon").getContext("2d");
    //生成渐变背景
    var colorGradient = cxt.createLinearGradient(0,0,180,0);
    colorGradient.addColorStop(0, "#052538");
    colorGradient.addColorStop(0.5, "#0e3a68");
    colorGradient.addColorStop(1, "#052538");
    cxt.fillStyle = colorGradient;
    cxt.fillRect(0, 0, 180, 180);
    cxt.beginPath();
    //设置阴影参数
    cxt.shadowColor   = "rgba(0, 0, 0, 0.5)";
    cxt.shadowBlur    = 4;
    cxt.shadowOffsetX = 5;
    cxt.shadowOffsetY = 5;
    //生成文字
    cxt.fillStyle    = "#eee";
    cxt.font         = "bold 120px Gotham";
    cxt.textAlign    = "center";
    cxt.textBaseline = "middle";
    cxt.fillText("FD", 90, 90);
})(window, document);
