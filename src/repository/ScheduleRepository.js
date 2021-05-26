const { Schedule } = require("../db/models/Schedule");

class ScheduleRepository {

    static async createSchedule(schedule = {}) {
        return Schedule.create(schedule, {
            fields: [
                "child_id",
                "day",
                "pickup_time",
                "pickup_place_id",
                "pickup_coordinates",
                "destination_place_id",
                "destination_coordinates"
            ]
        })
            .then(res => res.toJSON());
    }

    static async getSchedule({ attributes = [], conditions = {} } = {}) {
        return Schedule.findOne({
            attributes: attributes.length ? attributes : null,
            ...conditions
        })
            .then(res => res.toJSON());
    }

    static async getAllSchedules({ attributes = [], conditions = {} } = {}) {
        return Schedule.findAll({
            attributes: attributes.length ? attributes : null,
            ...conditions
        })
            .then(res => res.map((p) => p.toJSON()));
    }

    static async updateSchedule({ values = {}, conditions = {} } = {}) {
        return Schedule.update(values, {
            fields: [
                "child_id",
                "pickup_line_id"
            ],
            ...conditions
        })
            .then(res => res[0]);
    }
    static async addScheduleToPickupLine(schedule_id, pickup_line_id) {
        return ScheduleRepository.updateSchedule({
            values: {
                pickup_line_id: pickup_line_id
            },
            conditions: {
                where: {
                    id: schedule_id
                }
            }
        })
            .then(res => res[0]);
    }

    static async deleteSchedule(conditions = {}) {
        return Schedule.destroy({
            ...conditions
        });
    }
}

exports.ScheduleRepository = ScheduleRepository;