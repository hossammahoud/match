<template>
  <div class="TeamComponent">
    <v-form class="fill-height conOfForm">
      <v-container>
        <v-row class="d-flex justify-center fill-height">
          <v-col cols="12" md="6">
            <v-data-table :headers="headers" :items="team" hide-default-footer>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [],
      headers: [
        // { text: "Name", value: "members.answers.name" },
        { text: "interseted", value: "code" },
      ],
    };
  },

  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const data = await this.$axios.$get("/my-team");
      this.team = data.data;
      console.log("this.team", this.team);
    },
  },
};
</script>
