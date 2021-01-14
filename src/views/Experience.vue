<template>
  <div class="experience vertical_scrolling">
    <v-container fluid>
      <v-row v-for="(exp, index) in expList" align="center" :key="'exp' + index">
        <v-col>
          <v-card class="ma-3 pa-6">
            <v-card-text>
              <h1 style="color: black;">
                <strong><em>{{ exp.job_title + ": " + exp.company }}</em></strong>
              </h1>
              <span syle="float: right;">
                <h2 style="color: black;">
                  <strong><em>{{ exp.start + " - " + exp.end }}</em></strong>
                </h2>
              </span>
              <div style="margin-left: 20px;">
                <ul>
                  <li v-for="(point, index) in exp.description" :key="'desc' + index">
                    <h3>
                      <strong><em>{{ point }}</em></strong>
                    </h3>
                  </li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import experience from "@/assets/content/experience.json";

export default {
  name: "Experience",
  data() {
    return {
      expList: experience.jobs   
    };
  },
  components: {},
  computed: {}
};

</script>
