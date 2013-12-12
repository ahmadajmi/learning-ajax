$(function() {


  // onblur event triggers a call to our JS
  // JS function create a nd sends the request object
  // The request object tells the server what username the user chose
  // The server returns a value indicating the username is taken or not
  // The callback function updates the page to show success or failure without losing any of the user info

  // Try to get a request object
  // show an alert if the browser can't create a request
  // get the user name the user typed in the form
  // make sure the username doesn't contain any problem
  // append the username to server url
  // tell the browser what function to call when th eserver
  // responds to the request
  // tell th ebrowser how to send the request to the server
  // send the request obect
  

  // readyState
  //  The browser uses the readyState property to tell you where your request 
  //  is in its processing lifecycle
  // responseXML
  //  - contains the XML sent from the server if the the server sends the data as XML
  // responseText
  //  - the server respond usually text but it might be XML
  // status and ststusText
  //  - tells about the HTTP status that was returned by the server
  //    such as 200 for 'ok' or 404 for 'Not Found'
  //  onreadystatechange
  //    - the callback function that we use to tell the browser what function to call
  //      when the server responds to a request.
    function log(msg) {
        return console.log(msg);
    }

    window.onload = initPage;

    var username = document.querySelector('#name');
    var status = document.querySelector('.status');

    function initPage() {
      username.onblur = checkUsername;
      //log("page is loaded and i'm in");
    }

    // This is the function that will create and send the
    // request object 
    function checkUsername() {

      var theName = escape(username.value);
      if (theName == '') {
        status.innerHTML = '<small class="error"> Please type a name</small>'
        return;
      }
      log("1 => Got the name: " + theName);
      request = createRequest();

      if (request == null) {
        alert("Unable to create a request object");
      } else {
        log("2 => Got the request Object");
        var url = "php/checkName.php?username=" + theName;
        log("3=> " + url);
        request.onreadystatechange = showUsernameStatus;
        request.open('GET', url, true);
        request.send(null);
        log(theName);
      }
      log("outside username");
    }

    // This will update the page after the browser gets 
    // a response from the server
    function showUsernameStatus(){
        status.innerHTML = request.response;
    }

});
