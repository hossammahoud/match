<template>
  <div>
    <v-app-bar fixed app>
      <v-container>
        <v-row>
          <v-toolbar-title> Nav </v-toolbar-title>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      // Set RTL Direction
      this.$vuetify.rtl = this.$i18n.locale === "ar";
    });
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
<style>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #fe862c;
}
</style>
