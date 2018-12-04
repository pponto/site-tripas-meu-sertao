!function(){"use strict";var t=function(t){var e=document.getElementById(t.mainElement),s=e.getElementsByTagName("section"),n={container:e,sections:s,animateTime:t.animateTime||.7,animateFunction:t.animateFunction||"ease",maxPosition:s.length-1,currentPosition:0,displayDots:void 0===t.displayDots||t.displayDots,dotsPosition:t.dotsPosition||"left"};this.defaults=n,this.init()};t.prototype.init=function(){this.buildPublicFunctions().buildSections().buildDots().addEvents();var t=location.hash.replace("#","").split("/")[0];location.hash=0,this.changeCurrentPosition(t),this.registerIeTags()},t.prototype.buildSections=function(){for(var t=this.defaults.sections,e=0;e<t.length;e++)t[e].setAttribute("data-index",e);return this},t.prototype.buildDots=function(){this.ul=document.createElement("ul"),this.ul.className=this.updateClass(1,"dots",this.ul.className),this.ul.className=this.updateClass(1,"right"==this.defaults.dotsPosition?"dots-right":"dots-left",this.ul.className);for(var t=this.defaults.sections,e=0;e<t.length;e++){var s=document.createElement("li"),n=document.createElement("a");n.setAttribute("href","#"+e),s.appendChild(n),this.ul.appendChild(s)}return this.ul.childNodes[0].firstChild.className=this.updateClass(1,"active",this.ul.childNodes[0].firstChild.className),this.defaults.displayDots&&document.body.appendChild(this.ul),this},t.prototype.addEvents=function(){return document.addEventListener?(document.addEventListener("mousewheel",this.mouseWheelAndKey,!1),document.addEventListener("wheel",this.mouseWheelAndKey,!1),document.addEventListener("keyup",this.mouseWheelAndKey,!1),document.addEventListener("touchstart",this.touchStart,!1),document.addEventListener("touchend",this.touchEnd,!1),window.addEventListener("hashchange",this.hashChange,!1),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&("ontouchstart"in window||(document.body.style="overflow: scroll;",document.documentElement.style="overflow: scroll;"))):(document.attachEvent("onmousewheel",this.mouseWheelAndKey,!1),document.attachEvent("onkeyup",this.mouseWheelAndKey,!1)),this},t.prototype.buildPublicFunctions=function(){var e=0,s=0,n=this;return this.mouseWheelAndKey=function(t){0<t.deltaY||40==t.keyCode?(n.defaults.currentPosition++,n.changeCurrentPosition(n.defaults.currentPosition)):(t.deltaY<0||38==t.keyCode)&&(n.defaults.currentPosition--,n.changeCurrentPosition(n.defaults.currentPosition)),n.removeEvents()},this.touchStart=function(t){e=parseInt(t.changedTouches[0].clientY),s=0},this.touchEnd=function(t){(100<(s=parseInt(t.changedTouches[0].clientY))-e||100<e-s)&&(e<s?n.defaults.currentPosition--:n.defaults.currentPosition++,n.changeCurrentPosition(n.defaults.currentPosition))},this.hashChange=function(t){if(location){var e=location.hash.replace("#","").split("/")[0];""!==e&&(e<0?n.changeCurrentPosition(0):e>n.defaults.maxPosition?n.changeCurrentPosition(n.defaults.maxPosition):(n.defaults.currentPosition=e,n.animateScroll()))}},this.removeEvents=function(){document.addEventListener?(document.removeEventListener("mousewheel",this.mouseWheelAndKey,!1),document.removeEventListener("wheel",this.mouseWheelAndKey,!1),document.removeEventListener("keyup",this.mouseWheelAndKey,!1),document.removeEventListener("touchstart",this.touchStart,!1),document.removeEventListener("touchend",this.touchEnd,!1)):(document.detachEvent("onmousewheel",this.mouseWheelAndKey,!1),document.detachEvent("onkeyup",this.mouseWheelAndKey,!1)),setTimeout(function(){n.addEvents()},600)},this.animateScroll=function(){var t=this.defaults.animateTime,e=this.defaults.animateFunction,s=100*this.defaults.currentPosition;this.defaults.container.style.webkitTransform="translateY(-"+s+"%)",this.defaults.container.style.mozTransform="translateY(-"+s+"%)",this.defaults.container.style.msTransform="translateY(-"+s+"%)",this.defaults.container.style.transform="translateY(-"+s+"%)",this.defaults.container.style.webkitTransition="all "+t+"s "+e,this.defaults.container.style.mozTransition="all "+t+"s "+e,this.defaults.container.style.msTransition="all "+t+"s "+e,this.defaults.container.style.transition="all "+t+"s "+e;for(var n=0;n<this.ul.childNodes.length;n++)this.ul.childNodes[n].firstChild.className=this.updateClass(2,"active",this.ul.childNodes[n].firstChild.className),n==this.defaults.currentPosition&&(this.ul.childNodes[n].firstChild.className=this.updateClass(1,"active",this.ul.childNodes[n].firstChild.className))},this.changeCurrentPosition=function(t){""!==t&&(n.defaults.currentPosition=t,location.hash=n.defaults.currentPosition)},this.registerIeTags=function(){document.createElement("section")},this.updateClass=function(t,e,s){return 1==t?s+=" "+e:2==t?s.replace(e,""):void 0},this},window.fullScroll=t}();