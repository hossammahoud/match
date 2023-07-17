<template>
  <div class="homepage">
    <section class="header-section">
      <Home
        srcSmall="https://cat-sw.com/Emails/Matching/Wave-BG-mobile.jpg"
        srcLarge="https://cat-sw.com/Emails/Matching/Wave-BG-Big.jpg"
      />
    </section>
  </div>
</template>

<script>
import Home from "../components/home/home.vue";
export default {
  name: "home",
  components: {
    Home,
  },
};
</script>
