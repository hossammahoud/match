<template>
  <div>
    <div class="TeamComponent" v-if="Me.type == 'User'">
      <v-form class="fill-height conOfForm">
        <v-container>
          <v-row class="d-flex justify-center fill-height">
            <v-col cols="12" md="6">
              <div class="conOfTeam">
                <v-col cols="12"> Results</v-col>
                <v-col cols="12"> Dear {{ user.name }}</v-col>
                <v-col cols="12">
                  You are mostly interested in {{ Me.team_name }}
                </v-col>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
    <div v-else>
      <p class="mt-12">You are not a user</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [],
      user: {},
      Me: {},
    };
  },
  created() {
    this.getData();
    this.getUserData();
  },

  methods: {
    async getData() {
      const data = await this.$axios.$get("/my-team");
      this.team = data.data;
      console.log("this.team", this.team);
      const Me = await this.$axios.$post("/auth/me");

      this.Me = Me.data;
      console.log("Me", Me);
    },
    getUserData() {
      const accessToken = localStorage.getItem("accessToken");
      const name = localStorage.getItem("name");
      this.user = {
        accessToken,
        name,
      };
    },
  },
};
</script>
