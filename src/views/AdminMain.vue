<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-2">
      <AdminSidebar />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</div>
</template>

<script>
import AdminSidebar from "../components/AdminSidebar.vue";

export default {
  name: "AdminMain",
  components: {
    AdminSidebar,
  },
};
</script>

<style scoped>
.container {
  max-width: 90%;
}
</style>