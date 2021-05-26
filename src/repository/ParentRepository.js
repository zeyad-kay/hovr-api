const { Child } = require("../db/models/Child");
const { Parent } = require("../db/models/Parent");
const { Pickup_Line } = require("../db/models/Pickup_Line");
const { ChildRepository } = require("./ChildRepository");
const { ScheduleRepository } = require("./ScheduleRepository");

class ParentRepository {

    static async createParent(parent) {
        return Parent.create(parent, {
            fields: [
                "first_name",
                "last_name",
                "email",
                "password",
                "mobile",
                "profile_picture"
            ]
        })
            .then(res => res.toJSON());
    }

    static async updateParent(values = {}, parent_id) {
        return Parent.update(values, {
            where: {
                id: parent_id
            },
            fields: [
                "first_name",
                "last_name",
                "email",
                "password",
                "mobile",
                "profile_picture"
            ],
            returning: false
        })
            .then(res => res[0]); // Returns num_rows
    }

    static async getParent({ attributes = [], conditions = {} } = {}) {
        return Parent.findOne({
            attributes: attributes.length ? attributes : null,
            ...conditions
        })
            .then(res => res ? res.toJSON() : null);
    }

    static async getAllParents({ attributes = [], conditions = {} } = {}) {
        return Parent.findAll({
            attributes: attributes.length ? attributes : null,
            ...conditions
        })
            .then(res => res.map((p) => p.toJSON()));
    }

    static async createChild(values = {}) {
        return ChildRepository.createChild(values);
    }

    static async deleteChild(child_id) {
        return ChildRepository.deleteChild({ conditions: { where: { id: child_id } } });
    }

    static async getChildren(parent_id) {
        return ChildRepository.getChildren({ conditions: { where: { parent_id: parent_id } } });
    }

    static async createSchedule(values = {}) {
        return ScheduleRepository.createSchedule(values);
    }

    static async updateChildInSchedule(schedule_id, child_id) {
        return ScheduleRepository.updateSchedule({
            values: {
                child_id: child_id
            },
            conditions: {
                where: {
                    id: schedule_id
                }
            }
        });
    }

    static async getAllSchedules(parent_id) {
        return ScheduleRepository.getAllSchedules({
            conditions: {
                include: [
                    {
                        model: Child,
                        where: {
                            parent_id: parent_id
                        }
                    },
                    {
                        model: Pickup_Line,
                        attributes: ["id", "driver_id"]
                    }
                ]
            }
        });
    }

    static async deleteSchedule(schedule_id) {
        return ScheduleRepository.deleteSchedule({ conditions: { where: { id: schedule_id } } });
    }
}

exports.ParentRepository = ParentRepository;