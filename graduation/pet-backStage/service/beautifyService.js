const {
    getBeautifyByPage,
    removeBeautify,
    addBeautify,
    searchBeautify,
    updateBeautify,
    newBeautify,
    getBeautify,
    getBeautifyOne
} = require("../dao/beautifyDao");

module.exports.getBeautifyByPage = async function (page) {
    console.log(await getBeautifyByPage(page));
    return await getBeautifyByPage(page);
}

module.exports.removeBeautify = async function (_id) {
    return await removeBeautify(_id);
}

module.exports.addBeautify = async function (Beautify) {
    return await addBeautify(Beautify);

}

// module.exports.searchBeautify = async function (name) {
//     return await searchBeautify(name);
// }

module.exports.updateBeautify = async function (Beautify) {
    return await updateBeautify(Beautify);
}


// module.exports.newBeautify = async function () {
//     let data = await newBeautify();
//     return data;
// }

// module.exports.getBeautify = async function () {
//     let data = await getBeautify();
//     return data;
// }

// module.exports.getBeautifyOne = async function (_id) {
//     let data = await getBeautifyOne(_id);
//     return data;
// }