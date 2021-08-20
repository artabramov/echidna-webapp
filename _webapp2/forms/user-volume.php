<div id="form-user-volume" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="form-user-volume">
  <div class="offcanvas-header">
    <h5 id="form-user-volume-title" class="offcanvas-title"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    <form>

    <!-- error -->
    <div id="form-user-volume-error" class="alert alert-danger d-none" role="alert">
    </div>

    <!-- progress -->
    <div class="form-floating mb-3">
      <small id="form-user-volume-progress-label" class="text-muted"></small>
      <div class="progress" style="height:4px;">
        <div id="form-user-volume-progress" class="progress-bar progress-bar-striped" role="progressbar" style="" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="form-text d-flex justify-content-center">
        <span id="form-user-volume-progress-valuenow"></span>&nbsp;/&nbsp;<span id="form-user-volume-progress-valuemax"></span>
      </div>
      <div id="form-user-volume-expires" class="form-text d-flex justify-content-center d-none">
        <span id="form-user-volume-expires-label"></span>
        &nbsp;<span id="form-user-volume-days"></span>&nbsp;
        <span id="form-user-volume-days-label"></span>
      </div>
    </div>

    <!-- uploads text -->
    <div class="mb-3 form-text">
      <span id="form-user-volume-progress-text"></span>
    </div>

    <!-- code -->
    <div class="form-floating mb-3">
      <input id="form-user-volume-premium-code-input" class="form-control" type="text" maxlength="128" placeholder=" ">
      <label id="form-user-volume-premium-code-label" for="form-user-volume-premium-code-input"></label>
    </div>

    <!-- submit -->
    <button id="form-user-volume-submit" class="btn btn-primary" type="button"></button>

    <!-- spinner -->
    <div id="form-user-volume-spinner" class="spinner-border spinner-border-sm text-dark d-none" role="status">
      <span class="visually-hidden">Wait</span>
    </div>

  </form>

  </div>
</div>
