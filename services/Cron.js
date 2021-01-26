// require('dotenv').config()
// require('../config/sequelize');
const Driver = require('../models/Driver/Driver');
const Driver_Address = require('../models/Driver/Driver_Address');
const Route = require('../models/Route/Route');
const Route_Schedule = require('../models/Route/Route_Schedule');
// const CronJob = require('cron').CronJob;

// const job = new CronJob('30 * * * * 3', function () {
//     console.log('You will see this message every 30 seconds');
// Route_Schedule.findAll({
//     where: {
//         day: 'Sunday'
//     }
// }).then(val => { val.forEach((x => { console.log(x.toJSON()); })) });
// }, null, true, 'Africa/Cairo');
// job.start();
Driver_Address.create({
    driver_id: 'bfdef592-4620-11eb-b166-e9c0ec5e024f',
    home_address: 'address',
    home_coordinates: { type:'POINT',coordinates:[31.12,12,21] }
});
// Driver_Address.findOne({
//     where: {
//         driver_id:'bfdef592-4620-11eb-b166-e9c0ec5e024f'
//     }
// }).then(res=>{console.log(res.toJSON());})
async function getScheduledRoutes(day = Tomorrow()) {
    Route_Schedule.findAll({
        attributes: [
            'day',
            'route_id'
        ],
        where: {
            day: day
        },
        include: {
            model: Route,
            attributes: [
                'driver_id'
            ],
            include: {
                model: Driver,
                attributes: [
                    'email',
                    'mobile'
                ]
            },
        }
    })
        .then(val => {
            val.forEach((x) => {
                // const { Route } = x;
                console.log(x.toJSON());
                // Route.getDriver().then(res => {console.log(res.toJSON());})
                
            });

        });
    // console.log('Route.associations');
}
function Tomorrow() {
    const Days = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    }
    let today = new Date().getUTCDay();
    return Days[today === 6 ? 0 : today + 1];
}
// function Today() {
//     const Days = {
//         0: 'Sunday',
//         1: 'Monday',
//         2: 'Tuesday',
//         3: 'Wednesday',
//         4: 'Thursday',
//         5: 'Friday',
//         6: 'Saturday'
//     }
//     return Days[new Date().getUTCDay() + 1];
// }
// getScheduledRoutes('Friday')