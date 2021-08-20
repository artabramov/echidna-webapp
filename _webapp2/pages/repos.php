<!-- page title -->
<div>
    <h1 id="page-repos-title" class="d-inline"></h1>
    <button id="page-repos-button-insert" class="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" href="#form-repo-insert" aria-controls="form-repo-insert"></button>
</div>

<!-- repos list -->
<table id="page-repos-table" class="table">
    <thead>
        <tr>
            <th scope="col">repo_id</th>
            <th scope="col">create_date</th>
            <th scope="col">repo_name</th>
            <th scope="col">roles_count</th>
            <th scope="col">posts_count</th>
            <th scope="col">uploads_count</th>
            <th scope="col">uploads_sum</th>
            <th scope="col">user_role</th>
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
    repo_list(<?php echo $_GET['offset']; ?>);
</script>
