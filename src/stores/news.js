import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const newsStore = defineStore('news', () => {
  const newsList = ref([
    {
      "News_Date": "08/02/2566",
      "News_Title": "Call For Paper",
      "News_links": "https://sciencebase.mju.ac.th/csti2023/",
    },
    {
      "News_Date": "12/01/2566",
      "News_Title": "บอกเลิกรายวิชา โดยได้รับอักษร W ภาคเรียนที่ 2/2565 ภายในวันที่ 14 กุมภาพันธ์ 2566",
      "News_links": "http://www.education.mju.ac.th/Student/Login.aspx"
    },
    {
      "News_Date": "10/01/2566",
      "News_Title": "เช็คตารางสอบกลางภาค 2/65",
      "News_links": "http://www.education.mju.ac.th/ExamSchedule/ExamScheduleStudent.aspx",
    },
    {
      "News_Date": "16/12/2565",
      "News_Title": "ประกาศรับสมัครทุนการศึกษาเครือเจริญโภคภัณฑ์ ระดับอุดมศึกษา ประจำปีการศึกษา 2565",
      "News_links": "https://www.applycpscholarship.com",
    },
    {
      "News_Date": "13/12/2565",
      "News_Title": "ยื่นคาดว่าจะสำเร็จการศึกษา 2/2565",
      "News_links": "http://www.education.mju.ac.th/Student/Login.aspx"
    },
  ]);
  
  return { newsList }
})
