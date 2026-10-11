require('datejs');

const combineUsers = (...args) => {
    let combinedObject = {
        users: []
    };

    for (const array of args) {
        combinedObject.users.push(...array);
    }

    combinedObject.merge_date = new Date().toString('M/d/yyyy');

    return combinedObject;
};

module.exports = { combineUsers };