<div id="form-signin" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="form-signin">
  <div class="offcanvas-header">
    <h5 id="form-signin-title" class="offcanvas-title"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    <form>

    <!-- error -->
    <div id="form-signin-error" class="alert alert-danger d-none" role="alert">
    </div>

    <!-- email -->
    <div class="form-floating mb-3">
      <input id="form-signin-email-input" type="email" class="form-control" placeholder=" " disabled>
      <label id="form-signin-email-label" for="form-signin-email-input"></label>
    </div>

    <!-- pass -->
    <div class="form-floating mb-3">
      <input id="form-signin-pass-input" type="text" class="form-control" placeholder=" ">
      <label id="form-signin-pass-label" for="form-signin-pass-input"></label>
    </div>

    <!-- pass text -->
    <div class="mb-3 form-text">
      <span id="form-signin-pass-text"></span> 
      <a if="form-signin-pass-href" href="#"></a>
    </div>

    <!-- submit -->
    <button id="form-signin-submit" class="btn btn-primary" type="button"></button>

    <!-- spinner -->
    <div id="form-signin-spinner" class="spinner-border spinner-border-sm text-dark d-none" role="status">
      <span class="visually-hidden">Wait</span>
    </div>

  </form>

  </div>
</div>