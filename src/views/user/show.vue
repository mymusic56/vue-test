<template>
    <div>
        <h2>show.vue 视图</h2>
        User {{ $route.params.id }}
    </div>
</template>
<script>

    export default {
        name: 'show'
    }
</script>