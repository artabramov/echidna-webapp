<div id="role-insert-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="role-insert-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <!-- modal header -->
      <div class="modal-header">
        <h5 class="modal-title">Add role</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <!-- error -->
        <div id="role-insert-error" class="alert alert-secondary d-none" role="alert"></div>

        <!-- hub id -->
        <div class="form-group">
            <label for="role-insert-hub-id">Hub id</label>
            <input id="role-insert-hub-id" type="text" class="form-control" aria-describedby="role-insert-hub-id-help" value="<?php echo $hub_id; ?>" placeholder="">
        </div>

        <!-- user id -->
        <div class="form-group">
            <label for="role-insert-user-id">User id</label>
            <input id="role-insert-user-id" type="text" class="form-control" aria-describedby="role-insert-user-id-help" placeholder="">
        </div>

      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="role-insert-submit" type="button" class="btn btn-dark">Done</button>
      </div>

    </div>
  </div>
</div>
