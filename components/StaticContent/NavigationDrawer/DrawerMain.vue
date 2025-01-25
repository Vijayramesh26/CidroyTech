<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          expand-on-hover
        rail
        theme="dark"
          @mouseenter="hovering = true"
        @mouseleave="hovering = false"
        > 
          <v-list-item   
            nav 
            class="pl-4" >  
          <template v-slot:prepend >
            <v-avatar color="black" >   
              <span class="text-caption ">VR</span>
            </v-avatar>
          </template> 
          <v-list-item-content>
            <v-list-item-title class="text-yellow-darken-1">VIJAY RAMESH</v-list-item-title>
          </v-list-item-content>
          </v-list-item>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"  ></v-list-item>
            <v-list-item prepend-icon="mdi-tag-plus" title="Add Product" value="account"  to="/addjewels"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            <v-list-item prepend-icon="mdi-logout" title="Logout" value="Logout">
                
               
            </v-list-item>
          </v-list >
         
          <template v-slot:append >
            <span  v-if="hovering" class="d-flex align-center justify-center text-grey-lighten-1 text-caption" >
            Version 1.0
          </span>
            </template>
        </v-navigation-drawer> 
      </v-layout>
    </v-card>
  </template>
  <script>
    export default {
      data () {
        return {
          drawer: true,
          hovering: false,
        }
      },
    }
  </script>



<!-- <template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        expand-on-hover
        rail
        theme="dark"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
      >
        <v-list-item nav class="pl-4">
          <template v-slot:prepend>
            <v-avatar color="black">
              <span class="text-caption">VR</span>
            </v-avatar>
          </template>
          <v-list-item-content>
            <v-list-item-title class="text-yellow-darken-1">VIJAY RAMESH</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-tag-plus" title="Add Product" value="account" to="/addjewels"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
          <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout"></v-list-item>
        </v-list>

        <template v-slot:append>
          <span v-if="hovering" class="d-flex align-center justify-center text-grey-lighten-1 text-caption">
            Version 1.0
          </span>
        </template>
      </v-navigation-drawer>
     </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      hovering: false,
    };
  },
};
</script>  -->