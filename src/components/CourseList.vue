<template>
    <div>
        <!--条件渲染-->
        <p v-if="courses.length===0">没有任何课程信息</p>
        <!--style-->
        <div class="course-list" v-else>
            <div v-for="c in courses" :key="c.name" :style="{backgroundColor: selectCourse===c?'#bbbbbb':'transparent'}" @click="selectCourse=c;">
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
            }
    }
</script>

<style scoped>
.active{
            background-color: #bbbbbb;
        }
</style>