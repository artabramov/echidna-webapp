<!-- page title -->
<div>
    <h1 id="page-hub-title" class="d-inline"></h1>
    <button href="#" class="btn btn-outline-primary" data-toggle="modal" data-target="#role-insert-modal">Insert role</button>
    <button href="#" class="btn btn-outline-primary">Leave hub</button>
    <button href="#" class="btn btn-outline-danger">Delete hub</button>
</div>

<!-- roles list list -->
<table id="page-hub-table-roles" class="table">
    <thead>
        <tr>
        <th scope="col">create_date</th>
        <th scope="col">user_id</th>
        <th scope="col">user_role</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>

<!-- pagination -->
<?php require_once(__DIR__ . '/../pagination.php'); ?>

<!-- page event -->
<script>
    hub_select(<?php echo $hub_id; ?>, <?php echo $offset; ?>);
</script>

