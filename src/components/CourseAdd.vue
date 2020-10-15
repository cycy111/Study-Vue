<template>
    <div>
        <p class="info">
            <!-- <input :value='value' type="text" @input="onInput" @keydown.enter="addCourse"  v-foucus >
             -->
            <input :value='value' type="text" @input="onInput" @keydown.enter="addCourse" >

            {{value}}
            <button @click="addCourse">新增</button>
        </p>
    </div>
</template>

<script>
    export default {
        props:['value'],
        methods:{
            addCourse(){
                this.$emit('add-course')
            },
            
            onInput(e){
                this.$emit('input',e.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
.info{
    margin: 0%;
}
</style>