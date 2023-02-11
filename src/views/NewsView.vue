<script setup>
import { newsStore } from '../stores/news.js';
import { Icon } from '@iconify/vue';
const news = newsStore();
const newslist = news.newsList;
</script>

<template>
  <div class="main">
    <div class="title">
      <h3>ข่าวสาร</h3>
    </div>
    <article>
      <table>
        <tr>
          <th class="text-center">วันที่</th>
          <th class="text-center">หัวข้อ</th>
          <th></th>
        </tr>

        <tr v-for="item in newslist">
          <td class="text-center">
            {{ item.newsdate }}
          </td>
          <td class="text-left">
            {{ item.newstitle }}
          </td>
          <td>
            <a :href="item.newslinks">
              <Icon icon="mdi:open-in-new" />
            </a>
          </td>
        </tr>
      </table>
    </article>
  </div>
</template>

<style scoped>
.main {
  padding: 50px;
  background-color:#ffe0ad;
}

.title {
  text-align: center;
}
</style>