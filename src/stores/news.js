import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const newsStore = defineStore('news', () => {
  const newsList = ref([
    {
      "newsdate": "08/02/2566",
      "newstitle": "Call For Paper",
      "newslinks": "https://sciencebase.mju.ac.th/csti2023/",
    },
    {
      "newsdate": "12/01/2566",
      "newstitle": "บอกเลิกรายวิชา โดยได้รับอักษร W ภาคเรียนที่ 2/2565 ภายในวันที่ 14 กุมภาพันธ์ 2566",
      "newslinks": "http://www.education.mju.ac.th/Student/Login.aspx"
    },
    {
      "newsdate": "10/01/2566",
      "newstitle": "เช็คตารางสอบกลางภาค 2/65",
      "newslinks": "http://www.education.mju.ac.th/ExamSchedule/ExamScheduleStudent.aspx",
    },
    {
      "newsdate": "16/12/2565",
      "newstitle": "ประกาศรับสมัครทุนการศึกษาเครือเจริญโภคภัณฑ์ ระดับอุดมศึกษา ประจำปีการศึกษา 2565",
      "newslinks": "https://www.applycpscholarship.com",
    },
    {
      "newsdate": "13/12/2565",
      "newstitle": "ยื่นคาดว่าจะสำเร็จการศึกษา 2/2565",
      "newslinks": "http://www.education.mju.ac.th/Student/Login.aspx"
    },
  ]);
  
  return { newsList }
})
