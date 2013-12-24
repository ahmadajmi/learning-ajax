// We will connect to the embedly api with ajax and get the json data and add it to a list of the sidebar

// http://www.flickr.com/photos/library_of_congress/2163470598/?f=hp

//"use strict";

var url_input = document.querySelector('#url');
var form_group = document.querySelector('.form-group');
var embed_button = document.querySelector('#embed');
var overlay = document.createElement('div');
overlay.innerHTML = '<span>Loading ...</span>';
overlay.className = 'overlay';

window.onload = initPage();

function initPage() {
  embed_button.addEventListener('click', function(e){
    var request_url = "http://api.embed.ly/1/oembed?url=" + url_input.value;
    e.preventDefault();
    get_embedly_info(request_url);
  });
}

function get_embedly_info(request_url) {
  
  if (url_input.value == '') {
    url_input.parentNode.className += ' has-error';
    url_input.focus();
    return false;
  } 

  request = new createRequest();

  request.onreadystatechange = show_embed_info;
  request.open("GET", request_url, true);
  request.send();
}

/* TO DO 
  Find a better way to embed the html into the webpage
*/

function show_embed_info() {

  document.body.appendChild(overlay);
  
  if (request.readyState == 4 && request.status == 200) {
    
    overlay.remove();
    url_input.value = '';
    
    var respondObject = JSON.parse(request.responseText);
    var media_list = document.querySelector('.media-list');

    var li = document.createElement('li');
    li.className = "media";

    var link = document.createElement('a');
    link.className = "pull-left";
    link.setAttribute('href', respondObject.url);

    var img = document.createElement('img');
    img.className = "media-object";
    img.setAttribute('src', respondObject.thumbnail_url);
    
    link.appendChild(img);

    li.appendChild(link);

    var media_body = document.createElement('div');
    var media_heading = document.createElement('h4');
    media_heading.innerHTML = respondObject.title;
    media_body.appendChild(media_heading);

    li.appendChild(media_body);

    media_list.appendChild(li);
  } else {
    if (url_input.value == '') {
      url_input.parentNode.className += ' has-error';
    } else {
      url_input.parentNode.className += ' ';
    }
  }

}