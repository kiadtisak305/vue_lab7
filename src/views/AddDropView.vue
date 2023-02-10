<script setup>
import { ref } from 'vue';
import { coursesStore } from '../stores/courses.js';
import { addcoursesStore } from '../stores/addcourses.js';

const expand = ref(false);
const courses = coursesStore();
const courseslist = courses.coursesList;
const courseCode = ref("");
const mycourses = courses.getState;
const add = addcoursesStore();
const addcourseInfo = add.getState;

//ปุ่มลงทะเบียน
function addSubject() {
    const data = courseslist.find((item) => item.coursecode == courseCode.value);
    if (data) {
        add.storeState(data);
        courseCode.value = "";
    } else {
        alert("โปรดกรอกรหัสวิชาที่ถูกต้อง");
    }
}
//ปุ่มลบวิชาที่ลงทะเบียน
function removeCourse(index_re) {
    if (confirm("ต้องการลบรายวิชาหรือไม่ ?")) {
        add.popState(index_re);
    }
}

//ปุ่มยืนยันการลงทะเบียน
function submitCourse() {
    if (addcourseInfo.length > 0) {
        addcourseInfo.forEach((subject) => {
            courses.storeState(subject);
        });
        while (addcourseInfo.length != 0) {
            add.popState(0);
        }
        alert("ลงทะเบียนเรียบร้อยแล้ว");
    } else {
        alert("โปรดเลือกวิชาก่อนทำการลงทะเบียน");
    }
}

//ปุ่มถอนรายวิชา
function dropCourse(index_dr){
    if (confirm("ต้องการถอนรายวิชาหรือไม่ ?")) {
        courses.popState(index_dr);
    }
}
</script>

<template>
    <div class="main">
        <div class="selecttitle">
                <h3>วิชาที่เลือก</h3>
            </div>
        <div class="select_courses">
            <div>
                <table>
                    <thead>
                        <th>รหัสวิชา</th>
                        <th>ชื่อวิชา</th>
                        <th>หน่วยกิต</th>
                        <th> </th>
                    </thead>
                    <tbody>
                        <tr v-for="(course, index) in addcourseInfo" :key="index">
                            <td>{{ course.coursecode }}</td>
                            <td>{{ course.coursename }}</td>
                            <td>{{ course.countunit }}</td>
                            <td>
                                <v-btn class="btDelete" @click="removeCourse(index)">
                                    ลบ
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dev center">
                <v-btn class="btsmcourse" @click="submitCourse">ยืนยันการลงทะเบียน</v-btn>
            </div>
        </div>

        <hr>
        <div class="searchtitle">
            <h3>ค้นหาวิชา</h3>
        </div>
        <div class="search_courses">
            <div>
                <div class="dev center">
                    <input class="input_ccode" type="text" v-model="courseCode" placeholder="กรุณากรอกรหัสวิชา" />
                </div>
                <form @submit.prevent="addSubject">
                    <div v-if="courseCode != null">
                        <article v-if="(i = courseslist.find((item) => item.coursecode == courseCode))">
                            <div style="display: flex;">
                                <div class="carddata">
                                    <p>
                                        <b>รหัสวิชา : </b> <span>{{ i.coursecode }}</span>
                                    </p>
                                    <p>
                                        <b>ชื่อวิชา : </b> <span>{{ i.coursename }}</span>
                                    </p>
                                    <p>
                                        <b>หน่วยกิต: </b> <span>{{ i.countunit }}</span>
                                    </p>
                                    <p>
                                        <b>ผู้สอน: </b> <span>{{ i.teacher }}</span>
                                    </p>
                                    <p>
                                        <v-table>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">วัน</th>
                                                    <th class="text-left">เวลา</th>
                                                    <th class="text-left">ห้อง</th>
                                                    <th class="text-left">เรียน</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-left">{{ i.date1 }} <br> {{ i.date2 }}</td>
                                                    <td class="text-left">{{ i.time1 }} <br> {{ i.time2 }}</td>
                                                    <td class="text-left">{{ i.room1 }} <br> {{ i.room2 }}</td>
                                                    <td class="text-left">{{ i.class1 }} <br> {{ i.class2 }}</td>
                                                </tr>
                                            </tbody>
                                        </v-table>
                                    </p>

                                </div>
                                <div class="btsubmitbox">
                                    <v-btn class="btAdd" type="submit">เพิ่มวิชา</v-btn>
                                </div>
                            </div>
                        </article>

                    </div>
                </form>
            </div>
        </div>

        <hr>
        <div class="myselecttitle">
            <h3>วิชาที่ลงทะเบียนทั้งหมด</h3>
        </div>
        <div class="myselect">
            
            <div >
                <table show-expand>
                <thead>
                    <th>รหัสวิชา</th>
                    <th>ชื่อวิชา</th>
                    <th>เพิ่มเติม</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr v-for="(mysubJ, index) in mycourses" :key="index">
                        <td>{{ mysubJ.coursecode }}</td>
                        <td>{{ mysubJ.coursename }}</td>
                        <td>
                            <v-expand-transition>
                                <div v-if="expand">
                                        <v-list-item >
                                            หน่วยกิต: {{ mysubJ.countunit }}
                                            <hr>
                                            ผู้สอน: {{ mysubJ.teacher }}
                                            <hr>
                                            <v-table>
                                                <thead>
                                                    <tr>
                                                        <th class="text-left">วัน</th>
                                                        <th class="text-left">เวลา</th>
                                                        <th class="text-left">ห้อง</th>
                                                        <th class="text-left">เรียน</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="text-left">{{ mysubJ.date1 }} <br> {{ mysubJ.date2 }}</td>
                                                        <td class="text-left">{{ mysubJ.time1 }} <br> {{ mysubJ.time2 }}</td>
                                                        <td class="text-left">{{ mysubJ.room1 }} <br> {{ mysubJ.room2 }}</td>
                                                        <td class="text-left">{{ mysubJ.class1 }} <br> {{ mysubJ.class2 }}</td>
                                                    </tr>
                                                </tbody>
                                            </v-table>
                                        </v-list-item>
                                    </div>
                                </v-expand-transition>
                                <v-card-actions>
                                    <v-btn class="btexpand" @click="expand = !expand">
                                        {{ !expand ? 'รายละเอียด' : 'ซ่อนรายละเอียด' }}
                                    </v-btn>
                                </v-card-actions>
                            </td>
                            <td>
                                <v-btn class="btDrop" @click="dropCourse(index)">
                                    ถอนวิชา
                                </v-btn>
                            </td>
                        </tr>
                </tbody>
            </table>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.main {
    padding: 60px;
}

.select_courses{
    border: solid 2px black;
    margin-bottom: 20px;
}
.search_courses{
    border: solid 2px black;
    margin-top: 20px;
    margin-bottom: 20px;
}
.myselect{
    border: solid 2px black;
    margin-top: 20px;
    margin-bottom: 20px;
}
.selecttitle {
    text-align: center;
}

.searchtitle {
    text-align: center;
}

.myselecttitle {
    text-align: center;
}

.carddata {
    margin-left: 30px;
    margin-right: 30px;
    flex: 2;
}

.btsubmitbox {
    margin-left: 40px;
    margin-right: 40px;
    display: flex;
}

.input_ccode {
    border: solid 2px black;
    max-width: 500px;
    text-align: center;
    margin-top: 40px;
}

/* button */
.center {
    text-align: center;
}

.btDelete {
    background-color: rgb(255, 189, 189);
    color: black;
    max-width: 30px;
    border: solid 2px red;
    border-radius: 20px;
}

.btsmcourse {

    background-color: rgb(182, 220, 176);
    color: black;
    max-width: 180px;
    text-align: center;
    font-weight: bold;
    border: solid 2px green;
    border-radius: 20px;
}

.btAdd {
    background-color: rgb(182, 220, 176);
    color: black;
    max-width: 180px;
    text-align: center;
    font-weight: bold;
    border: solid 2px green;
    border-radius: 20px;
}
.btDrop{
    background-color: rgb(255, 189, 189);
    color: black;
    max-width: 90px;
    border: solid 2px red;
    border-radius: 20px;
}
.btexpand{
    color: purple;
}
</style>