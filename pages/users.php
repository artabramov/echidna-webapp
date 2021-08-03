<!-- page title -->
<div>
    <h1 id="page-users-title" class="d-inline">Users</h1>
</div>

<!-- users table -->
<table id="page-users-table" class="table">
    <thead>
        <tr>
        <th scope="col">user_id</th>
        <th scope="col">create_date</th>
        <th scope="col">auth_date</th>
        <th scope="col">user_status</th>
        <th scope="col">user_email</th>
        <th scope="col">user_name</th>
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
    user_query(<?php echo $_GET['offset']; ?>);
</script>
