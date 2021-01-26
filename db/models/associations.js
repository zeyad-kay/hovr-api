const define_relations = () => {
    const Parent = require("./Parent/Parent");
    const Child = require("./Child/Child");
    const Child_Address = require("./Child/Child_Address");
    const Child_Schedule = require("./Child/Child_Schedule");
    const Driver = require("./Driver/Driver");
    const Driver_Address = require("./Driver/Driver_Address");
    const Route = require("./Route/Route");
    const Route_Schedule = require("./Route/Route_Schedule");

    Parent.hasMany(Child, {
        foreignKey: 'parent_id',
        onDelete: 'CASCADE'
    });
    Child.belongsTo(Parent, {
        foreignKey: 'parent_id',
    });
    
    Child.hasOne(Child_Address, {
        foreignKey: 'child_id',
        onDelete: 'CASCADE'
    });
    Child_Address.belongsTo(Child, {
        foreignKey: 'child_id'
    });
    
    Child.hasMany(Child_Schedule, {
        foreignKey: 'child_id',
        onDelete: 'CASCADE'
    });
    Child_Schedule.belongsTo(Child, {
        foreignKey: 'child_id',
        onDelete: 'CASCADE'
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
    
    Route.hasMany(Route_Schedule, {
        foreignKey: 'route_id',
        onDelete: 'CASCADE'
    });
    Route_Schedule.belongsTo(Route, {
        foreignKey: 'route_id'
    });
    
    Route.hasMany(Child, {
        foreignKey: 'route_id'
    });
    Child.belongsTo(Route, {
        foreignKey: 'route_id'
    });
};

module.exports = define_relations;