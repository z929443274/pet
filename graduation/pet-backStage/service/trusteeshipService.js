const {
    getTrusteeshipByPage,
    removeTrusteeship,
    addTrusteeship,
    searchTrusteeship,
    updateTrusteeship,
    newTrusteeship,
    getTrusteeship,
    getTrusteeshipOne
} = require("../dao/TrusteeshipDao");

module.exports.getTrusteeshipByPage = async function (page) {
    return await getTrusteeshipByPage(page);
}

module.exports.removeTrusteeship = async function (_id) {
    return await removeTrusteeship(_id);
}

module.exports.addTrusteeship = async function (Trusteeship) {
    return await addTrusteeship(Trusteeship);
}

// module.exports.searchTrusteeship = async function (name) {
//     return await searchTrusteeship(name);
// }

module.exports.updateTrusteeship = async function (Trusteeship) {
    return await updateTrusteeship(Trusteeship);
}


// module.exports.newTrusteeship = async function () {
//     let data = await newTrusteeship();
//     return data;
// }

// module.exports.getTrusteeship = async function () {
//     let data = await getTrusteeship();
//     return data;
// }

// module.exports.getTrusteeshipOne = async function (_id) {
//     let data = await getTrusteeshipOne(_id);
//     return data;
// }