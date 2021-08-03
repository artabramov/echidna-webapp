<div id="modal-role-update" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-role-update-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <!-- modal header -->
      <div class="modal-header">
        <h5 class="modal-title">Role update</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <!-- error -->
        <div id="modal-role-update-error" class="alert alert-secondary d-none" role="alert"></div>

        <!-- hub id -->
        <div class="form-group">
            <label for="modal-role-update-hub-id">Hub id</label>
            <input id="modal-role-update-hub-id" type="text" class="form-control" aria-describedby="modal-role-update-hub-id-help" placeholder="" readonly>
        </div>

        <!-- user id -->
        <div class="form-group">
            <label for="modal-role-update-user-id">User id</label>
            <input id="modal-role-update-user-id" type="text" class="form-control" aria-describedby="modal-role-update-user-id-help" placeholder="" readonly>
        </div>

        <!-- role status: admin -->
        <div class="form-check">
          <input class="form-check-input" type="radio" name="modal-role-update-role-status" id="modal-role-update-role-status-admin" value="admin">
          <label class="form-check-label" for="modal-role-update-role-status-admin">
            admin
            <small class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </label>
        </div>

        <!-- role status: editor -->
        <div class="form-check">
          <input class="form-check-input" type="radio" name="modal-role-update-role-status" id="modal-role-update-role-status-editor" value="editor">
          <label class="form-check-label" for="modal-role-update-role-status-editor">
            editor
            <small class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </label>
        </div>

        <!-- role status: reader -->
        <div class="form-check">
          <input class="form-check-input" type="radio" name="modal-role-update-role-status" id="modal-role-update-role-status-reader" value="reader">
          <label class="form-check-label" for="modal-role-update-role-status-reader">
            reader
            <small class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </label>
        </div>

      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="modal-role-update-submit" type="button" class="btn btn-dark">Update</button>
        <button id="modal-role-update-delete" type="button" class="btn btn-dark">Delete</button>
      </div>

    </div>
  </div>
</div>

<script>
function modal_role_update_user_role_click(user_id, role_status) {
  $('#modal-role-update-user-id').val(user_id);

  if(role_status == 'admin') {
    $('#modal-role-update-role-status-admin').attr('checked', true);

  } else if(role_status == 'editor') {
    $('#modal-role-update-role-status-editor').attr('checked', true);

  } else {
    $('#modal-role-update-role-status-reader').attr('checked', true);
  }
}
</script>
