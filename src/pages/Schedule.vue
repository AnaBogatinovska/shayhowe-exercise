<template>
    <div>
        <TextBox title="Schedule" text="The conference opens with amazing workshops and continues with two days of incredible talks and keynotes, all of which are facilitated by industry-leading experts."/>

        <div class="content-wrapper">
            <div class="inner-content">
                <div class="schedule">
                    <table>
                       <thead>
                            <tr>
                                <th class="title">Workshops</th>
                                <td class="event">August 24th</td>
                            </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <th class="time">8:30 AM</th>
                               <td class="event">Registration</td>
                           </tr>
                           <tr>
                               <th class="time">9:00 AM</th>
                               <td class="speakers">
                                   <div>
                                       <div class="speaker">Adam Connor</div>
                                       <div><a href="speaker/#adam-connor">Lights! Camera! Interaction! Design Inspiration from Filmmakers</a></div>
                                   </div>
                                   <div>
                                       <div class="speaker">Jennifer Jones</div>
                                       <div><a href="speaker#jennifer-jones">What Designers Can Learn from Parenting</a></div>
                                   </div>
                                </td>
                           </tr>
                             <tr>
                               <th class="time">12:30 AM</th>
                               <td class="event">Lunch</td>
                           </tr>
                           <tr>
                               <th class="time">2:00 PM</th>
                               <td class="speakers">
                                   <div>
                                       <div class="speaker">Tessa Harmon</div>
                                       <div><a href="speaker/#tessa-harmon">Crafty Coding: Generating Knitting Patterns</a></div>
                                   </div>
                                   <div>
                                       <div class="speaker">Russ Unger</div>
                                       <div><a href="speaker#russ-unger">From Muppets to Mastery: Core UX Principles from Mr. Jim Henson</a></div>
                                   </div>
                                </td>
                           </tr>
                       </tbody>
                    </table>
                    <table>
                       <thead>
                            <tr>
                                <th class="title">Conference</th>
                                <td class="event">August 25th</td>
                            </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <th class="time">8:30 AM</th>
                               <td class="event">Registration</td>
                           </tr>
                           <tr>
                               <th class="time">9:00 AM</th>
                               <td class="speakers">
                                   <div>
                                       <div class="speaker">Vitaly Friedman</div>
                                       <div><a href="speaker/#vitaly-friedman">Responsive Web Design: Clever Tips and Techniques</a></div>
                                   </div>
                                </td>
                           </tr>
                             <tr>
                               <th class="time">10:00 AM</th>
                               <td class="event">Morning Break</td>
                           </tr>
                           <tr>
                               <th class="time">10:30 AM</th>
                               <td class="speakers">
                                   <div>
                                       <div class="speaker">Shay Howe</div>
                                       <div><a href="speaker/#shay-howe">Less is More: How Constraints Cultivate Growth</a></div>
                                   </div>
                                   <div>
                                       <div class="speaker">Jenn Downs</div>
                                       <div><a href="speaker#jenn-downs">What’s Stopping You?</a></div>
                                   </div>
                                </td>
                           </tr>
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TextBox from 'components/resources/TextBox'
export default {
    name: 'Schedule',
    components: {
        TextBox
    }
}
</script>
<style lang="scss" scoped>
.schedule {
    font-size: 16px;
    padding: 48px 0;

    th {
        padding: 16px 32px 24px 0
    }

    td {
        padding: 24px 0;
    }

    tbody td {
        border-top: 1px  solid #dfe2e5
    }

    .title {
        font-size: 24px;
        color: $secondary;
        font-weight: 300;   
    }

    .event {
        color: #a9b2b9;
        font-weight: 300;
    }

    .time {
        color: #a9b2b9;
        font-weight: 400;
        font-size: 14px;
        text-align: end;
    }

    .speakers {
        display: flex;
        font-weight: 300;
    }

    .speakers > div {
        flex: 1 0 50%;
        padding-right: 24px;
    }
    .speakers .speaker {
        color: $secondary;
        font-size: 18px;
    }
    .speakers a {
        color: #888;
    }
    .speakers a:hover {
        color: #a9b2b9;
    }
}
</style>
