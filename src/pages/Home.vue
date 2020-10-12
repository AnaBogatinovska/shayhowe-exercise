<template>
   <div>
        <div class="content-wrapper register">
        <div class="inner-content">
            <div class="text-white content q-mb-lg">
                <p class="top">Dedicated to the Craft of Building Websites</p>
                <p class="bottom">
                    Every year the brightest web designers and front-end developers descend on Chicago to discuss the latest technologies. Join us this August!
                </p>
                <button class="register-btn"><router-link :to="{ name: 'register' }">REGISTER NOW</router-link></button>
            </div>
        </div>
    </div>
     <div class="content-wrapper main-content">
        <div class="inner-content">
            <div class="cards q-py-xl">
                <div class="card">
                    <div class="card-body">
                        <div class="text-uppercase q-py-md">speakers</div>
                        <div class="card-img">
                            <router-link :to="{ name: 'speaker' }"> 
                                <img src="images/speakers.jpg" alt="speakers">
                                <p class="topic">World-Class Speakers</p>
                            </router-link>
                        </div>
                        <p class="info">Joining us from all around the world are over twenty fantastic speakers, here to share their stories.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="text-uppercase q-py-md">SCHEDULE</div>
                        <div class="card-img">
                            <router-link :to="{ name: 'schedule' }"> 
                                <img src="images/schedule.jpg" alt="schedule">
                                <p class="topic">Three Inspiring Days</p>
                            </router-link>
                        </div>
                        <p class="info">Enjoy three inspiring and action-packed days of talks, gatherings, and all-around good times.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="text-uppercase q-py-md">venue</div>
                        <div class="card-img">
                            <router-link :to="{ name: 'venue' }"> 
                                <img src="images/venue.jpg" alt="venue">
                                <p class="topic">The Chicago Theatre</p>
                            </router-link>
                        </div>
                        <p class="info">Within the heart of downtown Chicago, The Chicago Theatre will provide a beautiful conference venue.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>
<style lang="scss" scoped>
.register {
    background-color: $primary;
}
.register .content {
    text-align: center;
    font-weight: 300;
    padding: 32px 38px;
}
.register .top {
    color: $secondary;
    font-size: 36px;
}
.register .bottom {
    font-size: 24px;
}
.register .register-btn{
    background: transparent;
    border:1px solid #fff;
    border-radius: 4px;
  padding: 0;
}
.register .register-btn a {
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    display: inline-block;
    padding: 20px 30px;
    font-size: 16px;
}
.register .register-btn a:hover {
    color: $secondary;
    background: #fff;
    transition: all 0.25s;
}

//main
.cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #888;
}
.card {
    max-width: 310px;
}
.card-body {
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
}
.card-body .info {
    font-size: 16px;
    font-weight: 300;
}
.card-img a {
    text-decoration: none;
     color:$secondary;
    font-size: 24px;
    font-weight: 300;
}
.card-img a:hover {
    color: #a9b2b9
}
.card-img img {
    width: 100%;
    border-radius: 5px
}
</style>