<template>
    <div>
        <h2>show.vue 视图</h2>
        User ID: {{ $route.params.id }}

        <button @click="addCount">公共状态</button>
    </div>
</template>
<script>

    export default {
        name: 'show',
        methods:{
            addCount: function () {
                window.$store.commit('increment');
                console.log("点击后："+window.$store.state.count)
            }
        }
    }
</script>