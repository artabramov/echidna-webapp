<?php
define( 'ECHIDNA_URL', 'http://project.local' );
define( 'ECHIDNA_TITLE', 'Echidna Docs' );
define( 'ECHIDNA_ROWS_ON_PAGE', 3 );
?>

<!-- header -->
<?php require_once(__DIR__ . '/header.php'); ?>

<!-- navbar -->
<?php require_once(__DIR__ . '/navbar.php'); ?>

<!-- modals -->
<?php require_once(__DIR__ . '/modals/user_register.php'); ?>
<?php require_once(__DIR__ . '/modals/user_registered.php'); ?>
<?php require_once(__DIR__ . '/modals/user_signin.php'); ?>
<?php require_once(__DIR__ . '/modals/hub_insert.php'); ?>

<!-- pages -->
<?php //require_once(__DIR__ . '/pages/hello.php'); ?>
<?php //require_once(__DIR__ . '/pages/posts.php'); ?>
<?php //require_once(__DIR__ . '/pages/hubs.php'); ?>
<?php //require_once(__DIR__ . '/pages/user.php'); ?>

<?php 
if(empty($page)) {
    require_once(__DIR__ . '/pages/hello.php'); 

} elseif(file_exists(__DIR__ . '/pages/' . $page . '.php')) {
    require_once(__DIR__ . '/pages/' . $page . '.php'); 

} else {
    require_once(__DIR__ . '/pages/404.php'); 
}
?>

<!-- footer -->
<?php require_once(__DIR__ . '/footer.php'); ?>
