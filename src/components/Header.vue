<template>
<div class="content-wrapper bg-primary text-white">
    <div class="inner-content">
        <div class="header">
            <div class="logo">
               
                    <h3>Styles <br> conference</h3>
            </div>
            <div class="nav">
                <div class="date">August 24–26th — Chicago, IL</div>
                <ul class="nav-list">
                    <li class="list-item">
                        <router-link :to="{ name: 'home' }">home</router-link>
                    </li>
                    <li class="list-item">
                        <router-link :to="{ name: 'speaker' }">speaker</router-link>
                    </li>
                    <li class="list-item">
                        <router-link :to="{ name: 'schedule' }">schedule</router-link>
                    </li>
                    <li class="list-item">
                        <router-link :to="{ name: 'venue' }">venue</router-link>
                    </li>
                    <li class="list-item">
                        <router-link :to="{ name: 'register' }">register</router-link>
                    </li>
                </ul>
            </div>
        </div>   
    </div>
</div>
</template>

<script>
export default {
    name:'Header'
}
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 24px;
}
.logo h3 {
    text-transform: uppercase;
    font-weight: 50;
    margin: 0; 
    padding-top: 38px;
    padding-bottom: 20px;
    border-top: 5px solid $secondary

}
.nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 4px;
}
.nav .date {
    color: $secondary;
    font-size: 18px;
    font-weight: 600;
}
.nav-list {
    display: flex;
}
.nav-list .list-item {
    list-style: none;
    text-transform: uppercase;
    padding: 4px 8px;
}
.nav-list .list-item a {
    text-decoration: none;
    color: #fff;
    font-weight: 700;
}
.nav-list .list-item a:hover {
    color: $secondary;
}
</style>