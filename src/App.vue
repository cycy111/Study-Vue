<template>
  <div id="app">
    <img :src="`${publicPath}assets/logo.png`">
    <HelloWorld :msg="message"/>
    <CourseAdd v-model="course" @add-course="addCourse"></CourseAdd>
    <CourseList :courses="courses"></CourseList>
  </div>
</template>

<script>
import  HelloWorld from "@/components/HelloWorld.vue";
import CourseList from '@/components/CourseList.vue';
import CourseAdd from '@/components/CourseAdd.vue';
import { getCourses } from "@/api/courses";
//自定义指令
// Vue.directive('foucus', {
//     inserted(el){
//         el.focus()
//     }
    
// });

export default {
  name: 'App',
  components: {
    CourseList,
    CourseAdd,
    HelloWorld
  },
  data(){
    return {
        message:'welcome!',
        title:'开课吧购物车',
        course:'',
        courses:[],
        publicPath: process.env.BASE_URL           
    }
  },
  methods:{
    addCourse(){
        if(this.course){
            this.courses.push({name: this.course})
            this.course=''
            this.show=true
        }
        else{
            this.showWarn=true
        }
        
    }
  },
  async created(){
    this.courses= await getCourses();
    //this.batchUpdate();
    console.log(this.courses)
  }
}
</script>

<style scoped lang="scss">

a {
color: $color;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.icon {
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
</style>

<style scoped>
#app >>> a {
color: red
}
</style>
