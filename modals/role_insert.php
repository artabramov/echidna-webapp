<div id="modal-role-insert" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-role-insert-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <!-- modal header -->
      <div class="modal-header">
        <h5 class="modal-title">Role insert</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <!-- error -->
        <div id="modal-role-insert-error" class="alert alert-secondary d-none" role="alert"></div>

        <!-- hub id -->
        <div class="form-group">
            <label for="modal-role-insert-hub-id">Hub id</label>
            <input id="modal-role-insert-hub-id" type="text" class="form-control" aria-describedby="modal-role-insert-hub-id-help" placeholder="" readonly>
            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <!-- user email -->
        <div class="form-group">
            <label for="modal-role-insert-user-email">User email</label>
            <input id="modal-role-insert-user-email" type="text" class="form-control" aria-describedby="modal-role-insert-user-email-help" placeholder="">
            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <!-- role status: admin -->
        <div class="form-check">
          <input class="form-check-input" type="radio" name="modal-role-insert-role-status" id="modal-role-insert-role-status-admin" value="admin">
          <label class="form-check-label" for="user-role-admin">
            admin
            <small class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </label>
        </div>

        <!-- role status: editor -->
        <div class="form-check">
          <input class="form-check-input" type="radio" name="modal-role-insert-role-status" id="modal-role-insert-role-status-editor" value="editor" checked>
          <label class="form-check-label" for="user-role-admin">
            editor
            <small class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </label>
        </div>

        <!-- role status: reader -->
        <div class="form-check">
          <input class="form-check-input" type="radio" name="modal-role-insert-role-status" id="modal-role-insert-role-status-reader" value="reader">
          <label class="form-check-label" for="user-role-admin">
            reader
            <small class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </label>
        </div>



        <!-- tmp -->
        <div class="form-group">
          <label for="modal-role-insert-user-email">User email</label>
          <input id="modal-role-insert-user-email" list="cocktail" class="form-control" aria-describedby="modal-role-insert-user-email-help" placeholder="">
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        
      <datalist id="cocktail">
        <option value="14november@mail.ru">art abramov</option>
        <option value="notdepot@gmail.com">not depot</option>
      </datalist>






      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="modal-role-insert-submit" type="button" class="btn btn-dark">Done</button>
      </div>

    </div>
  </div>
</div>
