<!--动态浏览器标签-->
var OriginTitle = document.title;
var titleTime;
var titleTime2;
var titleTime3;
var blankTitle = "\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000"
blankTitle = blankTitle + blankTitle + blankTitle;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/favicon-32x32-next.png");
        // 失去焦点时不切换标题
        // document.title = "Waiting...";
        document.title = OriginTitle;
        clearTimeout(titleTime);
        clearTimeout(titleTime2);
        clearTimeout(titleTime3);
    }
    else {
        document.title = "Welcome";
        titleTime = setTimeout(function () {
            document.title = "Back";
            titleTime2 = setTimeout(function () {
                document.title = "Welcome Back !";
                titleTime3 = setTimeout(function () {
                    document.title = OriginTitle;
                }, 800);
            }, 500);
        }, 500);
    }
});
