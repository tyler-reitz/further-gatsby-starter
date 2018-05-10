Form Fields:
<br>
name: <?php echo $_POST["name"]; ?>
<br>
email: <?php echo $_POST["email"]; ?>
<br>
phone: <?php echo $_POST["phone"]; ?>
<br>
notes: <?php echo $_POST["notes"]; ?>
<br>
message: <?php echo $_POST["message"]; ?>
<br>

Errors:
<br>
name: <?php echo $nameErr; ?>
<br>
email: <?php echo $emailErr; ?>
<br>
phone: <?php echo $phoneErr; ?>
<br>
notes: <?php echo $notesErr; ?>
<br>
message: <?php echo $messageErr; ?>
<br>

<?php
  // Setup necessary variables for form fields and error messages
  $name = $email = $phone = $notes = $message = "";
  $nameErr = $emailErr = $phoneErr = $notesErr = $messageErr = "";

  // Trims whitespace, strips slashes, and escapes html characters
  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  // Form validation
  if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (empty($_POST["name"])){
      $nameErr = "name is required";
    } else {
      $name = test_input($_POST["name"]);
      
      if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
        $nameErr = "Only letters and white space allowed";
      }
    }

    if (empty($_POST["email"])){
      $emailErr = "email is required";
    } else {
      $email = test_input($_POST["email"]);

      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Inavlid email format";
      }
    }

    if (empty($_POST["phone"])){
      $phoneErr = "phone is required";
    } else {
      $phone = test_input($_POST["phone"]);

      if (!preg_match("/^(\d{3})-(\d{3})-(\d{4})$/", $phone)) {
        $phoneErr = "Invalid phone number";
      }
    }

    if (empty($_POST["notes"])){
      $notesErr = "notes is required";
    } else {
      $notes = test_input($_POST["notes"]);
    }

    if (empty($_POST["message"])){
      $messageErr = "message is required";
    } else {
      $message = test_input($_POST["message"]);
    }

  }

  $email_recipient = "tyler@further.co  ";
  $email_subject = "Website Contact Request";
  $email_body = "Name: $name \r\n" .
                "Email: $email \r\n" .
                "Project Notes: $notes \r\n" .
                "Message: $message \r\n";

  $headers = array(
    "From" => "contact@trifecta.com",
    "Reply-To" => $email,
    "Bcc" => "contact@trifecta.com",
    "Disposition-Notification-To" => "tyler@further.co"
  );

  $email_was_sent = mail(
    $email_recipient, 
    $email_subject, 
    $email_body
  );

  if ($email_was_sent) {
    $successMessage = "email was sent successfully to $email_recipient \r\n";
    echo $successMessage;
  } else {
    echo "email was not successful";
  }

?>

