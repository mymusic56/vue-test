<template>
    <!--
     插槽的使用
     -->
    <li class="item">
        <input type="checkbox" v-model="checked" v-bind:data_desc="abc">
        <!--
            将CheckBox的值以对象的形式传递出去
        -->
        <!--具名插槽-->
        <slot name="helloworld" v-bind="{checked,abcinfo}">slot后备内容</slot>
        <!--后备内容只会在没有提供内容的时候被渲染-->
        <slot name="slot2"></slot>
    </li>
</template>

<script>
    export default {
        name: "TodoItem",
        props: [
            "item","key2","abc"
        ],
        data() {
            return {
                checked: false,
                abcinfo: 1234
            }
        }
    }
</script>

<style scoped>
    .item {
        color: red;
    }
</style>