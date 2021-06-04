<div id="modal-signin" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-signin-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <!-- modal header -->
      <div class="modal-header">
        <h5 class="modal-title">Signin</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <!-- error -->
        <div id="modal-signin-error" class="alert alert-secondary d-none" role="alert"></div>

        <!-- user email -->
        <div class="form-group">
          <label for="modal-signin-user-email">Email address</label>
          <input id="modal-signin-user-email" type="text" class="form-control" aria-describedby="modal-signin-user-email-help" placeholder="">
          <small id="modal-signin-user-pass-help" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <!-- user pass -->
        <div id="modal-signin-user-pass-group" class="form-group d-none">
          <label for="modal-signin-user-pass">One-time pass</label>
          <input id="modal-signin-user-pass" class="form-control" type="text" placeholder="">
        </div>

      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="modal-signin-restore" type="button" class="btn btn-dark">Restore</button>
        <button id="modal-signin-done" type="button" class="btn btn-dark d-none">Signin</button>
      </div>

    </div>
  </div>
</div>