/*! ANIME.js v1.0 | MIT license (c) 2016 Alex Zappa a.k.a. re[at]lat | http://anime.reatlat.net/ */
!function(i){i(".anime").each(function(){var a=i(this),n={visibility:"hidden","animation-name":"none"};a.css(n)}),i(document).ready(function(){"use strict";i(".anime").appear(),i(window).scrollTop(i(window).scrollTop()+1),i(".anime").on("appear",function(){var a=i(this),n=a.data("anime-duration")||"1.5s",t=a.data("anime-delay")||"0s",e={visibility:"visible","animation-name":"","animation-delay":t,"-webkit-animation-delay":t,"animation-duration":n,"-webkit-animation-duration":n};"hidden"===a.css("visibility")&&a.addClass("animated").css(e)})})}(jQuery);