$('.open-overlay').click(function() {
  var overlay_navigation = $('.overlay-navigation'),
    nav_item_1 = $('nav li:nth-of-type(1)'),
    nav_item_2 = $('nav li:nth-of-type(2)'),
    nav_item_3 = $('nav li:nth-of-type(3)'),
    nav_item_4 = $('nav li:nth-of-type(4)'),
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom');

  overlay_navigation.toggleClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {

    top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
    middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
    bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
    nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
    nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
    nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
    nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
    
  } else {
    top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
    middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
    bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
    nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
    nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
    nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
    nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
  }
})
document.addEventListener("DOMContentLoaded", function() {
  "use strict"
  var style = ""
    + "<style>" + ".filter .hidden {" + "opacity: 0;" + "}" + 
      ".filter > * {" + "position: absolute;" + 
      "transition: .6s ease-in-out;"  +  "}" + "</style>";
  document.head.insertAdjacentHTML("beforeend", style);
  
  var list = document.querySelectorAll(".filter > *");
  var h = list[0].offsetHeight, arr = [], i = -1, l = list.length;
  var anim = "transform" in document.body.style ? "transform" : "webkitTransform";
  
  while (++i < l) {
    arr.push(list[i].textContent.trim());
    list[i].style[anim] = "translateY("  +"px)";
  }
  
    document.querySelector("input.filter").addEventListener("input", function() {
      var rgx = new RegExp(this.value, "i");
          arr.forEach(function(el, idx) {
            if (rgx.test(el)) list[idx].classList.remove("hidden");
            else list[idx].classList.add("hidden");
            var i = -1;
            var p = 0;
            while (++i < l) {
              if (list[i].className != "hidden")
                list[i].style[anim] = "translateY(" +"px)";
            }
        })
    })
})

  
