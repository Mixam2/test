<html>
<header>
    <link rel="stylesheet" href="accueil.css">

</header>

<body>
    <div class="search-box">
        <input type="text" class="recherche" name="" placeholder="rechercher">
        <div class="autocom-box">
            <li>yeezy</li>
            <li>adidas</li>
            <li>Nike</li>
            <li>airforce</li>
            <li>4D</li>
        </div>
    </div>
    <?php
    $host = "127.0.0.1";
    $username = "root";
    $pass = "hgh";
    $con = mysqli_connect($host, $username,'', "labase1");
    ?>
    <script>var tout = new Array("");</script>
<?php
    
        $sql = "SELECT * FROM yeezy700;";
        $result = mysqli_query($con, $sql);
        $resultC = mysqli_num_rows($result);
        while ($row = mysqli_fetch_assoc($result)){
    ?>
    <script>tout.push("<?php echo $row['Nom']; ?>");</script>
    <?php
        }
    ?>
    <script src="accueil.js"></script>
</body>

</html>