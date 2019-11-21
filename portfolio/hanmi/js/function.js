// 헤더메뉴
$(function () {
  var $bgSub = $(".bg_sub");
  var $mnu = $(".mnu");
  var $allmnu = $("header>.nav>.nav_container>aside>.allmnu");
  var $allmnu_sub = $("section>.allmnu_sub");
  var $allmnu_bgsub = $(".allmnu_bgsub");
  var $allsMnu = $(".allmnu_sub>ul>li>h2");
  var $allsMnuOl = $(".allmnu_sub>ul>li>ol");

  var allmnuIdx = 0;

  $mnu.on("mouseenter", function () {
    $bgSub.show();
  });
  $mnu.on("mouseleave", function () {
    $bgSub.hide();
  });
  $allmnu.on("click", function () {
    //스크롤시 바디가 움직이는 현상 방지
    // if ($("body").css("overflow") == "scroll") {
    //   $("body").css({ "overflow": "hidden" });
    //   $(".allmnu_sub").css(
    //     {
    //       "overflow": "scroll"
    //     }
    //   );
    // } else {
    //   $("body").css({ "overflow": "scroll" });
    //   $allmnu_sub.css("overflow-y", "hidden");
    // }


    $allmnu_sub.toggle();
    $allmnu_bgsub.toggle();



  });

  $(window).on("load", function () {
    $("body").css({ "overflow-x": "hidden" });
  });

  $(window).on("load, resize", function () {



    if ($(window).width() <= 1040) {
      $allsMnuOl.hide();

    }

    if ($(window).width() > 1041) {
      $allsMnuOl.show();
    }

  });

  $allsMnu.on("click", function () {
    if ($(window).width() < 1040) {
      // 1040px 미만에서 사용할 JavaScript
      allmnuIdx = $allsMnu.index(this);
      $allsMnuOl.eq(allmnuIdx).stop().slideToggle().parent().siblings().children("ol").slideUp();
    }
  });

  $(window).on("resize", function () {
    console.log($(window).width());
  });




});





//메인 슬라이드

$(function () {
  var $slide = $("section>.main>.video-container>.slide>li");
  var slideIdx = 0;
  var intervalKey;


  function autoPlay() {
    intervalKey = setInterval(function () {
      $slide.filter('.on').stop().fadeOut(1000).removeClass('on');
      $slide.eq(slideIdx).stop().fadeIn(1000).addClass('on');
      if (slideIdx < 2) {
        slideIdx++;
      } else {
        slideIdx = 0;
      }
    }, 3000);
  }
  autoPlay();


});






// 제품슬라이드
$(function () {
  var $btnPrev = $(".btnPrev");
  var $btnNext = $(".btnNext");


  var $container = $("section>.medicine>.medi_box>.medi_slide");
  var nowIdx = 0;


  // //이전버튼에 대한 click 이벤트
  // $btnPrev.on("click", function () {

  //   if (nowIdx < 4) {
  //     nowIdx++;
  //   } else {
  //     nowIdx = 0;
  //   }
  //   $container.stop().animate({
  //     left: -520 * nowIdx
  //   }, 1000);
  // });


  // //다음버튼에 대한 click 이벤트
  // $btnNext.on("click", function () {
  //   if (nowIdx > 0) {
  //     nowIdx--;
  //   } else {
  //     nowIdx = 4;
  //   }
  //   $container.stop().animate({
  //     left: -520 * nowIdx
  //   }, 1000);
  // });
  $btnPrev.on("click", function () {
    if ($(window).width() > 1041) {
      $container.stop().animate({
        left: 0
      }, 1000, "easeInOutCubic", function () {
        $container.children("li").eq(5).prependTo($container);
        $container.css("left", -520);
      });
    }
    if ($(window).width() < 1040) {
      $container.stop().animate({
        left: 0
      }, 1000, "easeInOutCubic", function () {
        $container.children("li").eq(5).prependTo($container);
        $container.css("left", -380);
      });
    }
    if ($(window).width() < 640) {
      $container.stop().animate({
        left: 0
      }, 1000, "easeInOutCubic", function () {
        $container.children("li").eq(5).prependTo($container);
        $container.css("left", -640);
      });
    }

  })



  $btnNext.on("click", function () {
    if ($(window).width() > 1041) {
      $container.stop().animate({
        left: -1040
      }, 1000, "easeInOutCubic", function () {
        $container.children("li").eq(0).appendTo($container);
        $container.css("left", -520);
      });
    }
    if ($(window).width() < 1040) {
      $container.stop().animate({
        left: -760
      }, 1000, "easeInOutCubic", function () {
        $container.children("li").eq(0).appendTo($container);
        $container.css("left", -380);
      });
    }
    if ($(window).width() < 640) {
      $container.stop().animate({
        left: -1280
      }, 1000, "easeInOutCubic", function () {
        $container.children("li").eq(0).appendTo($container);
        $container.css({
          left: -640
        });
      });
    }

  });

  $(window).on("load, resize", function () {
    if ($(window).width() > 1041) {
      $container.stop().animate({
        left: -520
      });
    }
    if ($(window).width() < 1040) {
      $container.stop().animate({
        left: -380
      });
    }
    if ($(window).width() < 640) {
      $container.stop().animate({
        left: -640
      });
    }
  })


});

// 게시판뉴스
$(function () {
  var $art = $("section>.article>.article_box>div>h2");
  var nowIdx = 0;
  $art.on("click", function () {
    nowIdx = $art.index(this);
    $(this).addClass("on").parent().siblings().children("h2").removeClass("on");
    $(".art").hide().eq(nowIdx).show();
  });
});



//footer

$(function () {
  var $family = $("footer>.footer_container>.family_container>.family>h2");
  var $famMnu = $("footer>.footer_container>.family_container>.family>ul");
  $family.on("click", function () {
    $(this).toggleClass("on");
    $famMnu.fadeToggle();
  });



});










