<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <!-- title content -->
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title> Saysan</v-list-item-title>
        <v-list-item-subtitle>
          MEVN Full-stack app
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

  <!-- dividing the title content -->
    <v-divider></v-divider>

  <!-- starting list -->
    <v-list dense>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"  :to='item.link'     
>                                     <!-- item.link le path dirako cha and routing vairako cha -->
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null ,
      items: [
        { title: 'Home', icon: 'mdi-home', link:'/' },
        { title: 'Add Post', icon: 'mdi-note-plus', link:'/add-post' },
        { title: 'About', icon: 'mdi-help-box', link:'/about' },
      ],
      }),
  }
</script>