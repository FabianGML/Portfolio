<?php
    session_start();
if(isset($_POST['submit'])){
    //Get all the values from post 
    $target = "fabiangtml@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    //cookies
    setcookie("name", $name, time() + 60*60*24*30);
    setcookie("email", $email, time() + 60*60*24*30);
    //Send Message 
    $headers = "From: ".$email;
    $msg = "Name: ".$name."\n"."Email: ".$email."\n"."Message: ".$message;
    mail($target, $subject, $msg, $headers);
    mail($email, $subject, "Thank you for your message, please wait until i see your email");
    $_SESSION['email_send'] = '<p>Email sended Successfully!</p>';
    header("location:index.php");
}
?>