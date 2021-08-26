$(document).ready(function(){

    $("#form-repo-insert-submit").click(function(){

        // -- hide error, disable submit & show spinner --
        $("#form-repo-insert-error").addClass('d-none');
        $('#form-repo-insert-submit').prop('disabled', true);
        $("#form-repo-insert-spinner").removeClass('d-none');

        $.ajax({
            method: "POST",
            url: ECHIDNA_URL + "repo/?user_token=" + USER_TOKEN + "&repo_name=" + $("#form-repo-insert-name").val(),
            dataType: 'json'

        }).done(function(msg) {

            if(APP_DEBUG) {
                console.log(msg);
            }

            if(msg.success == 'true') {

                // -- clear table & update data --
                $("#page-repos-table > tbody").empty();
                $("#page-repos-pagination > ul").empty();
                repo_list(0);

                // -- clear form, enable submit & hide spinner --
                $('#form-repo-insert').offcanvas('hide');
                $('#form-repo-insert-name').val('');
                $('#form-repo-insert-submit').prop('disabled', false);
                $("#form-repo-insert-spinner").addClass('d-none');

            } else {
                // -- show error, enable submit & hide spinner --
                $("#form-repo-insert-error").text(I18N['errors'][msg.error.code]);
                $("#form-repo-insert-error").removeClass('d-none');
                $('#form-repo-insert-submit').prop('disabled', false);
                $("#form-repo-insert-spinner").addClass('d-none');
            }

        });

    });
});
