require('dotenv').config();
require('../config/sequelize');
const Driver = require('../models/Driver/Driver');
const Driver_Address = require('../models/Driver/Driver_Address');
const Route = require('../models/Route/Route');
const Route_Schedule = require('../models/Route/Route_Schedule');
async function createModel(Model, values) {
    return Model.bulkCreate(values);
}
const driverargs = [
    { full_name: 'myname', gender: 'male', email: 'a1@z.com', password: 'mypass', mobile: '123' },
    { full_name: 'myname', gender: 'male', email: 'a2@z.com', password: 'mypass', mobile: '456' },
    { full_name: 'myname', gender: 'male', email: 'a3@z.com', password: 'mypass', mobile: '789' },
    { full_name: 'myname', gender: 'male',  email: 'a4@z.com', password: 'mypass', mobile: '101' }
];
const routeargs = [
    // {driver_id: '461e74f0-45f4-11eb-b801-4b14fe223175'},
    {driver_id: '461e9c01-45f4-11eb-b801-4b14fe223175'},
]
const route_sched_args = [
    {day:'Sunday',route_id:'48a1b280-45f6-11eb-9ab5-a538296f1414'},
    // {day:'Monday',route_id:'791554f0-45f4-11eb-9179-3f4c95c0cda1'},
]
// createModel(Driver, driverargs)
// createModel(Route, routeargs)
// createModel(Route_Schedule, route_sched_args)
// createModel(Parent, driverargs)
    