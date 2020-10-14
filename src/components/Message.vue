<template>
    <div v-if="show" >
        <slot name="title" subject="标题"></slot>
        <!--通过slot传入内容-->
        <slot></slot>
        <span class="messagebox-close" @click="$emit('update:show',false)">x</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>