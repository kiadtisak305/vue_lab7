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
                    <th class="text-left">รหัสวิชา</th>
                    <th class="text-center">รายวิชา</th>
                    <th class="text-left">หน่วยกิต</th>
                    <th class="text-center">ผู้สอน</th>
                </tr>

                <tr v-for="(course, index) in courseslist" :key="index">
                    <td class="text-left">
                        {{ course.coursecode }}
                    </td>
                    <td class="text-left">
                        {{ course.coursename }}
                    </td>
                    <td class="text-left">
                        {{ course.countunit }}
                    </td>
                    <td class="text-left">
                        {{ course.teacher }}
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