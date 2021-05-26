exports.tomorrow = function tomorrow() {
    const Days = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    };
    let today = new Date().getUTCDay();
    return Days[today === 6 ? 0 : today + 1];
};

exports.sortArray = function sortArray(array, order) {
    const len = array.length;
    if (order.length !== len) {   
        throw new Error("Order and original arrays have different lengths");
    }
    let sorted_array = [];
    order.forEach((index) => {
        if (index >= len) {
            throw new Error("Index out of array length");
        }
        sorted_array.push(array[index]);
    });
    return sorted_array;
};

exports.capitalize = function capitalize(str) {
    str = str.trim();
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};