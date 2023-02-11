<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const drawer = ref(false);
const Listtitle = ref([
  { title: 'ประกาศข่าว', link: 'news' },
  { title: 'รายชื่อวิชาในแผนการเรียน', link: 'plans' },
  { title: 'การเพิ่มถอนรายวิชา', link: 'adddrop' },
]);

</script>

<template>
  <v-app>
    <v-app-bar color="#00ced1" density="compact" >
        <v-app-bar-nav-icon class="icon" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title></v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer color="#b8feff" v-model="drawer" location="left" temporary>
      <v-list>
        <v-list-item v-for="(item, index) in Listtitle " :key="index" :to="{ name: item.link }">
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main >
      <RouterView />
    </v-main>
  </v-app>

</template>

<style scoped>
.icon {
  margin-top: 15px;
}
</style>