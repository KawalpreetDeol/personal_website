<template>
  <div class="home">
    <v-container fluid>
    <v-row :align="center" :justify="center">
      <v-col>
        <v-row
          :justify="center"
          :align="center"
        >
        <!-- <v-col cols="6" md="2"> -->
          <v-card class="ma-3 pa-6">
          <v-card-text>
          <strong><i><h1 class="text-center"> Website Coming Soon </h1></i></strong>
          </v-card-text>
          </v-card>
          <!-- </v-col> -->
        </v-row>
    </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {}
};
</script>
