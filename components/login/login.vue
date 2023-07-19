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
                    v-model="email"
                    outlined
                    placeholder="Email Address"
                    required
                    solo
                    hide-details="auto"
                  ></v-text-field>
                </v-col>

                <v-col cols="12 pb-2">
                  <v-text-field
                    v-model="password"
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
                  <v-btn class="submitBtn" @click="login()"> Login </v-btn>
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
      email: "",
      password: "",
    };
  },
  components: {},
  methods: {
    async login() {
      try {
        const response = await this.$axios.$post("/auth/login", {
          email: this.email,
          password: this.password,
        });

        const accessToken = response.access_token;
        const userData = response.me; // Assuming the response contains the user's name.

        // Save data in localStorage
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("name", userData.name);

        const Me = await this.$axios.$post("/auth/me");
        this.Me = Me.data;

        if (Me.type === "User") {
          this.$router.push("/admin");
        } else {
          this.$router.push("/team");
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  },
};
</script>
