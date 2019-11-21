// 스크롤
$(function () {

  var $mnu = $(".gnb a");
  var mnuIdx = 0

  $mnu.eq(mnuIdx).parent().addClass("on");


  var arrTopVal = [];

  $(".cont").each(function (idx) {
    arrTopVal[idx] = $(this).offset().top - 150;

  });

  function pageAni(topVal) {
    $("html,body").stop().animate({
      scrollTop: topVal
    });
  }
  $mnu.on("click", function (evt) {
    evt.preventDefault();
    mnuIdx = $mnu.index(this);
    $mnu.eq(mnuIdx).parent().addClass("on").siblings().removeClass("on");
    pageAni(arrTopVal[mnuIdx]);
  });


  $(window).on("load", function () {
    pageAni(arrTopVal[mnuIdx]);
  });

  $(window).on("scroll", function () {

    var scrollTop = $(window).scrollTop();

    for (var i = 0; i < 5; i++) {
      if (scrollTop >= arrTopVal[i]) {
        $mnu.eq(i).parent().addClass("on").siblings().removeClass("on");
      }
    }

  });
});
// -------------------------------------------------------------
// 포트폴리오
$(function () {

  var $portfolio = $("section>.container>.portfolio>.pofol_container>.pofol_gnb>li>a");
  var nowIdx = 0;
  var $gnba = $("section>.container>.portfolio>.pofol_container>.pofol_gnb>li:nth-child(1)>.sub>ol>li:nth-child(4)");
  var $gnbb = $("section>.container>.portfolio>.pofol_container>.pofol_gnb>li:nth-child(2)>.sub>ol>li:nth-child(4)");
  var $gnbc = $("section>.container>.portfolio>.pofol_container>.pofol_gnb>li:nth-child(3)>.sub>ol>li:nth-child(4)");
  var $gnbd = $("section>.container>.portfolio>.pofol_container>.pofol_gnb>li:nth-child(4)>.sub>ol>li:nth-child(4)");



  $portfolio.on("click", function (evt) {
    evt.preventDefault();
    nowIdx = $portfolio.index(this);
    $portfolio.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");

    $(".sub").hide().eq(nowIdx).show();


  });

  $gnba.on("click", function (evt) {
    evt.preventDefault();
    $(".morepage01").fadeIn();
  });
  // $gnbb.on("click", function (evt) {
  //   evt.preventDefault();
  //   $(".morepage02").fadeIn();
  // });
  $gnbc.on("click", function (evt) {
    evt.preventDefault();
    $(".morepage03").fadeIn();
  });
  // $gnbc.on("click", function (evt) {
  //   evt.preventDefault();
  //   $(".morepage04").fadeIn();
  // });

  $(document).keyup(function (evt) {
    if (evt.which == 27) { $(".morepage").hide(); };
  });
  $(".close").on("click", function () {
    $(".morepage").hide();
  });
  // $(".more_cont").on("click", function () {
  //   $(".morepage").hide();
  // });
  // $(".morepage").on("click", function () {
  //   $(".morepage").hide();
  // });




});
// --------------------------------------------------------------
// 스킬
$(function () {
  // inview 이벤트는 화면에 선택요소가 나타난 시점에 작동
  $(".skill").on("inview", function (evt, visible) {
    // console.log("inview 이벤트 작둉완료");
    // console.log("visible=", visible);
    if (visible) {
      $(".skill .bar").each(function () {
        // $(this).css({
        //   width: $(this).children("span").text()
        // });
        $(this).css({
          width: $(this).parent().attr("data-bar") + "%"
        });
      });
    };
  });

  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop < $(".skill").offset().top - $(window).height()) {

      $(".skill .bar").width(0);
    }
    // console.log(scrollTop);
  });
});
  // --------------------------------------------------------------







