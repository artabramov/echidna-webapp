<div id="modal-hub-delete" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-hub-delete-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <!-- modal header -->
      <div class="modal-header">
        <h5 class="modal-title">Hub delete</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <!-- error -->
        <div id="modal-hub-delete-error" class="alert alert-secondary d-none" role="alert"></div>

        <!-- hub id -->
        <div class="form-group">
            <label for="modal-hub-delete-hub-id">Hub id</label>
            <input id="modal-hub-delete-hub-id" type="text" class="form-control" aria-describedby="modal-hub-delete-hub-id-help" placeholder="" readonly>
            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="modal-hub-delete-checkbox">
          <label class="form-check-label" for="modal-hub-delete-checkbox">Check me out</label>
        </div>

      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="modal-hub-delete-submit" type="button" class="btn btn-dark" disabled>Done</button>
      </div>

    </div>
  </div>
</div>

<script>
  $("#modal-hub-delete-checkbox").click(function(){
    if ($('#modal-hub-delete-checkbox').prop('checked')) {
      $('#modal-hub-delete-submit').prop('disabled', false);
    } else {
      $('#modal-hub-delete-submit').prop('disabled', true);
    }
  });
</script>
