<?php

	if (isset($_POST['submit'])) {
	
	$to      = 'SlothWerks <production@slothwerks.com>';
	$subject = "Message from SlothWerks Portfolio Page";
	$headers = "From: $_POST[Name] <$_POST[EmailAddress]>\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$boundary = uniqid("WPHTMLEMAIL");
	$headers .= "Content-Type: multipart/alternative" .
	   "; boundary = $boundary\r\n\r\n";
	$headers .= "This is a MIME encoded message.\r\n\r\n";
	$headers .= "--$boundary\r\n" .
	   "Content-Type: text/html; charset=ISO-8859-1\r\n" .
	   "Content-Transfer-Encoding: base64\r\n\r\n";
	$header_text = "$_POST[Name]<br />$_POST[EmailAddress]<br />$_POST[Phone]<br /><hr />Preferred Contact Method:<br />$_POST[ContactMethod]<hr />They left this comment:<br />$_POST[Comments]";
	$headers .= chunk_split(base64_encode($header_text));

	mail($to, $subject, '', $headers);

	}

	header('Location: ../contact/thankyou.shtml');

?>