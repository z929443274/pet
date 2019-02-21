const{addStorefront,getStorefrontData,updateStorefront,removeStorefront} = require("../dao/storefrontDao")



module.exports.addStorefront = async function (newStorefront){
    return await addStorefront(newStorefront)
}

module.exports.getStorefrontData = async function (storefrontData){
    return await getStorefrontData(storefrontData)
}

module.exports.updateStorefront = async function (newStorefront){
    return await updateStorefront(newStorefront)
}

module.exports.removeStorefront = async function (id){
    return await removeStorefront(id)
}