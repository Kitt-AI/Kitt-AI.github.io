import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import Swiper from 'swiper';

$(document).ready(() => {
  const brandCircleWrap = $('.brand-circle-wrap');
  const controlsList = $('.controls-list');
  const carousels = [
    [
      {
        src: require('./images/philips.new.png'),
        text: 'Philips',
      },
      {
        src: require('./images/raspberry-pi.svg'),
        text: 'Raspberry Pi',
      },
      {
        src: require('./images/nest_thermostat_logo.new.png'),
        text: 'Nest',
      },
    ],
    [
      {
        src: require('./images/best-buy.svg'),
        text: 'Best Buy',
      },
      {
        src: require('./images/Yelp.svg'),
        text: 'Yelp',
      },
      {
        src: require('./images/Spotify.png'),
        text: 'Spotify',
      },
      {
        src: require('./images/uber.new.png'),
        text: 'Uber',
      },
    ],
    [
      {
        src: require('./images/twilio.svg'),
        text: 'Twilio',
      },
      {
        src: require('./images/AmazonEcho.new.png'),
        text: 'Amazon Echo',
      },
      {
        src: require('./images/Facebook.svg'),
        text: 'Facebook Messenger',
      },
      {
        src: require('./images/slack.svg'),
        text: 'Slack',
      },
    ],
  ];

  const cleanItems = () => {
    $('.circle-block-md').remove();
    brandCircleWrap.removeClass('doubled');
  };

  const parseCarousel = (array) => {
    if (array.length > 3) {
      $('.brand-circle-wrap').addClass('doubled');
    }

    array.forEach((item, index) => {
      const circleItem = $('<div/>', {
        class: `circle-block circle-block-md circle-${index}`,
        'data-text': item.text,
      }).appendTo(brandCircleWrap);

      $('<img>', {
        class: 'img-fluid',
        alt: 'circle-img',
        src: item.src,
      }).appendTo(circleItem);
    });
  };

  const toggleCarousel = (index) => {
    cleanItems();
    parseCarousel(carousels[index]);
  };

  const toggleActive = (index) => {
    controlsList.find('a').removeClass('active');
    controlsList.find('.carousel-control-item').eq(index).addClass('active');
  };

  // initial carousel
  toggleCarousel(0);

  const mySwiper = new Swiper('.swiper-container', {
    simulateTouch: false,
    onSlideChangeEnd: (swiper) => {
      toggleActive(swiper.activeIndex);
      toggleCarousel(swiper.activeIndex);
    },
  });

  $('.carousel-control-item').click((e) => {
    e.preventDefault();
    const index = $(e.target).attr('data-target');
    toggleActive(index);
    mySwiper.slideTo(index);
  });

  $('.carousel-next-btn').click((e) => {
    e.preventDefault();
    mySwiper.slideNext();
  });

  $('.carousel-prev-btn').click((e) => {
    e.preventDefault();
    mySwiper.slidePrev();
  });
});

