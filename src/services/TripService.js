const { sequelize } = require("../db");
// const {Cancelled_Trip} = require("../db/models/Cancelled_Trip");
const {Schedule_Trip} = require("../db/models/Schedule_Trip");
const {Trip} = require("../db/models/Trip");

class TripService {

    static async createTrip(values = {}, schedules_ids = []) {
        return sequelize.transaction(async (t) => {

            const trip = await Trip.create(values, {
                fields: [
                    "driver_id",
                    "route"
                ],
                transaction: t
            })
                .then(res => res.toJSON());

            let sch_trips = schedules_ids.map((id) => {
                return {
                    trip_id: trip.id,
                    schedule_id: id
                };
            });

            let s = await Schedule_Trip.bulkCreate(sch_trips, {
                fields: [
                    "trip_id",
                    "schedule_id"
                ],
                transaction: t
            })
                .then(res => res.map((p) => p.toJSON()));

            return { ...trip, schedules_trips: s };
        });
    }

    static async getTrip({ attributes = [], conditions = {} } = {}) {
        return Trip.findOne({
            attributes: attributes.length ? attributes : null,
            ...conditions
        })
            .then(res => res.toJSON());
    }

    static async getAllTrips({ attributes = [], conditions = {} } = {}) {
        return Trip.findAll({
            attributes: attributes.length ? attributes : null,
            ...conditions
        })
            .then(res => res.map((p) => p.toJSON()));
    }

    // static async cancelTrip({ values = {}, conditions = {} } = {}) {
    //     return Cancelled_Trip.create(values, {
    //         ...conditions
    //     })
    //         .then(res => res.toJSON());
    // }

    // static async getAllCancelledTrip(conditions = {}) {
    //     return Cancelled_Trip.findAll({
    //         ...conditions
    //     })
    //         .then(res => res.map((p) => p.toJSON()));
    // }

}

exports.TripService = TripService;