let FullName = require("../country/state/city/index");

let firstNames = require("../utilities/utils/index");

let getPeopleInCity = (FullName) => {
  return firstNames(FullName);
};

module.exports = getPeopleInCity;
