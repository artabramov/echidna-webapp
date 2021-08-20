<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto">
                <li id="navbar-users" class="nav-item d-none">
                    <a id="navbar-users-href" class="nav-link" href="<?php echo ECHIDNA_URL; ?>?page=users&offset=0"></a>
                </li>
                <li id="navbar-repos" class="nav-item d-none">
                    <a id="navbar-repos-href" class="nav-link" href="<?php echo ECHIDNA_URL; ?>?page=repos&offset=0"></a>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto">

                <li id="navbar-auth" class="nav-item d-none">
                    <a id="navbar-auth-href" class="nav-link" data-bs-toggle="offcanvas" href="#form-remind" aria-controls="form-remind" href="#"></a>
                </li>

                <li id="navbar-user" class="nav-item dropdown d-none">
                    <a id="navbar-user-name" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbar-user-dropdown">
                        <li><a id="navbar-user-update" class="dropdown-item" data-bs-toggle="offcanvas" href="#form-user-update" aria-controls="form-user-update" href="#"></a></li>
                        <li><a id="navbar-user-volume" class="dropdown-item" data-bs-toggle="offcanvas" href="#form-user-volume" aria-controls="form-user-volume" href="#"></a></li>
                        <li><a id="navbar-user-signout" class="dropdown-item" href="#"></a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a id="navbar-user-lang" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        en
                    </a>
                    <ul id="navbar-languages" class="dropdown-menu" aria-labelledby="navbarDropdown">
                    </ul>
                </li>
            </ul>

        </div>
    </div>
</nav>

<script>

    // -- Language swich --
    $("#navbar-user-lang").text(USER_LANG);
    for(i in ECHIDNA_LANGUAGES) {
        var li = $('<li>');
        var a = $('<a>').attr('class', 'dropdown-item navbar-language').attr('href', '#').attr('id', 'navbar-language-' + ECHIDNA_LANGUAGES[i]).text(ECHIDNA_LANGUAGES[i]);
        li.append(a);
        $('#navbar-languages').append(li);
    }

    $(".navbar-language").click(function() {
        $.cookie("user-lang", $(this).attr('id').split('-')[2]);
        location.reload();
    });



//------------------------------------------------------------

if(typeof $.cookie('user-id') != 'undefined' && typeof $.cookie('user-token') != 'undefined') {

/*
// -- users --
$("#navbar-users").removeClass('d-none');
$("#navbar-users").addClass('d-inline');

// -- hubs --
$("#navbar-hubs").removeClass('d-none');
$("#navbar-hubs").addClass('d-inline');

// -- posts --
$("#navbar-posts").removeClass('d-none');
$("#navbar-posts").addClass('d-inline');

// -- search --
$("#navbar-posts-search").removeClass('d-none');
$("#navbar-posts-search").addClass('d-inline');

// -- user --
$("#navbar-user-user-name").text($.cookie("user-name"));
$("#navbar-user").removeClass('d-none');
$("#navbar-user").addClass('d-inline');
$("#navbar-user-select").attr("href", ECHIDNA_URL + "?page=user&user_id=" + $.cookie("user-id"));
*/

} else {

    /*
    // -- register --
    $("#navbar-user-register").removeClass('d-none');
    $("#navbar-user-register").addClass('d-inline');

    // -- remind --
    $("#navbar-user-remind").removeClass('d-none');
    $("#navbar-user-remind").addClass('d-inline');

    // -- signin --
    $("#navbar-user-signin").removeClass('d-none');
    $("#navbar-user-signin").addClass('d-inline');
    */
}

</script>
