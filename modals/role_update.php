<div id="modal-role-update" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-role-update-title" aria-hidden="true">
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
        <div id="role-update-error" class="alert alert-secondary d-none" role="alert"></div>

        <!-- role id -->
        <div class="form-group">
            <label for="role-update-role-id">Role id</label>
            <input id="role-update-role-id" type="text" class="form-control" aria-describedby="role-update-role-id-help" value="<?php echo $hub_id; ?>" placeholder="" readonly>
        </div>

        <!-- user role: admin -->
        <div class="form-check">
          <input class="form-check-input" type="radio" name="user-role" id="user-role-admin" value="admin" checked>
          <label class="form-check-label" for="user-role-admin">
            admin
            <small class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </label>
          
        </div>

        <!-- user role: author -->
        <div class="form-check">
          <input class="form-check-input" type="radio" name="user-role" id="user-role-author" value="author">
          <label class="form-check-label" for="user-role-author">
            author
            <small class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </label>
        </div>

        <!-- user role: editor -->
        <div class="form-check">
          <input class="form-check-input" type="radio" name="user-role" id="user-role-editor" value="editor">
          <label class="form-check-label" for="user-role-editor">
            editor
            <small class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </label>
        </div>

        <!-- user role: reader -->
        <div class="form-check">
          <input class="form-check-input" type="radio" name="user-role" id="user-role-reader" value="reader">
          <label class="form-check-label" for="user-role-reader">
            reader
            <small class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </label>
        </div>


      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="role-update-submit" type="button" class="btn btn-dark">Update</button>
        <button id="role-delete-submit" type="button" class="btn btn-dark">Delete</button>
      </div>

    </div>
  </div>
</div>
