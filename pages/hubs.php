<div>
    <h1>Hubs</h1>

    <a href="<?php echo ECHIDNA_URL; ?>/?page=hubs&hub_status=custom&offset=0" class="btn <?php echo $hub_status == 'custom' ? 'btn-primary' : 'btn-link'; ?>">Custom</a>
    <a href="<?php echo ECHIDNA_URL; ?>/?page=hubs&hub_status=trash&offset=0" class="btn <?php echo $hub_status == 'trash' ? 'btn-primary' : 'btn-link'; ?>">Trash</a>
    <button href="#" data-toggle="modal" data-target="#hub-insert-modal" class="btn btn-outline-primary">Add hub</button>

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

    <?php require_once(__DIR__ . '/../pagination.php'); ?>

</div>

<script>
hubs_select("<?php echo $hub_status; ?>", <?php echo $offset; ?>);
</script>

