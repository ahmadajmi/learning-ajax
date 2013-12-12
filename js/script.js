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
  // status and staatusText
  //  - tells about the HTTP status that was returned by the server
  //    such as 200 for 'ok' or 404 for 'Not Found'
  //  onreadystatechange
  //    - the callback function that we use to tell the browser what function to call
  //      when the server responds to a request.
  
  // readyState
  // 1 - The state will == 0 when we first create the request object
  // 2 -After we call the open property the value will be 1 and there we are ready to send tge requst to the server
  // 3 - When the value is 3, at this stage the data is being downloading into the requst object but the dataa is not ready to use yet
  // 4 - When the value === 4 we know that the server is finished with the request and the data is ready to be used
  //
  // ================
  //  this is a realy good point
  //  --------------------------
  //  on readystate change ==
  //     readyState
  //  not indentical but we can get the similarities from the names
  //  when we say onreadystatechange we mean every time the readystate value change we call this callback. does that make sense :)
  //
  //=================
  //  The ways the web form can send the request to the server
  //  --------------------------------------------------------
    function log(msg) {
        return console.log(msg);
    }

    window.onload = initPage;

    var username = document.querySelector('#name');
    var status = document.querySelector('.status');
    var submit = document.querySelector('#submit');

    function initPage() {
      username.onblur = checkUsername;
      submit.disabled = true;
      //log("page is loaded and i'm in");
    }

    // when the user leaves th ebrowser this function will create a request object
    // This is the function that will create and send the
    // request object
    function checkUsername() {
      // Disale ths button if the user tried a different username for the second time after one succes
      // this will ensure the button is disbled any every case
      submit.disabled = true;

      var theName = escape(username.value);
      if (theName == '') {
        status.innerHTML = '<small class="error"> Please type a name</small>'
        return;
      }
      //log("1 => Got the name: " + theName);

      // here we do a request oject
      request = createRequest();

      // at first readyState will be 0 before any thing else
      //log(request.readyState);

      if (request == null) {
        alert("Unable to create a request object");
      } else {
        //log("2 => Got the request Object");
        var url = "php/checkName.php?username=" + theName;
        //log("3=> " + url);
       //log(request.readyState);
        request.onreadystatechange = showUsernameStatus;
        //log(request.readyState);
        request.open('GET', url, true);
        //log(request.readyState);

        request.send(null);

      }
    }

    // The browser makes the server response avialable to your code throuht the 
    // properties of your object

    // This will update the page after the browser gets 
    // a response from the server
    function showUsernameStatus(){
      log(request.readyState);

      if (request.readyState == 1) {
        status.className = 'status status--pending';
      }

      if (request.readyState == 4) {
        setTimeout(function(){
          if (request.status == 200) {
            if (request.responseText == 'ok') {
                status.className = 'status status--success';
                submit.disabled = false;
            } else {
              status.className = 'status status--alert';
              username.select();
              submit.disabled = true;

            }
        }
        }, 1000);

      }

    }

});
