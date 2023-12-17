var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // console.log('click');

  // .hamburger-menuの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // console.log('resize');

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});


//Swiper"というクラスを持つ要素。これにより、Swiperは指定した要素内でスライドショーを作成します。
var swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,

  //スライド間の余白を指定
  spaceBetween: 58,

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 80,

      //中央に配置する設定
      centeredSlides: true,
    },
  },
  pagination: {
    // ページネーション要素を指定
    el: '.swiper-pagination',
    // ページネーションのタイプを分数形式に設定
    type: 'fraction',
    // 現在のスライド番号の表示形式をカスタマイズする関数（０を追加）
    formatFractionCurrent: function (n) {
      return '0' + n;
    },
    // 総スライド数の表示形式をカスタマイズする関数
    formatFractionTotal: function (n) {
      return '0' + n;
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$('.animate__animated').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeOutUpを削除して
       * fadeInUpアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)

        .addClass('animate__fadeInUp');
    }
     {

    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});


$(function () {
  $('.ac-label').click(function () {
    $(this).next('div').slideToggle();
    $(this).find(".icon").toggleClass('open');
  });
});

$(".accordion_title").on("click", function (e) {
  $(e.currentTarget).toggleClass("open");
  $(e.currentTarget).next().slideToggle();
  setTimeout(function () {
    Waypoint.refreshAll();
  }, 500);
});
$(".accordion_title").removeClass("open");
$(".accordion_title").next().hide();