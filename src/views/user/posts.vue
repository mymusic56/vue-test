<template>
    <div>
        <h2>posts.vue视图</h2>
        <button @click="showCount">公共状态</button>
        <p>path:@views/user/posts.vue</p>
    </div>
</template>

<script>
    export default {
        methods: {
            showCount(){
                console.log(window.$store.state.count)
            }
        }
    }

</script>