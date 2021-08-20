<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="/webapp/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title><?php echo ECHIDNA_TITLE; ?></title>
  </head>
  <body>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="webapp/style.css">

    <!-- jQuery first, then Popper, then Bootstrap, then App -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

    <!-- echidna consts -->
    <script>
      const ECHIDNA_DEBUG = <?php echo json_encode(ECHIDNA_DEBUG); ?>;
      const ECHIDNA_API = '<?php echo ECHIDNA_API ?>';
      const ECHIDNA_URL = '<?php echo ECHIDNA_URL ?>';
      const ECHIDNA_TITLE = '<?php echo ECHIDNA_TITLE ?>';
      const ECHIDNA_LANGUAGES = [<?php echo '"'.implode('","', ECHIDNA_LANGUAGES).'"' ?>];
    </script>

    <script src="<?php echo ECHIDNA_URL ?>/webapp/functions.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/onload.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/user_auth.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/user_register.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/user_remind.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/user_signin.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/user_update.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/user_signout.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/thumb_post.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/premium_get.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/repo_insert.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/repo_list.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/post_list.js" crossorigin="anonymous"></script>
    <script src="<?php echo ECHIDNA_URL ?>/webapp/events/post_insert.js" crossorigin="anonymous"></script>
    

