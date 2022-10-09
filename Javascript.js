/* Portfolio */

(function() {
  "use strict";

  /* Easy selector helper function */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /* Easy event listener function */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
  
  /* Porfolio isotope and filter */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

})()



var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
var li3 = document.getElementById('li3');
var li4 = document.getElementById('li4');
var li5 = document.getElementById('li5');
var li6 = document.getElementById('li6');

  
li1.addEventListener("click", function() {
nav.classList.toggle('mostrar');
bars.classList.toggle('fa-times');
let body = document.getElementById('body');
body.style.overflow = 'auto';
});
li2.addEventListener("click", function() {
nav.classList.toggle('mostrar');
bars.classList.toggle('fa-times');
let body = document.getElementById('body');
body.style.overflow = 'auto';
});
li3.addEventListener("click", function() {
nav.classList.toggle('mostrar');
bars.classList.toggle('fa-times');
let body = document.getElementById('body');
body.style.overflow = 'auto';
});
li4.addEventListener("click", function() {
nav.classList.toggle('mostrar');
bars.classList.toggle('fa-times');
let body = document.getElementById('body');
body.style.overflow = 'auto';
});
li5.addEventListener("click", function() {
nav.classList.toggle('mostrar');
bars.classList.toggle('fa-times');
let body = document.getElementById('body');
body.style.overflow = 'auto';
});
li6.addEventListener("click", function() {
nav.classList.toggle('mostrar');
bars.classList.toggle('fa-times');
let body = document.getElementById('body');
body.style.overflow = 'auto';
});





var bars = document.getElementById('bars');
var nav = document.getElementById('nav');
var header = document.getElementById('header');
var header2 = document.getElementById('header2');
var headerLogo2 = document.getElementById('headerLogo2');
var navItem1 = document.getElementById('navItem1');
var navItem2 = document.getElementById('navItem2');
var navItem3 = document.getElementById('navItem3');
var navItem4 = document.getElementById('navItem4');
var navItem5 = document.getElementById('navItem5');
var navItem6 = document.getElementById('navItem6');
var logo = document.getElementById('logo');
var wpp = document.getElementById('wpp');
var departamentos__scroll = document.querySelectorAll(".departamentos__scroll");
var samayWayra = document.getElementById('samayWayra');

samayWayra.addEventListener("click", function() {
  if(nav.classList == 'nav contenedor mostrar'){
    nav.classList.toggle('mostrar');
    bars.classList.toggle('fa-times');
    let body = document.getElementById('body');
    body.style.overflow = 'auto';
}});





bars.addEventListener('click', function(){
    nav.classList.toggle('mostrar');
    bars.classList.toggle('fa-times');
    if(nav.classList == 'nav contenedor mostrar'){
        let body = document.getElementById('body');
        body.style.overflow = 'hidden';
    } else{
        let body = document.getElementById('body');
        body.style.overflow = 'auto';
    } 
});

function scroll() {
    
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop < 647) {
        header.style.background = 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.55))';
        header.style.boxShadow = 'none';
        bars.style.color = 'transparent';  
        bars.style.display = 'none';   
        logo.style.color = 'transparent';
    }
    if (scrollTop >= 647) {
        header.style.background = '#fff';
        bars.style.display = 'inline';
        bars.style.color = '#d9264b';  
        logo.style.color = '#d9264b';
        wpp.style.position = 'fixed';
        wpp.style.top = 'auto';
        wpp.style.bottom = '17.5px';
    }
    if (scrollTop > 1) {
        header2.style.top = '0';
    }  
    if (scrollTop == 0) {
        header2.style.top = '-70px';
    } 
}

function scrollAnimado() {

    let scrollTop = document.documentElement.scrollTop;
    for(var i = 0; i < departamentos__scroll.length; i++) {
        let alturaDepartamentos = departamentos__scroll[i].offsetTop;
        if(alturaDepartamentos - 535 < scrollTop) {
            departamentos__scroll[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', scroll);
window.addEventListener('scroll', scrollAnimado);

var dep1= document.getElementById('dep1');
var dep2= document.getElementById('dep2');
var dep3= document.getElementById('dep3');
var ext= document.getElementById('ext');
var row1= document.getElementById('row1');
var row2= document.getElementById('row2');
var row3= document.getElementById('row3');
var row4= document.getElementById('row4');
var column= document.getElementById('column');
var alert= document.getElementById('alert');

dep1.addEventListener('click', function(){
    row2.classList.add('hide');
    row3.classList.add('hide');
    row4.classList.add('hide');
    row1.classList.remove('hide');
    column.classList.add('show');
    alert.classList.add('hide');
});

dep2.addEventListener('click', function(){
    row1.classList.add('hide');
    row3.classList.add('hide');
    row4.classList.add('hide');
    row2.classList.remove('hide');
    column.classList.add('show');
    alert.classList.add('hide');
});

dep3.addEventListener('click', function(){
    row1.classList.add('hide');
    row2.classList.add('hide');
    row4.classList.add('hide');
    row3.classList.remove('hide');
    column.classList.add('show');
    alert.classList.add('hide');
});

ext.addEventListener('click', function(){
    row1.classList.add('hide');
    row2.classList.add('hide');
    row3.classList.add('hide');
    row4.classList.remove('hide');
    column.classList.add('show');
    alert.classList.add('hide');
});

























