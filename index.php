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
      <div class="panel-heading">
        <h3 class="panel-title">Ajax Ch2</h3>
      </div>
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
        <div class="panel-heading">
          <h3 class="panel-title">Chapter 3 / Reacting to your users </h3>
        </div>
        <div class="panel-body">
          <div class="row">

            <div class="col-xs-6 col-md-4" id="schedulePane">
              <ul class="nav nav-pills nav-stacked">
                <li><a href="#">Welcome</a></li>
                <li><a href="#">Beginners</a></li>
                <li><a href="#">Intermediate</a></li>
                <li><a href="#">Advanced</a></li>
              </ul>

            </div>
            
            <div class="col-xs-12 col-sm-6 col-md-8" id="tabd">
              <ul class="nav nav-pills">

                <li><a href="#">Welcome</a></li>
                <li><a href="#">Beginners</a></li>
                <li><a href="#">Intermediate</a></li>
                <li><a href="#">Advanced</a></li>
                
              </ul>

              <div id="content">

                <form class="form-inline" action="form.php" method="POST">
                  <div class="form-group">
                  <input type="text" name="url" id="onfocus"  class="form-control"></span><br>
                  <span class="input-help hide">?</span>
                  </div>
                  <div class="form-group">
                    <select name="number">
                      <option value="1">123</option>
                      <option value="2">123</option>
                      <option value="3">123</option>
                    </select>
                    <input type="submit" id="onfocusbtn" value="Embed" class="btn btn-default">
                  </div>
                </form>

                <h3>Click a tab to display the course schedule for the selected class</h3>
              </div>
            </div>

          </div><!-- row -->
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Embedly</h3>
        </div>
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
    <script type="text/javascript" src="js/chapter3.js"></script>

  </body>
  </html>


