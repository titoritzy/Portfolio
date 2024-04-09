<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set recipient email address
$to = 'tituskithome122@gmail.com'; 

// Set email subject
$subject = 'New Message';

// Build email message
$body = "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message";

// Set email headers
$headers = "From: $name <$email>";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false));
}
?>
