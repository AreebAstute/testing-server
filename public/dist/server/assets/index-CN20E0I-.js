import { useIntl } from "react-intl";
import { b as bindModuleMethods, n as now, a as nextTick, g as getTranslate, c as classesToSelector, e as extend, i as isObject, A as Autoplay, N as Navigation, P as Pagination, S as Scrollbar, d as Swiper, V as Virtual, j as jsx, f as jsxs, F as Fragment, O as OUR_SERVICES_HASH_LINK, B as Button, h as getImageALt } from "../entry-server.js";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaArrowCircleRight } from "react-icons/fa";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { BsDot, BsArrowRight } from "react-icons/bs";
import { getDocument, getWindow } from "ssr-window";
import { $ } from "dom7";
import "react-dom/server.js";
import "aos";
import "react-icons/ai";
import "object-assign";
import "@loadable/component";
import "react-icons/bi";
import "react-ga4";
import "react-helmet";
import "react-qr-code";
import "three/examples/jsm/exporters/GLTFExporter.js";
import "formik";
import "axios";
import "yup";
import "react-icons/fi";
import "react-select";
import "react-detect-click-outside";
import "react-icons/md";
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
function _extends$c() {
  _extends$c = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$c.apply(this, arguments);
}
var Keyboard = {
  handle: function handle(event2) {
    var swiper2 = this;
    if (!swiper2.enabled) return;
    var window2 = getWindow();
    var document2 = getDocument();
    var rtl = swiper2.rtlTranslate;
    var e = event2;
    if (e.originalEvent) e = e.originalEvent;
    var kc = e.keyCode || e.charCode;
    var pageUpDown = swiper2.params.keyboard.pageUpDown;
    var isPageUp = pageUpDown && kc === 33;
    var isPageDown = pageUpDown && kc === 34;
    var isArrowLeft = kc === 37;
    var isArrowRight = kc === 39;
    var isArrowUp = kc === 38;
    var isArrowDown = kc === 40;
    if (!swiper2.allowSlideNext && (swiper2.isHorizontal() && isArrowRight || swiper2.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper2.allowSlidePrev && (swiper2.isHorizontal() && isArrowLeft || swiper2.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return void 0;
    }
    if (document2.activeElement && document2.activeElement.nodeName && (document2.activeElement.nodeName.toLowerCase() === "input" || document2.activeElement.nodeName.toLowerCase() === "textarea")) {
      return void 0;
    }
    if (swiper2.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      var inView = false;
      if (swiper2.$el.parents("." + swiper2.params.slideClass).length > 0 && swiper2.$el.parents("." + swiper2.params.slideActiveClass).length === 0) {
        return void 0;
      }
      var $el = swiper2.$el;
      var swiperWidth = $el[0].clientWidth;
      var swiperHeight = $el[0].clientHeight;
      var windowWidth = window2.innerWidth;
      var windowHeight = window2.innerHeight;
      var swiperOffset = swiper2.$el.offset();
      if (rtl) swiperOffset.left -= swiper2.$el[0].scrollLeft;
      var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue;
          inView = true;
        }
      }
      if (!inView) return void 0;
    }
    if (swiper2.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper2.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper2.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper2.slideNext();
      if (isPageUp || isArrowUp) swiper2.slidePrev();
    }
    swiper2.emit("keyPress", kc);
    return void 0;
  },
  enable: function enable() {
    var swiper2 = this;
    var document2 = getDocument();
    if (swiper2.keyboard.enabled) return;
    $(document2).on("keydown", swiper2.keyboard.handle);
    swiper2.keyboard.enabled = true;
  },
  disable: function disable() {
    var swiper2 = this;
    var document2 = getDocument();
    if (!swiper2.keyboard.enabled) return;
    $(document2).off("keydown", swiper2.keyboard.handle);
    swiper2.keyboard.enabled = false;
  }
};
const keyboard = {
  name: "keyboard",
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  },
  create: function create() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      keyboard: _extends$c({
        enabled: false
      }, Keyboard)
    });
  },
  on: {
    init: function init(swiper2) {
      if (swiper2.params.keyboard.enabled) {
        swiper2.keyboard.enable();
      }
    },
    destroy: function destroy(swiper2) {
      if (swiper2.keyboard.enabled) {
        swiper2.keyboard.disable();
      }
    }
  }
};
function isEventSupported() {
  var document2 = getDocument();
  var eventName = "onwheel";
  var isSupported = eventName in document2;
  if (!isSupported) {
    var element = document2.createElement("div");
    element.setAttribute(eventName, "return;");
    isSupported = typeof element[eventName] === "function";
  }
  if (!isSupported && document2.implementation && document2.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document2.implementation.hasFeature("", "") !== true) {
    isSupported = document2.implementation.hasFeature("Events.wheel", "3.0");
  }
  return isSupported;
}
var Mousewheel = {
  lastScrollTime: now(),
  lastEventBeforeSnap: void 0,
  recentWheelEvents: [],
  event: function event() {
    var window2 = getWindow();
    if (window2.navigator.userAgent.indexOf("firefox") > -1) return "DOMMouseScroll";
    return isEventSupported() ? "wheel" : "mousewheel";
  },
  normalize: function normalize(e) {
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;
    var sX = 0;
    var sY = 0;
    var pX = 0;
    var pY = 0;
    if ("detail" in e) {
      sY = e.detail;
    }
    if ("wheelDelta" in e) {
      sY = -e.wheelDelta / 120;
    }
    if ("wheelDeltaY" in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ("wheelDeltaX" in e) {
      sX = -e.wheelDeltaX / 120;
    }
    if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ("deltaY" in e) {
      pY = e.deltaY;
    }
    if ("deltaX" in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  },
  handleMouseEnter: function handleMouseEnter() {
    var swiper2 = this;
    if (!swiper2.enabled) return;
    swiper2.mouseEntered = true;
  },
  handleMouseLeave: function handleMouseLeave() {
    var swiper2 = this;
    if (!swiper2.enabled) return;
    swiper2.mouseEntered = false;
  },
  handle: function handle2(event2) {
    var e = event2;
    var disableParentSwiper = true;
    var swiper2 = this;
    if (!swiper2.enabled) return;
    var params = swiper2.params.mousewheel;
    if (swiper2.params.cssMode) {
      e.preventDefault();
    }
    var target = swiper2.$el;
    if (swiper2.params.mousewheel.eventsTarget !== "container") {
      target = $(swiper2.params.mousewheel.eventsTarget);
    }
    if (!swiper2.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent;
    var delta = 0;
    var rtlFactor = swiper2.rtlTranslate ? -1 : 1;
    var data = Mousewheel.normalize(e);
    if (params.forceToAxis) {
      if (swiper2.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
        else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
      else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;
    var positions = swiper2.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper2.minTranslate()) positions = swiper2.minTranslate();
    if (positions <= swiper2.maxTranslate()) positions = swiper2.maxTranslate();
    disableParentSwiper = swiper2.params.loop ? true : !(positions === swiper2.minTranslate() || positions === swiper2.maxTranslate());
    if (disableParentSwiper && swiper2.params.nested) e.stopPropagation();
    if (!swiper2.params.freeMode) {
      var newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event2
      };
      var recentWheelEvents = swiper2.mousewheel.recentWheelEvents;
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift();
      }
      var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
      recentWheelEvents.push(newEvent);
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          swiper2.mousewheel.animateSlider(newEvent);
        }
      } else {
        swiper2.mousewheel.animateSlider(newEvent);
      }
      if (swiper2.mousewheel.releaseScroll(newEvent)) {
        return true;
      }
    } else {
      var _newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      var lastEventBeforeSnap = swiper2.mousewheel.lastEventBeforeSnap;
      var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        swiper2.mousewheel.lastEventBeforeSnap = void 0;
        if (swiper2.params.loop) {
          swiper2.loopFix();
        }
        var position = swiper2.getTranslate() + delta * params.sensitivity;
        var wasBeginning = swiper2.isBeginning;
        var wasEnd = swiper2.isEnd;
        if (position >= swiper2.minTranslate()) position = swiper2.minTranslate();
        if (position <= swiper2.maxTranslate()) position = swiper2.maxTranslate();
        swiper2.setTransition(0);
        swiper2.setTranslate(position);
        swiper2.updateProgress();
        swiper2.updateActiveIndex();
        swiper2.updateSlidesClasses();
        if (!wasBeginning && swiper2.isBeginning || !wasEnd && swiper2.isEnd) {
          swiper2.updateSlidesClasses();
        }
        if (swiper2.params.freeModeSticky) {
          clearTimeout(swiper2.mousewheel.timeout);
          swiper2.mousewheel.timeout = void 0;
          var _recentWheelEvents = swiper2.mousewheel.recentWheelEvents;
          if (_recentWheelEvents.length >= 15) {
            _recentWheelEvents.shift();
          }
          var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : void 0;
          var firstEvent = _recentWheelEvents[0];
          _recentWheelEvents.push(_newEvent);
          if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
            _recentWheelEvents.splice(0);
          } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
            var snapToThreshold = delta > 0 ? 0.8 : 0.2;
            swiper2.mousewheel.lastEventBeforeSnap = _newEvent;
            _recentWheelEvents.splice(0);
            swiper2.mousewheel.timeout = nextTick(function() {
              swiper2.slideToClosest(swiper2.params.speed, true, void 0, snapToThreshold);
            }, 0);
          }
          if (!swiper2.mousewheel.timeout) {
            swiper2.mousewheel.timeout = nextTick(function() {
              var snapToThreshold2 = 0.5;
              swiper2.mousewheel.lastEventBeforeSnap = _newEvent;
              _recentWheelEvents.splice(0);
              swiper2.slideToClosest(swiper2.params.speed, true, void 0, snapToThreshold2);
            }, 500);
          }
        }
        if (!ignoreWheelEvents) swiper2.emit("scroll", e);
        if (swiper2.params.autoplay && swiper2.params.autoplayDisableOnInteraction) swiper2.autoplay.stop();
        if (position === swiper2.minTranslate() || position === swiper2.maxTranslate()) return true;
      }
    }
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    return false;
  },
  animateSlider: function animateSlider(newEvent) {
    var swiper2 = this;
    var window2 = getWindow();
    if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) {
      return false;
    }
    if (this.params.mousewheel.thresholdTime && now() - swiper2.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) {
      return false;
    }
    if (newEvent.delta >= 6 && now() - swiper2.mousewheel.lastScrollTime < 60) {
      return true;
    }
    if (newEvent.direction < 0) {
      if ((!swiper2.isEnd || swiper2.params.loop) && !swiper2.animating) {
        swiper2.slideNext();
        swiper2.emit("scroll", newEvent.raw);
      }
    } else if ((!swiper2.isBeginning || swiper2.params.loop) && !swiper2.animating) {
      swiper2.slidePrev();
      swiper2.emit("scroll", newEvent.raw);
    }
    swiper2.mousewheel.lastScrollTime = new window2.Date().getTime();
    return false;
  },
  releaseScroll: function releaseScroll(newEvent) {
    var swiper2 = this;
    var params = swiper2.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper2.isEnd && !swiper2.params.loop && params.releaseOnEdges) {
        return true;
      }
    } else if (swiper2.isBeginning && !swiper2.params.loop && params.releaseOnEdges) {
      return true;
    }
    return false;
  },
  enable: function enable2() {
    var swiper2 = this;
    var event2 = Mousewheel.event();
    if (swiper2.params.cssMode) {
      swiper2.wrapperEl.removeEventListener(event2, swiper2.mousewheel.handle);
      return true;
    }
    if (!event2) return false;
    if (swiper2.mousewheel.enabled) return false;
    var target = swiper2.$el;
    if (swiper2.params.mousewheel.eventsTarget !== "container") {
      target = $(swiper2.params.mousewheel.eventsTarget);
    }
    target.on("mouseenter", swiper2.mousewheel.handleMouseEnter);
    target.on("mouseleave", swiper2.mousewheel.handleMouseLeave);
    target.on(event2, swiper2.mousewheel.handle);
    swiper2.mousewheel.enabled = true;
    return true;
  },
  disable: function disable2() {
    var swiper2 = this;
    var event2 = Mousewheel.event();
    if (swiper2.params.cssMode) {
      swiper2.wrapperEl.addEventListener(event2, swiper2.mousewheel.handle);
      return true;
    }
    if (!event2) return false;
    if (!swiper2.mousewheel.enabled) return false;
    var target = swiper2.$el;
    if (swiper2.params.mousewheel.eventsTarget !== "container") {
      target = $(swiper2.params.mousewheel.eventsTarget);
    }
    target.off(event2, swiper2.mousewheel.handle);
    swiper2.mousewheel.enabled = false;
    return true;
  }
};
const mousewheel = {
  name: "mousewheel",
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null
    }
  },
  create: function create2() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      mousewheel: {
        enabled: false,
        lastScrollTime: now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        enable: Mousewheel.enable,
        disable: Mousewheel.disable,
        handle: Mousewheel.handle,
        handleMouseEnter: Mousewheel.handleMouseEnter,
        handleMouseLeave: Mousewheel.handleMouseLeave,
        animateSlider: Mousewheel.animateSlider,
        releaseScroll: Mousewheel.releaseScroll
      }
    });
  },
  on: {
    init: function init2(swiper2) {
      if (!swiper2.params.mousewheel.enabled && swiper2.params.cssMode) {
        swiper2.mousewheel.disable();
      }
      if (swiper2.params.mousewheel.enabled) swiper2.mousewheel.enable();
    },
    destroy: function destroy2(swiper2) {
      if (swiper2.params.cssMode) {
        swiper2.mousewheel.enable();
      }
      if (swiper2.mousewheel.enabled) swiper2.mousewheel.disable();
    }
  }
};
function _extends$b() {
  _extends$b = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$b.apply(this, arguments);
}
var Parallax = {
  setTransform: function setTransform(el, progress) {
    var swiper2 = this;
    var rtl = swiper2.rtl;
    var $el = $(el);
    var rtlFactor = rtl ? -1 : 1;
    var p = $el.attr("data-swiper-parallax") || "0";
    var x = $el.attr("data-swiper-parallax-x");
    var y = $el.attr("data-swiper-parallax-y");
    var scale = $el.attr("data-swiper-parallax-scale");
    var opacity = $el.attr("data-swiper-parallax-opacity");
    if (x || y) {
      x = x || "0";
      y = y || "0";
    } else if (swiper2.isHorizontal()) {
      x = p;
      y = "0";
    } else {
      y = p;
      x = "0";
    }
    if (x.indexOf("%") >= 0) {
      x = parseInt(x, 10) * progress * rtlFactor + "%";
    } else {
      x = x * progress * rtlFactor + "px";
    }
    if (y.indexOf("%") >= 0) {
      y = parseInt(y, 10) * progress + "%";
    } else {
      y = y * progress + "px";
    }
    if (typeof opacity !== "undefined" && opacity !== null) {
      var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }
    if (typeof scale === "undefined" || scale === null) {
      $el.transform("translate3d(" + x + ", " + y + ", 0px)");
    } else {
      var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
    }
  },
  setTranslate: function setTranslate() {
    var swiper2 = this;
    var $el = swiper2.$el, slides = swiper2.slides, progress = swiper2.progress, snapGrid = swiper2.snapGrid;
    $el.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(el) {
      swiper2.parallax.setTransform(el, progress);
    });
    slides.each(function(slideEl, slideIndex) {
      var slideProgress = slideEl.progress;
      if (swiper2.params.slidesPerGroup > 1 && swiper2.params.slidesPerView !== "auto") {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      $(slideEl).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(el) {
        swiper2.parallax.setTransform(el, slideProgress);
      });
    });
  },
  setTransition: function setTransition(duration) {
    if (duration === void 0) {
      duration = this.params.speed;
    }
    var swiper2 = this;
    var $el = swiper2.$el;
    $el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(parallaxEl) {
      var $parallaxEl = $(parallaxEl);
      var parallaxDuration = parseInt($parallaxEl.attr("data-swiper-parallax-duration"), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  }
};
const parallax = {
  name: "parallax",
  params: {
    parallax: {
      enabled: false
    }
  },
  create: function create3() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      parallax: _extends$b({}, Parallax)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper2) {
      if (!swiper2.params.parallax.enabled) return;
      swiper2.params.watchSlidesProgress = true;
      swiper2.originalParams.watchSlidesProgress = true;
    },
    init: function init3(swiper2) {
      if (!swiper2.params.parallax.enabled) return;
      swiper2.parallax.setTranslate();
    },
    setTranslate: function setTranslate2(swiper2) {
      if (!swiper2.params.parallax.enabled) return;
      swiper2.parallax.setTranslate();
    },
    setTransition: function setTransition2(swiper2, duration) {
      if (!swiper2.params.parallax.enabled) return;
      swiper2.parallax.setTransition(duration);
    }
  }
};
function _extends$a() {
  _extends$a = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$a.apply(this, arguments);
}
var Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    var x1 = e.targetTouches[0].pageX;
    var y1 = e.targetTouches[0].pageY;
    var x2 = e.targetTouches[1].pageX;
    var y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  },
  // Events
  onGestureStart: function onGestureStart(e) {
    var swiper2 = this;
    var support = swiper2.support;
    var params = swiper2.params.zoom;
    var zoom2 = swiper2.zoom;
    var gesture = zoom2.gesture;
    zoom2.fakeGestureTouched = false;
    zoom2.fakeGestureMoved = false;
    if (!support.gestures) {
      if (e.type !== "touchstart" || e.type === "touchstart" && e.targetTouches.length < 2) {
        return;
      }
      zoom2.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = $(e.target).closest("." + swiper2.params.slideClass);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper2.slides.eq(swiper2.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target");
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
      gesture.maxRatio = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = void 0;
        return;
      }
    }
    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }
    swiper2.zoom.isScaling = true;
  },
  onGestureChange: function onGestureChange(e) {
    var swiper2 = this;
    var support = swiper2.support;
    var params = swiper2.params.zoom;
    var zoom2 = swiper2.zoom;
    var gesture = zoom2.gesture;
    if (!support.gestures) {
      if (e.type !== "touchmove" || e.type === "touchmove" && e.targetTouches.length < 2) {
        return;
      }
      zoom2.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
      if (e.type === "gesturechange") zoom2.onGestureStart(e);
      return;
    }
    if (support.gestures) {
      zoom2.scale = e.scale * zoom2.currentScale;
    } else {
      zoom2.scale = gesture.scaleMove / gesture.scaleStart * zoom2.currentScale;
    }
    if (zoom2.scale > gesture.maxRatio) {
      zoom2.scale = gesture.maxRatio - 1 + Math.pow(zoom2.scale - gesture.maxRatio + 1, 0.5);
    }
    if (zoom2.scale < params.minRatio) {
      zoom2.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom2.scale + 1, 0.5);
    }
    gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom2.scale + ")");
  },
  onGestureEnd: function onGestureEnd(e) {
    var swiper2 = this;
    var device = swiper2.device;
    var support = swiper2.support;
    var params = swiper2.params.zoom;
    var zoom2 = swiper2.zoom;
    var gesture = zoom2.gesture;
    if (!support.gestures) {
      if (!zoom2.fakeGestureTouched || !zoom2.fakeGestureMoved) {
        return;
      }
      if (e.type !== "touchend" || e.type === "touchend" && e.changedTouches.length < 2 && !device.android) {
        return;
      }
      zoom2.fakeGestureTouched = false;
      zoom2.fakeGestureMoved = false;
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom2.scale = Math.max(Math.min(zoom2.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper2.params.speed).transform("translate3d(0,0,0) scale(" + zoom2.scale + ")");
    zoom2.currentScale = zoom2.scale;
    zoom2.isScaling = false;
    if (zoom2.scale === 1) gesture.$slideEl = void 0;
  },
  onTouchStart: function onTouchStart(e) {
    var swiper2 = this;
    var device = swiper2.device;
    var zoom2 = swiper2.zoom;
    var gesture = zoom2.gesture, image = zoom2.image;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove: function onTouchMove(e) {
    var swiper2 = this;
    var zoom2 = swiper2.zoom;
    var gesture = zoom2.gesture, image = zoom2.image, velocity = zoom2.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper2.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;
    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = getTranslate(gesture.$imageWrapEl[0], "x") || 0;
      image.startY = getTranslate(gesture.$imageWrapEl[0], "y") || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
    }
    var scaledWidth = image.width * zoom2.scale;
    var scaledHeight = image.height * zoom2.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;
    if (!image.isMoved && !zoom2.isScaling) {
      if (swiper2.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }
      if (!swiper2.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
    }
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTouchEnd: function onTouchEnd() {
    var swiper2 = this;
    var zoom2 = swiper2.zoom;
    var gesture = zoom2.gesture, image = zoom2.image, velocity = zoom2.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocity.x * momentumDurationX;
    var newPositionX = image.currentX + momentumDistanceX;
    var momentumDistanceY = velocity.y * momentumDurationY;
    var newPositionY = image.currentY + momentumDistanceY;
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    var scaledWidth = image.width * zoom2.scale;
    var scaledHeight = image.height * zoom2.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTransitionEnd: function onTransitionEnd() {
    var swiper2 = this;
    var zoom2 = swiper2.zoom;
    var gesture = zoom2.gesture;
    if (gesture.$slideEl && swiper2.previousIndex !== swiper2.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform("translate3d(0,0,0) scale(1)");
      }
      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform("translate3d(0,0,0)");
      }
      zoom2.scale = 1;
      zoom2.currentScale = 1;
      gesture.$slideEl = void 0;
      gesture.$imageEl = void 0;
      gesture.$imageWrapEl = void 0;
    }
  },
  // Toggle Zoom
  toggle: function toggle(e) {
    var swiper2 = this;
    var zoom2 = swiper2.zoom;
    if (zoom2.scale && zoom2.scale !== 1) {
      zoom2.out();
    } else {
      zoom2.in(e);
    }
  },
  in: function _in(e) {
    var swiper2 = this;
    var window2 = getWindow();
    var zoom2 = swiper2.zoom;
    var params = swiper2.params.zoom;
    var gesture = zoom2.gesture, image = zoom2.image;
    if (!gesture.$slideEl) {
      if (e && e.target) {
        gesture.$slideEl = $(e.target).closest("." + swiper2.params.slideClass);
      }
      if (!gesture.$slideEl) {
        if (swiper2.params.virtual && swiper2.params.virtual.enabled && swiper2.virtual) {
          gesture.$slideEl = swiper2.$wrapperEl.children("." + swiper2.params.slideActiveClass);
        } else {
          gesture.$slideEl = swiper2.slides.eq(swiper2.activeIndex);
        }
      }
      gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target");
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
    gesture.$slideEl.addClass("" + params.zoomedSlideClass);
    var touchX;
    var touchY;
    var offsetX;
    var offsetY;
    var diffX;
    var diffY;
    var translateX;
    var translateY;
    var imageWidth;
    var imageHeight;
    var scaledWidth;
    var scaledHeight;
    var translateMinX;
    var translateMinY;
    var translateMaxX;
    var translateMaxY;
    var slideWidth;
    var slideHeight;
    if (typeof image.touchesStart.x === "undefined" && e) {
      touchX = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    zoom2.scale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
    zoom2.currentScale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left + window2.scrollX;
      offsetY = gesture.$slideEl.offset().top + window2.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom2.scale;
      scaledHeight = imageHeight * zoom2.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom2.scale;
      translateY = diffY * zoom2.scale;
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
    gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom2.scale + ")");
  },
  out: function out() {
    var swiper2 = this;
    var zoom2 = swiper2.zoom;
    var params = swiper2.params.zoom;
    var gesture = zoom2.gesture;
    if (!gesture.$slideEl) {
      if (swiper2.params.virtual && swiper2.params.virtual.enabled && swiper2.virtual) {
        gesture.$slideEl = swiper2.$wrapperEl.children("." + swiper2.params.slideActiveClass);
      } else {
        gesture.$slideEl = swiper2.slides.eq(swiper2.activeIndex);
      }
      gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target");
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
    zoom2.scale = 1;
    zoom2.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
    gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
    gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
    gesture.$slideEl = void 0;
  },
  toggleGestures: function toggleGestures(method) {
    var swiper2 = this;
    var zoom2 = swiper2.zoom;
    var selector = zoom2.slideSelector, passive = zoom2.passiveListener;
    swiper2.$wrapperEl[method]("gesturestart", selector, zoom2.onGestureStart, passive);
    swiper2.$wrapperEl[method]("gesturechange", selector, zoom2.onGestureChange, passive);
    swiper2.$wrapperEl[method]("gestureend", selector, zoom2.onGestureEnd, passive);
  },
  enableGestures: function enableGestures() {
    if (this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = true;
    this.zoom.toggleGestures("on");
  },
  disableGestures: function disableGestures() {
    if (!this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = false;
    this.zoom.toggleGestures("off");
  },
  // Attach/Detach Events
  enable: function enable3() {
    var swiper2 = this;
    var support = swiper2.support;
    var zoom2 = swiper2.zoom;
    if (zoom2.enabled) return;
    zoom2.enabled = true;
    var passiveListener = swiper2.touchEvents.start === "touchstart" && support.passiveListener && swiper2.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper2.params.slideClass;
    swiper2.zoom.passiveListener = passiveListener;
    swiper2.zoom.slideSelector = slideSelector;
    if (support.gestures) {
      swiper2.$wrapperEl.on(swiper2.touchEvents.start, swiper2.zoom.enableGestures, passiveListener);
      swiper2.$wrapperEl.on(swiper2.touchEvents.end, swiper2.zoom.disableGestures, passiveListener);
    } else if (swiper2.touchEvents.start === "touchstart") {
      swiper2.$wrapperEl.on(swiper2.touchEvents.start, slideSelector, zoom2.onGestureStart, passiveListener);
      swiper2.$wrapperEl.on(swiper2.touchEvents.move, slideSelector, zoom2.onGestureChange, activeListenerWithCapture);
      swiper2.$wrapperEl.on(swiper2.touchEvents.end, slideSelector, zoom2.onGestureEnd, passiveListener);
      if (swiper2.touchEvents.cancel) {
        swiper2.$wrapperEl.on(swiper2.touchEvents.cancel, slideSelector, zoom2.onGestureEnd, passiveListener);
      }
    }
    swiper2.$wrapperEl.on(swiper2.touchEvents.move, "." + swiper2.params.zoom.containerClass, zoom2.onTouchMove, activeListenerWithCapture);
  },
  disable: function disable3() {
    var swiper2 = this;
    var zoom2 = swiper2.zoom;
    if (!zoom2.enabled) return;
    var support = swiper2.support;
    swiper2.zoom.enabled = false;
    var passiveListener = swiper2.touchEvents.start === "touchstart" && support.passiveListener && swiper2.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper2.params.slideClass;
    if (support.gestures) {
      swiper2.$wrapperEl.off(swiper2.touchEvents.start, swiper2.zoom.enableGestures, passiveListener);
      swiper2.$wrapperEl.off(swiper2.touchEvents.end, swiper2.zoom.disableGestures, passiveListener);
    } else if (swiper2.touchEvents.start === "touchstart") {
      swiper2.$wrapperEl.off(swiper2.touchEvents.start, slideSelector, zoom2.onGestureStart, passiveListener);
      swiper2.$wrapperEl.off(swiper2.touchEvents.move, slideSelector, zoom2.onGestureChange, activeListenerWithCapture);
      swiper2.$wrapperEl.off(swiper2.touchEvents.end, slideSelector, zoom2.onGestureEnd, passiveListener);
      if (swiper2.touchEvents.cancel) {
        swiper2.$wrapperEl.off(swiper2.touchEvents.cancel, slideSelector, zoom2.onGestureEnd, passiveListener);
      }
    }
    swiper2.$wrapperEl.off(swiper2.touchEvents.move, "." + swiper2.params.zoom.containerClass, zoom2.onTouchMove, activeListenerWithCapture);
  }
};
const zoom = {
  name: "zoom",
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  },
  create: function create4() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      zoom: _extends$a({
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3
        },
        image: {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0
        }
      }, Zoom)
    });
    var scale = 1;
    Object.defineProperty(swiper2.zoom, "scale", {
      get: function get() {
        return scale;
      },
      set: function set(value) {
        if (scale !== value) {
          var imageEl = swiper2.zoom.gesture.$imageEl ? swiper2.zoom.gesture.$imageEl[0] : void 0;
          var slideEl = swiper2.zoom.gesture.$slideEl ? swiper2.zoom.gesture.$slideEl[0] : void 0;
          swiper2.emit("zoomChange", value, imageEl, slideEl);
        }
        scale = value;
      }
    });
  },
  on: {
    init: function init4(swiper2) {
      if (swiper2.params.zoom.enabled) {
        swiper2.zoom.enable();
      }
    },
    destroy: function destroy3(swiper2) {
      swiper2.zoom.disable();
    },
    touchStart: function touchStart(swiper2, e) {
      if (!swiper2.zoom.enabled) return;
      swiper2.zoom.onTouchStart(e);
    },
    touchEnd: function touchEnd(swiper2, e) {
      if (!swiper2.zoom.enabled) return;
      swiper2.zoom.onTouchEnd(e);
    },
    doubleTap: function doubleTap(swiper2, e) {
      if (!swiper2.animating && swiper2.params.zoom.enabled && swiper2.zoom.enabled && swiper2.params.zoom.toggle) {
        swiper2.zoom.toggle(e);
      }
    },
    transitionEnd: function transitionEnd(swiper2) {
      if (swiper2.zoom.enabled && swiper2.params.zoom.enabled) {
        swiper2.zoom.onTransitionEnd();
      }
    },
    slideChange: function slideChange(swiper2) {
      if (swiper2.zoom.enabled && swiper2.params.zoom.enabled && swiper2.params.cssMode) {
        swiper2.zoom.onTransitionEnd();
      }
    }
  }
};
function _extends$9() {
  _extends$9 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$9.apply(this, arguments);
}
var Lazy = {
  loadInSlide: function loadInSlide(index, loadInDuplicate) {
    if (loadInDuplicate === void 0) {
      loadInDuplicate = true;
    }
    var swiper2 = this;
    var params = swiper2.params.lazy;
    if (typeof index === "undefined") return;
    if (swiper2.slides.length === 0) return;
    var isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
    var $slideEl = isVirtual ? swiper2.$wrapperEl.children("." + swiper2.params.slideClass + '[data-swiper-slide-index="' + index + '"]') : swiper2.slides.eq(index);
    var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");
    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }
    if ($images.length === 0) return;
    $images.each(function(imageEl) {
      var $imageEl = $(imageEl);
      $imageEl.addClass(params.loadingClass);
      var background = $imageEl.attr("data-background");
      var src = $imageEl.attr("data-src");
      var srcset = $imageEl.attr("data-srcset");
      var sizes = $imageEl.attr("data-sizes");
      var $pictureEl = $imageEl.parent("picture");
      swiper2.loadImage($imageEl[0], src || background, srcset, sizes, false, function() {
        if (typeof swiper2 === "undefined" || swiper2 === null || !swiper2 || swiper2 && !swiper2.params || swiper2.destroyed) return;
        if (background) {
          $imageEl.css("background-image", 'url("' + background + '")');
          $imageEl.removeAttr("data-background");
        } else {
          if (srcset) {
            $imageEl.attr("srcset", srcset);
            $imageEl.removeAttr("data-srcset");
          }
          if (sizes) {
            $imageEl.attr("sizes", sizes);
            $imageEl.removeAttr("data-sizes");
          }
          if ($pictureEl.length) {
            $pictureEl.children("source").each(function(sourceEl) {
              var $source = $(sourceEl);
              if ($source.attr("data-srcset")) {
                $source.attr("srcset", $source.attr("data-srcset"));
                $source.removeAttr("data-srcset");
              }
            });
          }
          if (src) {
            $imageEl.attr("src", src);
            $imageEl.removeAttr("data-src");
          }
        }
        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find("." + params.preloaderClass).remove();
        if (swiper2.params.loop && loadInDuplicate) {
          var slideOriginalIndex = $slideEl.attr("data-swiper-slide-index");
          if ($slideEl.hasClass(swiper2.params.slideDuplicateClass)) {
            var originalSlide = swiper2.$wrapperEl.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + swiper2.params.slideDuplicateClass + ")");
            swiper2.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            var duplicatedSlide = swiper2.$wrapperEl.children("." + swiper2.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
            swiper2.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }
        swiper2.emit("lazyImageReady", $slideEl[0], $imageEl[0]);
        if (swiper2.params.autoHeight) {
          swiper2.updateAutoHeight();
        }
      });
      swiper2.emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
    });
  },
  load: function load() {
    var swiper2 = this;
    var $wrapperEl = swiper2.$wrapperEl, swiperParams = swiper2.params, slides = swiper2.slides, activeIndex = swiper2.activeIndex;
    var isVirtual = swiper2.virtual && swiperParams.virtual.enabled;
    var params = swiperParams.lazy;
    var slidesPerView = swiperParams.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = 0;
    }
    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children("." + swiperParams.slideClass + '[data-swiper-slide-index="' + index + '"]').length) {
          return true;
        }
      } else if (slides[index]) return true;
      return false;
    }
    function slideIndex(slideEl) {
      if (isVirtual) {
        return $(slideEl).attr("data-swiper-slide-index");
      }
      return $(slideEl).index();
    }
    if (!swiper2.lazy.initialImageLoaded) swiper2.lazy.initialImageLoaded = true;
    if (swiper2.params.watchSlidesVisibility) {
      $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function(slideEl) {
        var index = isVirtual ? $(slideEl).attr("data-swiper-slide-index") : $(slideEl).index();
        swiper2.lazy.loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper2.lazy.loadInSlide(i);
      }
    } else {
      swiper2.lazy.loadInSlide(activeIndex);
    }
    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        var amount = params.loadPrevNextAmount;
        var spv = slidesPerView;
        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
        for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
          if (slideExist(_i)) swiper2.lazy.loadInSlide(_i);
        }
        for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
          if (slideExist(_i2)) swiper2.lazy.loadInSlide(_i2);
        }
      } else {
        var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
        if (nextSlide.length > 0) swiper2.lazy.loadInSlide(slideIndex(nextSlide));
        var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
        if (prevSlide.length > 0) swiper2.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  },
  checkInViewOnLoad: function checkInViewOnLoad() {
    var window2 = getWindow();
    var swiper2 = this;
    if (!swiper2 || swiper2.destroyed) return;
    var $scrollElement = swiper2.params.lazy.scrollingElement ? $(swiper2.params.lazy.scrollingElement) : $(window2);
    var isWindow = $scrollElement[0] === window2;
    var scrollElementWidth = isWindow ? window2.innerWidth : $scrollElement[0].offsetWidth;
    var scrollElementHeight = isWindow ? window2.innerHeight : $scrollElement[0].offsetHeight;
    var swiperOffset = swiper2.$el.offset();
    var rtl = swiper2.rtlTranslate;
    var inView = false;
    if (rtl) swiperOffset.left -= swiper2.$el[0].scrollLeft;
    var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper2.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper2.height], [swiperOffset.left + swiper2.width, swiperOffset.top + swiper2.height]];
    for (var i = 0; i < swiperCoord.length; i += 1) {
      var point = swiperCoord[i];
      if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
        if (point[0] === 0 && point[1] === 0) continue;
        inView = true;
      }
    }
    var passiveListener = swiper2.touchEvents.start === "touchstart" && swiper2.support.passiveListener && swiper2.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (inView) {
      swiper2.lazy.load();
      $scrollElement.off("scroll", swiper2.lazy.checkInViewOnLoad, passiveListener);
    } else if (!swiper2.lazy.scrollHandlerAttached) {
      swiper2.lazy.scrollHandlerAttached = true;
      $scrollElement.on("scroll", swiper2.lazy.checkInViewOnLoad, passiveListener);
    }
  }
};
const lazy = {
  name: "lazy",
  params: {
    lazy: {
      checkInView: false,
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      scrollingElement: "",
      elementClass: "swiper-lazy",
      loadingClass: "swiper-lazy-loading",
      loadedClass: "swiper-lazy-loaded",
      preloaderClass: "swiper-lazy-preloader"
    }
  },
  create: function create5() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      lazy: _extends$9({
        initialImageLoaded: false
      }, Lazy)
    });
  },
  on: {
    beforeInit: function beforeInit2(swiper2) {
      if (swiper2.params.lazy.enabled && swiper2.params.preloadImages) {
        swiper2.params.preloadImages = false;
      }
    },
    init: function init5(swiper2) {
      if (swiper2.params.lazy.enabled && !swiper2.params.loop && swiper2.params.initialSlide === 0) {
        if (swiper2.params.lazy.checkInView) {
          swiper2.lazy.checkInViewOnLoad();
        } else {
          swiper2.lazy.load();
        }
      }
    },
    scroll: function scroll(swiper2) {
      if (swiper2.params.freeMode && !swiper2.params.freeModeSticky) {
        swiper2.lazy.load();
      }
    },
    "scrollbarDragMove resize _freeModeNoMomentumRelease": function lazyLoad(swiper2) {
      if (swiper2.params.lazy.enabled) {
        swiper2.lazy.load();
      }
    },
    transitionStart: function transitionStart(swiper2) {
      if (swiper2.params.lazy.enabled) {
        if (swiper2.params.lazy.loadOnTransitionStart || !swiper2.params.lazy.loadOnTransitionStart && !swiper2.lazy.initialImageLoaded) {
          swiper2.lazy.load();
        }
      }
    },
    transitionEnd: function transitionEnd2(swiper2) {
      if (swiper2.params.lazy.enabled && !swiper2.params.lazy.loadOnTransitionStart) {
        swiper2.lazy.load();
      }
    },
    slideChange: function slideChange2(swiper2) {
      var _swiper$params = swiper2.params, lazy2 = _swiper$params.lazy, cssMode = _swiper$params.cssMode, watchSlidesVisibility = _swiper$params.watchSlidesVisibility, watchSlidesProgress = _swiper$params.watchSlidesProgress, touchReleaseOnEdges = _swiper$params.touchReleaseOnEdges, resistanceRatio = _swiper$params.resistanceRatio;
      if (lazy2.enabled && (cssMode || (watchSlidesVisibility || watchSlidesProgress) && (touchReleaseOnEdges || resistanceRatio === 0))) {
        swiper2.lazy.load();
      }
    }
  }
};
function _extends$8() {
  _extends$8 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}
var Controller = {
  LinearSpline: function LinearSpline(x, y) {
    var binarySearch = /* @__PURE__ */ function search() {
      var maxIndex;
      var minIndex;
      var guess;
      return function(array, val) {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    var i1;
    var i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction: function getInterpolateFunction(c) {
    var swiper2 = this;
    if (!swiper2.controller.spline) {
      swiper2.controller.spline = swiper2.params.loop ? new Controller.LinearSpline(swiper2.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper2.snapGrid, c.snapGrid);
    }
  },
  setTranslate: function setTranslate3(_setTranslate, byController) {
    var swiper2 = this;
    var controlled = swiper2.controller.control;
    var multiplier;
    var controlledTranslate;
    var Swiper2 = swiper2.constructor;
    function setControlledTranslate(c) {
      var translate = swiper2.rtlTranslate ? -swiper2.translate : swiper2.translate;
      if (swiper2.params.controller.by === "slide") {
        swiper2.controller.getInterpolateFunction(c);
        controlledTranslate = -swiper2.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper2.params.controller.by === "container") {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper2.maxTranslate() - swiper2.minTranslate());
        controlledTranslate = (translate - swiper2.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper2.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper2);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper2 && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition: function setTransition3(duration, byController) {
    var swiper2 = this;
    var Swiper2 = swiper2.constructor;
    var controlled = swiper2.controller.control;
    var i;
    function setControlledTransition(c) {
      c.setTransition(duration, swiper2);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          nextTick(function() {
            c.updateAutoHeight();
          });
        }
        c.$wrapperEl.transitionEnd(function() {
          if (!controlled) return;
          if (c.params.loop && swiper2.params.controller.by === "slide") {
            c.loopFix();
          }
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper2 && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
};
const controller = {
  name: "controller",
  params: {
    controller: {
      control: void 0,
      inverse: false,
      by: "slide"
      // or 'container'
    }
  },
  create: function create6() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      controller: _extends$8({
        control: swiper2.params.controller.control
      }, Controller)
    });
  },
  on: {
    update: function update(swiper2) {
      if (!swiper2.controller.control) return;
      if (swiper2.controller.spline) {
        swiper2.controller.spline = void 0;
        delete swiper2.controller.spline;
      }
    },
    resize: function resize(swiper2) {
      if (!swiper2.controller.control) return;
      if (swiper2.controller.spline) {
        swiper2.controller.spline = void 0;
        delete swiper2.controller.spline;
      }
    },
    observerUpdate: function observerUpdate(swiper2) {
      if (!swiper2.controller.control) return;
      if (swiper2.controller.spline) {
        swiper2.controller.spline = void 0;
        delete swiper2.controller.spline;
      }
    },
    setTranslate: function setTranslate4(swiper2, translate, byController) {
      if (!swiper2.controller.control) return;
      swiper2.controller.setTranslate(translate, byController);
    },
    setTransition: function setTransition4(swiper2, duration, byController) {
      if (!swiper2.controller.control) return;
      swiper2.controller.setTransition(duration, byController);
    }
  }
};
function _extends$7() {
  _extends$7 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$7.apply(this, arguments);
}
var A11y = {
  getRandomNumber: function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    var randomChar = function randomChar2() {
      return Math.round(16 * Math.random()).toString(16);
    };
    return "x".repeat(size).replace(/x/g, randomChar);
  },
  makeElFocusable: function makeElFocusable($el) {
    $el.attr("tabIndex", "0");
    return $el;
  },
  makeElNotFocusable: function makeElNotFocusable($el) {
    $el.attr("tabIndex", "-1");
    return $el;
  },
  addElRole: function addElRole($el, role) {
    $el.attr("role", role);
    return $el;
  },
  addElRoleDescription: function addElRoleDescription($el, description) {
    $el.attr("aria-roledescription", description);
    return $el;
  },
  addElControls: function addElControls($el, controls) {
    $el.attr("aria-controls", controls);
    return $el;
  },
  addElLabel: function addElLabel($el, label) {
    $el.attr("aria-label", label);
    return $el;
  },
  addElId: function addElId($el, id) {
    $el.attr("id", id);
    return $el;
  },
  addElLive: function addElLive($el, live) {
    $el.attr("aria-live", live);
    return $el;
  },
  disableEl: function disableEl($el) {
    $el.attr("aria-disabled", true);
    return $el;
  },
  enableEl: function enableEl($el) {
    $el.attr("aria-disabled", false);
    return $el;
  },
  onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    var swiper2 = this;
    var params = swiper2.params.a11y;
    var $targetEl = $(e.target);
    if (swiper2.navigation && swiper2.navigation.$nextEl && $targetEl.is(swiper2.navigation.$nextEl)) {
      if (!(swiper2.isEnd && !swiper2.params.loop)) {
        swiper2.slideNext();
      }
      if (swiper2.isEnd) {
        swiper2.a11y.notify(params.lastSlideMessage);
      } else {
        swiper2.a11y.notify(params.nextSlideMessage);
      }
    }
    if (swiper2.navigation && swiper2.navigation.$prevEl && $targetEl.is(swiper2.navigation.$prevEl)) {
      if (!(swiper2.isBeginning && !swiper2.params.loop)) {
        swiper2.slidePrev();
      }
      if (swiper2.isBeginning) {
        swiper2.a11y.notify(params.firstSlideMessage);
      } else {
        swiper2.a11y.notify(params.prevSlideMessage);
      }
    }
    if (swiper2.pagination && $targetEl.is(classesToSelector(swiper2.params.pagination.bulletClass))) {
      $targetEl[0].click();
    }
  },
  notify: function notify(message) {
    var swiper2 = this;
    var notification = swiper2.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html("");
    notification.html(message);
  },
  updateNavigation: function updateNavigation() {
    var swiper2 = this;
    if (swiper2.params.loop || !swiper2.navigation) return;
    var _swiper$navigation = swiper2.navigation, $nextEl = _swiper$navigation.$nextEl, $prevEl = _swiper$navigation.$prevEl;
    if ($prevEl && $prevEl.length > 0) {
      if (swiper2.isBeginning) {
        swiper2.a11y.disableEl($prevEl);
        swiper2.a11y.makeElNotFocusable($prevEl);
      } else {
        swiper2.a11y.enableEl($prevEl);
        swiper2.a11y.makeElFocusable($prevEl);
      }
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper2.isEnd) {
        swiper2.a11y.disableEl($nextEl);
        swiper2.a11y.makeElNotFocusable($nextEl);
      } else {
        swiper2.a11y.enableEl($nextEl);
        swiper2.a11y.makeElFocusable($nextEl);
      }
    }
  },
  updatePagination: function updatePagination() {
    var swiper2 = this;
    var params = swiper2.params.a11y;
    if (swiper2.pagination && swiper2.params.pagination.clickable && swiper2.pagination.bullets && swiper2.pagination.bullets.length) {
      swiper2.pagination.bullets.each(function(bulletEl) {
        var $bulletEl = $(bulletEl);
        swiper2.a11y.makeElFocusable($bulletEl);
        if (!swiper2.params.pagination.renderBullet) {
          swiper2.a11y.addElRole($bulletEl, "button");
          swiper2.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
        }
      });
    }
  },
  init: function init6() {
    var swiper2 = this;
    var params = swiper2.params.a11y;
    swiper2.$el.append(swiper2.a11y.liveRegion);
    var $containerEl = swiper2.$el;
    if (params.containerRoleDescriptionMessage) {
      swiper2.a11y.addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      swiper2.a11y.addElLabel($containerEl, params.containerMessage);
    }
    var $wrapperEl = swiper2.$wrapperEl;
    var wrapperId = $wrapperEl.attr("id") || "swiper-wrapper-" + swiper2.a11y.getRandomNumber(16);
    var live = swiper2.params.autoplay && swiper2.params.autoplay.enabled ? "off" : "polite";
    swiper2.a11y.addElId($wrapperEl, wrapperId);
    swiper2.a11y.addElLive($wrapperEl, live);
    if (params.itemRoleDescriptionMessage) {
      swiper2.a11y.addElRoleDescription($(swiper2.slides), params.itemRoleDescriptionMessage);
    }
    swiper2.a11y.addElRole($(swiper2.slides), params.slideRole);
    var slidesLength = swiper2.params.loop ? swiper2.slides.filter(function(el) {
      return !el.classList.contains(swiper2.params.slideDuplicateClass);
    }).length : swiper2.slides.length;
    swiper2.slides.each(function(slideEl, index) {
      var $slideEl = $(slideEl);
      var slideIndex = swiper2.params.loop ? parseInt($slideEl.attr("data-swiper-slide-index"), 10) : index;
      var ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
      swiper2.a11y.addElLabel($slideEl, ariaLabelMessage);
    });
    var $nextEl;
    var $prevEl;
    if (swiper2.navigation && swiper2.navigation.$nextEl) {
      $nextEl = swiper2.navigation.$nextEl;
    }
    if (swiper2.navigation && swiper2.navigation.$prevEl) {
      $prevEl = swiper2.navigation.$prevEl;
    }
    if ($nextEl && $nextEl.length) {
      swiper2.a11y.makeElFocusable($nextEl);
      if ($nextEl[0].tagName !== "BUTTON") {
        swiper2.a11y.addElRole($nextEl, "button");
        $nextEl.on("keydown", swiper2.a11y.onEnterOrSpaceKey);
      }
      swiper2.a11y.addElLabel($nextEl, params.nextSlideMessage);
      swiper2.a11y.addElControls($nextEl, wrapperId);
    }
    if ($prevEl && $prevEl.length) {
      swiper2.a11y.makeElFocusable($prevEl);
      if ($prevEl[0].tagName !== "BUTTON") {
        swiper2.a11y.addElRole($prevEl, "button");
        $prevEl.on("keydown", swiper2.a11y.onEnterOrSpaceKey);
      }
      swiper2.a11y.addElLabel($prevEl, params.prevSlideMessage);
      swiper2.a11y.addElControls($prevEl, wrapperId);
    }
    if (swiper2.pagination && swiper2.params.pagination.clickable && swiper2.pagination.bullets && swiper2.pagination.bullets.length) {
      swiper2.pagination.$el.on("keydown", classesToSelector(swiper2.params.pagination.bulletClass), swiper2.a11y.onEnterOrSpaceKey);
    }
  },
  destroy: function destroy4() {
    var swiper2 = this;
    if (swiper2.a11y.liveRegion && swiper2.a11y.liveRegion.length > 0) swiper2.a11y.liveRegion.remove();
    var $nextEl;
    var $prevEl;
    if (swiper2.navigation && swiper2.navigation.$nextEl) {
      $nextEl = swiper2.navigation.$nextEl;
    }
    if (swiper2.navigation && swiper2.navigation.$prevEl) {
      $prevEl = swiper2.navigation.$prevEl;
    }
    if ($nextEl) {
      $nextEl.off("keydown", swiper2.a11y.onEnterOrSpaceKey);
    }
    if ($prevEl) {
      $prevEl.off("keydown", swiper2.a11y.onEnterOrSpaceKey);
    }
    if (swiper2.pagination && swiper2.params.pagination.clickable && swiper2.pagination.bullets && swiper2.pagination.bullets.length) {
      swiper2.pagination.$el.off("keydown", classesToSelector(swiper2.params.pagination.bulletClass), swiper2.a11y.onEnterOrSpaceKey);
    }
  }
};
const a11y = {
  name: "a11y",
  params: {
    a11y: {
      enabled: true,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group"
    }
  },
  create: function create7() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      a11y: _extends$7({}, A11y, {
        liveRegion: $('<span class="' + swiper2.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
      })
    });
  },
  on: {
    afterInit: function afterInit(swiper2) {
      if (!swiper2.params.a11y.enabled) return;
      swiper2.a11y.init();
      swiper2.a11y.updateNavigation();
    },
    toEdge: function toEdge(swiper2) {
      if (!swiper2.params.a11y.enabled) return;
      swiper2.a11y.updateNavigation();
    },
    fromEdge: function fromEdge(swiper2) {
      if (!swiper2.params.a11y.enabled) return;
      swiper2.a11y.updateNavigation();
    },
    paginationUpdate: function paginationUpdate(swiper2) {
      if (!swiper2.params.a11y.enabled) return;
      swiper2.a11y.updatePagination();
    },
    destroy: function destroy5(swiper2) {
      if (!swiper2.params.a11y.enabled) return;
      swiper2.a11y.destroy();
    }
  }
};
function _extends$6() {
  _extends$6 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$6.apply(this, arguments);
}
var History = {
  init: function init7() {
    var swiper2 = this;
    var window2 = getWindow();
    if (!swiper2.params.history) return;
    if (!window2.history || !window2.history.pushState) {
      swiper2.params.history.enabled = false;
      swiper2.params.hashNavigation.enabled = true;
      return;
    }
    var history2 = swiper2.history;
    history2.initialized = true;
    history2.paths = History.getPathValues(swiper2.params.url);
    if (!history2.paths.key && !history2.paths.value) return;
    history2.scrollToSlide(0, history2.paths.value, swiper2.params.runCallbacksOnInit);
    if (!swiper2.params.history.replaceState) {
      window2.addEventListener("popstate", swiper2.history.setHistoryPopState);
    }
  },
  destroy: function destroy6() {
    var swiper2 = this;
    var window2 = getWindow();
    if (!swiper2.params.history.replaceState) {
      window2.removeEventListener("popstate", swiper2.history.setHistoryPopState);
    }
  },
  setHistoryPopState: function setHistoryPopState() {
    var swiper2 = this;
    swiper2.history.paths = History.getPathValues(swiper2.params.url);
    swiper2.history.scrollToSlide(swiper2.params.speed, swiper2.history.paths.value, false);
  },
  getPathValues: function getPathValues(urlOverride) {
    var window2 = getWindow();
    var location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window2.location;
    }
    var pathArray = location.pathname.slice(1).split("/").filter(function(part) {
      return part !== "";
    });
    var total = pathArray.length;
    var key = pathArray[total - 2];
    var value = pathArray[total - 1];
    return {
      key,
      value
    };
  },
  setHistory: function setHistory(key, index) {
    var swiper2 = this;
    var window2 = getWindow();
    if (!swiper2.history.initialized || !swiper2.params.history.enabled) return;
    var location;
    if (swiper2.params.url) {
      location = new URL(swiper2.params.url);
    } else {
      location = window2.location;
    }
    var slide = swiper2.slides.eq(index);
    var value = History.slugify(slide.attr("data-history"));
    if (swiper2.params.history.root.length > 0) {
      var root = swiper2.params.history.root;
      if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
      value = root + "/" + key + "/" + value;
    } else if (!location.pathname.includes(key)) {
      value = key + "/" + value;
    }
    var currentState = window2.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper2.params.history.replaceState) {
      window2.history.replaceState({
        value
      }, null, value);
    } else {
      window2.history.pushState({
        value
      }, null, value);
    }
  },
  slugify: function slugify(text) {
    return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  },
  scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
    var swiper2 = this;
    if (value) {
      for (var i = 0, length = swiper2.slides.length; i < length; i += 1) {
        var slide = swiper2.slides.eq(i);
        var slideHistory = History.slugify(slide.attr("data-history"));
        if (slideHistory === value && !slide.hasClass(swiper2.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper2.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper2.slideTo(0, speed, runCallbacks);
    }
  }
};
const history = {
  name: "history",
  params: {
    history: {
      enabled: false,
      root: "",
      replaceState: false,
      key: "slides"
    }
  },
  create: function create8() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      history: _extends$6({}, History)
    });
  },
  on: {
    init: function init8(swiper2) {
      if (swiper2.params.history.enabled) {
        swiper2.history.init();
      }
    },
    destroy: function destroy7(swiper2) {
      if (swiper2.params.history.enabled) {
        swiper2.history.destroy();
      }
    },
    "transitionEnd _freeModeNoMomentumRelease": function transitionEnd_freeModeNoMomentumRelease(swiper2) {
      if (swiper2.history.initialized) {
        swiper2.history.setHistory(swiper2.params.history.key, swiper2.activeIndex);
      }
    },
    slideChange: function slideChange3(swiper2) {
      if (swiper2.history.initialized && swiper2.params.cssMode) {
        swiper2.history.setHistory(swiper2.params.history.key, swiper2.activeIndex);
      }
    }
  }
};
function _extends$5() {
  _extends$5 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
var HashNavigation = {
  onHashChange: function onHashChange() {
    var swiper2 = this;
    var document2 = getDocument();
    swiper2.emit("hashChange");
    var newHash = document2.location.hash.replace("#", "");
    var activeSlideHash = swiper2.slides.eq(swiper2.activeIndex).attr("data-hash");
    if (newHash !== activeSlideHash) {
      var newIndex = swiper2.$wrapperEl.children("." + swiper2.params.slideClass + '[data-hash="' + newHash + '"]').index();
      if (typeof newIndex === "undefined") return;
      swiper2.slideTo(newIndex);
    }
  },
  setHash: function setHash() {
    var swiper2 = this;
    var window2 = getWindow();
    var document2 = getDocument();
    if (!swiper2.hashNavigation.initialized || !swiper2.params.hashNavigation.enabled) return;
    if (swiper2.params.hashNavigation.replaceState && window2.history && window2.history.replaceState) {
      window2.history.replaceState(null, null, "#" + swiper2.slides.eq(swiper2.activeIndex).attr("data-hash") || "");
      swiper2.emit("hashSet");
    } else {
      var slide = swiper2.slides.eq(swiper2.activeIndex);
      var hash = slide.attr("data-hash") || slide.attr("data-history");
      document2.location.hash = hash || "";
      swiper2.emit("hashSet");
    }
  },
  init: function init9() {
    var swiper2 = this;
    var document2 = getDocument();
    var window2 = getWindow();
    if (!swiper2.params.hashNavigation.enabled || swiper2.params.history && swiper2.params.history.enabled) return;
    swiper2.hashNavigation.initialized = true;
    var hash = document2.location.hash.replace("#", "");
    if (hash) {
      var speed = 0;
      for (var i = 0, length = swiper2.slides.length; i < length; i += 1) {
        var slide = swiper2.slides.eq(i);
        var slideHash = slide.attr("data-hash") || slide.attr("data-history");
        if (slideHash === hash && !slide.hasClass(swiper2.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper2.slideTo(index, speed, swiper2.params.runCallbacksOnInit, true);
        }
      }
    }
    if (swiper2.params.hashNavigation.watchState) {
      $(window2).on("hashchange", swiper2.hashNavigation.onHashChange);
    }
  },
  destroy: function destroy8() {
    var swiper2 = this;
    var window2 = getWindow();
    if (swiper2.params.hashNavigation.watchState) {
      $(window2).off("hashchange", swiper2.hashNavigation.onHashChange);
    }
  }
};
const hashNavigation = {
  name: "hash-navigation",
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  },
  create: function create9() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      hashNavigation: _extends$5({
        initialized: false
      }, HashNavigation)
    });
  },
  on: {
    init: function init10(swiper2) {
      if (swiper2.params.hashNavigation.enabled) {
        swiper2.hashNavigation.init();
      }
    },
    destroy: function destroy9(swiper2) {
      if (swiper2.params.hashNavigation.enabled) {
        swiper2.hashNavigation.destroy();
      }
    },
    "transitionEnd _freeModeNoMomentumRelease": function transitionEnd_freeModeNoMomentumRelease2(swiper2) {
      if (swiper2.hashNavigation.initialized) {
        swiper2.hashNavigation.setHash();
      }
    },
    slideChange: function slideChange4(swiper2) {
      if (swiper2.hashNavigation.initialized && swiper2.params.cssMode) {
        swiper2.hashNavigation.setHash();
      }
    }
  }
};
function _extends$4() {
  _extends$4 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
var Fade = {
  setTranslate: function setTranslate5() {
    var swiper2 = this;
    var slides = swiper2.slides;
    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper2.slides.eq(i);
      var offset = $slideEl[0].swiperSlideOffset;
      var tx = -offset;
      if (!swiper2.params.virtualTranslate) tx -= swiper2.translate;
      var ty = 0;
      if (!swiper2.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      var slideOpacity = swiper2.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
    }
  },
  setTransition: function setTransition5(duration) {
    var swiper2 = this;
    var slides = swiper2.slides, $wrapperEl = swiper2.$wrapperEl;
    slides.transition(duration);
    if (swiper2.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function() {
        if (eventTriggered) return;
        if (!swiper2 || swiper2.destroyed) return;
        eventTriggered = true;
        swiper2.animating = false;
        var triggerEvents = ["webkitTransitionEnd", "transitionend"];
        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
const EffectFade = {
  name: "effect-fade",
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create: function create10() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      fadeEffect: _extends$4({}, Fade)
    });
  },
  on: {
    beforeInit: function beforeInit3(swiper2) {
      if (swiper2.params.effect !== "fade") return;
      swiper2.classNames.push(swiper2.params.containerModifierClass + "fade");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      extend(swiper2.params, overwriteParams);
      extend(swiper2.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate6(swiper2) {
      if (swiper2.params.effect !== "fade") return;
      swiper2.fadeEffect.setTranslate();
    },
    setTransition: function setTransition6(swiper2, duration) {
      if (swiper2.params.effect !== "fade") return;
      swiper2.fadeEffect.setTransition(duration);
    }
  }
};
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
var Cube = {
  setTranslate: function setTranslate7() {
    var swiper2 = this;
    var $el = swiper2.$el, $wrapperEl = swiper2.$wrapperEl, slides = swiper2.slides, swiperWidth = swiper2.width, swiperHeight = swiper2.height, rtl = swiper2.rtlTranslate, swiperSize = swiper2.size, browser = swiper2.browser;
    var params = swiper2.params.cubeEffect;
    var isHorizontal = swiper2.isHorizontal();
    var isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
    var wrapperRotate = 0;
    var $cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }
        $cubeShadowEl.css({
          height: swiperWidth + "px"
        });
      } else {
        $cubeShadowEl = $el.find(".swiper-cube-shadow");
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }
    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10);
      }
      var slideAngle = slideIndex * 90;
      var round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      var tx = 0;
      var ty = 0;
      var tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      $slideEl.transform(transform);
      if (params.slideShadows) {
        var shadowBefore = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
        var shadowAfter = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
        if (shadowBefore.length === 0) {
          shadowBefore = $('<div class="swiper-slide-shadow-' + (isHorizontal ? "left" : "top") + '"></div>');
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = $('<div class="swiper-slide-shadow-' + (isHorizontal ? "right" : "bottom") + '"></div>');
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }
    $wrapperEl.css({
      "-webkit-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
      "-moz-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
      "-ms-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
      "transform-origin": "50% 50% -" + swiperSize / 2 + "px"
    });
    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
      } else {
        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        var scale1 = params.shadowScale;
        var scale2 = params.shadowScale / multiplier;
        var offset = params.shadowOffset;
        $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
      }
    }
    var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper2.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper2.isHorizontal() ? -wrapperRotate : 0) + "deg)");
  },
  setTransition: function setTransition7(duration) {
    var swiper2 = this;
    var $el = swiper2.$el, slides = swiper2.slides;
    slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
    if (swiper2.params.cubeEffect.shadow && !swiper2.isHorizontal()) {
      $el.find(".swiper-cube-shadow").transition(duration);
    }
  }
};
const effectCube = {
  name: "effect-cube",
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  },
  create: function create11() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      cubeEffect: _extends$3({}, Cube)
    });
  },
  on: {
    beforeInit: function beforeInit4(swiper2) {
      if (swiper2.params.effect !== "cube") return;
      swiper2.classNames.push(swiper2.params.containerModifierClass + "cube");
      swiper2.classNames.push(swiper2.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      };
      extend(swiper2.params, overwriteParams);
      extend(swiper2.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate8(swiper2) {
      if (swiper2.params.effect !== "cube") return;
      swiper2.cubeEffect.setTranslate();
    },
    setTransition: function setTransition8(swiper2, duration) {
      if (swiper2.params.effect !== "cube") return;
      swiper2.cubeEffect.setTransition(duration);
    }
  }
};
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
var Flip = {
  setTranslate: function setTranslate9() {
    var swiper2 = this;
    var slides = swiper2.slides, rtl = swiper2.rtlTranslate;
    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var progress = $slideEl[0].progress;
      if (swiper2.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }
      var offset = $slideEl[0].swiperSlideOffset;
      var rotate = -180 * progress;
      var rotateY = rotate;
      var rotateX = 0;
      var tx = -offset;
      var ty = 0;
      if (!swiper2.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (swiper2.params.flipEffect.slideShadows) {
        var shadowBefore = swiper2.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
        var shadowAfter = swiper2.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
        if (shadowBefore.length === 0) {
          shadowBefore = $('<div class="swiper-slide-shadow-' + (swiper2.isHorizontal() ? "left" : "top") + '"></div>');
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = $('<div class="swiper-slide-shadow-' + (swiper2.isHorizontal() ? "right" : "bottom") + '"></div>');
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
      $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
    }
  },
  setTransition: function setTransition9(duration) {
    var swiper2 = this;
    var slides = swiper2.slides, activeIndex = swiper2.activeIndex, $wrapperEl = swiper2.$wrapperEl;
    slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
    if (swiper2.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.eq(activeIndex).transitionEnd(function onTransitionEnd2() {
        if (eventTriggered) return;
        if (!swiper2 || swiper2.destroyed) return;
        eventTriggered = true;
        swiper2.animating = false;
        var triggerEvents = ["webkitTransitionEnd", "transitionend"];
        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
const effectFlip = {
  name: "effect-flip",
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  },
  create: function create12() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      flipEffect: _extends$2({}, Flip)
    });
  },
  on: {
    beforeInit: function beforeInit5(swiper2) {
      if (swiper2.params.effect !== "flip") return;
      swiper2.classNames.push(swiper2.params.containerModifierClass + "flip");
      swiper2.classNames.push(swiper2.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      extend(swiper2.params, overwriteParams);
      extend(swiper2.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate10(swiper2) {
      if (swiper2.params.effect !== "flip") return;
      swiper2.flipEffect.setTranslate();
    },
    setTransition: function setTransition10(swiper2, duration) {
      if (swiper2.params.effect !== "flip") return;
      swiper2.flipEffect.setTransition(duration);
    }
  }
};
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var Coverflow = {
  setTranslate: function setTranslate11() {
    var swiper2 = this;
    var swiperWidth = swiper2.width, swiperHeight = swiper2.height, slides = swiper2.slides, slidesSizesGrid = swiper2.slidesSizesGrid;
    var params = swiper2.params.coverflowEffect;
    var isHorizontal = swiper2.isHorizontal();
    var transform = swiper2.translate;
    var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    var rotate = isHorizontal ? params.rotate : -params.rotate;
    var translate = params.depth;
    for (var i = 0, length = slides.length; i < length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideSize = slidesSizesGrid[i];
      var slideOffset = $slideEl[0].swiperSlideOffset;
      var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
      var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      var translateZ = -translate * Math.abs(offsetMultiplier);
      var stretch = params.stretch;
      if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
      if (Math.abs(translateX) < 1e-3) translateX = 0;
      if (Math.abs(translateY) < 1e-3) translateY = 0;
      if (Math.abs(translateZ) < 1e-3) translateZ = 0;
      if (Math.abs(rotateY) < 1e-3) rotateY = 0;
      if (Math.abs(rotateX) < 1e-3) rotateX = 0;
      if (Math.abs(scale) < 1e-3) scale = 0;
      var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        var $shadowBeforeEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
        var $shadowAfterEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = $('<div class="swiper-slide-shadow-' + (isHorizontal ? "left" : "top") + '"></div>');
          $slideEl.append($shadowBeforeEl);
        }
        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = $('<div class="swiper-slide-shadow-' + (isHorizontal ? "right" : "bottom") + '"></div>');
          $slideEl.append($shadowAfterEl);
        }
        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  },
  setTransition: function setTransition11(duration) {
    var swiper2 = this;
    swiper2.slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
  }
};
const effectCoverflow = {
  name: "effect-coverflow",
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  },
  create: function create13() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      coverflowEffect: _extends$1({}, Coverflow)
    });
  },
  on: {
    beforeInit: function beforeInit6(swiper2) {
      if (swiper2.params.effect !== "coverflow") return;
      swiper2.classNames.push(swiper2.params.containerModifierClass + "coverflow");
      swiper2.classNames.push(swiper2.params.containerModifierClass + "3d");
      swiper2.params.watchSlidesProgress = true;
      swiper2.originalParams.watchSlidesProgress = true;
    },
    setTranslate: function setTranslate12(swiper2) {
      if (swiper2.params.effect !== "coverflow") return;
      swiper2.coverflowEffect.setTranslate();
    },
    setTransition: function setTransition12(swiper2, duration) {
      if (swiper2.params.effect !== "coverflow") return;
      swiper2.coverflowEffect.setTransition(duration);
    }
  }
};
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var Thumbs = {
  init: function init11() {
    var swiper2 = this;
    var thumbsParams = swiper2.params.thumbs;
    if (swiper2.thumbs.initialized) return false;
    swiper2.thumbs.initialized = true;
    var SwiperClass = swiper2.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper2.thumbs.swiper = thumbsParams.swiper;
      extend(swiper2.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      extend(swiper2.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if (isObject(thumbsParams.swiper)) {
      swiper2.thumbs.swiper = new SwiperClass(extend({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false
      }));
      swiper2.thumbs.swiperCreated = true;
    }
    swiper2.thumbs.swiper.$el.addClass(swiper2.params.thumbs.thumbsContainerClass);
    swiper2.thumbs.swiper.on("tap", swiper2.thumbs.onThumbClick);
    return true;
  },
  onThumbClick: function onThumbClick() {
    var swiper2 = this;
    var thumbsSwiper = swiper2.thumbs.swiper;
    if (!thumbsSwiper) return;
    var clickedIndex = thumbsSwiper.clickedIndex;
    var clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && $(clickedSlide).hasClass(swiper2.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
    var slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper2.params.loop) {
      var currentIndex = swiper2.activeIndex;
      if (swiper2.slides.eq(currentIndex).hasClass(swiper2.params.slideDuplicateClass)) {
        swiper2.loopFix();
        swiper2._clientLeft = swiper2.$wrapperEl[0].clientLeft;
        currentIndex = swiper2.activeIndex;
      }
      var prevIndex = swiper2.slides.eq(currentIndex).prevAll('[data-swiper-slide-index="' + slideToIndex + '"]').eq(0).index();
      var nextIndex = swiper2.slides.eq(currentIndex).nextAll('[data-swiper-slide-index="' + slideToIndex + '"]').eq(0).index();
      if (typeof prevIndex === "undefined") slideToIndex = nextIndex;
      else if (typeof nextIndex === "undefined") slideToIndex = prevIndex;
      else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
      else slideToIndex = prevIndex;
    }
    swiper2.slideTo(slideToIndex);
  },
  update: function update2(initial) {
    var swiper2 = this;
    var thumbsSwiper = swiper2.thumbs.swiper;
    if (!thumbsSwiper) return;
    var slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    var autoScrollOffset = swiper2.params.thumbs.autoScrollOffset;
    var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper2.realIndex !== thumbsSwiper.realIndex || useOffset) {
      var currentThumbsIndex = thumbsSwiper.activeIndex;
      var newThumbsIndex;
      var direction;
      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix();
          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        }
        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll('[data-swiper-slide-index="' + swiper2.realIndex + '"]').eq(0).index();
        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll('[data-swiper-slide-index="' + swiper2.realIndex + '"]').eq(0).index();
        if (typeof prevThumbsIndex === "undefined") {
          newThumbsIndex = nextThumbsIndex;
        } else if (typeof nextThumbsIndex === "undefined") {
          newThumbsIndex = prevThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = nextThumbsIndex;
        } else {
          newThumbsIndex = prevThumbsIndex;
        }
        direction = swiper2.activeIndex > swiper2.previousIndex ? "next" : "prev";
      } else {
        newThumbsIndex = swiper2.realIndex;
        direction = newThumbsIndex > swiper2.previousIndex ? "next" : "prev";
      }
      if (useOffset) {
        newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
      }
    }
    var thumbsToActivate = 1;
    var thumbActiveClass = swiper2.params.thumbs.slideThumbActiveClass;
    if (swiper2.params.slidesPerView > 1 && !swiper2.params.centeredSlides) {
      thumbsToActivate = swiper2.params.slidesPerView;
    }
    if (!swiper2.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (var i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children('[data-swiper-slide-index="' + (swiper2.realIndex + i) + '"]').addClass(thumbActiveClass);
      }
    } else {
      for (var _i = 0; _i < thumbsToActivate; _i += 1) {
        thumbsSwiper.slides.eq(swiper2.realIndex + _i).addClass(thumbActiveClass);
      }
    }
  }
};
const thumbs = {
  name: "thumbs",
  params: {
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-container-thumbs"
    }
  },
  create: function create14() {
    var swiper2 = this;
    bindModuleMethods(swiper2, {
      thumbs: _extends({
        swiper: null,
        initialized: false
      }, Thumbs)
    });
  },
  on: {
    beforeInit: function beforeInit7(swiper2) {
      var thumbs2 = swiper2.params.thumbs;
      if (!thumbs2 || !thumbs2.swiper) return;
      swiper2.thumbs.init();
      swiper2.thumbs.update(true);
    },
    slideChange: function slideChange5(swiper2) {
      if (!swiper2.thumbs.swiper) return;
      swiper2.thumbs.update();
    },
    update: function update3(swiper2) {
      if (!swiper2.thumbs.swiper) return;
      swiper2.thumbs.update();
    },
    resize: function resize2(swiper2) {
      if (!swiper2.thumbs.swiper) return;
      swiper2.thumbs.update();
    },
    observerUpdate: function observerUpdate2(swiper2) {
      if (!swiper2.thumbs.swiper) return;
      swiper2.thumbs.update();
    },
    setTransition: function setTransition13(swiper2, duration) {
      var thumbsSwiper = swiper2.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy: function beforeDestroy(swiper2) {
      var thumbsSwiper = swiper2.thumbs.swiper;
      if (!thumbsSwiper) return;
      if (swiper2.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    }
  }
};
const swiper_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A11y: a11y,
  Autoplay,
  Controller: controller,
  EffectCoverflow: effectCoverflow,
  EffectCube: effectCube,
  EffectFade,
  EffectFlip: effectFlip,
  HashNavigation: hashNavigation,
  History: history,
  Keyboard: keyboard,
  Lazy: lazy,
  Mousewheel: mousewheel,
  Navigation,
  Pagination,
  Parallax: parallax,
  Scrollbar,
  Swiper,
  Thumbs: thumbs,
  Virtual,
  Zoom: zoom,
  default: Swiper
}, Symbol.toStringTag, { value: "Module" }));
const GameServices = ({
  gameDownload,
  setGameDownload
}) => {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsxs("div", {
      className: " game-services",
      children: [gameDownload ? /* @__PURE__ */ jsx("div", {
        className: "fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 flex justify-center items-center ",
        style: {
          zIndex: 1e3
        },
        children: /* @__PURE__ */ jsxs("div", {
          className: "h-56 px-10 relative flex justify-center items-center bg-white rounded-md shadow-xl",
          children: [/* @__PURE__ */ jsx("div", {
            className: "absolute top-4 right-4",
            onClick: () => setGameDownload(false),
            children: /* @__PURE__ */ jsx(FaTimes, {
              className: "text-2xl text-green-primary"
            })
          }), /* @__PURE__ */ jsx("p", {
            className: " text-center ",
            children: "The game will be available soon"
          })]
        })
      }) : null, /* @__PURE__ */ jsxs("div", {
        className: " flex flex-col lg:py-10",
        children: [/* @__PURE__ */ jsx("div", {
          className: "flex  justify-center",
          children: /* @__PURE__ */ jsxs("div", {
            className: "px-5 md:px-20 lg:px-0 inline-block text-center",
            children: [/* @__PURE__ */ jsx("h1", {
              className: " smallHeading",
              children: " Our Games"
            }), /* @__PURE__ */ jsxs("h2", {
              className: "heding1",
              children: [" ", "Are you ready for our next challenge?", " "]
            })]
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex lg:flex-row flex-col items-start justify-center py-8",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "w-full lg:w-1/2 flex justify-center items-center  relative",
            children: [/* @__PURE__ */ jsx("img", {
              alt: "game-cart",
              className: "w-4/5 lg:w-full xl:w-4/5",
              src: "/Images/GamingServices/game-cart-webp.webp",
              width: 785,
              height: 693
            }), /* @__PURE__ */ jsx("div", {
              className: "absolute left-1/2 transform -translate-x-1/2 bottom-25 md:bottom-50",
              children: /* @__PURE__ */ jsx(Link, {
                to: "/falling-gems",
                className: "text-base lg:text-lg font-medium px-5 md:px-8 py-2 border-2 border-green-primary hover:bg-white bg-green-primary text-white rounded-full hover:text-green-primary",
                children: "Learn More"
              })
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full lg:w-1/2  py-12 flex items-center justify-center",
            children: /* @__PURE__ */ jsxs("div", {
              className: "mx-auto max-w-small-game-card md:max-w-game-card ",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex relative  bg-green-primary items-center justify-between h-16 rounded-lg",
                children: [/* @__PURE__ */ jsx("p", {
                  className: "text-white text-xl px-10",
                  children: "Falling Gems"
                }), /* @__PURE__ */ jsx("img", {
                  alt: "game-title-icon",
                  className: "w-28 absolute bottom-0 right-0",
                  src: "/Images/GamingServices/game-title-icon-webp.webp",
                  width: 175,
                  height: 120
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "relative bg-white rounded-xl shadow-2xl pt-8 px-8 space-y-5 mt-3",
                children: [/* @__PURE__ */ jsx("p", {
                  className: "text-gray-text text-base md:text-lg",
                  children: "Don't let these precious GEMS FALL! From exciting game levels to gold coins, everything is put up to make you feel good and relax. Catch these gems to score more."
                }), /* @__PURE__ */ jsxs("div", {
                  className: "flex justify-between text-gray-text text-lg",
                  children: [/* @__PURE__ */ jsx("p", {
                    children: "Launch: March 2022"
                  }), /* @__PURE__ */ jsx("p", {
                    children: "Price: free"
                  })]
                }), /* @__PURE__ */ jsxs("div", {
                  className: "flex w-full cursor-pointer",
                  children: [/* @__PURE__ */ jsx("div", {
                    onClick: () => {
                      return setGameDownload(true);
                    },
                    className: "cursor-pointer my-3 mr-3",
                    children: /* @__PURE__ */ jsx("img", {
                      alt: "apple-store",
                      className: "w-full",
                      src: "/Images/GamingServices/apple-store-webp.webp",
                      width: 1084,
                      height: 329
                    })
                  }), /* @__PURE__ */ jsx("button", {
                    onClick: () => {
                      return setGameDownload(true);
                    },
                    className: "cursor-pointer my-3 ml-3",
                    children: /* @__PURE__ */ jsx("img", {
                      alt: "google-play-store",
                      className: "w-full",
                      src: "/Images/GamingServices/google-play-store-webp.webp",
                      width: 1084,
                      height: 329
                    })
                  })]
                })]
              })]
            })
          })]
        })]
      })]
    })
  });
};
const LandingAnimation = ({
  lightHeading,
  boldHeading,
  link,
  img,
  makeRound,
  isActive,
  metaImg,
  threedImage,
  detailLine,
  width,
  height
}) => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  const headingStyles = "lg:py-3 lg:bg-white text-lg sm:text-2xl md:text-4xl xl:text-5xl text-blue-primary";
  return /* @__PURE__ */ jsxs("div", {
    className: "pb-8 relative hidden md:h-screen lg:grid grid-cols-1 lg:grid-cols-3",
    children: [/* @__PURE__ */ jsx("div", {
      className: "order-2 lg:order-1 col-span-1 flex flex-col items-center lg:items-start relative z-10",
      children: /* @__PURE__ */ jsxs(motion.div, {
        initial: {
          marginTop: "5.5rem"
        },
        animate: {
          marginTop: "3.5rem"
        },
        transition: {
          duration: 2
        },
        className: `p-5 lg:p-0 text-center lg:text-left bg-white bg-opacity-80 md:bg-opacity-100 lg:bg-transparent absolute bottom-28 lg:top-1/4 ${metaImg ? "lg:-right-32" : threedImage ? "lg:-right-40 xl:-right-56 " : "lg:-right-40 xl:-right-48"}      } ${isActive ? "block" : "hidden"}  `,
        children: [/* @__PURE__ */ jsx(motion.h1, {
          initial: {
            opacity: 0,
            translateY: "-2.5rem",
            translateX: "5rem"
          },
          animate: {
            opacity: 1,
            translateY: "1rem",
            translateX: 0
          },
          transition: {
            duration: 1
          },
          className: `${headingStyles} capitalize font-medium lg:pr-20 `,
          children: lightHeading
        }), /* @__PURE__ */ jsx(motion.p, {
          initial: {
            opacity: 0,
            translateY: "-2.5rem",
            translateX: "3rem"
          },
          animate: {
            opacity: 1,
            translateY: "1rem",
            translateX: 0
          },
          transition: {
            duration: 1,
            delay: 1
          },
          className: `${headingStyles} font-extrabold lg:mr-10  `,
          children: boldHeading
        }), /* @__PURE__ */ jsxs(motion.p, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          transition: {
            duration: 1,
            delay: 2
          },
          className: `mt-8 flex flex-col  ${metaImg ? "lg:flex-col xl:flex-row xl:items-center items-start  " : "lg:flex-row items-center"}  text-gray-text text-lg py-4`,
          children: [/* @__PURE__ */ jsx("div", {
            className: `w-10 border-b-2 border-green-primary ${metaImg ? "lg:mr-0 xl:mr-8  " : "mr-8"}  `
          }), detailLine]
        }), rendered && /* @__PURE__ */ jsx(motion.div, {
          initial: {
            borderRadius: 0
          },
          animate: {
            borderRadius: "100%"
          },
          className: "w-full flex justify-center lg:justify-start my-5",
          children: /* @__PURE__ */ jsx(Link, {
            to: link,
            className: " border-2 border-green-primary hover:bg-green-primary hover:text-white rounded-full text-green-primary",
            children: /* @__PURE__ */ jsx(motion.p, {
              initial: {
                opacity: 0,
                translateX: 100
              },
              animate: {
                opacity: 1,
                translateX: 0
              },
              transition: {
                duration: 1,
                delay: 2
              },
              className: "text-base lg:text-lg font-medium px-5 md:px-8 py-2",
              children: "Discover more"
            })
          })
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: `order-1 relative lg:order-2 col-span-2 h-70 lg:h-full bg-cover bg-no-repeat`,
      style: {
        backgroundImage: `url(${img})`,
        backgroundPosition: "right",
        backgroundPositionX: "30%",
        borderBottomLeftRadius: "60px"
        // backgroundPositionY:"20%"
      },
      children: /* @__PURE__ */ jsx("img", {
        width,
        height,
        alt: "dots",
        src: "/Images/landing-page/dots(2)-webp.webp",
        className: "imgAnimation",
        style: {
          zIndex: "-1"
        }
      })
    })]
  });
};
var swiperReact_cjs = {};
var swiper = {};
var getParams = {};
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(swiper_esm);
var utils = {};
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  utils.__esModule = true;
  utils.isObject = isObject2;
  utils.extend = extend2;
  utils.needsNavigation = needsNavigation;
  utils.needsPagination = needsPagination;
  utils.needsScrollbar = needsScrollbar;
  utils.uniqueClasses = uniqueClasses;
  function isObject2(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }
  function extend2(target, src) {
    var noExtend = ["__proto__", "constructor", "prototype"];
    Object.keys(src).filter(function(key) {
      return noExtend.indexOf(key) < 0;
    }).forEach(function(key) {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (isObject2(src[key]) && isObject2(target[key]) && Object.keys(src[key]).length > 0) {
        if (src[key].__swiper__) target[key] = src[key];
        else extend2(target[key], src[key]);
      } else {
        target[key] = src[key];
      }
    });
  }
  function needsNavigation(params) {
    if (params === void 0) {
      params = {};
    }
    return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
  }
  function needsPagination(params) {
    if (params === void 0) {
      params = {};
    }
    return params.pagination && typeof params.pagination.el === "undefined";
  }
  function needsScrollbar(params) {
    if (params === void 0) {
      params = {};
    }
    return params.scrollbar && typeof params.scrollbar.el === "undefined";
  }
  function uniqueClasses(classNames) {
    if (classNames === void 0) {
      classNames = "";
    }
    var classes = classNames.split(" ").map(function(c) {
      return c.trim();
    }).filter(function(c) {
      return !!c;
    });
    var unique = [];
    classes.forEach(function(c) {
      if (unique.indexOf(c) < 0) unique.push(c);
    });
    return unique.join(" ");
  }
  return utils;
}
var paramsList = {};
var hasRequiredParamsList;
function requireParamsList() {
  if (hasRequiredParamsList) return paramsList;
  hasRequiredParamsList = 1;
  paramsList.__esModule = true;
  paramsList.paramsList = void 0;
  var paramsList$1 = [
    "init",
    "_direction",
    "touchEventsTarget",
    "initialSlide",
    "_speed",
    "cssMode",
    "updateOnWindowResize",
    "resizeObserver",
    "nested",
    "focusableElements",
    "_enabled",
    "_width",
    "_height",
    "preventInteractionOnTransition",
    "userAgent",
    "url",
    "_edgeSwipeDetection",
    "_edgeSwipeThreshold",
    "_freeMode",
    "_freeModeMomentum",
    "_freeModeMomentumRatio",
    "_freeModeMomentumBounce",
    "_freeModeMomentumBounceRatio",
    "_freeModeMomentumVelocityRatio",
    "_freeModeSticky",
    "_freeModeMinimumVelocity",
    "_autoHeight",
    "setWrapperSize",
    "virtualTranslate",
    "_effect",
    "breakpoints",
    "_spaceBetween",
    "_slidesPerView",
    "_slidesPerColumn",
    "_slidesPerColumnFill",
    "_slidesPerGroup",
    "_slidesPerGroupSkip",
    "_centeredSlides",
    "_centeredSlidesBounds",
    "_slidesOffsetBefore",
    "_slidesOffsetAfter",
    "normalizeSlideIndex",
    "_centerInsufficientSlides",
    "_watchOverflow",
    "roundLengths",
    "touchRatio",
    "touchAngle",
    "simulateTouch",
    "_shortSwipes",
    "_longSwipes",
    "longSwipesRatio",
    "longSwipesMs",
    "_followFinger",
    "allowTouchMove",
    "_threshold",
    "touchMoveStopPropagation",
    "touchStartPreventDefault",
    "touchStartForcePreventDefault",
    "touchReleaseOnEdges",
    "uniqueNavElements",
    "_resistance",
    "_resistanceRatio",
    "_watchSlidesProgress",
    "_watchSlidesVisibility",
    "_grabCursor",
    "preventClicks",
    "preventClicksPropagation",
    "_slideToClickedSlide",
    "_preloadImages",
    "updateOnImagesReady",
    "_loop",
    "_loopAdditionalSlides",
    "_loopedSlides",
    "_loopFillGroupWithBlank",
    "loopPreventsSlide",
    "_allowSlidePrev",
    "_allowSlideNext",
    "_swipeHandler",
    "_noSwiping",
    "noSwipingClass",
    "noSwipingSelector",
    "passiveListeners",
    "containerModifierClass",
    "slideClass",
    "slideBlankClass",
    "slideActiveClass",
    "slideDuplicateActiveClass",
    "slideVisibleClass",
    "slideDuplicateClass",
    "slideNextClass",
    "slideDuplicateNextClass",
    "slidePrevClass",
    "slideDuplicatePrevClass",
    "wrapperClass",
    "runCallbacksOnInit",
    "observer",
    "observeParents",
    "observeSlideChildren",
    // modules
    "a11y",
    "autoplay",
    "_controller",
    "coverflowEffect",
    "cubeEffect",
    "fadeEffect",
    "flipEffect",
    "hashNavigation",
    "history",
    "keyboard",
    "lazy",
    "mousewheel",
    "_navigation",
    "_pagination",
    "parallax",
    "_scrollbar",
    "_thumbs",
    "virtual",
    "zoom"
  ];
  paramsList.paramsList = paramsList$1;
  return paramsList;
}
var hasRequiredGetParams;
function requireGetParams() {
  if (hasRequiredGetParams) return getParams;
  hasRequiredGetParams = 1;
  getParams.__esModule = true;
  getParams.getParams = getParams$1;
  var _core = _interopRequireDefault(require$$1);
  var _utils = /* @__PURE__ */ requireUtils();
  var _paramsList = /* @__PURE__ */ requireParamsList();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function getParams$1(obj) {
    if (obj === void 0) {
      obj = {};
    }
    var params = {
      on: {}
    };
    var events = {};
    var passedParams = {};
    (0, _utils.extend)(params, _core.default.defaults);
    (0, _utils.extend)(params, _core.default.extendedDefaults);
    params._emitClasses = true;
    params.init = false;
    var rest = {};
    var allowedParams = _paramsList.paramsList.map(function(key) {
      return key.replace(/_/, "");
    });
    Object.keys(obj).forEach(function(key) {
      if (allowedParams.indexOf(key) >= 0) {
        if ((0, _utils.isObject)(obj[key])) {
          params[key] = {};
          passedParams[key] = {};
          (0, _utils.extend)(params[key], obj[key]);
          (0, _utils.extend)(passedParams[key], obj[key]);
        } else {
          params[key] = obj[key];
          passedParams[key] = obj[key];
        }
      } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === "function") {
        events["" + key[2].toLowerCase() + key.substr(3)] = obj[key];
      } else {
        rest[key] = obj[key];
      }
    });
    ["navigation", "pagination", "scrollbar"].forEach(function(key) {
      if (params[key] === true) params[key] = {};
      if (params[key] === false) delete params[key];
    });
    return {
      params,
      passedParams,
      rest,
      events
    };
  }
  return getParams;
}
var initSwiper = {};
var hasRequiredInitSwiper;
function requireInitSwiper() {
  if (hasRequiredInitSwiper) return initSwiper;
  hasRequiredInitSwiper = 1;
  initSwiper.__esModule = true;
  initSwiper.initSwiper = initSwiper$1;
  initSwiper.mountSwiper = mountSwiper;
  var _core = _interopRequireDefault(require$$1);
  var _utils = /* @__PURE__ */ requireUtils();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function initSwiper$1(swiperParams) {
    return new _core.default(swiperParams);
  }
  function mountSwiper(_ref, swiperParams) {
    var el = _ref.el, nextEl = _ref.nextEl, prevEl = _ref.prevEl, paginationEl = _ref.paginationEl, scrollbarEl = _ref.scrollbarEl, swiper2 = _ref.swiper;
    if ((0, _utils.needsNavigation)(swiperParams) && nextEl && prevEl) {
      swiper2.params.navigation.nextEl = nextEl;
      swiper2.originalParams.navigation.nextEl = nextEl;
      swiper2.params.navigation.prevEl = prevEl;
      swiper2.originalParams.navigation.prevEl = prevEl;
    }
    if ((0, _utils.needsPagination)(swiperParams) && paginationEl) {
      swiper2.params.pagination.el = paginationEl;
      swiper2.originalParams.pagination.el = paginationEl;
    }
    if ((0, _utils.needsScrollbar)(swiperParams) && scrollbarEl) {
      swiper2.params.scrollbar.el = scrollbarEl;
      swiper2.originalParams.scrollbar.el = scrollbarEl;
    }
    swiper2.init(el);
  }
  return initSwiper;
}
var loop = {};
var hasRequiredLoop;
function requireLoop() {
  if (hasRequiredLoop) return loop;
  hasRequiredLoop = 1;
  loop.__esModule = true;
  loop.calcLoopedSlides = calcLoopedSlides;
  loop.renderLoop = renderLoop;
  var _react = _interopRequireDefault(React);
  var _core = _interopRequireDefault(require$$1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function calcLoopedSlides(slides, swiperParams) {
    var slidesPerViewParams = swiperParams.slidesPerView;
    if (swiperParams.breakpoints) {
      var breakpoint = _core.default.prototype.getBreakpoint(swiperParams.breakpoints);
      var breakpointOnlyParams = breakpoint in swiperParams.breakpoints ? swiperParams.breakpoints[breakpoint] : void 0;
      if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
        slidesPerViewParams = breakpointOnlyParams.slidesPerView;
      }
    }
    var loopedSlides = Math.ceil(parseFloat(swiperParams.loopedSlides || slidesPerViewParams, 10));
    loopedSlides += swiperParams.loopAdditionalSlides;
    if (loopedSlides > slides.length) {
      loopedSlides = slides.length;
    }
    return loopedSlides;
  }
  function renderLoop(swiper2, slides, swiperParams) {
    var modifiedSlides = slides.map(function(child, index) {
      return /* @__PURE__ */ _react.default.cloneElement(child, {
        swiper: swiper2,
        "data-swiper-slide-index": index
      });
    });
    function duplicateSlide(child, index, position) {
      return /* @__PURE__ */ _react.default.cloneElement(child, {
        key: child.key + "-duplicate-" + index + "-" + position,
        className: (child.props.className || "") + " " + swiperParams.slideDuplicateClass
      });
    }
    if (swiperParams.loopFillGroupWithBlank) {
      var blankSlidesNum = swiperParams.slidesPerGroup - modifiedSlides.length % swiperParams.slidesPerGroup;
      if (blankSlidesNum !== swiperParams.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankSlide = /* @__PURE__ */ _react.default.createElement("div", {
            className: swiperParams.slideClass + " " + swiperParams.slideBlankClass
          });
          modifiedSlides.push(blankSlide);
        }
      }
    }
    if (swiperParams.slidesPerView === "auto" && !swiperParams.loopedSlides) {
      swiperParams.loopedSlides = modifiedSlides.length;
    }
    var loopedSlides = calcLoopedSlides(modifiedSlides, swiperParams);
    var prependSlides = [];
    var appendSlides = [];
    modifiedSlides.forEach(function(child, index) {
      if (index < loopedSlides) {
        appendSlides.push(duplicateSlide(child, index, "prepend"));
      }
      if (index < modifiedSlides.length && index >= modifiedSlides.length - loopedSlides) {
        prependSlides.push(duplicateSlide(child, index, "append"));
      }
    });
    if (swiper2) {
      swiper2.loopedSlides = loopedSlides;
    }
    return [].concat(prependSlides, modifiedSlides, appendSlides);
  }
  return loop;
}
var getChangedParams = {};
var hasRequiredGetChangedParams;
function requireGetChangedParams() {
  if (hasRequiredGetChangedParams) return getChangedParams;
  hasRequiredGetChangedParams = 1;
  getChangedParams.__esModule = true;
  getChangedParams.getChangedParams = getChangedParams$1;
  var _paramsList = /* @__PURE__ */ requireParamsList();
  var _utils = /* @__PURE__ */ requireUtils();
  function getChangedParams$1(swiperParams, oldParams, children, oldChildren) {
    var keys = [];
    if (!oldParams) return keys;
    var addKey = function addKey2(key) {
      if (keys.indexOf(key) < 0) keys.push(key);
    };
    var oldChildrenKeys = oldChildren.map(function(child) {
      return child.key;
    });
    var childrenKeys = children.map(function(child) {
      return child.key;
    });
    if (oldChildrenKeys.join("") !== childrenKeys.join("")) addKey("children");
    if (oldChildren.length !== children.length) addKey("children");
    var watchParams = _paramsList.paramsList.filter(function(key) {
      return key[0] === "_";
    }).map(function(key) {
      return key.replace(/_/, "");
    });
    watchParams.forEach(function(key) {
      if (key in swiperParams && key in oldParams) {
        if ((0, _utils.isObject)(swiperParams[key]) && (0, _utils.isObject)(oldParams[key])) {
          var newKeys = Object.keys(swiperParams[key]);
          var oldKeys = Object.keys(oldParams[key]);
          if (newKeys.length !== oldKeys.length) {
            addKey(key);
          } else {
            newKeys.forEach(function(newKey) {
              if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
                addKey(key);
              }
            });
            oldKeys.forEach(function(oldKey) {
              if (swiperParams[key][oldKey] !== oldParams[key][oldKey]) addKey(key);
            });
          }
        } else if (swiperParams[key] !== oldParams[key]) {
          addKey(key);
        }
      }
    });
    return keys;
  }
  return getChangedParams;
}
var getChildren = {};
var hasRequiredGetChildren;
function requireGetChildren() {
  if (hasRequiredGetChildren) return getChildren;
  hasRequiredGetChildren = 1;
  getChildren.__esModule = true;
  getChildren.getChildren = getChildren$1;
  var _react = _interopRequireDefault(React);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function processChildren(c) {
    var slides = [];
    _react.default.Children.toArray(c).forEach(function(child) {
      if (child.type && child.type.displayName === "SwiperSlide") {
        slides.push(child);
      } else if (child.props && child.props.children) {
        processChildren(child.props.children).forEach(function(slide) {
          return slides.push(slide);
        });
      }
    });
    return slides;
  }
  function getChildren$1(c) {
    var slides = [];
    var slots = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": []
    };
    _react.default.Children.toArray(c).forEach(function(child) {
      if (child.type && child.type.displayName === "SwiperSlide") {
        slides.push(child);
      } else if (child.props && child.props.slot && slots[child.props.slot]) {
        slots[child.props.slot].push(child);
      } else if (child.props && child.props.children) {
        var foundSlides = processChildren(child.props.children);
        if (foundSlides.length > 0) {
          foundSlides.forEach(function(slide) {
            return slides.push(slide);
          });
        } else {
          slots["container-end"].push(child);
        }
      } else {
        slots["container-end"].push(child);
      }
    });
    return {
      slides,
      slots
    };
  }
  return getChildren;
}
var updateSwiper = {};
var hasRequiredUpdateSwiper;
function requireUpdateSwiper() {
  if (hasRequiredUpdateSwiper) return updateSwiper;
  hasRequiredUpdateSwiper = 1;
  updateSwiper.__esModule = true;
  updateSwiper.updateSwiper = updateSwiper$1;
  var _utils = /* @__PURE__ */ requireUtils();
  function updateSwiper$1(_ref) {
    var swiper2 = _ref.swiper, slides = _ref.slides, passedParams = _ref.passedParams, changedParams = _ref.changedParams, nextEl = _ref.nextEl, prevEl = _ref.prevEl, scrollbarEl = _ref.scrollbarEl, paginationEl = _ref.paginationEl;
    var updateParams = changedParams.filter(function(key) {
      return key !== "children" && key !== "direction";
    });
    var currentParams = swiper2.params, pagination = swiper2.pagination, navigation = swiper2.navigation, scrollbar = swiper2.scrollbar, virtual2 = swiper2.virtual, thumbs2 = swiper2.thumbs;
    var needThumbsInit;
    var needControllerInit;
    var needPaginationInit;
    var needScrollbarInit;
    var needNavigationInit;
    if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper) {
      needThumbsInit = true;
    }
    if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
      needControllerInit = true;
    }
    if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
      needPaginationInit = true;
    }
    if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
      needScrollbarInit = true;
    }
    if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
      needNavigationInit = true;
    }
    var destroyModule = function destroyModule2(mod) {
      if (!swiper2[mod]) return;
      swiper2[mod].destroy();
      if (mod === "navigation") {
        currentParams[mod].prevEl = void 0;
        currentParams[mod].nextEl = void 0;
        swiper2[mod].prevEl = void 0;
        swiper2[mod].nextEl = void 0;
      } else {
        currentParams[mod].el = void 0;
        swiper2[mod].el = void 0;
      }
    };
    updateParams.forEach(function(key) {
      if ((0, _utils.isObject)(currentParams[key]) && (0, _utils.isObject)(passedParams[key])) {
        (0, _utils.extend)(currentParams[key], passedParams[key]);
      } else {
        var newValue = passedParams[key];
        if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
          if (newValue === false) {
            destroyModule(key);
          }
        } else {
          currentParams[key] = passedParams[key];
        }
      }
    });
    if (changedParams.includes("children") && virtual2 && currentParams.virtual.enabled) {
      virtual2.slides = slides;
      virtual2.update(true);
    } else if (changedParams.includes("children") && swiper2.lazy && swiper2.params.lazy.enabled) {
      swiper2.lazy.load();
    }
    if (needThumbsInit) {
      var initialized = thumbs2.init();
      if (initialized) thumbs2.update(true);
    }
    if (needControllerInit) {
      swiper2.controller.control = currentParams.controller.control;
    }
    if (needPaginationInit) {
      if (paginationEl) currentParams.pagination.el = paginationEl;
      pagination.init();
      pagination.render();
      pagination.update();
    }
    if (needScrollbarInit) {
      if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
      scrollbar.init();
      scrollbar.updateSize();
      scrollbar.setTranslate();
    }
    if (needNavigationInit) {
      if (nextEl) currentParams.navigation.nextEl = nextEl;
      if (prevEl) currentParams.navigation.prevEl = prevEl;
      navigation.init();
      navigation.update();
    }
    if (changedParams.includes("allowSlideNext")) {
      swiper2.allowSlideNext = passedParams.allowSlideNext;
    }
    if (changedParams.includes("allowSlidePrev")) {
      swiper2.allowSlidePrev = passedParams.allowSlidePrev;
    }
    if (changedParams.includes("direction")) {
      swiper2.changeDirection(passedParams.direction, false);
    }
    swiper2.update();
  }
  return updateSwiper;
}
var virtual = {};
var hasRequiredVirtual;
function requireVirtual() {
  if (hasRequiredVirtual) return virtual;
  hasRequiredVirtual = 1;
  virtual.__esModule = true;
  virtual.renderVirtual = renderVirtual;
  virtual.updateOnVirtualData = updateOnVirtualData;
  var _react = _interopRequireDefault(React);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function updateOnVirtualData(swiper2) {
    if (!swiper2 || swiper2.destroyed || !swiper2.params.virtual || swiper2.params.virtual && !swiper2.params.virtual.enabled) return;
    swiper2.updateSlides();
    swiper2.updateProgress();
    swiper2.updateSlidesClasses();
    if (swiper2.lazy && swiper2.params.lazy.enabled) {
      swiper2.lazy.load();
    }
    if (swiper2.parallax && swiper2.params.parallax && swiper2.params.parallax.enabled) {
      swiper2.parallax.setTranslate();
    }
  }
  function renderVirtual(swiper2, slides, virtualData) {
    var _ref;
    if (!virtualData) return null;
    var style = swiper2.isHorizontal() ? (_ref = {}, _ref[swiper2.rtlTranslate ? "right" : "left"] = virtualData.offset + "px", _ref) : {
      top: virtualData.offset + "px"
    };
    return slides.filter(function(child, index) {
      return index >= virtualData.from && index <= virtualData.to;
    }).map(function(child) {
      return /* @__PURE__ */ _react.default.cloneElement(child, {
        swiper: swiper2,
        style
      });
    });
  }
  return virtual;
}
var useIsomorphicLayoutEffect = {};
var hasRequiredUseIsomorphicLayoutEffect;
function requireUseIsomorphicLayoutEffect() {
  if (hasRequiredUseIsomorphicLayoutEffect) return useIsomorphicLayoutEffect;
  hasRequiredUseIsomorphicLayoutEffect = 1;
  useIsomorphicLayoutEffect.__esModule = true;
  useIsomorphicLayoutEffect.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect$1;
  var _react = React;
  function useIsomorphicLayoutEffect$1(callback, deps) {
    if (typeof window === "undefined") return (0, _react.useEffect)(callback, deps);
    return (0, _react.useLayoutEffect)(callback, deps);
  }
  return useIsomorphicLayoutEffect;
}
var hasRequiredSwiper;
function requireSwiper() {
  if (hasRequiredSwiper) return swiper;
  hasRequiredSwiper = 1;
  swiper.__esModule = true;
  swiper.Swiper = void 0;
  var _react = _interopRequireWildcard(React);
  var _getParams2 = /* @__PURE__ */ requireGetParams();
  var _initSwiper = /* @__PURE__ */ requireInitSwiper();
  var _utils = /* @__PURE__ */ requireUtils();
  var _loop = /* @__PURE__ */ requireLoop();
  var _getChangedParams = /* @__PURE__ */ requireGetChangedParams();
  var _getChildren2 = /* @__PURE__ */ requireGetChildren();
  var _updateSwiper = /* @__PURE__ */ requireUpdateSwiper();
  var _virtual = /* @__PURE__ */ requireVirtual();
  var _useIsomorphicLayoutEffect = /* @__PURE__ */ requireUseIsomorphicLayoutEffect();
  var _excluded = ["className", "tag", "wrapperTag", "children", "onSwiper"];
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
    var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard(obj, nodeInterop) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _extends2() {
    _extends2 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  var Swiper2 = /* @__PURE__ */ (0, _react.forwardRef)(function(_temp, externalElRef) {
    var _ref = _temp === void 0 ? {} : _temp, className = _ref.className, _ref$tag = _ref.tag, Tag = _ref$tag === void 0 ? "div" : _ref$tag, _ref$wrapperTag = _ref.wrapperTag, WrapperTag = _ref$wrapperTag === void 0 ? "div" : _ref$wrapperTag, children = _ref.children, onSwiper = _ref.onSwiper, rest = _objectWithoutPropertiesLoose(_ref, _excluded);
    var eventsAssigned = false;
    var _useState = (0, _react.useState)("swiper-container"), containerClasses = _useState[0], setContainerClasses = _useState[1];
    var _useState2 = (0, _react.useState)(null), virtualData = _useState2[0], setVirtualData = _useState2[1];
    var _useState3 = (0, _react.useState)(false), breakpointChanged = _useState3[0], setBreakpointChanged = _useState3[1];
    var initializedRef = (0, _react.useRef)(false);
    var swiperElRef = (0, _react.useRef)(null);
    var swiperRef = (0, _react.useRef)(null);
    var oldPassedParamsRef = (0, _react.useRef)(null);
    var oldSlides = (0, _react.useRef)(null);
    var nextElRef = (0, _react.useRef)(null);
    var prevElRef = (0, _react.useRef)(null);
    var paginationElRef = (0, _react.useRef)(null);
    var scrollbarElRef = (0, _react.useRef)(null);
    var _getParams = (0, _getParams2.getParams)(rest), swiperParams = _getParams.params, passedParams = _getParams.passedParams, restProps = _getParams.rest, events = _getParams.events;
    var _getChildren = (0, _getChildren2.getChildren)(children), slides = _getChildren.slides, slots = _getChildren.slots;
    var onBeforeBreakpoint = function onBeforeBreakpoint2() {
      setBreakpointChanged(!breakpointChanged);
    };
    Object.assign(swiperParams.on, {
      _containerClasses: function _containerClasses(swiper2, classes) {
        setContainerClasses(classes);
      }
    });
    if (!swiperElRef.current) {
      Object.assign(swiperParams.on, events);
      eventsAssigned = true;
      swiperRef.current = (0, _initSwiper.initSwiper)(swiperParams);
      swiperRef.current.loopCreate = function() {
      };
      swiperRef.current.loopDestroy = function() {
      };
      if (swiperParams.loop) {
        swiperRef.current.loopedSlides = (0, _loop.calcLoopedSlides)(slides, swiperParams);
      }
      if (swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
        swiperRef.current.virtual.slides = slides;
        var extendWith = {
          cache: false,
          renderExternal: setVirtualData,
          renderExternalUpdate: false
        };
        (0, _utils.extend)(swiperRef.current.params.virtual, extendWith);
        (0, _utils.extend)(swiperRef.current.originalParams.virtual, extendWith);
      }
    }
    if (swiperRef.current) {
      swiperRef.current.on("_beforeBreakpoint", onBeforeBreakpoint);
    }
    var attachEvents = function attachEvents2() {
      if (eventsAssigned || !events || !swiperRef.current) return;
      Object.keys(events).forEach(function(eventName) {
        swiperRef.current.on(eventName, events[eventName]);
      });
    };
    var detachEvents = function detachEvents2() {
      if (!events || !swiperRef.current) return;
      Object.keys(events).forEach(function(eventName) {
        swiperRef.current.off(eventName, events[eventName]);
      });
    };
    (0, _react.useEffect)(function() {
      return function() {
        if (swiperRef.current) swiperRef.current.off("_beforeBreakpoint", onBeforeBreakpoint);
      };
    });
    (0, _react.useEffect)(function() {
      if (!initializedRef.current && swiperRef.current) {
        swiperRef.current.emitSlidesClasses();
        initializedRef.current = true;
      }
    });
    (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function() {
      if (externalElRef) {
        externalElRef.current = swiperElRef.current;
      }
      if (!swiperElRef.current) return;
      (0, _initSwiper.mountSwiper)({
        el: swiperElRef.current,
        nextEl: nextElRef.current,
        prevEl: prevElRef.current,
        paginationEl: paginationElRef.current,
        scrollbarEl: scrollbarElRef.current,
        swiper: swiperRef.current
      }, swiperParams);
      if (onSwiper) onSwiper(swiperRef.current);
      return function() {
        if (swiperRef.current && !swiperRef.current.destroyed) {
          swiperRef.current.destroy(true, false);
        }
      };
    }, []);
    (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function() {
      attachEvents();
      var changedParams = (0, _getChangedParams.getChangedParams)(passedParams, oldPassedParamsRef.current, slides, oldSlides.current);
      oldPassedParamsRef.current = passedParams;
      oldSlides.current = slides;
      if (changedParams.length && swiperRef.current && !swiperRef.current.destroyed) {
        (0, _updateSwiper.updateSwiper)({
          swiper: swiperRef.current,
          slides,
          passedParams,
          changedParams,
          nextEl: nextElRef.current,
          prevEl: prevElRef.current,
          scrollbarEl: scrollbarElRef.current,
          paginationEl: paginationElRef.current
        });
      }
      return function() {
        detachEvents();
      };
    });
    (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function() {
      (0, _virtual.updateOnVirtualData)(swiperRef.current);
    }, [virtualData]);
    function renderSlides() {
      if (swiperParams.virtual) {
        return (0, _virtual.renderVirtual)(swiperRef.current, slides, virtualData);
      }
      if (!swiperParams.loop || swiperRef.current && swiperRef.current.destroyed) {
        return slides.map(function(child) {
          return /* @__PURE__ */ _react.default.cloneElement(child, {
            swiper: swiperRef.current
          });
        });
      }
      return (0, _loop.renderLoop)(swiperRef.current, slides, swiperParams);
    }
    return /* @__PURE__ */ _react.default.createElement(Tag, _extends2({
      ref: swiperElRef,
      className: (0, _utils.uniqueClasses)("" + containerClasses + (className ? " " + className : ""))
    }, restProps), slots["container-start"], (0, _utils.needsNavigation)(swiperParams) && /* @__PURE__ */ _react.default.createElement(_react.default.Fragment, null, /* @__PURE__ */ _react.default.createElement("div", {
      ref: prevElRef,
      className: "swiper-button-prev"
    }), /* @__PURE__ */ _react.default.createElement("div", {
      ref: nextElRef,
      className: "swiper-button-next"
    })), (0, _utils.needsScrollbar)(swiperParams) && /* @__PURE__ */ _react.default.createElement("div", {
      ref: scrollbarElRef,
      className: "swiper-scrollbar"
    }), (0, _utils.needsPagination)(swiperParams) && /* @__PURE__ */ _react.default.createElement("div", {
      ref: paginationElRef,
      className: "swiper-pagination"
    }), /* @__PURE__ */ _react.default.createElement(WrapperTag, {
      className: "swiper-wrapper"
    }, slots["wrapper-start"], renderSlides(), slots["wrapper-end"]), slots["container-end"]);
  });
  swiper.Swiper = Swiper2;
  Swiper2.displayName = "Swiper";
  return swiper;
}
var swiperSlide = {};
var hasRequiredSwiperSlide;
function requireSwiperSlide() {
  if (hasRequiredSwiperSlide) return swiperSlide;
  hasRequiredSwiperSlide = 1;
  swiperSlide.__esModule = true;
  swiperSlide.SwiperSlide = void 0;
  var _react = _interopRequireWildcard(React);
  var _utils = /* @__PURE__ */ requireUtils();
  var _useIsomorphicLayoutEffect = /* @__PURE__ */ requireUseIsomorphicLayoutEffect();
  var _excluded = ["tag", "children", "className", "swiper", "zoom", "virtualIndex"];
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
    var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard(obj, nodeInterop) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _extends2() {
    _extends2 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  var SwiperSlide = /* @__PURE__ */ (0, _react.forwardRef)(function(_temp, externalRef) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$tag = _ref.tag, Tag = _ref$tag === void 0 ? "div" : _ref$tag, children = _ref.children, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, swiper2 = _ref.swiper, zoom2 = _ref.zoom, virtualIndex = _ref.virtualIndex, rest = _objectWithoutPropertiesLoose(_ref, _excluded);
    var slideElRef = (0, _react.useRef)(null);
    var _useState = (0, _react.useState)("swiper-slide"), slideClasses = _useState[0], setSlideClasses = _useState[1];
    function updateClasses(swiper3, el, classNames) {
      if (el === slideElRef.current) {
        setSlideClasses(classNames);
      }
    }
    (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function() {
      if (externalRef) {
        externalRef.current = slideElRef.current;
      }
      if (!slideElRef.current || !swiper2) {
        return;
      }
      if (swiper2.destroyed) {
        if (slideClasses !== "swiper-slide") {
          setSlideClasses("swiper-slide");
        }
        return;
      }
      swiper2.on("_slideClass", updateClasses);
      return function() {
        if (!swiper2) return;
        swiper2.off("_slideClass", updateClasses);
      };
    });
    (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function() {
      if (swiper2 && slideElRef.current) {
        setSlideClasses(swiper2.getSlideClasses(slideElRef.current));
      }
    }, [swiper2]);
    var slideData;
    if (typeof children === "function") {
      slideData = {
        isActive: slideClasses.indexOf("swiper-slide-active") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-active") >= 0,
        isVisible: slideClasses.indexOf("swiper-slide-visible") >= 0,
        isDuplicate: slideClasses.indexOf("swiper-slide-duplicate") >= 0,
        isPrev: slideClasses.indexOf("swiper-slide-prev") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-prev") >= 0,
        isNext: slideClasses.indexOf("swiper-slide-next") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-next") >= 0
      };
    }
    var renderChildren = function renderChildren2() {
      return typeof children === "function" ? children(slideData) : children;
    };
    return /* @__PURE__ */ _react.default.createElement(Tag, _extends2({
      ref: slideElRef,
      className: (0, _utils.uniqueClasses)("" + slideClasses + (className ? " " + className : "")),
      "data-swiper-slide-index": virtualIndex
    }, rest), zoom2 ? /* @__PURE__ */ _react.default.createElement("div", {
      className: "swiper-zoom-container",
      "data-swiper-zoom": typeof zoom2 === "number" ? zoom2 : void 0
    }, renderChildren()) : renderChildren());
  });
  swiperSlide.SwiperSlide = SwiperSlide;
  SwiperSlide.displayName = "SwiperSlide";
  return swiperSlide;
}
var hasRequiredSwiperReact_cjs;
function requireSwiperReact_cjs() {
  if (hasRequiredSwiperReact_cjs) return swiperReact_cjs;
  hasRequiredSwiperReact_cjs = 1;
  swiperReact_cjs.__esModule = true;
  var _swiper = /* @__PURE__ */ requireSwiper();
  swiperReact_cjs.Swiper = _swiper.Swiper;
  var _swiperSlide = /* @__PURE__ */ requireSwiperSlide();
  swiperReact_cjs.SwiperSlide = _swiperSlide.SwiperSlide;
  return swiperReact_cjs;
}
var swiperReact_cjsExports = /* @__PURE__ */ requireSwiperReact_cjs();
const Tablet = () => {
  const [slideForTablet, setSlideForTablet] = useState(0);
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  const handleSlideChangeForTablet = (e) => {
    console.log("e.realIndex", e.realIndex);
    setSlideForTablet((old) => {
      let copy = old + 1;
      if (copy === 4) {
        return 0;
      } else {
        return copy;
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs(
      swiperReact_cjsExports.Swiper,
      {
        spaceBetween: 0,
        slidesPerView: 2,
        allowTouchMove: false,
        autoplay: {
          delay: 3e3,
          duration: 400,
          disableOnInteraction: false
        },
        slideToClickedSlide: true,
        effect: "fade",
        className: " w-full ",
        onSlideChange: (e) => handleSlideChangeForTablet(e),
        onSwiper: (swiper2) => console.log(swiper2),
        children: [/* @__PURE__ */ jsx(swiperReact_cjsExports.SwiperSlide, {
          children: ({
            isActive
          }) => /* @__PURE__ */ jsx(AnimatePresence, {
            exitBeforeEnter: true,
            children: /* @__PURE__ */ jsx(LandingAnimationForMobile$1, {
              isActive,
              lightHeading: "Product Development &",
              boldHeading: "Software Consultancy",
              link: "/services" + OUR_SERVICES_HASH_LINK,
              img: "/Images/landing-page/tablet-webp.webp",
              detailLine: "for CTOs and Tech Managers"
            })
          })
        }), /* @__PURE__ */ jsx(swiperReact_cjsExports.SwiperSlide, {
          children: ({
            isActive
          }) => /* @__PURE__ */ jsx(AnimatePresence, {
            exitBeforeEnter: true,
            children: /* @__PURE__ */ jsx(LandingAnimationForMobile$1, {
              isActive,
              lightHeading: "Create your Own",
              boldHeading: "Immersive Experience",
              img: "/Images/landing-page/tablet-2nd-webp.webp",
              link: "/metaverse",
              detailLine: "for Marketing agencies and corporates"
            })
          })
        }), /* @__PURE__ */ jsx(swiperReact_cjsExports.SwiperSlide, {
          children: ({
            isActive
          }) => /* @__PURE__ */ jsx(AnimatePresence, {
            exitBeforeEnter: true,
            children: /* @__PURE__ */ jsx(LandingAnimationForMobile$1, {
              isActive,
              lightHeading: "Increase conversion rate",
              boldHeading: "with 3D models",
              link: "/3d-modelling",
              img: "/Images/landing-page/tablet3rd-webp.webp",
              detailLine: "for key Decision Makers"
            })
          })
        }), /* @__PURE__ */ jsx(swiperReact_cjsExports.SwiperSlide, {
          children: ({
            isActive
          }) => /* @__PURE__ */ jsx(AnimatePresence, {
            exitBeforeEnter: true,
            children: /* @__PURE__ */ jsx(LandingAnimationForMobile$1, {
              isActive,
              lightHeading: " Product Development &",
              boldHeading: "QA Testing",
              link: "services/software-quality-assurance",
              img: "/Images/landing-page/tablet4-th-webp.webp",
              detailLine: "for Quality Assurance heads"
            })
          })
        })]
      }
    ), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-row md:flex-col justify-center items-center absolute w-full md:w-auto z-50 md:top-1/2 md:right-0 ",
      children: [/* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(BsDot, {
          className: `text-lg sm:text-4xl ${slideForTablet === 0 ? "text-green-500" : "text-gray-400  md:text-white  "} `
        })
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(BsDot, {
          className: `text-lg sm:text-4xl ${slideForTablet === 1 ? "text-green-500" : "text-gray-400  md:text-white  "} `
        })
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(BsDot, {
          className: `text-lg sm:text-4xl ${slideForTablet === 2 ? "text-green-500" : "text-gray-400  md:text-white  "} `
        })
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(BsDot, {
          className: `text-lg sm:text-4xl ${slideForTablet === 3 ? "text-green-500" : "text-gray-400  md:text-white  "} `
        })
      })]
    })]
  });
};
const LandingAnimationForMobile$1 = ({
  lightHeading,
  boldHeading,
  link,
  img,
  isActive,
  detailLine
}) => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: " bg-cover bg-no-repeat h-70 relative  ",
      style: {
        backgroundImage: `url(${img})`
      }
    }), /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx(LandingSectionContent$1, {
        lightHeading,
        boldHeading,
        link,
        isActive,
        detailLine
      })
    })]
  });
};
const LandingSectionContent$1 = ({
  headingStyles: headingStyles2,
  lightHeading,
  boldHeading,
  link,
  isActive,
  detailLine
}) => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("div", {
      className: `flex flex-col items-center  ${isActive ? "block" : "hidden"}  `,
      children: /* @__PURE__ */ jsxs("div", {
        className: " w-4/5 mx-auto p-5 text-center lg:text-left  bg-white absolute md:-bottom-10 -bottom-8",
        children: [/* @__PURE__ */ jsx("h3", {
          className: `${headingStyles2} font-medium `,
          children: lightHeading
        }), /* @__PURE__ */ jsx("p", {
          className: `${headingStyles2} font-extrabold  `,
          children: boldHeading
        }), /* @__PURE__ */ jsxs("p", {
          className: "flex flex-col gap-4 lg:flex-row items-center text-gray-text text-lg pt-4",
          children: [/* @__PURE__ */ jsx("div", {
            className: " w-10 border-b-2 border-green-primary mx-auto"
          }), detailLine]
        }), rendered && /* @__PURE__ */ jsx(Button, {
          text: "Discover more",
          link
        })]
      })
    })
  });
};
const Mobile = () => {
  const [slideForMobile, setSlideForMobile] = useState(0);
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  const handleSlideChangeForMobile = (e) => {
    console.log("e.realIndex", e.realIndex);
    setSlideForMobile((old) => {
      let copy = old + 1;
      if (copy === 4) {
        return 0;
      } else {
        return copy;
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs(
      swiperReact_cjsExports.Swiper,
      {
        spaceBetween: 0,
        slidesPerView: 2,
        allowTouchMove: false,
        autoplay: {
          delay: 3e3,
          duration: 400,
          disableOnInteraction: false
        },
        slideToClickedSlide: true,
        effect: "fade",
        className: " w-full ",
        onSlideChange: (e) => handleSlideChangeForMobile(e),
        onSwiper: (swiper2) => console.log(swiper2),
        children: [/* @__PURE__ */ jsx(swiperReact_cjsExports.SwiperSlide, {
          children: ({
            isActive
          }) => /* @__PURE__ */ jsx(AnimatePresence, {
            exitBeforeEnter: true,
            children: /* @__PURE__ */ jsx(LandingAnimationForMobile, {
              isActive,
              lightHeading: "Product Development &",
              boldHeading: "Software Consultancy",
              link: "/services" + OUR_SERVICES_HASH_LINK,
              img: "/Images/landing-page/1st-webp.webp",
              detailLine: "for CTOs and Tech Managers"
            })
          })
        }), /* @__PURE__ */ jsx(swiperReact_cjsExports.SwiperSlide, {
          children: ({
            isActive
          }) => /* @__PURE__ */ jsx(AnimatePresence, {
            exitBeforeEnter: true,
            children: /* @__PURE__ */ jsx(LandingAnimationForMobile, {
              isActive,
              lightHeading: "Create your Own",
              boldHeading: "Immersive Experience",
              img: "/Images/landing-page/2nd-webp.webp",
              link: "/metaverse",
              detailLine: "for Marketing agencies and corporates"
            })
          })
        }), /* @__PURE__ */ jsx(swiperReact_cjsExports.SwiperSlide, {
          children: ({
            isActive
          }) => /* @__PURE__ */ jsx(AnimatePresence, {
            exitBeforeEnter: true,
            children: /* @__PURE__ */ jsx(LandingAnimationForMobile, {
              isActive,
              lightHeading: "Increase conversion rate",
              boldHeading: "with 3D models",
              link: "/3d-modelling",
              img: "/Images/landing-page/3rd-webp.webp",
              detailLine: "for key Decision Makers"
            })
          })
        }), /* @__PURE__ */ jsx(swiperReact_cjsExports.SwiperSlide, {
          children: ({
            isActive
          }) => /* @__PURE__ */ jsx(AnimatePresence, {
            exitBeforeEnter: true,
            children: /* @__PURE__ */ jsx(LandingAnimationForMobile, {
              isActive,
              lightHeading: " Product Development &",
              boldHeading: "QA Testing",
              link: "services/software-quality-assurance",
              img: "/Images/landing-page/4th-webp.webp",
              detailLine: "for Quality Assurance heads"
            })
          })
        })]
      }
    ), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-row md:flex-col justify-center items-center absolute w-full md:w-auto z-50 md:top-1/2 md:right-0 ",
      children: [/* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(BsDot, {
          className: `text-lg sm:text-4xl ${slideForMobile === 0 ? "text-green-500" : "text-gray-400  md:text-white  "} `
        })
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(BsDot, {
          className: `text-lg sm:text-4xl ${slideForMobile === 1 ? "text-green-500" : "text-gray-400  md:text-white  "} `
        })
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(BsDot, {
          className: `text-lg sm:text-4xl ${slideForMobile === 2 ? "text-green-500" : "text-gray-400  md:text-white  "} `
        })
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(BsDot, {
          className: `text-lg sm:text-4xl ${slideForMobile === 3 ? "text-green-500" : "text-gray-400  md:text-white  "} `
        })
      })]
    })]
  });
};
const LandingAnimationForMobile = ({
  lightHeading,
  boldHeading,
  link,
  img,
  isActive,
  detailLine
}) => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: " bg-cover bg-no-repeat h-70 relative  ",
      style: {
        backgroundImage: `url(${img})`
      }
    }), /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx(LandingSectionContent, {
        lightHeading,
        boldHeading,
        link,
        isActive,
        detailLine
      })
    })]
  });
};
const LandingSectionContent = ({
  headingStyles: headingStyles2,
  lightHeading,
  boldHeading,
  link,
  isActive,
  detailLine
}) => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("div", {
      className: `flex flex-col items-center  ${isActive ? "block" : "hidden"}  `,
      children: /* @__PURE__ */ jsxs("div", {
        className: " w-4/5 mx-auto p-5 text-center lg:text-left  bg-white absolute md:-bottom-10 -bottom-8",
        children: [/* @__PURE__ */ jsx("h3", {
          className: `${headingStyles2} font-medium `,
          children: lightHeading
        }), /* @__PURE__ */ jsx("p", {
          className: `${headingStyles2} font-extrabold  `,
          children: boldHeading
        }), /* @__PURE__ */ jsxs("p", {
          className: "flex flex-col gap-4 lg:flex-row items-center text-gray-text text-lg pt-4",
          children: [/* @__PURE__ */ jsx("div", {
            className: " w-10 border-b-2 border-green-primary mx-auto"
          }), detailLine]
        }), rendered && /* @__PURE__ */ jsx(Button, {
          text: "Discover more",
          link
        })]
      })
    })
  });
};
const MainPageContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  Swiper.use([Scrollbar, Navigation, Autoplay, Virtual, Pagination, EffectFade]);
  const handleSlideChange = () => {
    setCurrentSlide((old) => {
      let copy = old + 1;
      if (copy === 4) {
        return 0;
      } else {
        return copy;
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "relative",
    children: [/* @__PURE__ */ jsxs(
      swiperReact_cjsExports.Swiper,
      {
        spaceBetween: 0,
        slidesPerView: 2,
        allowTouchMove: false,
        autoplay: {
          delay: 5e3,
          duration: 400
          // disableOnInteraction: false,
        },
        slideToClickedSlide: true,
        effect: "fade",
        className: " w-full hidden lg:block ",
        onSlideChange: (e) => handleSlideChange(),
        onSwiper: (swiper2) => console.log(swiper2),
        children: [/* @__PURE__ */ jsx(swiperReact_cjsExports.SwiperSlide, {
          children: ({
            isActive
          }) => /* @__PURE__ */ jsx(AnimatePresence, {
            exitBeforeEnter: true,
            children: /* @__PURE__ */ jsx(LandingAnimation, {
              lightHeading: " Product Development &",
              boldHeading: "Software Consultancy",
              link: "/services" + OUR_SERVICES_HASH_LINK,
              width: 1200,
              height: 750,
              img: "/Images/landing-page/rounded-corner-webp.webp",
              isActive,
              detailLine: "for CTOs and Tech Managers"
            })
          })
        }), /* @__PURE__ */ jsx(swiperReact_cjsExports.SwiperSlide, {
          children: ({
            isActive
          }) => /* @__PURE__ */ jsx(AnimatePresence, {
            exitBeforeEnter: true,
            children: /* @__PURE__ */ jsx(LandingAnimation, {
              lightHeading: "Create your Own",
              boldHeading: "Immersive Experience",
              link: "/metaverse",
              img: "/Images/landing-page/meta-webp.webp",
              width: 1200,
              height: 750,
              makeRound: true,
              isActive,
              metaImg: true,
              detailLine: "for Marketing agencies and corporates"
            })
          })
        }), /* @__PURE__ */ jsx(swiperReact_cjsExports.SwiperSlide, {
          children: ({
            isActive
          }) => /* @__PURE__ */ jsx(AnimatePresence, {
            exitBeforeEnter: true,
            children: /* @__PURE__ */ jsx(LandingAnimation, {
              lightHeading: "Increase conversion rate",
              boldHeading: "with 3D models",
              link: "/3d-modelling",
              img: "/Images/landing-page/3d-modeling-webp.webp",
              width: 1200,
              height: 750,
              makeRound: true,
              isActive,
              threedImage: true,
              detailLine: "for key Decision Makers"
            })
          })
        }), /* @__PURE__ */ jsx(swiperReact_cjsExports.SwiperSlide, {
          children: ({
            isActive
          }) => /* @__PURE__ */ jsx(AnimatePresence, {
            exitBeforeEnter: true,
            children: /* @__PURE__ */ jsx(LandingAnimation, {
              lightHeading: " Product Development &",
              boldHeading: "QA Testing",
              link: "services/software-quality-assurance",
              img: "/Images/landing-page/qa-testing1-webp.webp",
              width: 1200,
              height: 750,
              isActive,
              detailLine: "for Quality Assurance heads"
            })
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: " hidden lg:block flex flex-col items-center absolute top-1/2 right-0 z-50",
          children: [/* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx(BsDot, {
              className: `text-4xl ${currentSlide === 0 ? "text-green-500" : "text-white"} `
            })
          }), /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx(BsDot, {
              className: `text-4xl ${currentSlide === 1 ? "text-green-500" : "text-white"} `
            })
          }), /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx(BsDot, {
              className: `text-4xl ${currentSlide === 2 ? "text-green-500" : "text-white"} `
            })
          }), /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx(BsDot, {
              className: `text-4xl ${currentSlide === 3 ? "text-green-500" : "text-white"} `
            })
          })]
        })]
      }
    ), /* @__PURE__ */ jsx("div", {
      className: "hidden md:block lg:hidden",
      children: /* @__PURE__ */ jsx(Tablet, {})
    }), /* @__PURE__ */ jsx("div", {
      className: "block md:hidden md:pt-10",
      children: /* @__PURE__ */ jsx(Mobile, {})
    })]
  });
};
const ServiceCard = (props) => {
  return /* @__PURE__ */ jsxs(Link, {
    to: props.detailLink,
    className: `${props.margin} w-4/5  md:h-40 lg:h-40 md:grid md:grid-cols-5 lg:grid-cols-1 xl:grid-cols-3 justify-center items-center lg:items-start rounded-xl shadow-md hover:shadow-none border-1 border-gray-light py-5 px-5 md:px-3 cursor-pointer my-8  transition duration-500 bg-white`,
    children: [/* @__PURE__ */ jsx("div", {
      className: " ",
      children: /* @__PURE__ */ jsx("img", {
        width: props.width,
        height: props.height,
        className: "w-2/6 md:w-4/6 lg:w-1/6 xl:w-4/6 mx-auto md:mx-0",
        alt: getImageALt(props.img),
        src: props.img
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "col-span-4 xl:col-span-2 text-blue-primary mt-5 md:mt-0 text-center md:text-left ",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-base md:text-lg lg:text-base 2xl:text-lg leading-tighter font-bold mb-1",
        children: props.title
      }), /* @__PURE__ */ jsx("p", {
        className: "text-gray-text text-sm  md:text-lg lg:text-sm font-normal",
        children: props.desc
      })]
    })]
  });
};
const HomePageServices = () => {
  const refOne = useRef(null);
  const lengthRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [number, setNumber] = useState(0);
  const {
    scrollY
  } = useViewportScroll();
  const path = lengthRef.current;
  let scrollVal;
  if (path) {
    path.getTotalLength();
  }
  useEffect(() => {
    scrollVal = refOne.current.scrollHeight;
  }, []);
  scrollY.onChange((value) => {
    if (value > scrollVal - 500) {
      setScrolled(true);
    } else if (value < scrollVal - 500) {
      setScrolled(false);
    }
  });
  return /* @__PURE__ */ jsxs("div", {
    ref: refOne,
    className: "mt-20 md:mt-0 lg:mt-10 relative",
    children: [/* @__PURE__ */ jsx("svg", {
      className: "svg",
      version: "1.1",
      id: "arrow",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "-200px",
      width: "100%",
      height: "900",
      viewBox: "0 0 1200 1200",
      children: /* @__PURE__ */ jsxs("g", {
        children: [/* @__PURE__ */ jsx(motion.path, {
          // id="firstArrow"
          ref: lengthRef,
          animate: scrolled ? {
            strokeDashoffset: 0
          } : {
            strokeDashoffset: 1806.31591796875
          },
          transition: {
            duration: 3,
            ease: "easeInOut"
          },
          className: "dashed",
          strokeDasharray: "1806.31591796875",
          d: "\r M 810.2,304.1\r c 150.3-16,251.7-14.6,293.9,69.2\r c25.4,50.4,29.5,131.4-13.3,175.5\r c-30.5,31.5-78.4,37.9-87.8,33.2\r c-29.3-14.6-14.6-58.5,70.5-58.5\r c30.6,0,49.2,77.1-31.9,146.3\r C862.5,822.5,493.8,869.3,272.9,869.3\r c-45.2,0-70.5,26.6-78.5,37.2"
        }), /* @__PURE__ */ jsx("path", {
          className: "plain",
          d: "\r M 810.2,304.1\r c 150.3-16,251.7-14.6,293.9,69.2c25.4,50.4,29.5,131.4-13.3,175.5\r c-30.5,31.5-78.4,37.9-87.8,33.2\r c-29.3-14.6-14.6-58.5,70.5-58.5\r c30.6,0,49.2,77.1-31.9,146.3\r C862.5,822.5,493.8,869.3,272.9,869.3\r c-45.2,0-70.5,26.6-78.5,37.2"
        })]
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "text-center text-blue-primary tracking-wide mb-12 mx-5 md:mt-40 mt-20",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "smallHeading",
        children: "Complete package"
      }), /* @__PURE__ */ jsx("h2", {
        className: "heding1",
        children: "From Product Design to Software Development"
      }), /* @__PURE__ */ jsx("p", {
        className: "text-base text-gray-text my-2",
        children: "Astute Softwares is assuring continuous delivery for your growth"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col lg:flex-row w-full xl:w-10/12  mx-auto ",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "serviceDiv  flex flex-col items-center",
        children: [/* @__PURE__ */ jsx(ServiceCard, {
          margin: "mx-5 md:mx-20 lg:ml-20 lg:-mr-10",
          title: "Custom Software Development",
          desc: "High performing software applications that grow with your business.",
          img: "/Images/LandingPageImage/software dev-webp.webp",
          width: 535,
          height: 496,
          detailLink: "/services/custom-software-development"
        }), /* @__PURE__ */ jsx(ServiceCard, {
          margin: "mx-5 md:mx-20 lg:ml-10",
          title: "Digital Transformation",
          desc: "Team up with Astute Softwares to accelerate your journey to the cloud.",
          img: "/Images/LandingPageImage/Transformation-webp.webp",
          width: 234,
          height: 233,
          detailLink: "/services/digital-transformation-services"
        }), /* @__PURE__ */ jsx(ServiceCard, {
          margin: "mx-5 md:mx-20 lg:ml-20 lg:-mr-10",
          title: "Mobile Application Development",
          desc: "Let’s build apps for your everyday use.",
          img: "/Images/LandingPageImage/app dev-webp.webp",
          width: 181,
          height: 207,
          detailLink: "/services/mobile-application-development"
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "flex items-center justify-center serviceImgDiv",
        children: /* @__PURE__ */ jsx("img", {
          className: "w-4/5 md:w-3/5 lg:w-full",
          alt: "services-img-resized",
          src: "/Images/LandingPageImage/services-img-resized-webp.webp",
          width: 312,
          height: 282
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "serviceDiv  flex flex-col items-center",
        children: [/* @__PURE__ */ jsx(ServiceCard, {
          margin: "mx-5 md:mx-20 lg:mr-20 lg:-ml-10",
          title: "QA and Testing Services",
          desc: "Our Quality Assurance team ensures your code is impeccable.",
          img: "/Images/LandingPageImage/QA-webp.webp",
          width: 459,
          height: 378,
          detailLink: "/services/software-quality-assurance"
        }), /* @__PURE__ */ jsx(ServiceCard, {
          margin: "mx-5 md:mx-20 lg:mr-10",
          title: "UX and UI Design",
          desc: "We create things, your users will love.",
          img: "/Images/LandingPageImage/UI-UX-webp.webp",
          width: 626,
          height: 515,
          detailLink: "/services/ui-and-ux-design"
        }), /* @__PURE__ */ jsx(ServiceCard, {
          margin: "mx-5 md:mx-20 lg:mr-20 lg:-ml-10",
          title: "Application Maintenance & Support",
          desc: "Our support team is there for you 24/7, helping you high available for your clients.",
          img: "/Images/LandingPageImage/app maintenance-webp.webp",
          width: 133,
          height: 84,
          detailLink: "/services/maintenance-and-support"
        })]
      })]
    })]
  });
};
const HomePageLanguageCard = ({
  title,
  image,
  desc,
  width,
  height
}) => {
  const languageTitle = "font-extrabold text-xl md:text-2xl text-font-primary";
  return /* @__PURE__ */ jsx("div", {
    className: "h-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "card",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container text-center flex flex-col h-56 justify-center items-center ",
        children: [/* @__PURE__ */ jsx("img", {
          width,
          height,
          className: "object-contain h-1/5 w-full",
          src: image,
          alt: getImageALt(image)
        }), /* @__PURE__ */ jsx("h3", {
          className: languageTitle,
          children: title
        }), /* @__PURE__ */ jsx("p", {
          className: "w-10/12 pb-6 text-base font-medium text-gray-text",
          children: desc
        })]
      })
    })
  });
};
function LanguagePage() {
  const languageTitle = "font-extrabold text-xl md:text-2xl text-font-primary";
  const [scrolled, setScrolled] = useState(false);
  const [number, setNumber] = useState(0);
  const {
    scrollY
  } = useViewportScroll();
  useEffect(() => {
    const path = document.getElementById("thirdArrow");
    if (path) {
      path.getTotalLength();
    }
    scrollY.onChange((value) => {
      if (value >= 2947) {
        setScrolled(true);
      } else if (value < 2947) {
        setScrolled(false);
      }
    });
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "relative",
    children: [/* @__PURE__ */ jsxs("svg", {
      className: "svg",
      version: "1.1",
      id: "arrow3",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "1200",
      viewBox: "-50 200 1200 1200",
      children: [/* @__PURE__ */ jsx(motion.path, {
        id: "thirdArrow",
        className: "dashed",
        animate: scrolled ? {
          strokeDashoffset: 0
        } : {
          strokeDashoffset: 3790
        },
        transition: {
          duration: 3,
          ease: "easeInOut"
        },
        strokeDasharray: "3790",
        d: "M-340,181.9 \r c120,0-40,70.3+99.9,193 \r s150,185.9,203.7,225 \r s98,161,105.7,193.2 \r s62.6,160.3,445.5,133.3 \r c218-16.9,246.5-69.3,330.9-67.4 \r c57.7,1.3,145.4-5.6,265.4,10.5 \r c257.1,96.5,234.8,80,626.7,996.4"
        //  d="M-31,181.9c0,0-40,70.3-19.9,193s170,175.9,203.7,225s98,161,105.7,193.2s62.6,278.3,465.5,183.3
        //     c118-16.9,246.5-69.3,330.9-67.4c57.7,1.3,145.4-1.6,185.4,24.5c147.1,96.5,134.8,233,226.7,266.4"
      }), /* @__PURE__ */ jsx("path", {
        className: "plain",
        d: "M-340,181.9 \r c120,0-40,70.3+99.9,193 \r s150,185.9,203.7,225 \r s98,161,105.7,193.2 \r s62.6,160.3,445.5,133.3 \r c218-16.9,246.5-69.3,330.9-67.4 \r c57.7,1.3,145.4-5.6,265.4,10.5 \r c257.1,96.5,234.8,80,626.7,996.4"
        //  d="M-31,181.9c0,0-40,70.3-19.9,193s170,175.9,203.7,225s98,161,105.7,193.2s62.6,278.3,465.5,183.3
        //     c118-16.9,246.5-69.3,330.9-67.4c57.7,1.3,145.4-1.6,185.4,24.5c147.1,96.5,134.8,233,226.7,266.4"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col bg-no-repeat h-full mb-16 relative languageBg  ",
      style: {
        backgroundImage: "url('/Images/languageAssets/backpattern-webp.webp')"
      },
      children: [/* @__PURE__ */ jsx("div", {
        className: " flex flex-col  language-page-top-padding ",
        children: /* @__PURE__ */ jsx("div", {
          className: "flex  justify-center",
          children: /* @__PURE__ */ jsxs("div", {
            className: " inline-block text-center",
            children: [/* @__PURE__ */ jsx("h1", {
              className: " smallHeading",
              children: " Technologies "
            }), /* @__PURE__ */ jsxs("h2", {
              className: "heding1",
              children: [" ", "All your favorite technologies at one place", " "]
            })]
          })
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "flex flex-row justify-center pt-10 mrgin-5-ptg",
        children: /* @__PURE__ */ jsxs("div", {
          className: " language-grid-style  w-11/12",
          style: {
            zIndex: 10
          },
          children: [/* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx(HomePageLanguageCard, {
              image: "/Images/landing-page-assets/c_logo-webp.webp",
              width: 1600,
              height: 1600,
              title: "C++ / C#",
              desc: "High performance web applications that grow with your bussiness"
            })
          }), /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx(HomePageLanguageCard, {
              image: "/Images/landing-page-assets/Django_Logo-webp.webp",
              width: 254,
              height: 110,
              title: "Django",
              desc: "Python web framework that encourages rapid development"
            })
          }), /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx(HomePageLanguageCard, {
              image: "/Images/landing-page-assets/React_icon-webp.webp",
              width: 128,
              height: 110,
              title: "React",
              desc: "User-centred JavaScript framework for crafting real-time interfaces"
            })
          }), /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx(HomePageLanguageCard, {
              image: "/Images/landing-page-assets/kotlin_logo-webp.webp",
              width: 112,
              height: 114,
              title: "Kotline",
              desc: "Writing better android apps faster with Kotlin "
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: " items-center grid grid-rows-2 gap-y-8",
            children: [/* @__PURE__ */ jsx("div", {
              className: "h-full",
              children: /* @__PURE__ */ jsx("div", {
                className: "card",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-row text-center items-center justify-between px-8 py-6 h-28",
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: languageTitle,
                    children: "Angular"
                  }), /* @__PURE__ */ jsx("img", {
                    className: "object-contain w-1/6 h-full",
                    src: "/Images/landing-page-assets/angular_icon-webp.webp",
                    width: 118,
                    height: 126,
                    alt: "angular"
                    //   width="35px"
                    //   height="35px"
                  })]
                })
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "h-full",
              children: /* @__PURE__ */ jsx("div", {
                className: "card",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-row text-center items-center justify-between px-8 py-6 h-28",
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: languageTitle,
                    children: "Laravel"
                  }), /* @__PURE__ */ jsx("img", {
                    className: "object-contain w-1/6 h-full",
                    src: "/Images/landing-page-assets/l-webp.webp",
                    width: 128,
                    height: 128,
                    alt: "laravel"
                    //   width="35px"
                    //   height="35px"
                  })]
                })
              })
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: " items-center grid grid-rows-2 gap-y-8",
            children: [/* @__PURE__ */ jsx("div", {
              className: "h-full",
              children: /* @__PURE__ */ jsx("div", {
                className: "card",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-row text-center items-center justify-between px-8 py-6 h-28",
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: languageTitle,
                    children: "Node.js"
                  }), /* @__PURE__ */ jsx("img", {
                    className: "object-contain w-1/6 h-full",
                    src: "/Images/landing-page-assets/nodeJs_logo-webp.webp",
                    width: 192,
                    height: 190,
                    alt: "node"
                    //   width="50px"
                    //   height="50px"
                  })]
                })
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "h-full",
              children: /* @__PURE__ */ jsx("div", {
                className: "card",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-row text-center items-center justify-between px-8 py-6 h-28",
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: languageTitle,
                    children: "Vue JS"
                  }), /* @__PURE__ */ jsx("img", {
                    className: "object-contain w-1/6 h-full",
                    src: "/Images/landing-page-assets/vuejs_logo-webp.webp",
                    width: 300,
                    height: 259,
                    alt: "vue"
                    //   width="50px"
                    //   height="50px"
                  })]
                })
              })
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: " items-center grid gap-y-8",
            children: /* @__PURE__ */ jsx("div", {
              className: "h-full",
              children: /* @__PURE__ */ jsx("div", {
                className: "card",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-row text-center items-center justify-between px-8 py-6 h-28",
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: languageTitle,
                    children: "Swift"
                  }), /* @__PURE__ */ jsx("img", {
                    className: "object-contain w-1/6 h-full",
                    src: "/Images/landing-page-assets/swift_logo-webp.webp",
                    width: 116,
                    height: 116,
                    alt: "swift"
                    //   width="50px"
                    //   height="50px"
                  })]
                })
              })
            })
          }), /* @__PURE__ */ jsx("div", {
            className: " items-center grid gap-y-8",
            children: /* @__PURE__ */ jsx("div", {
              className: "h-full",
              children: /* @__PURE__ */ jsx("div", {
                className: "card",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-row text-center items-center justify-between px-8 py-6 h-28",
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: languageTitle,
                    children: "Java"
                  }), /* @__PURE__ */ jsx("img", {
                    className: "object-contain w-1/6 h-full",
                    src: "/Images/landing-page-assets/Java_logo-webp.webp",
                    width: 78,
                    height: 144,
                    alt: "Java"
                    //   width="50px"
                    //   height="50px"
                  })]
                })
              })
            })
          }), /* @__PURE__ */ jsx("div", {
            className: " items-center grid gap-y-8",
            children: /* @__PURE__ */ jsx("div", {
              className: "h-full",
              children: /* @__PURE__ */ jsx("div", {
                className: "card",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-row text-center items-center justify-between px-8 py-6 h-28",
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: languageTitle,
                    children: "Flutter"
                  }), /* @__PURE__ */ jsx("img", {
                    className: "object-contain w-1/6 h-full",
                    src: "/Images/landing-page-assets/flutter-webp.webp",
                    width: 88,
                    height: 112,
                    alt: "flutter"
                    //   width="50px"
                    //   height="50px"
                  })]
                })
              })
            })
          })]
        })
      })]
    })]
  });
}
const Consultation = () => {
  const [scrolled, setScrolled] = useState(false);
  const {
    scrollY
  } = useViewportScroll();
  const refLast = useRef(null);
  useEffect(() => {
    const path = document.getElementById("arrowFour");
    if (path) {
      path.getTotalLength();
    }
    refLast.current.scrollHeight;
  }, []);
  scrollY.onChange((value) => {
    if (value > 2690) {
      setScrolled(true);
    } else if (value < 2690) {
      setScrolled(false);
    }
  });
  return /* @__PURE__ */ jsxs("div", {
    ref: refLast,
    className: " relative md:pt-28",
    style: {
      zIndex: "2",
      backgroundColor: "rgb(250,250,250)"
    },
    children: [/* @__PURE__ */ jsxs("svg", {
      className: "svg",
      version: "1.1",
      id: "arrow4",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: "1200",
      height: "1200",
      viewBox: "0 0 1200 1200",
      children: [/* @__PURE__ */ jsx(motion.path, {
        id: "arrowFour",
        animate: scrolled ? {
          strokeDashoffset: 0
        } : {
          strokeDashoffset: 639.8660888671875
        },
        transition: {
          duration: 1,
          ease: "easeInOut"
        },
        className: "dashed",
        strokeDasharray: "639.8660888671875",
        d: "M737.2,607.8c-18,31.7-41.3,62.6-72.4,92.5c-101.4,97.3-532.6,12.5-446.8,145"
      }), /* @__PURE__ */ jsx("path", {
        className: "plain",
        d: "M737.2,607.8c-18,31.7-41.3,62.6-72.4,92.5c-101.4,97.3-532.6,12.5-446.8,145"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "h-100 hidden md:flex justify-center consultationDiv relative ",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "innerDiv text-center text-blue-primary tracking-wide mb-5 absolute",
        style: {
          zIndex: "4"
        },
        children: [/* @__PURE__ */ jsx("p", {
          className: "smallHeading",
          children: "Is digital important for your business?"
        }), /* @__PURE__ */ jsx("h3", {
          className: "text-3xl md:text-4xl 2xl:text-5xl font-extrabold my-3 mb-10",
          children: "Build it with Astute Softwares"
        }), /* @__PURE__ */ jsx(Link, {
          to: "/contact-us",
          className: " px-8 py-4 border-2  border-green-primary bg-green-primary rounded-2xl text-white  font-bold my-5 cursor-pointer",
          children: "Book free Consultation"
        })]
      }), /* @__PURE__ */ jsx("img", {
        className: "absolute aiIcon",
        alt: "AI Pattern",
        src: "/Images/LandingPageImage/AI Pattern-webp.webp",
        width: 900,
        height: 845,
        style: {}
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "py-10 h-96 block md:hidden relative",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "text-center",
        children: [/* @__PURE__ */ jsx("p", {
          className: "smallHeading",
          children: "Is software important for your business?"
        }), /* @__PURE__ */ jsx("h3", {
          className: "text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-extrabold my-2 text-blue-primary",
          children: "Build it with Astute Softwares"
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-10",
          children: /* @__PURE__ */ jsx(Link, {
            to: "/contact-us",
            className: "px-5 py-4 border-2 border-green-primary bg-green-primary rounded-2xl text-white  font-bold cursor-pointer",
            children: "Book free Consultation"
          })
        })]
      }), /* @__PURE__ */ jsx("img", {
        className: " absolute bottom-0 left-1/3 w-full",
        alt: "AI Pattern-resized",
        src: "/Images/LandingPageImage/AI Pattern-resized-webp.webp",
        width: 450,
        height: 423,
        style: {
          zIndex: "-1"
        }
      })]
    })]
  });
};
const SeoServiceCard = ({
  title,
  desc,
  link,
  first,
  active,
  img,
  setActiveCard
}) => {
  const handleHover = () => {
    setActiveCard(false);
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Link, {
      to: link,
      className: `h-full seo-card  relative ${first === true ? active ? "seo-active-card" : null : null} `,
      onMouseEnter: handleHover,
      children: /* @__PURE__ */ jsx("div", {
        className: "bg-no-repeat bg-left-top bg-image-top h-full",
        children: /* @__PURE__ */ jsxs("div", {
          className: "bg-no-repeat h-full bg-right-bottom bg-image-bottom",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "container text-center items-center ",
            children: [/* @__PURE__ */ jsx("img", {
              className: "inline-block py-10",
              src: img,
              alt: getImageALt(img),
              width: "150px",
              height: "150px"
            }), /* @__PURE__ */ jsx("h3", {
              className: " font-extrabold text-lg text-font-primary",
              children: title
            }), /* @__PURE__ */ jsx("p", {
              className: "padding-detail-text pb-6 text-sm text-gray-text",
              style: {
                paddingBottom: "50px"
              },
              children: desc
            })]
          }), /* @__PURE__ */ jsx(Link, {
            to: link,
            type: "button",
            children: /* @__PURE__ */ jsxs("div", {
              className: "cursor-pointer btn-seo label-1  items-center justify-center bg-green-primary  absolute button-position-seo",
              id: "header-estimate-button",
              children: ["Discover more", /* @__PURE__ */ jsx("span", {
                className: "ml-2 text-xl text-white",
                children: /* @__PURE__ */ jsx(FaArrowCircleRight, {})
              })]
            })
          })]
        })
      })
    })
  });
};
function SEOServices() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [number, setNumber] = useState(0);
  const ref = useRef();
  const {
    scrollY
  } = useViewportScroll();
  scrollY.onChange((value) => {
    if (value > 1e3) {
      setScrolled(true);
    } else if (value < 1e3) {
      setScrolled(false);
    }
    if (value > 1787 && window.innerWidth > 768) {
      setActiveCard("1");
    }
  });
  return /* @__PURE__ */ jsx("div", {
    ref,
    className: " top-padding",
    children: /* @__PURE__ */ jsxs("div", {
      className: "h-full my-10  bg-no-repeat bg-left-top relative leftPatternSize  ",
      style: {
        backgroundImage: "url('/Images/serviceAssets/section2/left_pattern-webp.webp')"
      },
      children: [/* @__PURE__ */ jsxs("svg", {
        className: "svg",
        version: "1.1",
        id: "arrow2",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "110%",
        height: "1100",
        viewBox: "0 0 1200 1200",
        children: [/* @__PURE__ */ jsxs("g", {
          children: [/* @__PURE__ */ jsx("polygon", {
            className: "path",
            points: "-303.1,1152.2 -301.5,1188.2 -270.9,1164.4 -289.9,1163.1 	"
          }), /* @__PURE__ */ jsx("polygon", {
            className: "path",
            points: "-301.5,1188.2 -289.9,1163.1 -303.1,1152.2 	"
          })]
        }), /* @__PURE__ */ jsx(motion.path, {
          id: "dashedPath",
          animate: scrolled ? {
            strokeDashoffset: 0
          } : {
            strokeDashoffset: 3773.508056640625
          },
          transition: {
            duration: 3,
            ease: "easeInOut"
          },
          className: "dashed",
          strokeDasharray: "3773.508056640625",
          d: "M577.2,149.3c-4,29.5-100.1,127,93.1,290c85.4,72.1,567.5,211.6,645.3,226.8c162.4,31.6,20.8,136.2,7.4,150.8\r c-57,62.1-232,44.8-235.1,113.7c-1.5,33.2,121.1,63.1,148.1,51.1c40.9-18.2,23.6-100.5-19.1-129.9c-84-57.9-165.5-72.7-376.1-4.9\r c-269.6,86.8-355.2,22.8-545.4-18.4c-153.2-36.8-461.1,128.7-366.6,2C32.4,748.8,30.8,948.9-53,999s-173.4,68-226.6,150.7"
        }), /* @__PURE__ */ jsx("path", {
          className: "plain",
          d: "M577.2,149.3c-4,29.5-100.1,127,93.1,290c85.4,72.1,567.5,211.6,645.3,226.8c162.4,31.6,20.8,136.2,7.4,150.8\r c-57,62.1-232,44.8-235.1,113.7c-1.5,33.2,121.1,63.1,148.1,51.1c40.9-18.2,23.6-100.5-19.1-129.9c-84-57.9-165.5-72.7-376.1-4.9\r c-269.6,86.8-355.2,22.8-545.4-18.4c-153.2-36.8-461.1,128.7-366.6,2C32.4,748.8,30.8,948.9-53,999s-173.4,68-226.6,150.7"
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: " flex flex-col ",
        children: /* @__PURE__ */ jsx("div", {
          className: "flex  justify-center mt-10",
          children: /* @__PURE__ */ jsxs("div", {
            className: " inline-block text-center mx-2",
            children: [/* @__PURE__ */ jsx("h1", {
              className: " smallHeading",
              children: " Complete Astuteness "
            }), /* @__PURE__ */ jsx("h2", {
              className: "heding1",
              children: "Select the best service for your business’s digital growth"
            })]
          })
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: " items-stretch grid-view-seo mx-5  grid-margin-seo mt-16",
        children: [/* @__PURE__ */ jsx(SeoServiceCard, {
          title: "Block Chain",
          desc: "Enable trusted data exchange and workflow automation beyond the boundaries with distributed ledger technology and blockchain.",
          link: "/services/blockchain-solutions",
          first: true,
          setActiveCard,
          active: activeCard,
          img: "/Images/LandingPageImage/Services2/blockchain copy-webp.webp"
        }), /* @__PURE__ */ jsx(SeoServiceCard, {
          title: "DevOps Services",
          desc: "Achieve a greater business agility and a faster time to market by eliminating bottlenecks in software development with our DevOps Services. ",
          link: "/services/devops-services",
          first: false,
          setActiveCard,
          active: activeCard,
          img: "/Images/LandingPageImage/Services2/devops copy-webp.webp"
        }), /* @__PURE__ */ jsx(SeoServiceCard, {
          title: "Big Data Services",
          desc: "Maximize your data investment, activate actionable business and consumers insights",
          link: "/services/big-data-consulting-services",
          first: false,
          active: activeCard,
          setActiveCard,
          img: "/Images/LandingPageImage/Services2/big_data copy-webp.webp"
        })]
      })]
    })
  });
}
const TimeAndMaterial = ({}) => {
  const [scrolled, setScrolled] = useState(false);
  const [path, setPath] = useState();
  useEffect(() => {
    window.onscroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 2340) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  });
  useEffect(() => {
    const p = document.getElementById("myPath");
    setPath(p);
  }, []);
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsxs("div", {
      className: " py-32 px-10 bg-no-repeat bg-right-top relative rightPatternSize ",
      style: {
        backgroundImage: "url('/Images/serviceAssets/section2/right_pattern-webp.webp')"
      },
      children: [/* @__PURE__ */ jsxs("svg", {
        style: {
          zIndex: "-1"
        },
        className: "svg",
        version: "1.1",
        id: "arrow5",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "100%",
        height: "980",
        viewBox: "600 150 1200 1200",
        children: [/* @__PURE__ */ jsx(motion.path, {
          animate: scrolled ? {
            strokeDashoffset: 0
          } : {
            strokeDashoffset: 2830.588134765625
          },
          transition: {
            duration: 3,
            ease: "easeInOut"
          },
          className: "dashed",
          strokeDasharray: "2830.588134765625",
          id: "myPath",
          d: "M370.4,11.4\r C397.2,30.2,435.5,55,484,79.8\r c35.9,18.3,101,48.6,203.7,76.4\r c189.1,51.1,211,14.1,270.4,58.8\r c95.2,71.6,123,230.1,74.4,291.9\r c-3.5,4.4-21.8,27.8-47,27.4\r c-29.3-0.4-62.9-33-56.8-64.7\r c4.6-24.3,31.7-43.6,52.9-41.1\r c36.1,4.2,67.5,76.8,62.7,133.2\r c-11.1,130.8-222.1,240.9-395.7,268.4\r c-80.3,12.7-108.7,0.7-235.1,23.5\r c-106,19.1-214.9,39.8-227.3,96\r c-6.4,29.1,12.6,69.7,43.1,82.3\r c27.1,11.2,54.4-3.4,58.8-5.9\r c33.4-18.6,53-64.1,41.1-78.4\r c-20.5-24.7-169.8,1.9-184.2,99.9"
        }), /* @__PURE__ */ jsx("path", {
          className: "plain",
          id: "myPath",
          d: "M370.4,11.4\r C397.2,30.2,435.5,55,484,79.8\r c35.9,18.3,101,48.6,203.7,76.4\r c189.1,51.1,211,14.1,270.4,58.8\r c95.2,71.6,123,230.1,74.4,291.9\r c-3.5,4.4-21.8,27.8-47,27.4\r c-29.3-0.4-62.9-33-56.8-64.7\r c4.6-24.3,31.7-43.6,52.9-41.1\r c36.1,4.2,67.5,76.8,62.7,133.2\r c-11.1,130.8-222.1,240.9-395.7,268.4\r c-80.3,12.7-108.7,0.7-235.1,23.5\r c-106,19.1-214.9,39.8-227.3,96\r c-6.4,29.1,12.6,69.7,43.1,82.3\r c27.1,11.2,54.4-3.4,58.8-5.9\r c33.4-18.6,53-64.1,41.1-78.4\r c-20.5-24.7-169.8,1.9-184.2,99.9"
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex lg:flex-row flex-col space-y-10 lg:space-y-0 items-center justify-center",
        children: [/* @__PURE__ */ jsx("div", {
          className: "w-full lg:w-1/2 px-8",
          children: /* @__PURE__ */ jsx("img", {
            alt: "time-and-material",
            className: "w-3/5 lg:w-full xl:w-4/5 mx-auto",
            src: "/Images/LandingPageImage/time-and-material-webp.webp",
            width: 746,
            height: 620
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "w-full lg:w-1/2 flex flex-col text-center lg:text-left space-y-10",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h1", {
              className: " smallHeading",
              children: " Complete package "
            }), /* @__PURE__ */ jsx("h2", {
              className: "heding1",
              children: " Time and Materials Services "
            })]
          }), /* @__PURE__ */ jsx("p", {
            className: "text-gray-text text-lg lg:text-xl py-0 lg:py-8",
            children: "Time and materials (T&M) is a standard phrase in a contract for construction, product development or any other piece of work in which the employer agrees to pay the contractor based upon the time spent by the contractor's employees and subcontractors employees to perform the work, and for materials used in the construction (plus the contractor's mark up on the materials used), no matter how much work is required to complete construction"
          }), /* @__PURE__ */ jsx("div", {
            className: "cursor-pointer flex justify-center lg:justify-start",
            children: /* @__PURE__ */ jsxs(Link, {
              to: "/services/time-and-material-services",
              className: "text-base px-5 py-2 flex items-center justify-between lg:text-lg font-medium border-2 border-green-primary bg-green-primary text-white rounded-full",
              style: {
                width: "200px"
              },
              children: ["Learn More", /* @__PURE__ */ jsx("span", {
                className: "bg-white p-1 rounded-full",
                children: /* @__PURE__ */ jsx(BsArrowRight, {
                  className: "text-green-primary text-2xl font-bold"
                })
              })]
            })
          })]
        })]
      })]
    })
  });
};
const Index = ({
  gameDownload,
  setGameDownload
}) => {
  useIntl();
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "overflow-hidden",
      children: [/* @__PURE__ */ jsx(MainPageContent, {}), /* @__PURE__ */ jsx(HomePageServices, {}), /* @__PURE__ */ jsx(SEOServices, {}), /* @__PURE__ */ jsx(TimeAndMaterial, {}), /* @__PURE__ */ jsx(LanguagePage, {}), /* @__PURE__ */ jsx(GameServices, {
        gameDownload,
        setGameDownload
      }), /* @__PURE__ */ jsx(Consultation, {})]
    })
  });
};
export {
  Index as default
};
