function populateFeaturedVideo() {
    _featuredVideoStr = '';
    var _featuredVideoId = '';
    $('#featuredVideoContainer').html("");
    for (var i = 0; i < _featuredVideoArr.length; i++) {
        _featuredVideoId = 'featuredVideo' + (i + 1);
        _featuredVideoStr += '<div class="vid-container" id="featuredVideo"> <iframe id="vid_frame" src="https://www.youtube.com/embed/' + _featuredVideoArr[i].embed + '" frameborder="0" width="560" height="315"></iframe> </div>';
    }
    $('#featuredVideoContainer').html(_featuredVideoStr);
}

function populateVideoPlaylist() {
    var _videoPlaylistStr = '';
    var _videoPlaylistId = '';
    $('#videoPlaylistContainer').html("");
    for (var i = 0; i < _videoPlaylistArr.length; i++) {
        var playlistStr = "document.getElementById('vid_frame').src='https://www.youtube.com/embed/"+_videoPlaylistArr[i].embed + "'";
        _videoPlaylistId = 'videoPlaylist' + (i + 1);
        _videoPlaylistStr += '<div class="vid-item" onClick="' + playlistStr + '"> <div class="thumb" style="background-image: url(https://img.youtube.com/vi/' + _videoPlaylistArr[i].embed + '/0.jpg);"></div> <div class="desc"><h6>' + _videoPlaylistArr[i].title + '</h6></div> </div> ';
    }
    $('#videoPlaylistContainer').html(_videoPlaylistStr);
}

$(function() {
		    $(".arrow-right").bind("click", function (event) {
		        event.preventDefault();
		        $(".vid-list-container").stop().animate({
		            scrollLeft: "+=250"
		        }, 750);
		    });
		    $(".arrow-left").bind("click", function (event) {
		        event.preventDefault();
		        $(".vid-list-container").stop().animate({
		            scrollLeft: "-=250"
		        }, 750);
		    });

				populateFeaturedVideo();
				populateVideoPlaylist();
});

$(window).on("load resize",function(e){
	var numVidItem = $('.vid-item').length;
	var vidItemWidth = $('.vid-item').outerWidth();
	var vidListPadding = parseInt($(".vid-list-container").css("padding-right"));
	var vidListWidth = vidItemWidth * numVidItem + vidListPadding;
	$('.vid-list').width(vidListWidth);
});
