<template>
  <div class="RegisterComponent">
    <v-form class="fill-height conOfForm">
      <v-container>
        <div>
          <v-container fluid>
            <v-row class="d-flex justify-center">
              <v-col md="6" cols="12" class="loginForm">
                <v-col cols="12">
                  <v-text-field
                    v-model="registerForm.name"
                    outlined
                    placeholder="Name"
                    required
                    solo
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="registerForm.email"
                    outlined
                    placeholder="Email Address"
                    required
                    solo
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="registerForm.region_id"
                    outlined
                    solo
                    hide-details="auto"
                    label="Select"
                    :items="items"
                    item-text="title"
                    item-value="id"
                  ></v-select>
                </v-col>
                <v-col cols="12 pb-2">
                  <v-text-field
                    v-model="registerForm.password"
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
                  <v-btn class="submitBtn" @click="Register()">
                    Click for the survey
                  </v-btn>
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
      items: [
        {
          id: 1,
          title: "Central Team",
        },
        {
          id: 2,
          title: "East Team",
        },
        {
          id: 3,
          title: "West Team",
        },
      ],
      showPassword: false,
      registerData: [],
      Me: {},
      registerForm: {
        email: "",
        name: "",
        password: "",
        region_id: "",
      },
    };
  },
  components: {},
  created() {},
  methods: {
    async Register() {
      const data = await this.$axios.$post("/sign-up", this.registerForm);
      if (data.status == 201) {
        localStorage.setItem(
          "auth._token.local",
          data.token_type + " " + data.token
        );
        localStorage.setItem("name", this.registerForm.name);
        console.log("registerForm", this.registerForm);

        const Me = await this.$axios.$post("/auth/me");
        console.log("Me", Me);
        this.$router.push("/questions");
      }
    },
  },
};
</script>
