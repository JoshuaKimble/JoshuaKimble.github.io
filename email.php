<?php
    $link = mysql_connect('joshuakimblecom.ipagemysql.com', 'jkimble5', 'Jenni930'); 
    if (!$link) { 
        die('Could not connect: ' . mysql_error()); 
    }
    mysql_select_db(joshuakimblecom);
    
    $user_Name        = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
	$user_Email       = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
	$user_Message     = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    $date_Sent        = date("F j, Y, g:i a");
    
    $sql = "insert into MAIL values('$user_Name','$user_Email','$user_Message','$date_Sent');";
    
    if($user_Name!="" && $user_Email!=""){
        mysql_query($sql,$link);
    }
    mysql_close($link);
?>