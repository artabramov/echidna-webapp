<!-- navbar -->
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <!-- users -->
      <li id="navbar-users" class="pl-2 nav-item d-none">
        <a class="nav-link" href="<?php echo ECHIDNA_URL; ?>?page=users">Users</a>
      </li>

      <!-- hubs -->
      <li id="navbar-hubs" class="pl-2 nav-item d-none">
        <a class="nav-link" href="<?php echo ECHIDNA_URL; ?>?page=hubs&offset=0">Hubs <span id="navbar-hubs-alerts" class="badge badge-pill badge-light">+2</span></a>
      </li>

      <!-- post search -->
      <li  id="navbar-posts-search" class="pl-5 nav-item d-none">
        <input class="form-control w-100" type="search" placeholder="Search post" aria-label="Search">
      </li>

    </ul>

    <ul class="navbar-nav ml-auto">

      <!-- register -->
      <li id="navbar-user-register" class="nav-item d-none">
          <a href="#" class="btn btn-outline-light" data-toggle="modal" data-target="#modal-user-register">Register</a>
      </li>

      <!-- remind -->
      <li id="navbar-user-remind" class="pl-1 nav-item d-none">
          <a href="#" class="nav-link" data-toggle="modal" data-target="#modal-user-remind">Remind</a>
      </li>

      <!-- signin -->
      <li id="navbar-user-signin" class="pl-1 nav-item d-none">
          <a href="#" class="nav-link" data-toggle="modal" data-target="#modal-user-signin">Signin</a>
      </li>

      <!-- user -->
      <li id="navbar-user" class="nav-item dropdown d-none">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span id="navbar-user-user-name"></span></a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <a id="navbar-user-select" class="dropdown-item" href="#">Select user</a>
          <a id="navbar-user-update" class="dropdown-item" href="#">Update user</a>
          <div class="dropdown-divider"></div>
          <a id="navbar-user-signout" class="dropdown-item" href="#">Sign out</a>
        </div>
      </li>

    </ul>

  </div>
</nav>
