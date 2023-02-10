<template>
<div class="main">
  <div class="title">
    <h3>ข่าวสาร</h3>
  </div>
    <article>
      <table>
        <tr>
          <th>วันที่</th>
          <th>หัวข้อ</th>
        </tr>

        <tr v-for="news_content in newslist" :key="news_content.newsId">
          <td style="text-align: left">{{ news_content.News_Date }}</td>
          <td style="text-align: left">
            <a :href="news_content.News_links">{{ news_content.News_Title }}</a>
          </td>
        </tr>
      </table>
    </article>
  </div>
</template>

<script setup>
import { newsStore } from '../stores/news.js';
const news = newsStore();
const newslist = news.newsList;
</script>

<style scoped>
.main {
  padding: 50px ;
}
.title{
  text-align: center;
}
</style>