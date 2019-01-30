//初始化fallpage插件
//设置每一屏背景颜色
$(function(){
    $('#dowebok').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        navigation:true,
        verticalCentered:false,
        afterLoad:function(link,index){
            /*序号index，当前屏的序号*/
            $('.section').eq(index-1).addClass('now');
        },
        afterRender:function(){
            $('.more').on('click',function(){
                $.fn.fullpage.moveSectionDown();
            });
            $('.screen04 .cart').on('transitionend',function(){
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            })
            // $('.screen07 .star img').on('transitionend',function(){
            //     $('.screen07 .good').show();
            // })
        //    第八屏功能，手跟着鼠标，再来一次，跳到第一页
            $('.screen08').on('mousemove',function(e){
                $(this).find('.hand').css({
                    left:e.clientX-190,
                    top:e.clientY-10
                });
            }).find('.again').on('click',function(){
                /*重置动画*/
                //加类now leaved show
                $('.now').removeClass('now');
                $('.leaved').removeClass('leaved')
                $('.show').removeClass('show')
                //加css属性
                $('.content[style]').removeAttr('style');
                // jquery方法show faden（）
                /*回到第一页*/
                $.fn.fullpage.moveTo(1);
            })

        },
        onLeave:function(index,nextIndex,direction){
            if(index==2&&nextIndex==3){
                $('.section').eq(index-1).addClass('leaved');
            } else if(index==3&&nextIndex==4){
                $('.section').eq(index-1).addClass('leaved');
            }else if(index==5&&nextIndex==6){
                $('.section').eq(index-1).addClass('leaved');
            }else if(index==6&&nextIndex==7){
                $('.screen07 .star img').each(function(i,items){
                    $(this).delay(i*0.3*1000).fadeIn();
                });
            }

        },
        scrollingSpeed:1000,
    });
});