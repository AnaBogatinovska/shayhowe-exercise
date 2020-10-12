<template>
     <ul class="nav-list" :class="['nav-list', uppercase ? 'uppercase' : '', bold400 ? 'bold400' : '',   bold300 ? 'bold300' : '']">
        <li class="list-item">
            <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="list-item">
            <router-link :to="{ name: 'speaker' }">Speaker</router-link>
        </li>
        <li class="list-item">
            <router-link :to="{ name: 'schedule' }">Schedule</router-link>
        </li>
        <li class="list-item">
            <router-link :to="{ name: 'venue' }">Venue</router-link>
        </li>
        <li class="list-item">
            <router-link :to="{ name: 'register' }">Register</router-link>
        </li>
     </ul>
</template>
<script>
export default {
    name: 'Nav',
props: ['uppercase', 'bold400' ,'bold300']
}
</script>
<style lang="scss" scoped>
.nav-list {
    display: flex;
}
.nav-list .list-item {
    list-style: none;
    padding: 4px 8px;
}
.nav-list .list-item a {
    text-decoration: none;
    color: #fff;
}
.nav-list .list-item a:hover {
    color: $secondary;
}
.uppercase .list-item {
    text-transform: uppercase;
}
.bold400 .list-item a {
    font-weight: 400;
}
.bold300 .list-item a {
    font-weight: 300;
}
</style>