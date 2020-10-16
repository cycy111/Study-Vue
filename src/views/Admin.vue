<template>
  <div class="about">
    <img :src="`${publicPath}assets/logo.png`">
    
    <CourseAdd v-model="course" @add-course="addCourse"></CourseAdd>
    <CourseList :courses="courses"></CourseList>

    <!-- 嵌套内容出口 -->
    <router-view></router-view>

  </div>
</template>
<script>

  import CourseList from '@/components/CourseList.vue';
  import CourseAdd from '@/components/CourseAdd.vue';
  import { getCourses } from "@/api/courses";
  export default {
    name: 'Admin',
    components: {
      CourseList,
      CourseAdd
      
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
      console.log(window.isLogin)
    },
    //组件内守卫
    beforeRouteEnter(to, from, next)  {
        
          if (window.isLogin) {
            next()
          } else {
            next('/login?redirect='+to.fullPath)
          }
          
    }
  }
</script>