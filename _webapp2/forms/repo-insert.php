<div id="form-repo-insert" class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="form-repo-insert">
  <div class="offcanvas-header">
    <h5 id="form-repo-insert-title" class="offcanvas-title"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <form>

    <!-- error -->
    <div id="form-repo-insert-error" class="alert alert-danger d-none" role="alert">
    </div>

    <!-- repo name -->
    <div class="form-floating mb-3">
      <input id="form-repo-insert-name-input" type="email" class="form-control" placeholder=" ">
      <label id="form-repo-insert-name-label" for="form-repo-insert-name-input"></label>
    </div>

    <!-- name text -->
    <div class="mb-3 form-text">
      <span id="form-repo-insert-name-text"></span> 
    </div>

    <!-- submit -->
    <button id="form-repo-insert-submit" class="btn btn-primary" type="button"></button>

    <!-- spinner -->
    <div id="form-repo-insert-spinner" class="spinner-border spinner-border-sm text-dark d-none" role="status">
      <span class="visually-hidden">Wait</span>
    </div>

  </form>
  </div>
</div>