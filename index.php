<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="/webapp/favicon.ico">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

        <!-- jQuery first, then Popper, then Bootstrap -->
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

        <!-- App -->
        <script src="/webapp/onload.js" crossorigin="anonymous"></script>
        <script src="/webapp/scripts/filesize.js" crossorigin="anonymous"></script>
        <script src="/webapp/scripts/datetime.js" crossorigin="anonymous"></script>
        <script src="/webapp/events/user_register.js" crossorigin="anonymous"></script>
        <script src="/webapp/events/user_remind.js" crossorigin="anonymous"></script>
        <script src="/webapp/events/user_signin.js" crossorigin="anonymous"></script>
        <script src="/webapp/events/user_auth.js" crossorigin="anonymous"></script>
        <script src="/webapp/events/user_signout.js" crossorigin="anonymous"></script>
        <script src="/webapp/events/user_update.js" crossorigin="anonymous"></script>
        <script src="/webapp/events/thumb_post.js" crossorigin="anonymous"></script>
        <script src="/webapp/events/do.js" crossorigin="anonymous"></script>

        <title>Echidna Docs</title>
    </head>
    <body>

        <!-- navbar, forms -->
        <?php
        require_once(__DIR__ . '/navbar.html');
        require_once(__DIR__ . '/forms/user_register.html');
        require_once(__DIR__ . '/forms/user_remind.html');
        require_once(__DIR__ . '/forms/user_signin.html');
        require_once(__DIR__ . '/forms/user_update.html');
        ?>

        <h1>Hello, world!</h1>

    </body>
</html>