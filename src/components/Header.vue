<template>
<div class="content-wrapper bg-primary text-white">
    <div class="inner-content">
        <div class="header">
            <div class="logo">
               
                    <h3>Styles <br> conference</h3>
            </div>
            <div class="nav">
                <div class="date">August 24–26th — Chicago, IL</div>
                <Nav  :bold400="true" :uppercase="true"/>
            </div>  
        </div>   
    </div>
</div>
</template>

<script>
import Nav from 'components/Nav'

export default {
    name:'Header',
    components: {
        Nav
    }
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

</style>