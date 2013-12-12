function createRequest() {
  try {
    request = new XMLHttpRequest();
  } catch(exception)  {
    try {
      request = new ActiveXObject("Msxml12.XMLHTTP");
    } catch(exception) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch(failed) {
        request = null;
      }
    }
  }

  return request;
}

