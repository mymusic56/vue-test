<template>
    <div class="user">
        <h2>User 视图 {{ $route.params.id }}</h2>
        <router-view></router-view>
        <p>大家都能看到</p>
    </div>
</template>