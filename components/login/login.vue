<template>
  <div class="headerComponent">
    <v-form class="fill-height conOfForm">
      <v-container>
        <div>
          <v-container fluid>
            <v-row class="d-flex justify-center">
              <v-col md="6" cols="12" class="loginForm">
                <v-col cols="12">
                  <v-text-field
                    outlined
                    placeholder="Email Address"
                    required
                    solo
                    hide-details="auto"
                  ></v-text-field>
                </v-col>

                <v-col cols="12 pb-2">
                  <v-text-field
                    outlined
                    class="formInput"
                    placeholder="Password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                    required
                    hide-details="auto"
                    solo
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12" class="d-flex justify-center">
                  <nuxt-link to="/" class="link">
                    <v-btn class="submitBtn"> Login </v-btn>
                  </nuxt-link>
                </v-col>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPassword: false,
    };
  },
  components: {},
};
</script>
