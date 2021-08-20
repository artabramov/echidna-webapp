<div id="form-remind" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="form-remind">
  <div class="offcanvas-header">
    <h5 id="form-remind-title" class="offcanvas-title"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <form>

    <!-- error -->
    <div id="form-remind-error" class="alert alert-danger d-none" role="alert">
    </div>

    <!-- email -->
    <div class="form-floating mb-3">
      <input id="form-remind-email-input" type="email" class="form-control" placeholder=" ">
      <label id="form-remind-email-label" for="form-remind-email-input"></label>
    </div>

    <!-- email text -->
    <div class="mb-3 form-text">
      <span id="form-remind-email-text"></span> 
      <a id="form-remind-email-href" data-bs-toggle="offcanvas" href="#form-register" aria-controls="form-register"></a>
    </div>

    <!-- submit -->
    <button id="form-remind-submit" class="btn btn-primary" type="button"></button>

    <!-- spinner -->
    <div id="form-remind-spinner" class="spinner-border spinner-border-sm text-dark d-none" role="status">
      <span class="visually-hidden">Wait</span>
    </div>

  </form>
  </div>
</div>