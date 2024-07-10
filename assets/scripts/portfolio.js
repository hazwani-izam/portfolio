//Variables
var _portfolioArr = [
  {
    'title':'Portfolio',
    'portfolioItem':[
      {
        'title':'Nike: Super Hoops',
        'image':'Nike-Super-Hoops.jpg',
        'link':'nike-super-hoops',
        'tags':'UI/UX Design, Game Design'
      },
      {
        'title':'Nike: Air Max Experiences',
        'image':'Nike-Air-Max.jpg',
        'link':'nike-airmax',
        'tags':'Web Design'
      },
      {
        'title':'Mercedes-Benz: The Concept EQG',
        'image':'Mercedes-Concept-EQG@2x.jpg',
        'link':'mercedes-eqg',
        'tags':'Events, Live Coverage'
      },
      {
        'title':'Galderma PR Video',
        'image':'Galderma@2x.jpg',
        'link':'galderma',
        'tags':'Graphic Design, Animation'
      },
      {
        'title':'Nike: Run Your Run',
        'image':'Nike-RYR.jpg',
        'link':'nike-ryr',
        'tags':'Web Design'
      },
      {
        'title':'Mercedes-Benz: Service Retention',
        'image':'Mercedes-Service.jpg',
        'link':'mercedes-service',
        'tags':'Social Media'
      },
      {
        'title':'WWF',
        'image':'WWF@2x.jpg',
        'link':'wwf',
        'tags':'Web Design'
      },
      {
        'title':'UOBAM Invest',
        'image':'UOBAM-Invest@2x.jpg',
        'link':'uobam-invest',
        'tags':'Web Design'
      },
      {
        'title':'The Scientist',
        'image':'The-Scientist@2x.jpg',
        'link':'the-scientist',
        'tags':'Web Design'
      },
      {
        'title':'Natura',
        'image':'Natura@2x.jpg',
        'link':'natura',
        'tags':'Web Design'
      },
      {
        'title':'Ho Bee Land',
        'image':'Ho-Bee-Land@2x.jpg',
        'link':'ho-bee-land',
        'tags':'Web Design'
      },
      {
        'title':'UOB Brand Quiz',
        'image':'UOB-Brand-Quiz@2x.png',
        'link':'uob-brand-quiz',
        'tags':'Web Design'
      },
      {
        'title':'ST Telemedia Greeting Cards',
        'image':'STT.png',
        'link':'stt',
        'tags':'Graphic Design, Animation'
      },
      {
        'title':'VITAGEN Social Media',
        'image':'VITAGEN.png',
        'link':'vitagen-social',
        'tags':'Social Media'
      },
      {
        'title':'Hello Singapore',
        'image':'Hello-Singapore.png',
        'link':'hello-sg',
        'tags':'App Design'
      },
      {
        'title':'Wilhelmsen Ships Service',
        'image':'wilhelmsen.jpg',
        'link':'wilhelmsen',
        'tags':'Animation'
      },
      {
        'title':'EDEN Group',
        'image':'EDEN-Group.jpg',
        'link':'eden-group',
        'tags':'Branding'
      },
      {
        'title':'Pepsodent Siwak',
        'image':'Pepsodent.jpg',
        'link':'pepsodent',
        'tags':'Social Media'
      },
      {
        'title':'Wolfpack',
        'image':'Wolfpack@2x.png',
        'link':'wolfpack',
        'tags':'Graphic Design'
      },
      {
        'title':'Yoyic',
        'image':'Yoyic.jpg',
        'link':'yoyic',
        'tags':'Social Media, Video Production'
      },
      {
        'title':'Cosmo Dinos',
        'image':'Cosmo-Dinos.png',
        'link':'cosmo-dinos',
        'tags':'Game Design'
      },
      {
        'title':'Muay Thai Burger',
        'image':'Muay-Thai-Burger@2x.jpg',
        'link':'muay-thai-burger',
        'tags':'Advertising'
      },
      {
        'title':'Red Cross',
        'image':'Red-Cross@2x.jpg',
        'link':'red-cross',
        'tags':'Editorial'
      }
    ]
  }
];


// {
//   'title':'Make It Stop Manifesto',
//   'image':'make-it-stop-manifesto@2x.png',
//   'link':'make-it-stop-manifesto',
//   'tags':'Graphic Design'
// }

// var _sidebarStr = '';
var _accordionStr = "";
var lastActiveTrigger = 1;


//functions
function populatePortfolio () {
  // _sidebarStr = '';
  _accordionStr = '';
  var _active = "";
  var _accordionId = '';
  $('#portfolioSidebar').html("");
  $('#accordionContainerPortfolio').html("");
  for(var i=0; i<_portfolioArr.length; i++) {
    if(i == 0 ) {
      _active = 'active';
    } else {
      _active = "";
    }


    _accordionId = 'Portfolio'+ (i+1);
    _accordionStr += '<div class="accordionItem accordion portfolio-accordion portfolio-toggle show row" id="'+_accordionId+'">';

    var _portfolioItems = _portfolioArr[i].portfolioItem;
    for( var j=0; j<_portfolioItems.length; j++) {
      // _sidebarStr += '<a href="#card'+_accordionId+'_'+(j+1)+'"><div class="portfolio-trigger accordion-trigger list-group-item" data-target="'+ (i+1) +'" id="portfoliosideItem_'+(i+1)+'">'+"→ "+_portfolioItems[j].title+'</div></a>';
      _accordionStr += '<div data-aos="fade-up" data-aos-duration="500" class="card active anchor col-12 col-md-6" id="card'+_accordionId+'_'+(j+1)+'"> <div aria-labelledby="'+_accordionId+'-'+(j+1)+'" class=" show " id="'+_accordionId+'_'+(j+1)+'"> <a href="portfolio/'+_portfolioItems[j].link+'.html" target="_blank"> <div class="card-body bg-black"> <img src="assets/images/portfolio/thumbnails/Thumbnail_'+_portfolioItems[j].image+'"> <div class="project-details"> <h2 class="project-name">'+_portfolioItems[j].title+'</h2> <div class="tags">'+_portfolioItems[j].tags+'</div> </div> </div> </a> </div> </div>';
    }
  }

  // $('#portfolioSidebar').html(_sidebarStr);
  $('#accordionContainerPortfolio').html(_accordionStr);

  $('.portfolio-trigger').click(function() {

    $('#accordionContainerPortfolio').show();

    lastActiveTrigger = $(this).data('target');
    $('#portfolio'+lastActiveTrigger).fadeIn();
  });

  $('.card').on('click', function () {
    $(this).toggleClass('active');
  });
}


//Init
$(function() {
    populatePortfolio();
});
