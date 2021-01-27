const define_associations = () => {
    const Parent = require("./models/Parent");
    const Child = require("./models/Child");
    const Driver = require("./models/Driver");
    const Driver_Address = require("./models/Driver_Address");
    const Route = require("./models/Route");
    const Child_Schedule = require("./models/Child_Schedule");
    const Parent_Payment = require("./models/Parent_Payment");
    const Driver_Payment = require("./models/Driver_Payment");

    Parent.hasMany(Child, {
        foreignKey: 'parent_id',
        onDelete: 'CASCADE'
    });
    Child.belongsTo(Parent, {
        foreignKey: 'parent_id',
    });
    
    Parent.hasMany(Parent_Payment, {
        foreignKey: 'parent_id',
        onDelete: 'CASCADE'
    });
    Parent_Payment.belongsTo(Parent, {
        foreignKey: 'parent_id',
    });
    
    Driver.hasMany(Driver_Payment, {
        foreignKey: 'driver_id',
        onDelete: 'CASCADE'
    });
    Driver_Payment.belongsTo(Driver, {
        foreignKey: 'driver_id',
    });

    Driver.hasOne(Driver_Address, {
        foreignKey: 'driver_id',
        onDelete: 'CASCADE'
    });
    Driver_Address.belongsTo(Driver, {
        foreignKey: 'driver_id'
    });

    Driver.hasMany(Route, {
        foreignKey: 'driver_id'
    });
    Route.belongsTo(Driver, {
        foreignKey: 'driver_id',
    })

    Child.hasMany(Child_Schedule, {
        foreignKey: 'child_id',
        onDelete: 'CASCADE'
    });
    Child_Schedule.belongsTo(Child, {
        foreignKey: 'child_id',
        onDelete: 'CASCADE'
    });
    
    Route.hasMany(Child_Schedule, {
        foreignKey: 'route_id'
    });
    Child_Schedule.belongsTo(Route, {
        foreignKey: 'route_id'
    });
};

module.exports = define_associations;