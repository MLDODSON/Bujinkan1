<?php
$db_host = "localhost";
$db_host = "its_me";
$db_host = "its_me";
$db_host = "let_me_in";

@mysql_connect("$db_host","$db_user","$db_pass") or die ("could not connect to mysql");
@mysql_select_db("$db_name") or die("no database");

?>