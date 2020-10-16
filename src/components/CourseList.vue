<template>
    <div>
        <!--条件渲染-->
        <p v-if="courses.length===0">没有任何课程信息</p>
        <!--style-->
        <div class="course-list" v-else>
            <div v-for="c in courses" :key="c.name" :style="{backgroundColor: selectCourse===c?'#bbbbbb':'transparent'}" @click="OnClick(c)">
                <!-- <router-link :to="`/admin/course/${c.name}`">
                    {{ c.name }}  $ {{c.price}}
                </router-link> -->
                {{ c.name }}  $ {{c.price}}
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
                return{
                    selectCourse:''
                }
            },
            props:{
                courses:{
                    type:Array,
                    default:function(){

                    }
                }
            },
            methods:{
                OnClick(c){
                    this.selectCourse=c;
                    // this.$router.push(`/admin/course/${c.name}`);
                     this.$router.push({
                         name:"detail",
                         params:{name:c.name}
                     });

                }
            }
    }
</script>

<style scoped>
.active{
            background-color: #bbbbbb;
        }
</style>