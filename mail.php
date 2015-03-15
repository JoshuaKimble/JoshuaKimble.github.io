<!DOCTYPE html>
<html>
<head>
  <title>My Mail</title>
  <link rel="stylesheet" type="text/css" href="css/mail.css">
</head>
<body>
  <div id="overlay" class="cover blur-in">
    <div class="content">
    <?php
      $servername = "joshuakimblecom.ipagemysql.com";
      $username = "jkimble5";
      $password = "Jenni930";
      $dbname = "joshuakimblecom";

      // Create connection
      $conn = new mysqli($servername, $username, $password, $dbname);
      // Check connection
      if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
      } 

      $sql = "SELECT name, email, msg, date_sent FROM MAIL;";
      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
          // output data of each row
          while($row = $result->fetch_assoc()) {
              echo "<strong>Name:</strong> " . $row["name"]. "<br><strong>Email:</strong> " . $row["email"]. "<br><strong>Date Sent:</strong> " . $row["date_sent"] . "<br><strong>Message:</strong> " . $row["msg"]. "<br><br>";
          }
      } else {
          echo "0 results";
      }
      $conn->close();
    ?>
    </div>
  </div>
  <div class="pop-up">
    <div class="container">
      <div id="login">
        <form action="javascript:void(0);" method="get">
          <fieldset>
            <p><span class="fontawesome-user"></span><input type="text" class="Username" placeholder="Username" required></p>
            <p><span class="fontawesome-lock"></span><input type="password" class="Password" placeholder="Password" required></p>
            <p><input class="loginButton" type="submit" value="Sign In"></p>
          </fieldset>
        </form>
      </div>
    </div>
  </div>

  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script type="text/javascript" src="js/mail.js"></script>
</body>
</html>