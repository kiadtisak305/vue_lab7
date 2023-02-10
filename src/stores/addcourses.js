import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const addcoursesStore = defineStore("addcourses", () => {
  const addcourses = ref([]);

  const getState = computed(() => addcourses.value);
  const storeState = (state) => addcourses.value.push(state);
  const popState = (index) => addcourses.value.splice(index,1);
  return { addcourses, getState, storeState, popState };
});
