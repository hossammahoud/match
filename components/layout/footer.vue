<template>
  <div>
    <v-footer app>
      <v-container>
        <v-row>
          <v-spacer />
          <nuxt-link to="/" class="link">
            <v-btn text class="navTltle">{{ $t("navbar.feature") }} </v-btn>
          </nuxt-link>
          <nuxt-link to="/categories" class="link">
            <v-btn text class="navTltle"> {{ $t("navbar.aboutus") }} </v-btn>
          </nuxt-link>
          <nuxt-link to="/products" class="link">
            <v-btn text class="navTltle"> {{ $t("navbar.whoWeServe") }} </v-btn>
          </nuxt-link>
          <nuxt-link to="/products" class="link">
            <v-btn text class="navTltle"> {{ $t("navbar.FAQ") }} </v-btn>
          </nuxt-link>
          <nuxt-link to="/products" class="link">
            <v-btn text class="navTltle"> {{ $t("navbar.contactUs") }} </v-btn>
          </nuxt-link>
          <v-spacer />
          <div class="socialMedia">
            <v-btn icon>
              <v-icon> mdi-facebook </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon> mdi-twitter </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon> mdi-linkedin </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon> mdi-instagram </v-icon>
            </v-btn>
          </div>
        </v-row>
      </v-container>
      <div class="hr"></div>
      <v-container class="text-center">
        <br />
        <span
          >{{ $t("footer.copyright") }} &copy; {{ new Date().getFullYear() }}
          {{ $t("footer.allRights") }}</span
        >
      </v-container>
    </v-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fixed: true,
    };
  },
};
</script>
