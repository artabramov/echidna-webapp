$(document).on("click", ".modal-role-update", function () {
    $( "#role-update-hub-id" ).val( $(this).data('hub-id') );
    $( "#role-update-user-id" ).val( $(this).data('user-id') );

    $( "#role-update-user-role-admin" ).prop('checked', false);
    $( "#role-update-user-role-author" ).prop('checked', false);
    $( "#role-update-user-role-editor" ).prop('checked', false);
    $( "#role-update-user-role-reader" ).prop('checked', false);

    $( "#role-update-user-role-" + $(this).data('user-role') ).prop('checked', true);
});
