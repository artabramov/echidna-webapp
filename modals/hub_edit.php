<div id="modal-hub-edit" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-hub-edit-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <!-- modal header -->
      <div class="modal-header">
        <h5 class="modal-title">Hub edit</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <!-- error -->
        <div id="modal-hub-edit-error" class="alert alert-secondary d-none" role="alert"></div>

        <!-- hub id -->
        <div class="form-group">
          <label for="modal-hub-edit-hub-id">Hub id</label>
          <input id="modal-hub-edit-hub-id" type="text" class="form-control" aria-describedby="modal-hub-deleditete-hub-id-help" placeholder="" readonly>
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <!-- hub name -->
        <div class="form-group">
          <label for="modal-hub-edit-hub-name">Hub name</label>
          <input id="modal-hub-edit-hub-name" type="text" class="form-control" aria-describedby="modal-hub-deleditete-hub-name-help" placeholder="">
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="modal-hub-edit-checkbox">
          <label class="form-check-label" for="modal-hub-edit-checkbox">Check me out</label>
        </div>

      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="modal-hub-edit-submit-update" type="button" class="btn btn-dark">Update</button>
        <button id="modal-hub-edit-submit-delete" type="button" class="btn btn-dark" disabled>Delete</button>
      </div>

    </div>
  </div>
</div>

<script>
  $("#modal-hub-edit-checkbox").click(function(){
    if ($('#modal-hub-edit-checkbox').prop('checked')) {
      $('#modal-hub-edit-submit-delete').prop('disabled', false);
    } else {
      $('#modal-hub-edit-submit-delete').prop('disabled', true);
    }
  });
</script>
