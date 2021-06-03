<div id="modal-restore" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-restore-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <!-- modal header -->
      <div class="modal-header">
        <h5 class="modal-title">Restore</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <!-- error -->
        <div id="modal-restore-error" class="alert alert-secondary d-none" role="alert"></div>

        <!-- user email -->
        <div class="form-group">
            <label for="modal-restore-user-email">Email address</label>
            <input id="modal-restore-user-email" type="text" class="form-control" aria-describedby="restore-user-email-help" placeholder="">
        </div>

      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="modal-restore-submit" type="button" class="btn btn-dark">Done</button>
      </div>

    </div>
  </div>
</div>
