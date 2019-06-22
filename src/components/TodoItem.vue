<template>
    <li class="item">{{key2}} -- {{item}}</li>
</template>

<script>
    export default {
        name: "TodoItem",
        props: [
            "item","key2"
        ]
    }
</script>

<style scoped>
    .item {
        background: red;
    }
</style>