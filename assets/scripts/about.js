//Variables
var _aboutArr = [
  {
    'title':'About',
    'aboutItem':[
      {
        'title':'About Me',
        'content':'<p>My perpetual resting b*tch face is so terrible... that the doctor had to smack me to make sure I wasn&apos;t mute when I was born. #TrueStory</p> <p>But when you get to know me, you&apos;ll learn that I&apos;m actually really fun to be around. I&apos;m also always <span class="txt-orange">hungry</span> <s>for McDonald&apos;s</s> <span class="txt-orange">to learn.</span></p> <p>And oh, you can call me <span class="txt-orange">Haz.</span></p> <pI&apos;d call myself a jack of all trades, master of none. But I think that&apos;s way better than a master of one.</p> <p>Arigathanks for looking through my portfolio!</p> <p class="txt-orange">P.S. Don&apos;t hesitate to drop me a text or e-mail. &#9829;</p><div class="row align-items-center mt-4"> <div class="col-2"> <img src="assets/images/icon-mail.svg" alt="E-mail"> </div> <div class="col"> <a href="mailto:hazwani.izam@gmail.com"><h3>hazwani.izam@gmail.com</h3></a> </div> </div> <div class="row align-items-center"> <div class="col-2"> <img src="assets/images/icon-phone.svg" alt="Phone Number"> </div> <div class="col"> <a href="tel:+6596992746"><h3>+65 9699 2746</h3></a> </div> </div> <div class="row align-items-center"> <div class="col-2"> <img src="assets/images/icon-languages.svg" alt="Languages"> </div> <div class="col"> <h3>English, Malay, HTML, CSS, JS</h3> </div> </div>'
      },
      {
        'title':'Work Experience',
        'content':'<div class="about-timeline"> <div class="row"> <div class="col"> <ul class="v-timeline"> <li class="col"> <span class="v-timeline-icon"></span> <div class="timeline-text"> <p>Mar 2018 - Jun 2018 <br>Sep 2018 - Mar 2019</p> <div class="timeline-text-content"> <h5>Digital Designer Intern</h5> <h6>Blak Labs</h6> </div> </div> </li> <li class="col"> <span class="v-timeline-icon v-last"></span> <div class="timeline-text"> <p>Mar 2019 - Present</p> <div class="timeline-text-content"> <h5>Digital Designer</h5> <h6>Blak Labs</h6> </div> </div> </li> </ul> </div> </div> </div>'
      },
      {
        'title':'Education',
        'content':'<div class="about-timeline"> <div class="row"> <div class="col"> <ul class="v-timeline"> <li class="col"> <span class="v-timeline-icon"></span> <div class="timeline-text"> <p>2012 - 2015</p> <div class="timeline-text-content"> <h5>GCE ‘O’ Levels</h5> <h6>Bukit Panjang Government High School</h6> </div> </div> </li> <li class="col"> <span class="v-timeline-icon"></span> <div class="timeline-text"> <p>2016 - 2019</p> <div class="timeline-text-content"> <ul> <li> <h5>Diploma in Visual Communications and Media Design</h5> </li> <li> <h5>Diploma+ in Software Programming & Applications</h5> </li> </ul> <h6>Singapore Polytechnic</h6> </div> </div> </li> </ul> </div> </div> </div>'
      },
      {
        'title':'Co-Curricular Activities',
        'content':'<div class="about-timeline"> <div class="row"> <div class="col"> <ul class="v-timeline"> <li class="col"> <span class="v-timeline-icon"></span> <div class="timeline-text"> <p>2012 - 2015</p> <div class="timeline-text-content"> <h5>Bukit Panjang Government High School</h5> <h6>Infocomm Club<br>Gamelan Ensemble<br>Student Council</h6> </div> </div> </li> <li class="col"> <span class="v-timeline-icon"></span> <div class="timeline-text"> <p>2017 - 2018</p> <div class="timeline-text-content"> <h5>Singapore Polytechnic</h5> <h6>Makeup Artiste Club</h6> </div> </div> </li> </ul> </div> </div> </div>'
      },
      {
        'title':'Software Skills',
        'content':'<h3>Illustrator</h3> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%"> </div> </div> <h3>Photoshop</h3> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%"> </div> </div> <h3>After Effects</h3> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%"> </div> </div> <h3>Premiere Pro</h3> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%"> </div> </div> <h3>InDesign</h3> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%"> </div> </div>'
      }
    ]
  }
];

var _sidebarStr = '';
var _accordionStr = "";
var lastActiveTrigger = 1;


//functions
function populateAbout () {
  _sidebarStr = '';
  _accordionStr = '';
  var _active = "";
  var _accordionId = '';
  $('#aboutSidebar').html("");
  $('#accordionContainer').html("");
  for(var i=0; i<_aboutArr.length; i++) {
    if(i == 0 ) {
      _active = 'active';
    } else {
      _active = "";
    }


    _accordionId = 'About'+ (i+1);
    _accordionStr += '<div class="accordionItem accordion about-accordion about-toggle  show" id="'+_accordionId+'">';

    var _aboutItems = _aboutArr[i].aboutItem;
    for( var j=0; j<_aboutItems.length; j++) {
      _sidebarStr += '<a href="#card'+_accordionId+'_'+(j+1)+'"><div class="portfolio-trigger accordion-trigger list-group-item" data-target="'+ (i+1) +'" id="aboutsideItem_'+(i+1)+'">'+_aboutItems[j].title+'</div></a>';
      _accordionStr += '<div data-aos="fade-up" data-aos-duration="500" class="card active" id="card'+_accordionId+'_'+(j+1)+'"> <button aria-controls="'+_accordionId+'_'+(j+1)+'" aria-expanded="false" class="btn btn-link" data-target="#'+_accordionId+'_'+(j+1)+'" data-toggle="" type="button"> <div class="card-header" id="'+_accordionId+'-'+(j+1)+'"> <div class="row justify-content-between align-items-center"> <div class="col"> <h2>'+_aboutItems[j].title+'</h2> <img src="assets/images/header@2x.png"> </div> </div> </div> </button> <div aria-labelledby="'+_accordionId+'-'+(j+1)+'" class=" show " id="'+_accordionId+'_'+(j+1)+'"> <div class="card-body bg-black"> '+_aboutItems[j].content+' </div> </div> </div>';
    }
      _accordionStr +=  '</div>';
  }
  $('#aboutSidebar').html(_sidebarStr);
  $('#accordionContainer').html(_accordionStr);


  $('.portfolio-trigger').click(function() {

    $('#accordionContainer').show();

    lastActiveTrigger = $(this).data('target');
    $('#about'+lastActiveTrigger).fadeIn();
  });

  $('.card').on('click', function () {
    $(this).toggleClass('active');
  });
}



//Init
$(function() {
    populateAbout();
});
