<?php
session_start();
require_once 'config.php';


if (isset($_POST['register'])) { 
    $name = $_POST['username'];
    $email = $_POST['useremail'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $role = $_POST['role'] ?? 'user';

    $checkEmail = $conn->query("SELECT email FROM users WHERE email='$email'");
    if ($checkEmail->num_rows > 0) {
        $_SESSION['error'] = "Email already exists.";
        header("Location: index.php");
        exit();
    } else {
        $conn->query("INSERT INTO users (name, email, password, role) VALUES ('$name', '$email', '$password', '$role')");
        header("Location: index.php");
        exit();
    }
}


if (isset($_POST['login'])) {  
    $email = $_POST['useremail'];
    $password = $_POST['password'];

    $result = $conn->query("SELECT * FROM users WHERE email='$email'");
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = $user;
            header("Location: user.php"); 
            exit();
        } else {
            $_SESSION['error'] = "Invalid password.";
            header("Location: admin.php");
            exit();
        }
    } else {
        $_SESSION['error'] = "Email not found.";
        header("Location: login.php");
        exit();
    }
}
?>

