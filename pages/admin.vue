<template>
  <div class="homepage">
    <section class="">
      <Navbar />
    </section>
    <section class="mt-8">
      <Admin />
    </section>
  </div>
</template>

<script>
import Navbar from "../components/layout/navbar.vue";
import Admin from "../components/admin/admin.vue";
export default {
  name: "home",
  components: {
    Navbar,
    Admin,
  },
};
</script>
