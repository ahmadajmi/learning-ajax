function log(msg) {
  return console.log(msg);
}

/*
The readyState has 4 distinct states:

0 - no request initialized
1 - connected to server
2 - request was received
3 - processing
4 - Done, response received
*/

function createRequest() {
  var httpRequest;

  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest;
  } else if (window.ActiveXObject) {
    try {
      httpRequest = new ActiveXObject("Asxml12.XMLHTTP");
    } catch (e) {
      try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      } catch(e) {
        httpRequest = null;
      }
    }
  }

  return httpRequest;
}

