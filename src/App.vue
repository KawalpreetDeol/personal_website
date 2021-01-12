<template>
  <div id="app1" class="indigo lighten-1 white--text">
    <v-card>
      <v-tabs v-model="tab" background-color="indigo lighten-1 accent-4" centered icons-and-text>
        <v-tabs-slider></v-tabs-slider>
        <v-tab to="/" href="#tab-1">
          Home
          <v-icon>mdi-home</v-icon>
        </v-tab>

        <v-tab to="/about" href="#tab-2">
          Bio
          <v-icon>mdi-account-box</v-icon>
        </v-tab>

        <v-tab to="/projects" href="#tab-3">
          Projects
          <v-icon>mdi-electron-framework</v-icon>
        </v-tab>

        <v-tab to="/experience" href="#tab-3">
          Experience
          <v-icon>mdi-briefcase</v-icon>
        </v-tab>
      </v-tabs>
    </v-card>
    <v-divider></v-divider>
    <router-view></router-view>

    <v-footer dark padless absolute style="width: 100%; bottom: 0;">
        <v-container fluid grid-list-xl text-xs-center>
            <v-flex xs10 offset-xs1>
              <v-card class="indigo lighten-1 white--text text-center">
                <v-card-text>
                  <v-layout justify-center>
                    <template v-for="(media,index) in socialMedia">
                    <v-flex xs10 offset-xs1 :key='"flex_" + index'>
                    <v-btn :key="media + index" :href="media.link" class="mx-4">
                      <v-icon size="24px" >{{ media.icon }}</v-icon>
                    </v-btn>
                    </v-flex>
                    </template>
                  </v-layout>
                </v-card-text>
                
                <v-divider></v-divider>
                <v-layout row align-center justify-center class="text-center">
                  <v-card-text class="white--text text-center">
                    <Strong>This website is owned and operated by Kawalpreet Deol &copy; {{ new Date().getFullYear() }}</strong>
                  </v-card-text>
                </v-layout>
              </v-card>
            </v-flex>
          
        </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    socialMedia: [
      {name:"facebook", icon:"mdi-facebook", link:'https://ca.linkedin.com/in/kawalpreetdeol'},
      {name:"twitter", icon:"mdi-twitter",link:'https://ca.linkedin.com/in/kawalpreetdeol'},
      // {name:"google plus", icon:"mdi-google-plus", link:'https://ca.linkedin.com/in/kawalpreetdeol'},
      {name:"linkedin", icon : "mdi-linkedin", link:'https://ca.linkedin.com/in/kawalpreetdeol'},
      {name:"instagram", icon:"mdi-instagram",link:'https://ca.linkedin.com/in/kawalpreetdeol'},
    ]
  })
};
</script>
