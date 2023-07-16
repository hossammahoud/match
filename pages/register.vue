<template>
  <div class="register">
    <section class="">
      <Navbar />
    </section>
    <section class="">
      <Register />
    </section>
  </div>
</template>

<script>
import Navbar from "../components/layout/navbar.vue";
import Register from "../components/register/register.vue";
export default {
  name: "home",
  components: {
    Navbar,
    Register,
  },
};
</script>
