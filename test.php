
<?php
$db_host = "localhost";
$db_host = "Username";
$db_host = "password";
$connection = mysql_connect("$db_host","$db_username","$db_pass");
if (!$connection) {
	die("Could not connect to MySQL: " . mysql_error());
}
if (mysql_query("CREATE DATABASE my_database", $connection)) {
	echo "Database was created successfully.";
} else {
	echo "Error - Database was not created: " . mysql_error(); 
}
mysql_close($connection);
?>

