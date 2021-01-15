<template>
  <div class="projects vertical_scrolling container_max_height">
    <v-container fluid class="container_max_height">
      <v-row v-for="(proj, index) in projList" align="center" :key="'proj' + index">
        <v-col>
          <v-card class="ma-3 pa-6">
            <v-card-text>
              <h1 style="color: black;">
                <strong><em>{{ proj.name }}</em></strong>
              </h1>
              <div style="margin-left: 20px;">
                <ul>
                  <li v-for="(point, index) in proj.description" :key="'desc' + index">
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
// import HelloWorld from "@/components/HelloWorld.vue";
import projects from "@/assets/content/projects.json";

export default {
  name: "Projects",
  data() {
    return {
      projList: projects.projectList
    };
  },
  components: {}
};
</script>
