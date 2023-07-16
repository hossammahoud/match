<template>
  <div class="homepage">
    <section class="header-section">
      <Navbar />
    </section>
    <section class="questions-section">
      <Questions />
    </section>
  </div>
</template>

<script>
import Navbar from "../components/layout/navbar.vue";
import Questions from "../components/questions/questions.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Questions,
  },
};
</script>
