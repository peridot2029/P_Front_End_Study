(function(global, document) {
  'use strict';
  
  var namespace = 's9';
  
  function el(selector, context) {
    return (context || document).querySelector(selector);
  }
  function els(selector, context) {
    return (context || document).querySelectorAll(selector);
  }
  function each(list, callback) {
    for (var i=0, l=list.length; i<l; i++) { callback(list[i], i); }
  }
  function on(el, type, handler) {
    el.addEventListener(type, handler);
  }
  function off(el, type, handler) {
    el.removeEventListener(type, handler);
  }
  function hasClass(el, name) {
    return el.classList.contains(name);
  }
  function addClass(el, name) {
    var names = name.split(' ');
    each(names, function(name){ el.classList.add(name); });
    return el;
  }
  function removeClass(el, name) {
    name ? el.classList.remove(name) : (el.className = '');
    return el;
  }  
  function toggleClass(el, name) {
    return hasClass(el, name) ? removeClass(el, name) : addClass(el, name);
  }
  
  Object.defineProperty(global, namespace, { value: {} });
  
  [
    // 내보낼 함수를 추가
    el, els, 
    on, off, 
    hasClass, addClass, removeClass, toggleClass,
    each,
  ]
  .forEach(function(fn){
    global[namespace][fn.name] = fn;
  });

  Object.freeze(global[namespace]);
  
})(window, document);