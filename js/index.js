{//topbar leftbar
    $(window).scroll(function () {
        let st = $(window).scrollTop();
        if (st > 700) {
            $(".topbar").show();
        } else {
            $(".topbar").hide();
        }
        if (st > 500) {
            $(".leftbar").show();
        } else {
            $(".leftbar").hide();
        }
    });
    let arr2 = ["#64C333", "#FF0036", "#EA5F8D", "#0AA6E8", "#64C333", "#F15453", "#19C8A9", "#FF0036"];
    $(".leftbar_list").click(function () {
        let index = $(this).index();
        let ot = $(".content3").eq(index).offset().top - 100;
        $("html,body").animate({scrollTop: ot}, 200);
        $(".leftbar_list").mouseleave(function () {
            $(".leftbar_list").css("background", "rgba(0,0,0,0.6)").eq(index).css("background", arr2[index]);
        })
    })
    $(window).scroll(function () {
        let st = $(window).scrollTop();
        $(".content3").each(function (index, ele) {
            if (st > $(".content3").eq(index).offset().top - 200) {
                $(".leftbar_list").css("background", "rgba(0,0,0,0.6)").eq(index).css("background", arr2[index]);
            }
        })
    });
    $(".leftbar_list").mouseenter(function () {
        let index = $(this).index();
        $(".leftbar_list").eq(index).css("background", arr2[index]);
    })
    $(".leftbar_list").mouseleave(function () {
        let index = $(this).index();
        $(".leftbar_list").eq(index).css("background", "rgba(0,0,0,0.6)");
    })
    $(".leftbar_top").click(function () {
        $("html,body").animate({scrollTop: 0});
    })
}
{//today
    let n = 0;
    $(".floor-tab-head li").mouseenter(function () {
        let index = $(".floor-tab-head li").index(this);
        $(".floor-tab-head li").removeClass("move").eq(index).addClass("move");
        $(".floor-tab-detail").removeClass("active").eq(index).addClass("active");
        n = index;
    })

    function move() {
        n++;
        if (n == 2) {
            n = 0;
        }
        $(".floor-tab-head li").addClass("move").eq(n).removeClass("move");
        $(".floor-tab-detail").addClass("active").eq(n).removeClass("active");
    }

    let t = setInterval(move, 2000);
    $(".floor-tab-detail").mouseenter(function () {
        clearInterval(t);
    })
    $(".floor-tab-detail").mouseleave(function () {
        t = setInterval(move, 2000);
    })
}
{
// banner
    let m = 0;
    let arr = ["#15103C", "#E8E8E8", "#FCD3D7", "#E7E7E7", "#EF3C5F", "#693FED"];
    $(".banner_pagers li").mouseenter(function () {
        let index = $(".banner_pagers li").index(this);
        $(".banner_img").css("background", arr[index]);
        $(".imgs").removeClass("move").eq(index).addClass("move")
        $(".banner_pagers li").addClass("active").eq(index).removeClass("active")
        m = index;
    })

    function move() {
        m++;
        if (m === 6) {
            m = 0;
        }
        $(".imgs").removeClass("move").eq(m).addClass("move")
        $(".banner_img").css("background", arr[m]);
        $(".banner_pagers li").addClass("active").eq(m).removeClass("active")
    }

    let t = setInterval(move, 2000);
    $(".banner_picture").mouseenter(function () {
        clearInterval(t);
    })
    $(".banner_picture").mouseleave(function () {
        t = setInterval(move, 2000);
    })
}
{//bannerlist
    let arr1=["#e54077","#427def","#6347ed","#e54077","#6347ed","#427def","#fa5c5c","#f7a831","#f7a831","#427def","#427def","#fa5c5c","#f7a831","#e54077","#427def","#6347ed"];
    $(".banner_li").mouseenter(function(){
        let index=$(".banner_li").index(this);
        $(this).css({"color":arr1[index]});
        $(".banner_bar").css({"display":"none"});
        $(".banner_bar").eq(index).css({"display":"block"});
    });
    $(".banner_li").mouseleave(function(){
        $(".banner_bar").css({"display":"none"});
        $(this).css({"color":"#fff"});
    })
}
{
    $(".header_right_list")
        .mouseenter(function () {
            let index = $(this).index(".header_right_list");
            $(".menu").eq(index).show();
        })
        .mouseleave(function () {
            let index = $(this).index(".header_right_list");
            $(".menu").eq(index).hide();
        })
}
{
    $(".icon").mouseenter(function () {
        let index = $(this).index(".icon");
        $(".mui-mbar-tab-tip").eq(index)
            .fadeIn()
            .css("opacity", "1")
            .css("display", "block")
            .css("right","35px")
    })
    $(".icon").mouseleave(function () {
        let index = $(this).index(".icon");
        $(".mui-mbar-tab-tip").eq(index)
            .fadeOut()
            .css("opacity", "0")
            .css("display", "none")
            .css("right","70px")
    })
    $(".rightbar_top").click(function () {
        $("html,body").animate({scrollTop: 0});
    })
}
{
    $(".content1_item1,.content1_item2,.content3_bottom_left,.content3_bottom_left2,.floor-tab-detail,.content3_right_list2").mouseenter(function(){
        $(this).prepend(function(index,val){
            return "<div class='like_cover'></div>";
        })
    })
    $(".content1_item1,.content1_item2,.content3_bottom_left,.content3_bottom_left2,.floor-tab-detail,.content3_right_list2").mouseleave(function(){
        $(this).find("div").remove(".like_cover");
    })
}
{
    $(".change").mouseenter(function () {
        $(".change em").animate("transform","360deg")
    })
}