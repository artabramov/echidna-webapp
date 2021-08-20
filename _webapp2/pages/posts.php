<!-- page title -->
<div>
    <h1 id="page-posts-title" class="d-inline"></h1>
    <button id="page-posts-button-insert" class="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" href="#form-post-insert" aria-controls="form-post-insert"></button>
</div>

<!-- posts statuses -->
<ul class="nav nav-pills">
  <li class="nav-item">
    <a id="page-posts-nav-todo" class="nav-link" href="#"></a>
  </li>
  <li class="nav-item">
    <a id="page-posts-nav-doing" class="nav-link" href="#"></a>
  </li>
  <li class="nav-item">
    <a id="page-posts-nav-done" class="nav-link" href="#"></a>
  </li>
</ul>

<!-- posts list -->
<table id="page-posts-table" class="table">
    <thead>
        <tr>
            <th scope="col">post_id</th>
            <th scope="col">create_date</th>
            <th scope="col">post_status</th>
            <th scope="col">post_title</th>
            <th scope="col">post_alerts</th>
            <th scope="col">post_tags</th>
            <th scope="col">comments_count</th>
            <th scope="col">uploads_count</th>
            <th scope="col">uploads_sum</th>
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
    post_list(<?php echo $_GET['repo_id']; ?>, '<?php echo $_GET['post_status']; ?>', <?php echo $_GET['offset']; ?>);
</script>
