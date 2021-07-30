<!-- page title -->
<div>
    <h1 id="page-hubs-title" class="d-inline">Hubs</h1>
    <button href="#" data-toggle="modal" data-target="#modal-hub-insert" class="btn btn-outline-primary">Hub insert</button>
</div>

<!-- hubs table -->
<table id="page-hubs-table" class="table">
    <thead>
        <tr>
        <th scope="col">hub_id</th>
        <th scope="col">create_date</th>
        <th scope="col">hub_name</th>
        <th scope="col">roles_count</th>
        <th scope="col">posts_count</th>
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
    hub_query(<?php echo $_GET['offset']; ?>);
</script>
