<script setup>
import { coursesStore } from '../stores/courses.js';
const courses = coursesStore();
const courseslist = courses.coursesList;

</script>

<template>
    <div class="main">
        <div class="title">
            <h3>หลักสูตร: วิทยาการคอมพิวเตอร์</h3>
        </div>
        <article>
            <table>
                <tr>
                    <th>รหัสวิชา</th>
                    <th>รายวิชา</th>
                </tr>

                <tr v-for="(course, index) in courseslist" :key="index">
                    <td style="text-align: left">
                        {{ course.coursecode }}
                    </td>
                    <td style="text-align: left">
                        {{ course.coursename }}
                    </td>
                </tr>
            </table>
        </article>
    </div>
</template>

<style scoped>
.main {
    padding: 50px;
}

.title {
    text-align: center;
}
</style>