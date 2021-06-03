<div id="post-add-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="post-add-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <!-- modal header -->
      <div class="modal-header">
        <h5 class="modal-title">Add post</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <!-- error -->
        <div id="post-add-error" class="alert alert-secondary d-none" role="alert"></div>

        <!-- user email -->
        <div class="form-group">
            <label for="post-add-email">Email address</label>
            <input id="post-add-email" type="text" class="form-control" aria-describedby="post-add-email-help" placeholder="">
        </div>

      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="post-add-submit" type="button" class="btn btn-dark">Done</button>
      </div>

    </div>
  </div>
</div>
