<!-- page title -->
<div>
    <h1 id="page-roles-title" class="d-inline">Roles</h1>
    <button href="#" data-toggle="modal" data-target="#modal-role-insert" class="btn btn-outline-primary">Role insert</button>
</div>

<!-- hubs table -->
<table id="page-roles-table" class="table">
    <thead>
        <tr>
        <th scope="col">role_id</th>
        <th scope="col">create_date</th>
        <th scope="col">user_id</th>
        <th scope="col">user_name</th>
        <th scope="col">hub_id</th>
        <th scope="col">hub_name</th>
        <th scope="col">role_status</th>
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
    role_query(<?php echo $_GET['hub_id']; ?>, <?php echo $_GET['offset']; ?>);
</script>
