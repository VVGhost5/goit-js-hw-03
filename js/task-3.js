'use strict'

const findBestEmployee = function (employees) {
    let bestEmployee;
    let currentEmployee = 0;

    const employeeArray = Object.keys(employees);

    for (const key of employeeArray) {
        if (employees[key] > currentEmployee) {
            bestEmployee = key;
            currentEmployee = employees[key];
        };
    }
    return bestEmployee;
};

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
);

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
);

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
);