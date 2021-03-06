<div id="form-post-insert" class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="form-post-insert">
  <div class="offcanvas-header">
    <h5 id="form-post-insert-title" class="offcanvas-title"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <form>

    <!-- error -->
    <div id="form-post-insert-error" class="alert alert-danger d-none" role="alert">
    </div>

    <!-- repo id -->
    <div class="form-floating mb-3">
      <input id="form-post-insert-repo-id-input" type="email" class="form-control" placeholder=" " disabled>
      <label id="form-post-insert-repo-id-label" for="form-post-insert-repo-id-input"></label>
    </div>

    <!-- post title -->
    <div class="form-floating mb-3">
      <input id="form-post-insert-title-input" type="email" class="form-control" placeholder=" ">
      <label id="form-post-insert-title-label" for="form-post-insert-title-input"></label>
    </div>

    <!-- name text -->
    <div class="mb-3 form-text">
      <span id="form-post-insert-title-text"></span> 
    </div>




    <!-- post status: todo -->
    <div class="form-check pb-2">
      <input id="form-post-insert-status-todo" name="form-post-insert-status" value="todo" class="form-check-input" type="radio">
      <label id="form-post-insert-status-todo-label" class="form-check-label" for="form-post-insert-status-todo">
      </label>
    </div>

    <!-- todo text -->
    <div class="mb-3 form-text">
      <span id="form-post-insert-status-todo-text"></span>
    </div>

    <!-- post status: doing -->
    <div class="form-check pb-2">
      <input id="form-post-insert-status-doing" name="form-post-insert-status" value="doing" class="form-check-input" type="radio">
      <label id="form-post-insert-status-doing-label" class="form-check-label" for="form-post-insert-status-doing">
      </label>
    </div>

    <!-- doing text -->
    <div class="mb-3 form-text">
      <span id="form-post-insert-status-doing-text"></span>
    </div>

    <!-- post status: done -->
    <div class="form-check pb-2">
      <input id="form-post-insert-status-done" name="form-post-insert-status" value="done" class="form-check-input" type="radio">
      <label id="form-post-insert-status-done-label" class="form-check-label" for="form-post-insert-status-done">
      </label>
    </div>

    <!-- done text -->
    <div class="mb-3 form-text">
      <span id="form-post-insert-status-done-text"></span>
    </div>


    <!-- submit -->
    <button id="form-post-insert-submit" class="btn btn-primary" type="button"></button>

    <!-- spinner -->
    <div id="form-post-insert-spinner" class="spinner-border spinner-border-sm text-dark d-none" role="status">
      <span class="visually-hidden">Wait</span>
    </div>

  </form>
  </div>
</div>