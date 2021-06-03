<?php
define( 'ECHIDNA_URL', 'http://project.local' );
define( 'ECHIDNA_TITLE', 'Echidna Docs' );
?>

<!-- header -->
<?php require_once(__DIR__ . '/header.php'); ?>

<!-- navbar -->
<?php require_once(__DIR__ . '/navbar.php'); ?>

<!-- modals -->
<?php require_once(__DIR__ . '/modals/user_register.php'); ?>
<?php require_once(__DIR__ . '/modals/user_registered.php'); ?>
<?php require_once(__DIR__ . '/modals/user_restore.php'); ?>
<?php require_once(__DIR__ . '/modals/user_restored.php'); ?>
<?php require_once(__DIR__ . '/modals/user_signin.php'); ?>

<!-- pages -->
<?php require_once(__DIR__ . '/pages/hello.php'); ?>
<?php require_once(__DIR__ . '/pages/posts.php'); ?>
<?php require_once(__DIR__ . '/pages/hubs.php'); ?>

<!-- footer -->
<?php require_once(__DIR__ . '/footer.php'); ?>
