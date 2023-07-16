<template>
  <div class="homepage">
    <section class="">
      <Navbar />
    </section>
    <section class="mt-8">
      <Team />
    </section>
  </div>
</template>

<script>
import Navbar from "../components/layout/navbar.vue";
import Team from "../components/team/team.vue";
export default {
  name: "home",
  components: {
    Navbar,
    Team,
  },
};
</script>
