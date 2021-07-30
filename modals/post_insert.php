<div id="modal-post-insert" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-post-insert-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <!-- modal header -->
      <div class="modal-header">
        <h5 class="modal-title">Post insert</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <!-- error -->
        <div id="modal-post-insert-error" class="alert alert-secondary d-none" role="alert"></div>

        <!-- hub id -->
        <div class="form-group">
            <label for="modal-post-insert-hub-id">Hub id</label>
            <input id="modal-post-insert-hub-id" type="text" class="form-control" aria-describedby="modal-post-insert-hub-id-help" placeholder="" readonly>
            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <!-- post title -->
        <div class="form-group">
            <label for="modal-post-insert-post-title">Post title</label>
            <input id="modal-post-insert-post-title" type="text" class="form-control" aria-describedby="modal-post-insert-post-title-help" placeholder="">
            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <!-- post status: todo -->
        <div class="form-check">
          <input class="form-check-input" type="radio" name="modal-post-insert-post-status" id="modal-post-insert-post-status-todo" value="todo" checked>
          <label class="form-check-label" for="user-role-admin">
            todo
            <small class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </label>
        </div>

        <!-- post status: doing -->
        <div class="form-check">
          <input class="form-check-input" type="radio" name="modal-post-insert-post-status" id="modal-post-insert-post-status-doing" value="doing">
          <label class="form-check-label" for="user-role-admin">
            doing
            <small class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </label>
        </div>

        <!-- post status: done -->
        <div class="form-check">
          <input class="form-check-input" type="radio" name="modal-post-insert-post-status" id="modal-post-insert-post-status-done" value="done">
          <label class="form-check-label" for="user-role-admin">
            done
            <small class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </label>
        </div>



      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="modal-post-insert-submit" type="button" class="btn btn-dark">Done</button>
      </div>

    </div>
  </div>
</div>
