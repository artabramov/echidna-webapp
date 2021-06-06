<div id="hub-insert-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="hub-insert-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <!-- modal header -->
      <div class="modal-header">
        <h5 class="modal-title">Add hub</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <!-- error -->
        <div id="hub-insert-error" class="alert alert-secondary d-none" role="alert"></div>

        <!-- hub name -->
        <div class="form-group">
            <label for="hub-insert-name">Hub name</label>
            <input id="hub-insert-name" type="text" class="form-control" aria-describedby="hub-insert-name-help" placeholder="">
        </div>

      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="hub-insert-submit" type="button" class="btn btn-dark">Done</button>
      </div>

    </div>
  </div>
</div>
