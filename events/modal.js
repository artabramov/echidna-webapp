function modal(modal) {

    $('#modal-register').modal('hide');
    $('#modal-registered').modal('hide');
    $('#modal-signin').modal('hide');

    $('#modal-' + modal).modal('show');
}
