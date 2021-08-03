<!-- page title -->
<div>
    <h1 id="page-posts-title" class="d-inline"></h1>

    <button href="#" data-toggle="modal" data-target="#modal-post-insert" class="btn btn-outline-primary">Post insert</button>
    <button href="#" data-toggle="modal" data-target="#modal-hub-edit" class="btn btn-outline-primary">Hub edit</button>
    <a href="<?php echo ECHIDNA_URL; ?>?page=roles&hub_id=<?php echo $_GET['hub_id']; ?>&offset=0" class="btn btn-outline-primary">Roles manage</a>

</div>

<!-- posts filter -->
<ul class="nav nav-pills">
    <li class="nav-item">
        <a class="nav-link <?php if($_GET['post_status'] == 'todo') { echo 'active'; } ?>" href="<?php echo ECHIDNA_URL; ?>?page=posts&hub_id=<?php echo $_GET['hub_id']; ?>&post_status=todo&offset=0">Todo <span id="page-posts-todo-count" class="badge badge-pill badge-light"></span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link <?php if($_GET['post_status'] == 'doing') { echo 'active'; } ?>" href="<?php echo ECHIDNA_URL; ?>?page=posts&hub_id=<?php echo $_GET['hub_id']; ?>&post_status=doing&offset=0">Doing <span id="page-posts-doing-count" class="badge badge-pill badge-light"></span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link <?php if($_GET['post_status'] == 'done') { echo 'active'; } ?>" href="<?php echo ECHIDNA_URL; ?>?page=posts&hub_id=<?php echo $_GET['hub_id']; ?>&post_status=done&offset=0">Done <span id="page-posts-done-count" class="badge badge-pill badge-light"></span></a>
    </li>
</ul>

<!-- posts table -->
<table id="page-posts-table" class="table">
    <thead>
        <tr>
        <th scope="col">post_id</th>
        <th scope="col">create_date</th>
        <th scope="col">user_name</th>
        <th scope="col">hub_name</th>
        <th scope="col">post_status</th>
        <th scope="col">post_title</th>
        <th scope="col">comments_count</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>

<!-- pagination -->
<nav id="pagination" aria-label="Page navigation example" class="d-none">
    <ul class="pagination">
    </ul>
</nav>

<!-- event -->
<script>
    post_query(<?php echo $_GET['hub_id']; ?>, '<?php echo $_GET['post_status']; ?>', <?php echo $_GET['offset']; ?>);
</script>
