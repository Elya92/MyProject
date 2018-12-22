function swipe_header(elem){
  var url = "url('/assets/img/" + elem.value + "_1.jpg')";
  document.getElementsByTagName('header')[0].style.backgroundImage = url;
}

function swipe_meeting(elem){
 var meeting1 = "<h2>Meet the team poweing the automation revolution</h2><article><p class='orange_text big_f_s'>Yuri Shilyaev</p><blockquote class='light_text'><b>&#8220;</b>WorkFusion is pround to support our customers through the journey of adoption, integration and optimization.<b>&#8220;</b></blockquote></article>";
 var meeting2 = "<h2>Meet the team poweing the automation revolution - 2</h2><article><p class='orange_text big_f_s'>Yuri Shilyaev - 2</p><blockquote class='light_text'><b>&#8220;</b>WorkFusion is pround to support our customers through the journey of adoption, integration and optimization - 2.<b>&#8220;</b></blockquote></article>";
 var meeting3 = "<h2>Meet the team poweing the automation revolution - 3</h2><article><p class='orange_text big_f_s'>Yuri Shilyaev - 3</p><blockquote class='light_text'><b>&#8220;</b>WorkFusion is pround to support our customers through the journey of adoption, integration and optimization - 3.<b>&#8220;</b></blockquote></article>";

  
 switch(elem.value){
  case '1':
   document.getElementById('meeting').innerHTML = meeting1;
  break;
  case '2':
   document.getElementById('meeting').innerHTML = meeting2;
  break;
  case '3':
   document.getElementById('meeting').innerHTML = meeting3;
  break;
 }
}