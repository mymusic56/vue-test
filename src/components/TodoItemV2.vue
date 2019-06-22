<template>
    <!--
     插槽的使用
     -->
    <li class="item">
        <input type="checkbox" v-model="checked">
        <!--
            将CheckBox的值以对象的形式传递出去
        -->
        <slot name="helloworld" v-bind="{checked,abcinfo}"></slot>
    </li>
</template>

<script>
    export default {
        name: "TodoItem",
        props: [
            "item","key2"
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