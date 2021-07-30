<div id="modal-user-register" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-user-register-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <!-- modal header -->
      <div class="modal-header">
        <h5 class="modal-title">Register</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <!-- error -->
        <div id="modal-user-register-error" class="alert alert-secondary d-none" role="alert"></div>

        <!-- user email -->
        <div class="form-group">
            <label for="modal-user-register-user-email">Email address</label>
            <input id="modal-user-register-user-email" type="text" class="form-control" aria-describedby="modal-user-register-user-email-help" placeholder="">
            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <!-- user name -->
        <div class="form-group">
            <label for="modal-user-register-user-name">User name</label>
            <input id="modal-user-register-user-name" class="form-control" type="text" placeholder="">
        </div>

        <!-- user phone -->
        <div class="form-group">
            <label for="modal-user-register-user-phone">Phone</label>
            <input id="modal-user-register-user-phone" type="text" class="form-control" aria-describedby="modal-user-register-user-phone-help" placeholder="">
            <small class="form-text text-muted">We'll never share your phone with anyone else.</small>
        </div>

      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="modal-user-register-submit" type="button" class="btn btn-dark">Done</button>
      </div>

    </div>
  </div>
</div>
