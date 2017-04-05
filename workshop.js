function forEach(callback, theArray) {
    if(theArray.length > 0) {
        for (var i = 0; i < theArray.length; i++) {
            callback(theArray[i]);
        }
    }
}

function map(mappingFunction, theArray) {
    var newArray = [];
    forEach(function(element) {
        newArray.push(mappingFunction(element))
    }, theArray)
    return newArray;
}

function filter(predicate, theArray) {
    var newArray = [];
    forEach(function(element) {
        if(predicate(element)) {
            newArray.push(element)
        }
    }, theArray)
    return newArray;
}

function every(predicate, theArray) {
    
    for (var i = 0; i < theArray.length; i++) {
        if(predicate(theArray[i])) {
            return true;
            break;
        }
    }
    return true;
}

function some(predicate, theArray) {
    if(theArray.length > 0)
        for (var i = 0; i < theArray.length; i++) {
            if(predicate(theArray[i])) {
                return true;
                break;
            }
            
            else {
                return false
            }
    }
    
    else {
        return false
    }
}

function indexOf(item, theArray) {

}

function findIndex(predicate, theArray) {

}

function first(n, theArray) {

}

function last(n, theArray) {

}

function pluck(property, arrayOfObjects) {

}

function flatten(theArray) {

}

function negate1(predicate) {

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};