const { Child } = require("../db/models/Child");

class ChildRepository {

    static async createChild(values = {}) {
        return Child.create(values, {
            fields: [
                "first_name",
                "age",
                "parent_id"
            ]
        })
            .then(res => res.toJSON());
    }

    static async updateChild(values = {}, child_id) {
        return Child.update(values, {
            where: {
                id: child_id
            },
            fields: ["first_name", "age"],
            returning: false
        })
            .then(res => res[0]); // Returns num_rows
    }

    static async getChild({ attributes = [], conditions = {} } = {}) {
        return Child.findOne({
            attributes: attributes.length ? attributes : null,
            ...conditions
        })
            .then(res => res ? res.toJSON() : null);
    }

    static async getChildren({ attributes = [], conditions = {} } = {}) {
        return Child.findAll({
            attributes: attributes.length ? attributes : null,
            ...conditions
        })
            .then(res => res.map((p) => p.toJSON()));
    }

    static async deleteChild({ conditions = {} } = {}) {
        return Child.destroy({
            ...conditions
        });
    }
}

exports.ChildRepository = ChildRepository;