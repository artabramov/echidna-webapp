<div>
    <!-- title -->
    <h1 class="d-inline">Hubs</h1>
    <button href="#" data-toggle="modal" data-target="#hub-insert-modal" class="btn btn-outline-primary">Add hub</button>

    <!-- filter -->
    <ul class="nav nav-pills">
        <li class="nav-item">
            <a href="<?php echo ECHIDNA_URL; ?>/?page=hubs&hub_status=custom&offset=0" class="<?php echo $hub_status == 'custom' ? 'nav-link active' : 'nav-link'; ?>">Custom</a>
        </li>
        <li class="nav-item">
            <a href="<?php echo ECHIDNA_URL; ?>/?page=hubs&hub_status=trash&offset=0" class="<?php echo $hub_status == 'trash' ? 'nav-link active' : 'nav-link'; ?>">Trash</a>
        </li>
    </ul>

    <!-- hubs list -->
    <table id="hubs-table" class="table">
        <thead>
            <tr>
            <th scope="col">hub_id</th>
            <th scope="col">hub_status</th>
            <th scope="col">hub_name</th>
            <th scope="col">roles_count</th>
            <th scope="col">posts_count</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

    <!-- pagination -->
    <?php require_once(__DIR__ . '/../pagination.php'); ?>

</div>

<script>
hubs_select("<?php echo $hub_status; ?>", <?php echo $offset; ?>);
</script>

