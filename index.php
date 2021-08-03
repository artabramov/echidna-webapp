<?php
define( 'ECHIDNA_DEBUG', true );
define( 'ECHIDNA_API', 'http://project.local/api/' );
define( 'ECHIDNA_URL', 'http://project.local/' );
define( 'ECHIDNA_TITLE', 'Echidna Docs' );
?>

<!-- header -->
<?php require_once(__DIR__ . '/header.php'); ?>

<!-- navbar -->
<?php require_once(__DIR__ . '/navbar.php'); ?>

<!-- modals -->
<?php 
require_once(__DIR__ . '/modals/user_register.php');
require_once(__DIR__ . '/modals/user_register_done.php');
require_once(__DIR__ . '/modals/user_remind.php');
require_once(__DIR__ . '/modals/user_remind_done.php');
require_once(__DIR__ . '/modals/user_signin.php');
require_once(__DIR__ . '/modals/hub_insert.php');
require_once(__DIR__ . '/modals/hub_edit.php');
require_once(__DIR__ . '/modals/hub_leave.php');
require_once(__DIR__ . '/modals/post_insert.php');
require_once(__DIR__ . '/modals/role_insert.php');
require_once(__DIR__ . '/modals/role_update.php');
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
<?php require_once(__DIR__ . '/footer.php'); ?>
