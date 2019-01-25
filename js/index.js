window.onload = function() {
        headerOpacity();
        timeDown();
        slide();
    }
    // 头部透明度模块
function headerOpacity() {
    var header = document.getElementById('header');
    var slide = document.getElementById('slide');
    window.onscroll = function() {

        var scrollOut = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(scrollOut); 
        //计算透明度
        var opacity = scrollOut / slide.offsetHeight;
        header.style.background = 'rgba(222, 24, 27, ' + opacity + ')';

    }
}

// 倒计时效果
function timeDown() {
    var spanList = document.querySelectorAll('.skill-time> span');
    var total = 3700;
    var timeId = setInterval(function() {
        total--;
        // 计算十分秒的时间
        var hour = Math.floor(total / 3600);
        var minute = Math.floor(total / 3600 % 60);
        var second = total % 60;
        //console.log(hour, minute, second);

        // 给页面的span元素赋值
        spanList[0].innerHTML = Math.floor(hour / 10);
        spanList[1].innerHTML = hour % 10;
        spanList[3].innerHTML = Math.floor(minute / 10);
        spanList[4].innerHTML = minute % 10;
        spanList[6].innerHTML = Math.floor(second / 10);
        spanList[7].innerHTML = second % 10
        if (total == 0) {
            clearInterval(timeId)
        }

    }, 1000);


}

// 轮播图模块
function slide() {
    var mySwiper = new Swiper('.swiper-container', {

        loop: true, // 循环模式选项
        autoplay: {
            autoplay: true,
            delay: 1000,
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })
}