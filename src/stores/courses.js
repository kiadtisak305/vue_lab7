import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const coursesStore = defineStore('courses', () => {
  const courses = ref([]);

  const getState = computed(() => courses.value);
  function storeState(state) {
    courses.value.push(state);
  }
  function popState(index){
    courses.value.splice(index,1);
  } 
  const coursesList = ref([
    {
      coursecode: 'คพ252',
      coursename: 'คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์',
      countunit: '3 (3-0-6)',
      teacher: 'อาจารย์ ดร.พยุงศักดิ์ เกษมสำราญ',
      date1: 'พุธ',
      time1: '08:30 - 11:30',
      room1: 'COM 3203',
      class1: 'บรรยาย',
      date2: '',
      time2: '',
      room2: '',
      class2: '',
    },
    {
      coursecode: 'คพ392',
      coursename: 'การเป็นผู้ประกอบการทางด้านคอมพิวเตอร์และนวัตกรรม',
      countunit: '3 (2-3-5)',
      teacher: 'อาจารย์ ดร.กิตติกร หาญตระกูล',
      date1: 'อังคาร',
      time1: '15:00 - 17:00',
      room1: 'บรรยาย คอม 8',
      class1: 'บรรยาย',
      date2: 'พฤหัสบดี',
      time2: '14:30 - 17:30',
      room2: 'COM 3203',
      class2: 'ปฏิบัติ',
    },
    {
      coursecode: 'คพ222',
      coursename: 'การเขียนโปรแกรมมัลติมีเดีย',
      countunit: '3 (2-3-5)',
      teacher: 'อาจารย์ ดร.สมนึก สินธุปวน',
      date1: 'อังคาร',
      time1: '12:30 - 14:30',
      room1: 'บรรยาย คอม 8',
      class1: 'บรรยาย',
      date2: 'พฤหัสบดี',
      time2: '11:00 - 14:00',
      room2: 'Lab คอม2',
      class2: 'ปฏิบัติ',
    },
    {
      coursecode: 'คพ231',
      coursename: 'ระบบคอมพิวเตอร์และภาษาแอสเซมบลี',
      countunit: '1 (0-3-1)',
      teacher: 'ผู้ช่วยศาสตราจารย์ ดร.ปวีณ เขื่อนแก้ว',
      date1: 'จันทร์',
      time1: '09:00 - 12:00',
      room1: 'COM 3203',
      class1: 'บรรยาย',
      date2: '',
      time2: '',
      room2: '',
      class2: '',
    },
    {
      coursecode: 'คพ232',
      coursename: 'สถาปัตยกรรมคอมพิวเตอร์',
      countunit: '3 (2-3-5)',
      teacher: 'ผู้ช่วยศาสตราจารย์ภานุวัฒน์ เมฆะ',
      date1: 'จันทร์',
      time1: '08:30 - 10:30',
      room1: 'บรรยาย คอม 7',
      class1: 'บรรยาย',
      date2: 'พฤหัสบดี',
      time2: '09:00 - 12:00',
      room2: 'COM 3203',
      class2: 'ปฏิบัติ',
    },
  ]);

  return { courses, getState, storeState, popState, coursesList }
})
