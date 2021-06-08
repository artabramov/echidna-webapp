<div>
    <!-- title -->
    <h1 class="d-inline">Hubs</h1>
    <button href="#" data-toggle="modal" data-target="#hub-insert-modal" class="btn btn-outline-primary">Add hub</button>

    <!-- hubs list -->
    <table id="hubs-table" class="table">
        <thead>
            <tr>
            <th scope="col">hub_id</th>
            <th scope="col">create_date</th>
            <th scope="col">hub_name</th>
            <th scope="col">roles_count</th>
            <th scope="col">posts_count</th>
            <th scope="col">user_role</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

    <!-- pagination -->
    <?php require_once(__DIR__ . '/../pagination.php'); ?>

</div>

<script>
hub_rows(<?php echo $offset; ?>);
</script>

