<template>
    <div class="content-wrapper bg-primary footer">
        <div class="inner-content">
            <div class="content">
                <div class="copywrite">&#169; Styles Conference</div>
                <div>
                    <Nav :bold300="true"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Nav from 'components/Nav'

export default {
    name: 'Footer',
    components: {
        Nav
    }
}
</script>
<style lang="scss" scoped>
.footer {
    position: absolute;
    bottom: 0;
}
.footer .content {
    display:flex;
    justify-content: space-between;
    align-items: center;
} 
.content {
    padding: 32px 0;
}
.copywrite {
    color: $secondary;
}
</style>