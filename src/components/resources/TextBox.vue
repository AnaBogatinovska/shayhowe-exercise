<template>
    <div class="content-wrapper bg-linear">
        <div class="inner-content">
            <div class="box-content">
                <p class="topic">{{ title }}</p>
                <div class="info">{{ text }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TextBox',
    props:['title', 'text']
}
</script>
<style lang="scss" scoped>
.bg-linear {
    background: linear-gradient(to right,#a1d3b0,#f6f1d3);
    color: $secondary;
    font-weight: 300;
}
.box-content {
    text-align: center;
    margin: 0 16px;
    padding: 48px 0
}
.box-content .topic {
    font-size: 36px;
    line-height: 44px;
}
.box-content .info {
    font-size:21px;
    line-height: 33px;
}
</style>