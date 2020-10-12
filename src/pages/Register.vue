<template>
    <div>
        <TextBox title="Register" text="Every year we aim to have an unbelievable time, and this year we’d love it for you to join us. Conference passes only cost $99, one of the best values you’ll find."/>

        <div class="content-wrapper">
            <div class="inner-content">
                <div class="register-content">
                    <div class="box">
                        <div class="name">Purchase a Conference Pass</div>
                        <p class="proffesion">$99 PER PASS</p>

                        <p class="text">Purchase your Styles Conference pass using the form to the right. Multiple passes may be purchased within the same order, so feel free to bring a friend or two along. Once your order is finished we’ll follow up and provide a receipt for your purchase. See you soon!</p>

                        <div class="attend">Why Attend?</div>
                        <ul class="list">
                            <li>Over twenty world-class speakers</li>
                            <li>One full day of workshops and two full days of presentations</li>
                            <li>Hosted at The Chicago Theatre, a historical landmark</li>
                            <li>August in Chicago is simply amazing</li>
                        </ul>
                    </div>

                    <div class="right">
                        <form action="*">
                           <div class="item">
                                <label>Name</label>
                                <input type="text" placeholder="Full name" required>
                           </div>

                           <div class="item">
                                <label>Email</label>
                                <input type="email" placeholder="Email address" required>
                           </div>

                           <div class="nums row">
                               <label class="col-12" for="">Number of Passes</label>
                                <select class="select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                           </div>

                            <div class="item">
                                <label for="">Comments</label>
                               <textarea row="5"/>
                            </div>

                            <input type="submit" class="purchase-btn" value="PURCHASE"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TextBox from 'components/resources/TextBox'
export default {
    name: 'Register',
    components: {
        TextBox
    }
}
</script>
<style lang="scss" >
.register-content {
    padding: 48px 0;
}
.register-content .box {
     .name {
        font-size: 24px;
        line-height: 44px;
        color: $secondary;
        font-weight: 300;
    }
    .proffesion {
        color: #a9b2b9;
        font-size: 14px;
        font-weight: 400;
    }
    .text {
        color: #888;
        font-size: 16px;
        font-weight: 300;
    }
}
.attend {
    font-size: 18px;
    line-height: 40px;
    color: $secondary;
    font-weight: 300;
}
.list li {
    list-style: square;
    color: #888;
    font-weight: 300;
}

.register-content {
    display: flex;
}
.right {
    flex: 1 0 33%;
}
.item {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
}
.nums {
    margin-bottom: 16px;
}
.item label,
.nums label {
    color: $secondary;
    font-size:16px;
    padding-bottom: 2px;
}
.item input, 
.nums select, 
.item textarea {
    border:1px solid #c6c9cc;
    padding: 5px 8px;
    border-radius: 5px;
    color: #888;
}
.select {
    margin-top: 8px;
    flex: 0;
}
.purchase-btn  {
    display: inline-block;
    background: $secondary;
    color: #fff;
    padding: 12px 24px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
.purchase-btn:hover {
    background: #a9b2b9;
}
</style>
