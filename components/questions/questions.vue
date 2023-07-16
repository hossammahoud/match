<template>
  <div class="questionComponent">
    <v-form class="conOfForm">
      <v-container>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="8" class="questionForm">
            <v-col cols="12">
              <label
                >How do you spend your free time? "you can choose max 2"</label
              >
              <div class="checkbox-container">
                <v-checkbox
                  class="checkboxItem"
                  v-for="item in items"
                  :key="item.id"
                  :label="item.name"
                  :value="item"
                  :value-comparator="comparator"
                  v-model="selectedOptions"
                  @change="handleSelectionChange"
                ></v-checkbox>
              </div>
            </v-col>

            <v-col cols="12" v-if="selectedOptions.length > 1">
              <label>Which one do you prefer the most</label>

              <v-radio-group v-model="mostPrefered">
                <v-radio
                  v-for="item in filteredItems"
                  :key="item"
                  :label="item.name"
                  :value="item.name"
                ></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12">
              <label>What time of day would you be most available?</label>

              <div class="radio-container">
                <v-radio-group v-model="day" class="radio-group">
                  <v-radio label="Mornings" value="Mornings"></v-radio>
                  <v-radio label="Afternoons" value="Afternoons"></v-radio>
                  <v-radio label="Evenings" value="Evenings"></v-radio>
                </v-radio-group>
              </div>
            </v-col>
            <v-col cols="12">
              <label>What days of the week would you be most available?</label>

              <v-radio-group v-model="week">
                <v-radio label="Weekends" value="Weekends"></v-radio>
                <v-radio label="Weekdays" value="Weekdays"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12" class="d-flex justify-end">
              <nuxt-link to="/team">
                <v-btn class="submitBtn"> Submit </v-btn>
              </nuxt-link>
            </v-col>
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
      day: null,
      mostPrefered: null,
      week: null,
      items: [
        {
          id: 1,
          name: "Cinema",
        },
        {
          id: 2,
          name: "Cooking",
        },
        {
          id: 3,
          name: "Chess",
        },
        {
          id: 4,
          name: "Football",
        },
        {
          id: 5,
          name: "PlayStation",
        },
      ],
      selectedOptions: [],
      allItems: ["Cinema", "Cooking", "Chess", "Football", "PlayStation"],
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => this.selectedOptions.includes(item));
    },
    comparator(a, b) {
      return a && b && a.name === b.name;
    },
  },
  methods: {
    comparator(a, b) {
      return a && b && a.id === b.id;
    },
    handleSelectionChange() {
      if (this.selectedOptions.length > 2) {
        // If the user selects more than two options, remove the last selected option
        this.selectedOptions.pop();
      }
    },
  },
};
</script>
<style>
.v-input--radio-group--column .v-input--radio-group__input {
  flex-direction: unset;
}
.v-radio {
  padding: 0px 30px;
}
.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child) {
  margin-bottom: 0px;
}
</style>
