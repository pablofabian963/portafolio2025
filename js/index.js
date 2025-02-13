// window.onload = function(){
//   $("#load").fadeOut("slow",mostrar);
// }

// function mostrar(){
//   $('#main').fadeIn(900);
// }

$(window).ready(function(){
  setTimeout(function() {
    $('#load').fadeOut(600,function () {
      $('#main').fadeIn(900);
    }); 
  }, 600);
});

$(document).ready(function() {
    if(!$('#myCanvas').tagcanvas({
      textColour: '#00DC99',
      outlineColour: '#ff00ff',
      textHeight:11,
      reverse: true,
      depth: 1,
      maxSpeed: 0.05,
      noSelect:true,
      wheelZoom: false,
    //   freezeDecel: true,
      initial: [0.2,0.2]
    },'tags')) {
      // something went wrong, hide the canvas container
      $('#myCanvasContainer').hide();
    }
    let main = document.getElementById("main");
    let turn = document.getElementById("turn");
     // Orientation
    window.addEventListener("orientationchange", () =>{
      if (screen.width < 1024) 
      {

        if(screen.orientation.type == "portrait-primary")
          {
            $('#main').fadeIn();
            $('#turn').fadeOut();
            
          }
        if(screen.orientation.type == "landscape-primary")
          {
            $('#main').fadeOut();
            $('#turn').fadeIn();
          
          }
        
      }
      
    })

   
   
  //dots menu active
    $('.navi').on('click', '.dot', function(e) {
      let todos = $('a[href^="#section-"]');
      // console.log(todos,"merenges");
      todos.removeClass('activate');
      let clickDot = e.target.attributes.href.value;
      // console.log(clickDot);
      // $('.navi .dot.activate').removeClass('activate');
      // $(this).addClass('activate');
      let els = $('a[href="'+clickDot+'"]')
      // console.log("donas ",els);
      
      els.addClass('activate');
      
           
  });

  // seleccions
  $('.navDesk').on('click', 'li', function(e){
    // let clickMenu = e.target.attributes.href.value;
    // console.log(clickMenu);
      let todos = $('a[href^="#section-"]');
      todos.removeClass('activate');
      let clickDot = e.target.attributes.href.value;
      let els = $('a[href="'+clickDot+'"]')
      els.addClass('activate');
  })

  $('.menu').on('click', 'li', function(e){
    // let clickMenu = e.target.attributes.href.value;
    // console.log(clickMenu);
      let todos = $('a[href^="#section-"]');
      todos.removeClass('activate');
      let clickDot = e.target.attributes.href.value;
      let els = $('a[href="'+clickDot+'"]')
      els.addClass('activate');
  })

    
  $('.hamburger-icon').on('click',  function(e){
    let menuFlex = $('.hire');
    menuFlex.toggle(
      // function(){$("menuFlex").css({"display": "block"});},
      // function(){$("menuFlex").css("display", "none");
      function(){$("menuFlex").fadeIn();},
      function(){$("menuFlex").fadeOut();
    });
    
  })
  


  });

  //scroll

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  //menu
//bug 



var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');
var blue = document.getElementById("blue");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  blue.classList.toggle('slide');
});
  

//   const project1 = document.getElementById("tro");

  

//   project1.addEventListener('click', function onClick(event) {

//   project1.style.backgroundColor = 'red';
  
// });

