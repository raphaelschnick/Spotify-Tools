<template>
  <div>
    <b-sidebar>
      <div class="p-3">
        <nav class="mb-3">
          <b-nav vertical>
            <b-nav-item
              active
            >
              Active
            </b-nav-item>
            <b-nav-item
              href="#link-1"
            >
              Link
            </b-nav-item>
            <b-nav-item
              href="#link-2"
            >
              Another Link
            </b-nav-item>
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'SpotifySidebar'
}
</script>
