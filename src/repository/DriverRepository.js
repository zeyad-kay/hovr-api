const sequelize = require("../db");
const { Car } = require("../db/models/Car");
const { Driver } = require("../db/models/Driver");
// const {Driver_Address} = require("../db/models/Driver_Address");
const { Pickup_Line } = require("../db/models/Pickup_Line");
const { ScheduleService } = require("./ScheduleService");

class DriverService {

    static async createDriver({ driver = {}, car = {} } = {}) {
        return sequelize.transaction(async (t) => {
            let d = await Driver.create(driver, {
                fields: [
                    "first_name",
                    "last_name",
                    "mobile",
                    "password",
                    "profile_picture",
                    "national_id_picture",
                    "driving_license_picture"
                ],
                transaction: t
            })
                .then(res => res.toJSON());

            let c = await Car.create({
                driver_id: d.id,
                ...car
            }, {
                fields: [
                    "driver_id",
                    "model",
                    "license_plate",
                    "license_picture",
                ],
                transaction: t
            })
                .then(res => res.toJSON());

            return { ...d, car: c };
        });
    }

    static async updateDriver(values = {}, driver_id) {
        return Driver.update(values, {
            where: {
                id: driver_id
            },
            fields: [
                "first_name",
                "last_name",
                "mobile",
                "password",
            ],
            returning: false
        })
            .then(res => res[0]); // Returns num_rows
    }

    static async getDriver({ attributes = [], conditions = {} } = {}) {
        return Driver.findOne({
            attributes: attributes.length ? attributes : null,
            ...conditions
        })
            .then(res => res ? res.toJSON() : null);
    }
    // Returns [instances]
    static async getAllDrivers({ attributes = [], conditions = {} } = {}) {
        return Driver.findAll({
            attributes: attributes.length ? attributes : null,
            ...conditions
        })
            .then(res => res.map((p) => p.toJSON()));
    }

    static async updateCar({ values = {}, conditions = {} } = {}) {
        return Car.update(values, {
            ...conditions,
            fields: [
                "model",
                "license_plate",
                "license_picture",
            ],
            returning: false
        })
            .then(res => res[0]); // Returns num_rows
    }

    // static async updateAddress({ values = {}, conditions = {} } = {}) {
    //     return Driver_Address.update(values, {
    //         ...conditions,
    //         fields: [
    //             "home_coordinates",
    //             "home_place_id",
    //         ],
    //         returning: false
    //     })
    //         .then(res => res[0]); // Returns num_rows
    // }

    static async getScheduledRides(driver_id) {
        return ScheduleService.getAllRides({
            conditions: {
                include: [
                    {
                        model: Pickup_Line,
                        where: {
                            driver_id: driver_id
                        }
                        // include:
                    }
                ]
            }
        });
    }
}

exports.DriverService = DriverService;