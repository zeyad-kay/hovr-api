const define_associations = () => {
    const { Parent } = require("./models/Parent");
    const { Child } = require("./models/Child");
    const { Driver } = require("./models/Driver");
    // const { Driver_Address } = require("./models/Driver_Address");
    const { Car } = require("./models/Car");
    const { Pickup_Line } = require("./models/Pickup_Line");
    const { Trip } = require("./models/Trip");
    const { Schedule_Trip } = require("./models/Schedule_Trip");
    const { Cancelled_Trip } = require("./models/Cancelled_Trip");
    const { Upcoming_Trip } = require("./models/Upcoming_Trip");
    const { Schedule } = require("./models/Schedule");
    const { Parent_Payment } = require("./models/Parent_Payment");
    const { Driver_Payment } = require("./models/Driver_Payment");

    Parent.hasMany(Child, {
        foreignKey: "parent_id",
    });
    Child.belongsTo(Parent, {
        foreignKey: "parent_id",
    });

    Parent.hasMany(Parent_Payment, {
        foreignKey: "parent_id",
    });
    Parent_Payment.belongsTo(Parent, {
        foreignKey: "parent_id",
    });

    Driver.hasMany(Driver_Payment, {
        foreignKey: "driver_id",
    });
    Driver_Payment.belongsTo(Driver, {
        foreignKey: "driver_id",
    });

    // Driver.hasOne(Driver_Address, {
    //     foreignKey: "driver_id",
    // });
    // Driver_Address.belongsTo(Driver, {
    //     foreignKey: "driver_id"
    // });

    Driver.hasOne(Car, {
        foreignKey: "driver_id",
    });
    Car.belongsTo(Driver, {
        foreignKey: "driver_id"
    });

    Driver.hasMany(Trip, {
        foreignKey: "driver_id"
    });
    Trip.belongsTo(Driver, {
        foreignKey: "driver_id",
    });

    Driver.hasMany(Pickup_Line, {
        foreignKey: "driver_id"
    });
    Pickup_Line.belongsTo(Driver, {
        foreignKey: "driver_id",
    });

    Driver.hasMany(Upcoming_Trip, {
        foreignKey: "driver_id"
    });
    Upcoming_Trip.belongsTo(Driver, {
        foreignKey: "driver_id",
    });

    // Driver.hasMany(Cancelled_Trip, {
    //     foreignKey: "driver_id"
    // });
    // Cancelled_Trip.belongsTo(Driver, {
    //     foreignKey: "driver_id",
    // });


    Child.hasMany(Schedule, {
        foreignKey: "child_id",
        onDelete: "CASCADE"
    });
    Schedule.belongsTo(Child, {
        foreignKey: "child_id",
    });

    Pickup_Line.hasMany(Schedule, {
        foreignKey: "pickup_line_id"
    });
    Schedule.belongsTo(Pickup_Line, {
        foreignKey: "pickup_line_id"
    });

    Pickup_Line.hasOne(Upcoming_Trip, {
        foreignKey: "pickup_line_id"
    });
    Upcoming_Trip.belongsTo(Pickup_Line, {
        foreignKey: "pickup_line_id"
    });

    Pickup_Line.hasMany(Cancelled_Trip, {
        foreignKey: "pickup_line_id"
    });
    Cancelled_Trip.belongsTo(Pickup_Line, {
        foreignKey: "pickup_line_id"
    });

    // Trip.hasMany(Schedule_Trip, {
    //     foreignKey: "trip_id"
    // });
    // Schedule_Trip.belongsTo(Trip, {
    //     foreignKey: "trip_id"
    // });
    // Schedule.hasMany(Schedule_Trip, {
    //     foreignKey: "schedule_id"
    // });
    // Schedule_Trip.belongsTo(Schedule, {
    //     foreignKey: "schedule_id"
    // });

    Schedule.hasOne(Upcoming_Trip, {
        foreignKey: "schedule_id"
    });
    Upcoming_Trip.belongsTo(Schedule, {
        foreignKey: "schedule_id"
    });

    Trip.belongsToMany(Schedule, {
        through: Schedule_Trip
    });
    Schedule.belongsToMany(Trip, {
        through: Schedule_Trip
    });
};

module.exports = define_associations;