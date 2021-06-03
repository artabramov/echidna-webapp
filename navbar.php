<!-- navbar -->
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <!-- hubs -->
      <li id="navbar-hubs" class="pl-2 nav-item d-none">
        <a class="nav-link" href="#">Hubs</a>
      </li>

      <!-- posts -->
      <li id="navbar-posts" class="pl-2 nav-item d-none">
        <a class="nav-link" href="#">Posts <span class="badge badge-pill badge-light">+2</span></a>
      </li>

      <!-- post-add -->
      <li  id="navbar-post-add" class="pl-4 nav-item d-none">
        <a href="#" data-toggle="modal" data-target="#modal-post-add" class="btn btn-outline-light"><i class="material-icons">add_circle_outline</i> Add post</a>
      </li>

    </ul>
    <ul class="navbar-nav ml-auto">

      <!-- register -->
      <li id="navbar-register" class="nav-item d-none">
          <a href="#" class="btn btn-outline-light" data-toggle="modal" data-target="#modal-register">Register</a>
      </li>

      <!-- restore -->
      <li id="navbar-restore" class="pl-2 nav-item d-none">
          <a href="#" class="nav-link" data-toggle="modal" data-target="#modal-restore">Restore</a>
      </li>

      <!-- signin -->
      <li id="navbar-signin" class="pl-1 nav-item d-none">
          <a href="#" class="nav-link" data-toggle="modal" data-target="#modal-signin">Signin</a>
      </li>

      <!-- user -->
      <li id="navbar-user" class="nav-item dropdown d-none">
        <!--<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons"><span class="material-icons-outlined">account_circle</span></i> <span id="navbar-user-name"></span></a>-->
        <!--<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span id="navbar-user-id" class="badge badge-pill badge-secondary"></span> <span id="navbar-user-name"></span></a>-->
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span id="navbar-user-name"></span></a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Select user <span id="navbar-user-id"></span></a>
          <a class="dropdown-item" href="#">Update user</a>
          <div class="dropdown-divider"></div>
          <a id="navbar-user-signout" class="dropdown-item" href="#">Sign out</a>
        </div>
      </li>

    </ul>

  </div>
</nav>
