<!-- navbar -->
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark d-none">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <!-- hubs -->
      <li id="hubs-navbar" class="pl-2 nav-item d-none">
        <a class="nav-link" href="<?php echo ECHIDNA_URL; ?>/?page=hubs&hub_status=custom&offset=0">Hubs</a>
      </li>

      <!-- posts -->
      <li id="posts-navbar" class="pl-2 nav-item d-none">
        <a class="nav-link" href="<?php echo ECHIDNA_URL; ?>/?page=posts">Posts <span class="badge badge-pill badge-light">+2</span></a>
      </li>

      <!-- add post -->
      <li  id="post-add-navbar" class="pl-4 nav-item d-none">
        <a href="#" data-toggle="modal" data-target="#post-add-modal" class="btn btn-outline-light"><i class="material-icons">add_circle_outline</i> Add post</a>
      </li>

    </ul>

    <ul class="navbar-nav ml-auto">

      <!-- register -->
      <li id="register-navbar" class="nav-item d-none">
          <a href="#" class="btn btn-outline-light" data-toggle="modal" data-target="#register-modal">Register</a>
      </li>

      <!-- restore -->
      <li id="restore-navbar" class="pl-2 nav-item d-none">
          <a href="#" class="nav-link" data-toggle="modal" data-target="#restore-modal">Restore</a>
      </li>

      <!-- signin -->
      <li id="signin-navbar" class="pl-1 nav-item d-none">
          <a href="#" class="nav-link" data-toggle="modal" data-target="#signin-modal">Signin</a>
      </li>

      <!-- user -->
      <li id="user-navbar" class="nav-item dropdown d-none">
        <a id="user-name-navbar" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Select user</a>
          <a class="dropdown-item" href="#">Update user</a>
        </div>
      </li>

      <!-- signout -->
      <li id="signout-navbar" class="pl-2 nav-item d-none">
        <a class="nav-link" href="#">Signout</a>
      </li>

    </ul>

  </div>
</nav>
