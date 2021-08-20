<?php
define('ECHIDNA_DEBUG', true);
define('ECHIDNA_API', 'http://project.local/api/');
define('ECHIDNA_URL', 'http://project.local/');
define('ECHIDNA_TITLE', 'Echidna Docs');
define('ECHIDNA_LANGUAGES', ['en', 'ru']);
?>

<!-- header -->
<?php 
require_once(__DIR__ . '/header.php'); 
?>

<!-- navbar -->
<?php 
require_once(__DIR__ . '/navbar.php'); 
?>

<!-- modals -->
<?php 
//require_once(__DIR__ . '/modals/user_register.php');
?>

<?php
require_once(__DIR__ . '/forms/user-register.php');
require_once(__DIR__ . '/forms/user-remind.php');
require_once(__DIR__ . '/forms/user-signin.php');
require_once(__DIR__ . '/forms/user-update.php');
require_once(__DIR__ . '/forms/user-volume.php');
require_once(__DIR__ . '/forms/repo-insert.php');
require_once(__DIR__ . '/forms/post-insert.php');
?>

<!-- page -->
<?php 
if(empty($_GET['page'])) {
    require_once(__DIR__ . '/pages/hello.php'); 

} elseif(file_exists(__DIR__ . '/pages/' . $_GET['page'] . '.php')) {
    require_once(__DIR__ . '/pages/' . $_GET['page'] . '.php'); 

} else {
    require_once(__DIR__ . '/pages/404.php'); 
}
?>

<!-- footer -->
<?php 
//require_once(__DIR__ . '/footer.php'); 
?>
