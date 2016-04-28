import $ from 'jquery';
import 'bootstrap';
import Swiper from 'swiper';

$(document).ready(() => {

  var brandCircleWrap = $('.brand-circle-wrap');

  var carousels = [
    [
      {
        "src": "src/images/philips.new.png",
        "text": "Philips"
      },
      {
        "src": "src/images/raspberry-pi.svg",
        "text": "Raspberry Pi"
      },
      {
        "src": "src/images/nest_thermostat_logo.new.png",
        "text": "Nest"
      }
    ],
    [
      {
        "src": "src/images/best-buy.svg",
        "text": "Best Buy"
      },
      {
        "src": "src/images/Yelp.svg",
        "text": "Yelp"
      },
      {
        "src": "src/images/Spotify.png",
        "text": "Spotify"
      },
      {
        "src": "src/images/uber.new.png",
        "text": "Uber"
      }
    ],
    [
      {
        "src": "src/images/twilio.svg",
        "text": "Twilio"
      },
      {
        "src": "src/images/AmazonEcho.new.png",
        "text": "Amazon Echo"
      },
      {
        "src": "src/images/Facebook.svg",
        "text": "Facebook Messenger"
      },
      {
        "src": "src/images/slack.svg",
        "text": "Slack"
      }
    ]

  ];

  //initial carousel
  toggleCarousel(0);

  function toggleCarousel(index) {
    cleanItems();
    parseCarousel(carousels[index]);
  }

  function parseCarousel(array) {
    var length = array.length, i = 0;

    if(length > 3) {
      $('.brand-circle-wrap').addClass('doubled');
    }

    for (i; i < length; i++) {
      var src = array[i].src;
      var text = array[i].text;

      var circleItem = $('<div/>', {
        class: 'circle-block circle-block-md ' + 'circle-'+ i,
        'data-text': text
      }).appendTo(brandCircleWrap);

      $('<img>', {
        class: 'img-fluid',
        alt: 'circle-img',
        src: src
      }).appendTo(circleItem);
    }
  }

  function cleanItems() {
    $('.circle-block-md').remove();
    brandCircleWrap.removeClass('doubled');
  }

  var mySwiper = new Swiper('.swiper-container', {
    simulateTouch: false,
    autoplay: 2000,
    onSlideChangeEnd: function (swiper) {
      //var swiperPage = mySwiper.activeIndex;
      toggleActive(swiper.activeIndex);
      toggleCarousel(swiper.activeIndex);
    }
  });

  $('.carousel-control-item').click(function (e) {
    e.preventDefault();
    var index = $(this).attr('data-target');
    toggleActive(index);
    mySwiper.slideTo(index, 200, function () {
    });
  });

  $('.carousel-next-btn').click(function (e) {
    e.preventDefault();
    mySwiper.slideNext(function (e) {
      console.log(e);
    }, 200);
  });

  $('.carousel-prev-btn').click(function (e) {
    e.preventDefault();
    mySwiper.slidePrev(function () {

    }, 200);
  });



  var controlsList = $('.controls-list');

  function toggleActive(index) {
    controlsList.find('a').removeClass('active');
    controlsList.find('.carousel-control-item').eq(index).addClass('active');
  }


});
