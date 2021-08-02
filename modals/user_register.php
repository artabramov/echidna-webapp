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

        <!-- user phone collapse -->
        <div class="form-group">
            <a href="#" id="exampleCheck1" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Set user phone</a>
        </div>

        <!-- user phone -->
        <div class="collapse" id="collapseExample">
          <div class="form-group">
              <label for="modal-user-register-user-phone">User phone</label>
              <input id="modal-user-register-user-phone" type="text" class="form-control" aria-describedby="modal-user-register-user-phone-help" placeholder="">
              <small class="form-text text-muted">We'll never share your phone with anyone else.</small>
          </div>          
        </div>

        <!-- some text -->
        <div class="form-check">
          <input type="checkbox"  class="form-check-input" id="modal-user-register-checkbox">
          <label class="form-check-label" for="modal-user-register-checkbox">I agree with the <a href="#">rules</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
        </div>

      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="modal-user-register-submit" type="button" class="btn btn-dark" disabled>Done</button>
      </div>

    </div>
  </div>
</div>

<script>
  $("#modal-user-register-checkbox").click(function(){
    if ($('#modal-user-register-checkbox').prop('checked')) {
      $('#modal-user-register-submit').prop('disabled', false);
    } else {
      $('#modal-user-register-submit').prop('disabled', true);
    }
  });
</script>
