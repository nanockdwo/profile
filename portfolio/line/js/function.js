// 헤더부분
// 헤더 햄버거버튼 메뉴 부분
$(function () {
  var $ham = $("header>.nav>.mnu>a");
  var $aside_mnu = $("header>aside");

  // 햄버거버튼 클릭 이벤트
  $ham.on("click", function (evt) {
    evt.preventDefault();

    // 햄버거버튼 클릭하면 mnu에 on 활성화/비활성화
    $(this).parent().toggleClass("on");

    // 햄버거 버튼 클릭하면 숨겨져 있던 메뉴 활성화/비활성화
    $aside_mnu.toggle();
  });
});
// 헤더끝

// 섹션 부분
// 슬라이드
$(function () {
  var $slide = $("section>.slide>.slide-container>.slides>li");
  var $indicator = $("section>.slide>.slide-container>.indicator>li>a");
  var nowIdx = 0;

  // 자동실행
  setInterval(function () {
    slideMove();//슬라이드 이동 함수
    nextIdx();//다음 이미지 인덱스 함수
  }, 2000);
  // 슬라이드 이동 함수
  function slideMove() {
    $indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
    $slide.filter(".on").stop().fadeOut(1000).removeClass("on");
    $slide.eq(nowIdx).stop().fadeIn(1000).addClass("on");
  }
  // 다음 이미지의 인덱스 함수
  function nextIdx() {
    if (nowIdx < 3) {
      nowIdx++;
    } else {
      nowIdx = 0;
    }
  }
  // 인디케이터 클릭이벤트
  $indicator.on("click", function (evt) {
    evt.preventDefault();
    //인디케이터의 현재 인덱스
    nowIdx = $indicator.index(this);
    //슬라이드이동함수
    slideMove();
  });
});

// 슬라이드 끝





// 푸터 언어 부분
$(function () {
  var $length = $("footer>.length>a");
  var $lengthBox = $("footer>.length>.lengbox");

  // 언어 부분(한국어) 클릭 이벤트
  $length.on("click", function (evt) {
    evt.preventDefault();

    // 서브메뉴 활성화/비활성화
    $lengthBox.toggle();
  });
  $("footer>.length>.lengbox>ul>li>a").on("click", function (evt) {
    evt.preventDefault();
  });
});
