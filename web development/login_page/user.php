<?php
session_start();
?>

<html>
    <head>
        <title>User Page</title>
        <link rel="stylesheet" href="style.css">

    </head>
    <body>
        <div class="ptag">
            <h1>Welcome, <?php echo $_SESSION['user']['name']; ?></h1>
            <p>Email: <?php echo $_SESSION['user']['email']; ?></p>
            <p>Role: <?php echo $_SESSION['user']['role']; ?></p>
             <div id='a'>
        <a href="index.php">Logout</a>
        </div>
        </div>
</html>