//Variables
var _portfolioArr = [
  {
    'title':'Portfolio',
    'portfolioItem':[
      {
        'title':'UOBAM Invest',
        'image':'UOBAM-Invest.jpg',
        'link':'uobam-invest',
        'tags':'Web Design'
      },
      {
        'title':'The Scientist',
        'image':'The-Scientist.jpg',
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
        'title':'STT Greeting Cards',
        'image':'STT.png',
        'link':'stt',
        'tags':'Graphic Design, Animation'
      },
      {
        'title':'EDEN Group',
        'image':'EDEN-Group.jpg',
        'link':'eden-group',
        'tags':'Branding'
      },
      {
        'title':'Hello Singapore',
        'image':'Hello-Singapore.png',
        'link':'hello-sg',
        'tags':'App Design'
      },
      {
        'title':'VITAGEN Social Media',
        'image':'VITAGEN.png',
        'link':'vitagen-social',
        'tags':'Social Media'
      },
      {
        'title':'Wolfpack',
        'image':'Wolfpack@2x.png',
        'link':'wolfpack',
        'tags':'Graphic Design'
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
        'title':'Red Cross Annual Report',
        'image':'Red-Cross@2x.jpg',
        'link':'red-cross',
        'tags':'Editorial'
      }
    ]
  }
];
//
// ,
// {
//   'title':'Make It Stop Manifesto',
//   'image':'make-it-stop-manifesto@2x.png',
//   'link':'make-it-stop-manifesto',
//   'tags':'Graphic Design'
// }

var _sidebarStr = '';
var _accordionStr = "";
var lastActiveTrigger = 1;


//functions
function populatePortfolio () {
  _sidebarStr = '';
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
    _accordionStr += '<div class="accordionItem accordion portfolio-accordion portfolio-toggle  show" id="'+_accordionId+'">';

    var _portfolioItems = _portfolioArr[i].portfolioItem;
    for( var j=0; j<_portfolioItems.length; j++) {
      _sidebarStr += '<a href="#card'+_accordionId+'_'+(j+1)+'"><div class="portfolio-trigger accordion-trigger list-group-item" data-target="'+ (i+1) +'" id="portfoliosideItem_'+(i+1)+'">'+_portfolioItems[j].title+'</div></a>';
      _accordionStr += '<div data-aos="fade-up" data-aos-duration="500" class="card active anchor" id="card'+_accordionId+'_'+(j+1)+'"> <button aria-controls="'+_accordionId+'_'+(j+1)+'" aria-expanded="false" class="btn btn-link" data-target="#'+_accordionId+'_'+(j+1)+'" data-toggle="" type="button"> <div class="card-header" id="'+_accordionId+'-'+(j+1)+'"> <div class="row justify-content-between align-items-center"> <div class="col"> <h2>'+_portfolioItems[j].title+'</h2> <img src="assets/images/header@2x.png"> </div> </div> </div> </button> <div aria-labelledby="'+_accordionId+'-'+(j+1)+'" class=" show " id="'+_accordionId+'_'+(j+1)+'"> <a href="portfolio/'+_portfolioItems[j].link+'.html" target="_blank"> <div class="card-body bg-black"> <img src="assets/images/portfolio/thumbnails/Thumbnail_'+_portfolioItems[j].image+'"> <div class="tags">'+_portfolioItems[j].tags+'</div> </div> </a> </div> </div>';
    }
      _accordionStr +=  '</div>';
  }
  $('#portfolioSidebar').html(_sidebarStr);
  $('#accordionContainerPortfolio').html(_accordionStr);


  $('.portfolio-trigger').click(function() {
    $('.portfolio-trigger').removeClass('active');
    $(this).addClass('active');


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
    populatePortfolio ()
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault()

      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top,
        },
        300,
        'linear'
      )
    })
});
