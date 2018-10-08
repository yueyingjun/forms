window.onload = function () {
// $(".lunbo_picture img")
//     轮播图
    let lunbo_pic_big = document.querySelector(".lunbo_pic_big")
    let lunbo_img = lunbo_pic_big.querySelectorAll(".lunbo_picture")
    // console.log(lunbo_img)

    let now = 0;
    let next = 0;
    let widths = 1349;
    let fn = function () {
        next++;
        if (next == lunbo_img.length) {
            next = 0;
        }
        lunbo_img[next].style.left = widths + "px";
        animate(lunbo_img[now], {left: -widths});
        animate(lunbo_img[next], {left: 0});

        // yuanniu[next].classList.add("hot");
        // yuanniu[now].classList.remove("hot")
        now = next;

    }
    let t = setInterval(fn, 2500);
    lunbo_pic_big.onmouseenter = function () {
        clearInterval(t);
    }
    lunbo_pic_big.onmouseleave = function () {
        t = setInterval(fn, 2500);

    }

    // 固定top
    let guding_top = document.querySelector(".guding_top")
    let daohang2 = document.querySelector(".daohang2")
    let lou_li = daohang2.querySelectorAll("li")
    console.log(lou_li)
    window.onscroll = function () {

        let roll = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(roll)
        // console.log(roll)
        if (roll > 810) {
            guding_top.style.display = "block"
        } else {
            guding_top.style.display = "none"
        }

        for (let i = 1; i < lou_li.length - 1; i++) {
            if (roll > arr[0] - 400 && roll < arr[1] - 400) {
                lou_li[1].style.backgroundColor = "skyblue"
            } else {
                lou_li[1].style.backgroundColor = "#626262"

            }
            if (roll > arr[1] - 400 && roll < arr[2] - 400) {
                lou_li[2].style.backgroundColor = "skyblue"
            } else {
                lou_li[2].style.backgroundColor = "#626262"

            }
            if (roll > arr[2] - 400 && roll < arr[3] - 400) {
                lou_li[3].style.backgroundColor = "skyblue"
            } else {
                lou_li[3].style.backgroundColor = "#626262"

            }
            if (roll > arr[3] - 400 && roll < arr[4] - 400) {
                lou_li[4].style.backgroundColor = "skyblue"
            } else {
                lou_li[4].style.backgroundColor = "#626262"

            }
            if (roll > arr[4] - 400 && roll < arr[5] - 400) {
                lou_li[5].style.backgroundColor = "skyblue"
            } else {
                lou_li[5].style.backgroundColor = "#626262"

            }
            if (roll > arr[5] - 400 && roll < arr[6] - 400) {
                lou_li[6].style.backgroundColor = "skyblue"
            } else {
                lou_li[6].style.backgroundColor = "#626262"

            }
            if (roll > arr[6] - 400 && roll < arr[7] - 400) {
                lou_li[7].style.backgroundColor = "skyblue"
            } else {
                lou_li[7].style.backgroundColor = "#626262"

            }
            if (roll > arr[7] - 400 && roll < arr[8] - 400) {
                lou_li[8].style.backgroundColor = "skyblue"
            } else {
                lou_li[8].style.backgroundColor = "#626262"

            }


        }
        roll >= 820 ? $(".daohang2").css("display", "block") : $(".daohang2").css("display", "none")

    }

    // 楼层
    // for (let i = 1; i < lou_li.length - 1; i++) {
    //     lou_li[i].onclick = function () {
    //         if
    //
    //     }
    // }
    let arr = $(".surpermarket").map(function () {
        let num = $(this).offset().top;
        return num;
    });

    let tianjai1 = $(".cainixihuan_title").offset().top
    let tianjia2 = $(".end").offset().top
    arr.push(tianjai1)
    arr.push(tianjia2)

    // console.log(arr)
    console.log($(".daohang2 .loucengkongzhi"))
    $(".daohang2 .loucengkongzhi").click(function () {
        let index = $(this).index() - 1
        // console.log(index)
        flag = false
        $("html")
            .stop()
            .animate({scrollTop: arr[index] - 100}, function () {
                flag = true
            })
        $(".daohang2 .loucengkongzhi")
            .removeClass("active")
            .eq(index)
            .addClass("active")
    })
    $(".dao_zhiding").click(function () {
        $("html").stop().animate({scrollTop: 0}, function () {
            flag = true
        })
    })


    $(".cedaohang li").mouseenter(function () {
        $(this).css("backgroundColor", "white");
        $(this).children(".iconfont").css("color", "red");
        $(this).children("span").css("color", "red");
        $(this).children(".cedao_more").css("display", "block");
    })
    $(".cedaohang li").mouseleave(function () {
        $(this).css("backgroundColor", "rgba(0,0,0,0)")
        $(this).children(".iconfont").css("color", "white")
        $(this).children("span").css("color", "white")
        $(this).children(".cedao_more").css("display", "none")

    })
    $(".super_2").mouseenter(function () {
        $(this).css("border", "1px solid red")
    })
    $(".super_2").mouseleave(function () {
        $(this).css("border", "1px solid white")
    })
// console.log($(".super_2"))
    // console.log($("cedaohang li .iconfont"))
    //品牌
    $(".pinpai1").mouseenter(function () {
        $(this).children(".pinpai_top").css("display","block")
    })
    $(".pinpai1").mouseleave(function () {
        $(this).children(".pinpai_top").css("display","none")
    })

    //疯狂抢购
    $(".super_xuanze li").click(function () {
        $(".super_xuanze li").css({color:'black',backgroundColor:"white"})
        $(this).css({color:'white',backgroundColor:"green"})
        let index=$(this).index()
        $(".carzy_bottom").css("display","none")

        $(".carzy_bottom").eq(index).css("display","block")
    })




}


