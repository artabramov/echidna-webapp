<!-- page title -->
<div>
    <h1 id="page-posts-title" class="d-inline"></h1>
    
    <!--<button class="btn btn-outline-primary">Hub update</button>-->
    <!--<button data-toggle="modal" data-target="#modal-hub-delete" class="btn btn-outline-primary">Hub delete</button>-->
    <!--<a type="button" class="btn btn-link" href="<?php echo ECHIDNA_URL; ?>?page=roles&hub_id=<?php echo $_GET['hub_id']; ?>&offset=0">Manage roles</a>-->
    <!--<button type="button" class="btn btn-link">Download hub</button>-->

    <button href="#" data-toggle="modal" data-target="#modal-post-insert" class="btn btn-outline-primary"><i class="material-icons">add_circle_outline</i> Post insert</button>

    <div class="dropdown d-inline">
        <button role="button" type="button" class="btn btn-link more" data-toggle="dropdown" id="dropdownMenuButton"> <i class="material-icons">more_horiz</i></button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal-hub-delete">Hub delete</a>
            <a class="dropdown-item" href="#">Hub update</a>
            <a class="dropdown-item" href="<?php echo ECHIDNA_URL; ?>?page=roles&hub_id=<?php echo $_GET['hub_id']; ?>&offset=0">Manage roles</a>
        </div>
    </div>

    

    

</div>

<!-- posts filter -->
<ul class="nav">
    <li class="nav-item">
        <a class="nav-link" href="<?php echo ECHIDNA_URL; ?>?page=posts&hub_id=<?php echo $_GET['hub_id']; ?>&post_status=todo&offset=0">Todo <span id="page-posts-todo-count" class="badge badge-pill badge-light">0</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="<?php echo ECHIDNA_URL; ?>?page=posts&hub_id=<?php echo $_GET['hub_id']; ?>&post_status=doing&offset=0">Doing <span id="page-posts-doing-count" class="badge badge-pill badge-light">0</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="<?php echo ECHIDNA_URL; ?>?page=posts&hub_id=<?php echo $_GET['hub_id']; ?>&post_status=done&offset=0">Done <span id="page-posts-done-count" class="badge badge-pill badge-light">0</span></a>
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
    hub_select(<?php echo $_GET['hub_id']; ?>);
    post_query(<?php echo $_GET['hub_id']; ?>, '<?php echo $_GET['post_status']; ?>', <?php echo $_GET['offset']; ?>);
</script>
