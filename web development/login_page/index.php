<?php
session_start();

$errors = [
  'login' => $_SESSION['error'] ?? null,
  'register' => $_SESSION['success'] ?? null
];

$activeForm = $_SESSION['activeForm'] ?? 'login';

session_unset();

function showError($error) {
  return !empty($error) ? "<p class='error'>$error</p>" : '';
}

function isActtiveForm($formName, $activeForm) {
  return $formName === $activeForm ? 'active' : '';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>More Advanced Login Page</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <div id="container">

    <div class="form active">       
      <form action="login_register.php" method="POST">
        <input type="email" id="login-email" name="useremail" placeholder="Email" required>
        <input type="password" id="login-password" name="password" placeholder="Password" required>
        <input type="submit" name="login" value="Login">
         <?php echo showError($errors['login']); ?>
        <p>Don't have an account? <a href="#" onclick="showRegister()">Register here</a></p>
      </form>
    </div>  

    <div class="form"> 
      <form action="login_register.php" method="POST">
        <input type="text" id="username" name="username" placeholder="Name" required>
        <input type="email" id="register-email" name="useremail" placeholder="Email" required>
        <input type="password" id="register-password" name="password" placeholder="Password" required>

        <select name="role" id="userrole">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <?php echo showError($errors['register']); ?>
        <input type="submit" name="register" value="Register">

        <p>Already have an account? <a href="#" onclick="showLogin()">Login</a></p>
      </form>    
    </div>

  </div>

  <script src="script.js"></script>
  
</body>
</html>
