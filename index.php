<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head style="display: block">
  <meta charset="utf-8">
  <title>Play</title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="css/normalize.css">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">

</head>

<body>

  <div class="wrapper">

    <div class="panel panel-default">
      <div class="panel-heading">Ajax Ch2</div>
      <div class="panel-body">
        <p>This example aplied what's in chapter 2 and added more enhancments, it does check for a user name from the database 
          and if it is a vailable you will see a green notification, but if not a red notification will appear.
        </p>
        <p>type <code>adham</code> and let it green.</p>

        <form class="form-inline">
          <div class="form-group">
            <input type="text" name="username" id="name"  class="form-control"></span>
          </div>
          <div class="form-group">
            <span class="status">
            </div>
            <div class="form-group">
              <input type="submit" id="submit" value="Send" class="btn btn-default">
            </div>
          </form>

        </div>
      </div>


      <div class="panel panel-default">
        <div class="panel-heading">Embedly</div>
        <div class="panel-body">
          <p>This example connects to the embedly and embed the object info after the form. </p>
          <p>Try: <code>http://www.youtube.com/watch?v=9ei-rbULWoA</code></p>
          <form class="form-inline">
            <div class="form-group">
              <input type="text" name="url" id="url"  class="form-control"></span><br>
            </div>
            <div class="form-group">
              <input type="submit" id="embed" value="Embed" class="btn btn-default">
            </div>
          </form>
          <!-- We will inject the new objects here -->
          <p><ul class="media-list"></ul></p>
        </div>
      </div>

      <input class="button" type="button" value="GetPage">
      <div id="html5rocks"></div>
    </div><!-- wrapper -->

    <!-- JavaScript -->
    <script type="text/javascript" src="js/jquery-1.9.1.js"></script>
    <script type="text/javascript" src="js/utils.js"></script>
    <script type="text/javascript" src="js/embed.js"></script>
    <script type="text/javascript" src="js/script.js"></script>

  </body>
  </html>


