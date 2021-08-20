<div id="form-register" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="form-register">

  <div class="offcanvas-header">
    <h5 id="form-register-title" class="offcanvas-title"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  <div class="offcanvas-body">
    <form>

    <!-- error -->
    <div id="form-register-error" class="alert alert-danger d-none" role="alert">
    </div>

    <!-- email -->
    <div class="form-floating mb-3">
      <input id="form-register-email-input" class="form-control" type="email" maxlength="255" placeholder=" ">
      <label id="form-register-email-label" for="form-register-email-input"></label>
    </div>

    <!-- email text -->
    <div id="form-register-email-text" class="mb-3 form-text">
    </div>

    <!-- name -->
    <div class="form-floating mb-3">
      <input id="form-register-name-input" class="form-control" type="text" maxlength="128" placeholder=" ">
      <label id="form-register-name-label" for="form-register-name-input"></label>
    </div>

    <!-- checkbox -->
    <div class="form-check form-switch mb-3">
      <input id="form-register-offer-checkbox" class="form-check-input" type="checkbox">
      <label id="form-register-offer-label" for="form-register-offer-checkbox" class="form-check-label"></label>
    </div>

    <!-- offer -->
    <div class="mb-3 form-text">
      <span id="form-register-offer-text"></span>
      <a id="form-register-offer-href" href="#"></a>
    </div>

    <!-- submit -->
    <button id="form-register-submit" class="btn btn-primary" type="button" disabled></button>

    <!-- spinner -->
    <div id="form-register-spinner" class="spinner-border spinner-border-sm text-dark d-none" role="status">
      <span class="visually-hidden">Wait</span>
    </div>

  </form>
  </div>
</div>

<script>

  // -- checkbox --
  $("#form-register-offer-checkbox").click(function(){
    if ($('#form-register-offer-checkbox').prop('checked')) {
      $('#form-register-submit').prop('disabled', false);
    } else {
      $('#form-register-submit').prop('disabled', true);
    }
  });

</script>
