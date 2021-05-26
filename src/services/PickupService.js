const {Pickup_Line} = require("../db/models/Pickup_Line");

class PickupService {

    static async createPickupLine(values) {
        return Pickup_Line.create(values, {
            fields: ["driver_id", "day", "pickup_time"]
        })
            .then(res => res.toJSON());
    }

    static async updatePickupLine(values = {}, conditions = {}) {
        return Pickup_Line.update(values, {
            where: {
                ...conditions
            },
            fields: ["driver_id", "day", "pickup_time"],
            returning: false
        })
            .then(res => res[0]); // Returns num_rows
    }

    static async getPickupLine(attributes = [], conditions = {}) {
        return Pickup_Line.findOne({
            attributes: attributes,
            where: {
                ...conditions
            }
        })
            .then(res => res ? res.toJSON() : null);
    }
}
exports.PickupService = PickupService;