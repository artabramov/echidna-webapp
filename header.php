<!doctype html>
<html lang="en">
  <head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="shortcut icon" href="/webapp/favicon.ico">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- title -->
    <title><?php echo ECHIDNA_TITLE; ?></title>
    
  </head>
  <body>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="webapp/style.css">

    <!-- echidna consts -->
    <script>
    const ECHIDNA_DEBUG = <?php echo json_encode(ECHIDNA_DEBUG); ?>;
    const ECHIDNA_API = '<?php echo ECHIDNA_API ?>';
    const ECHIDNA_URL = '<?php echo ECHIDNA_URL ?>';
    </script>

    <!-- jQuery first, then Popper, then Bootstrap, then App -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <script src="<?php echo ECHIDNA_URL ?>/webapp/pagination.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/user_auth.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/user_signout.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/user_remind.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/user_register.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/user_signin.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/user_select.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/hub_query.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/hub_insert.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/hub_select.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/hub_delete.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/post_query.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/post_insert.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/role_insert.js" crossorigin="anonymous"></script>
    

