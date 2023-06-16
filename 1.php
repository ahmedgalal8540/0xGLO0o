<?php
include('style.php');
$page = $_GET["page"];
if (isset($page)){
	include($page);
} else{
	echo "<h2>I can't find a 'page' to load!</h2>";
}

?>