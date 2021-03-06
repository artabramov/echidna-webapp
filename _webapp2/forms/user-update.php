<div id="form-user-update" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="form-user-update">
  <div class="offcanvas-header">
    <h5 id="form-user-update-title" class="offcanvas-title"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    <form>

    <!-- error -->
    <div id="form-user-update-error" class="alert alert-danger d-none" role="alert">
    </div>

    <!-- thumb file -->
    <div class="mb-3">
      <small id="form-user-update-file-label" class="text-muted"></small>
      <input id="form-user-update-file-input" class="form-control" type="file">
    </div>

    <!-- thumb image -->
    <!-- TODO: delete id -->
    <div id="form-user-update-thumb" class="mb-3 d-none">
      <img id="form-user-update-thumb-img" src="" class="rounded mx-auto d-block" alt="user thumb">
    </div>

    <!-- email -->
    <div class="form-floating mb-3">
      <small id="form-user-update-email-label" class="text-muted"></small>
      <p id="form-user-update-email"></p>
    </div>

    <!-- name -->
    <div class="form-floating mb-3">
      <input id="form-user-update-name-input" class="form-control" type="text" maxlength="128" placeholder=" ">
      <label id="form-user-update-name-label" for="form-user-update-name-input"></label>
    </div>

    <!-- timezone -->
    <div class="form-floating mb-3">
      <select id="form-user-update-timezone-select" class="form-select" aria-label="Floating label select example">
      </select>
      <label id="form-user-update-timezone-label" for="form-user-update-timezone-select"></label>
    </div>

    <!-- create date -->
    <div class="form-floating mb-3">
      <small id="form-user-update-create-date-label" class="text-muted"></small>
      <p id="form-user-update-create-date"></p>
    </div>

    <!-- submit -->
    <button id="form-user-update-submit" class="btn btn-primary" type="button"></button>

    <!-- spinner -->
    <div id="form-user-update-spinner" class="spinner-border spinner-border-sm text-dark d-none" role="status">
      <span class="visually-hidden">Wait</span>
    </div>

  </form>

  </div>
</div>
