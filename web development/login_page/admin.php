<body>
<?php
if (!isset($_SESSION['user'])) {
    
    header("Location: index.php");
    exit();
}
?>
    <div class="ptag">
        <h1>Welcome, <?php echo $_SESSION['user']['name']; ?></h1>
        <p>Email: <?php echo $_SESSION['user']['email']; ?></p>
        <p>Role: <?php echo $_SESSION['user']['role']; ?></p>
        <div id='a'>
        <a href="index.php">Logout</a>
        </div>
    </div>
</body>
