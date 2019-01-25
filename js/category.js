window.onload = function() {
    // 左边分类
    // 初始化swiper
    var mySwiper = new Swiper('.left .swiper-container', {
        direction: 'vertical', // 垂直切换选项
        // loop: true, // 循环模式选项
        // 可以支持多张轮播图显示 属性一定要加 内容滚动的距离如果不加无法计算
        slidesPerView: 'auto',
        // 是否添加滑动的惯性
        freeMode: true,
    })

    //右边分类
    // 初始化swiper
    var mySwiper = new Swiper('.right .swiper-container', {
        direction: 'vertical', // 垂直切换选项
        // loop: true, // 循环模式选项
        // 可以支持多张轮播图显示 属性一定要加 内容滚动的距离如果不加无法计算
        slidesPerView: 'auto',
        // 是否添加滑动的惯性
        freeMode: true,
    })

    // 实现单击吸顶
    //1.获取left的高度
    var left = document.querySelector('.left');
    var leftHeight = left.offsetHeight;

    //2.获取left中ul的高度
    var left_ul = document.querySelector('ul');
    var ulHeight = left_ul.offsetHeight;
    //console.log(ulHeight);


    // 3.获取left ul 中一个li的高度
    var liList = left_ul.querySelectorAll('li')
    var liHeight = liList[0].offsetHeight;
    //console.log(liHeight);

    //4.获取左边真正需要偏移的元素
    var swiper_wrapper = document.querySelector('.left .swiper-wrapper');
    //4.1 计算出需要的偏移的最大距离
    scrollMaxHeight = leftHeight - ulHeight;
    // 4.2 计算出当前li元素偏移出去的距离
    var scrollHeight;
    for (let i = 0; i < liList.length; i++) {
        liList[i].onclick = function() {
            //console.log(i);
            scrollHeight = -(i * liHeight);
            //console.log(scroolHeight);

            //4.3判断 偏移的距离都是负数,这里就用小于号
            if (scrollHeight < scrollMaxHeight) {
                scrollHeight = scrollMaxHeight;
            }
            //4.4偏移
            swiper_wrapper.style.transition = 'transform 1s';
            swiper_wrapper.style.transform = 'translateY(' + scrollHeight + 'px)';

            //5.修改当前li元素的样式
            for (var j = 0; j < liList.length; j++) {
                liList[j].classList.remove('active');

            }
            this.classList.add('active');
        }

    }

}