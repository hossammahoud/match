<template>
  <div>
    <div v-if="Me.type == 'User'">
      <div class="questionComponent" v-if="Me.is_surveyed == false">
        <v-form class="conOfForm">
          <v-container>
            <v-row class="d-flex justify-center">
              <v-col cols="12" md="8" class="questionForm">
                <v-col cols="12" v-if="questionsData[0]">
                  <label>{{ questionsData[0].name }} </label>
                  <div class="checkbox-container">
                    <v-checkbox
                      class="checkboxItem"
                      v-for="item in questionsData[0].options"
                      :key="item.id"
                      :label="item.name"
                      :value="item"
                      :value-comparator="comparator"
                      v-model="selectedOptions"
                    ></v-checkbox>
                  </div>
                </v-col>

                <v-col cols="12" v-if="selectedOptions.length > 1">
                  <label>{{ questionsData[1].name }}</label>

                  <v-radio-group v-model="mostPrefered">
                    <v-radio
                      v-for="item in filteredItems"
                      :key="item"
                      :label="item.name"
                      :value="item.name"
                    ></v-radio>
                  </v-radio-group>
                </v-col>

                <v-col cols="12" v-if="questionsData[2]">
                  <label>{{ questionsData[2].name }}</label>

                  <div class="radio-container">
                    <v-radio-group
                      v-model="selectedQuestionThree"
                      class="radio-group"
                    >
                      <v-radio
                        v-for="item in questionsData[2].options"
                        :key="item"
                        :label="item.name"
                        :value="item.id"
                      ></v-radio>
                    </v-radio-group>
                  </div>
                </v-col>
                <v-col cols="12" v-if="questionsData[3]">
                  <label>{{ questionsData[3].name }}</label>

                  <div class="radio-container">
                    <v-radio-group
                      v-model="selectedQuestionFour"
                      class="radio-group"
                    >
                      <v-radio
                        v-for="item in questionsData[3].options"
                        :key="item"
                        :label="item.name"
                        :value="item.id"
                      ></v-radio>
                    </v-radio-group>
                  </div>
                </v-col>
                {{ latesSelected }}
                <v-col cols="12" class="d-flex justify-end">
                  <nuxt-link to="/team">
                    <v-btn class="submitBtn" @click="AnswerQuestions()">
                      Submit
                    </v-btn>
                  </nuxt-link>
                </v-col>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
      <div v-else>
        <p class="mt-12">You have already answered the survey</p>
      </div>
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
      day: null,

      week: null,

      questionsAnswers: {
        question_id: "",
        option_id: "",
      },
      Me: {},
      questions: [],
      questionsData: [],
      selectedOptions: [],
      mostPrefered: [],
      selectedQuestionThree: [],
      selectedQuestionFour: [],
    };
  },
  computed: {
    filteredItems() {
      return this.questionsData[0].options.filter((item) =>
        this.selectedOptions.includes(item)
      );
    },
    comparator(a, b) {
      return a && b && a.name === b.name;
    },
  },
  created() {
    this.getQuestionsData();
  },
  watch: {
    mostPrefered(newVal) {
      // Set answer_name to the selected answer name
      this.questionsAnswers.other_answer = newVal;
    },
  },
  methods: {
    async getQuestionsData() {
      const data = await this.$axios.$get("/questions");
      this.questionsData = data.data;
      console.log("this.questions", this.questionsData);
    },

    async AnswerQuestions() {
      const answers = [];

      // Process the first question's answer
      if (this.selectedOptions.length > 0) {
        const questionOneData = {
          question_id: this.questionsData[0].id,
          option_id:
            `${this.selectedOptions[0].id}` +
            "," +
            `${this.selectedOptions[1].id}`,
        };

        answers.push(questionOneData);
      }

      // Process the second question's answer
      if (this.selectedOptions.length > 1 && this.mostPrefered !== "") {
        answers.push({
          question_id: this.questionsData[1].id,
          other_answer: this.mostPrefered,
        });
      }

      // Process the third question's answer
      if (this.selectedQuestionThree !== "") {
        answers.push({
          question_id: this.questionsData[2].id,
          option_id: this.selectedQuestionThree,
        });
      }

      // Process the fourth question's answer
      if (this.selectedQuestionFour !== "") {
        answers.push({
          question_id: this.questionsData[3].id,
          option_id: this.selectedQuestionFour,
        });
      }
      const answersArray = {
        answers: answers,
      };
      const data = await this.$axios.$post("/survey", answersArray);
      this.questions = data.data;
      console.log("this.registerData", this.questions);

      const Me = await this.$axios.$post("/auth/me");
      this.Me = data.data;
      console.log("Me2", Me);
    },

    comparator(a, b) {
      return a && b && a.id === b.id;
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
