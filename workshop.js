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
        if(!predicate(theArray[i])) {
            return false;
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
    if(theArray.length > 0) {
        for(var i = 0; i< theArray.length; i++) {
            if(theArray[i] === item) {
                return i;
                break;
            }
            
            else if(i + 1 == theArray.length && theArray[i] !== item) {
                return -1;
            }
        }
    }
    
    else {
        return -1;
    }
}

function findIndex(predicate, theArray) {
    if(theArray.length > 0) {
        for(var i = 0; i< theArray.length; i++) {
            if(predicate(theArray[i])) {
                return i;
                break;
            }
            
            else if(i + 1 == theArray.length && !predicate(theArray[i])) {
                return -1;
            }
        }
    }
    
    else {
        return -1;
    }
}

function first(n, theArray) {
    if(Array.isArray(n)) {
        return n[0]
    }
    else if(n > 0 && n < theArray.length) {
        var newArray = [];
        for(var i = 0; i < n; i++) {
            newArray.push(theArray[i]);
        }
        return newArray;
    }
    
    else if(n < 0) {
        var emptyArray = [];
        return emptyArray;
    }
    
    else if(n > theArray.length) {
        return theArray;
    }
    
    else {
        return theArray[0];
    }
    
}

function last(n, theArray) {
    if(Array.isArray(n)) {
        return n[n.length - 1]
    }
    else if(n > 0 && n < theArray.length) {
        var newArray = [];
        for(var i = theArray.length - n; i < theArray.length; i++) {
            newArray.push(theArray[i]);
        }
        return newArray;
    }
    
    else if(n < 0) {
        var emptyArray = [];
        return emptyArray;
    }
    
    else if(n > theArray.length) {
        return theArray;
    }
    
    else {
        return theArray[theArray.length - 1];
    }
}

function pluck(property, arrayOfObjects) {
    return map(function(element){
        return element[property];
    }, arrayOfObjects);
}

function flatten(theArray) {
    var flat = []
    map(function(element){
        if(Array.isArray(element)) {
            flat = flat.concat(flatten(element));
        }
        
        else {
            flat.push(element);
        }
        
    }, theArray);
    
    return flat;
}

function negate1(predicate) {
    return function(element) {
        return !predicate(element);
    }
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