<template>
    <div>
        <TextBox title="Venue" text="The conference is held at The Chicago Theatre, a beautiful historical landmark. The conference hotel, Hotel Chicago, is a short walk away down State Street."/>

        <div class="content-wrapper">
            <div class="inner-content">
                <div class="venue">
                    <div class="location">
                        <div class="contact">
                            <div class="title">Chicago Theatre</div>
                            <p>175 N State St <br/>Chicago, IL 60601</p>
                            <a href="https://www.msg.com/the-chicago-theatre?cmp=van_chicagotheatre">thechicagotheatre.com</a>
                            <p>(312) 462-6300</p>
                        </div>
                         <iframe
                         class="map"
                            height="264"
                            frameborder="0" style="border:0"
                            src="https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x880e2ca55810a493%3A0x4700ddf60fcbfad6!2schicago+theatre!5e0!3m2!1sen!2sus!4v1388701393606" allowfullscreen>
                        </iframe>
                    </div>
                    <div class="location">
                        <div class="contact">
                            <div class="title">Hotel Chicago</div>
                            <p>333 N Dearborn St <br/>Chicago, IL 60601</p>
                            <a href="https://www.msg.com/the-chicago-theatre?cmp=van_chicagotheatre">thechicagotheatre.com</a>
                            <p>(312) 462-6300</p>
                        </div>
                         <iframe 
                            class="map"
                            height="264"
                            frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x880e2cb1da049173%3A0xa5c91d255a775f0b!2sHotel+Sax+Chicago%2C+North+Dearborn+Street%2C+Chicago%2C+IL!5e0!3m2!1sen!2sus!4v1388702493978" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

       
       
    </div>
</template>
<script>
import TextBox from 'components/resources/TextBox'
export default {
    name: 'Venue',
    components: {
        TextBox
    }
}
</script>
<style lang="scss" scoped>
.venue {
    font-size: 16px;
    color: $secondary;
    font-weight: 300;
    padding: 48px 0
}
.venue a:hover {
    color: #a9b2b9;
}
.location {
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
}
.location .contact {
    padding-right: 48px;
}
.location .title {
    font-size: 24px;
}
.location .map {
    flex: 1;
    padding-left: 48px;
}
</style>
