$(function () {

    //点击判断有无该类名，添加或者删除类名
    $('.navbar-toggler').click(function () {
        // if(this.className.includes('on')){
        //     this.classList.remove('on')
        // }else{
        //     this.classList.add('on')
        // }
        if($(this).hasClass('on')){
            $(this).removeClass('on')
        }else{
            $(this).addClass('on')
        }

    });

    //移入移出
    $('.login').hover(function () {
        $(this).addClass('active')

    },function () {
        $(this).removeClass('active')
    });

    $('.modal-close').click(function () {
        $('.modal').modal('hide')
    })

    let headerHeight = $('.header-top').height() + $('.header-middle').height() //拿到多余部分的高度
    $(window).scroll(function () {    //监听滚动
        //拿到滚动的距离，兼容写法
        let offsetY = $('body').scrollTop() +  $('html').scrollTop()
        if(offsetY >= headerHeight){
            //hide隐藏 JQ写法
            //由于bt的media比JQ显示隐藏屌，所以hide搞不了。
            //利用都是隐藏只有在大屏显示特点，删除或添加类名起到显示或隐藏
            $('.header-top').removeClass('d-xl-block');
            $('.header-middle').hide();
        }else{
            $('.header-top').addClass('d-xl-block');
            $('.header-middle').show();
        }
    })


})




