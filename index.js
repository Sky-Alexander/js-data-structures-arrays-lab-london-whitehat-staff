
// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(newDriver) {
    drivers.push(newDriver);
    return drivers;
}

function destructivelyPrependDriver(newDriver) {
    drivers.unshift(newDriver);
    return drivers;
}

function destructivelyRemoveLastDriver(newDriver) {
    drivers.pop(newDriver);
    return drivers;
}

function destructivelyRemoveFirstDriver(newDriver) {
    drivers.shift(newDriver);
    return drivers;
}

function appendDriver(newDriver) {
    const newList = [...drivers, newDriver];
    return newList;
}

function prependDriver(newDriver) {
    const newList = [newDriver, ...drivers];
    return newList;
}

function removeLastDriver() {
    newList = drivers.slice()
    newList.splice(2)
    return newList
}

function removeFirstDriver() {
    newList = drivers.slice()
    newList.shift()
    return newList
}