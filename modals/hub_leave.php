<div id="modal-hub-leave" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-hub-leave-title" aria-hidden="true">
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
        <div id="modal-hub-leave-error" class="alert alert-secondary d-none" role="alert"></div>

        <!-- hub id -->
        <div class="form-group">
          <label for="modal-hub-leave-hub-id">Hub id</label>
          <input id="modal-hub-leave-hub-id" type="text" class="form-control" aria-describedby="modal-hub-leave-hub-id-help" placeholder="" readonly>
        </div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="modal-hub-leave-checkbox">
          <label class="form-check-label" for="modal-hub-leave-checkbox">Check me out</label>
        </div>

      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button id="modal-hub-leave-submit-delete" type="button" class="btn btn-dark" disabled>Delete</button>
      </div>

    </div>
  </div>
</div>

<script>
  $("#modal-hub-leave-checkbox").click(function(){
    if ($('#modal-hub-leave-checkbox').prop('checked')) {
      $('#modal-hub-leave-submit-delete').prop('disabled', false);
    } else {
      $('#modal-hub-leave-submit-delete').prop('disabled', true);
    }
  });
</script>
