'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Returns the input value without changes
 * 
 * @param {Anything} value: Any value
 * 
 * @returns {Anything}: Returns input value
 */
 function identity(value){
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Determines the type of the input value and returns a string of its type
 * 
 * @param {Anything} value: Any value
 * 
 * @returns {String}: Returns a string representing the type of the input value
 */
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (typeof(value) === "string"){
        return "string";
    } else if (typeof(value) === "number"){
        return "number";
    } else if (typeof(value) === "boolean"){
        return "boolean";
    }else if (value === null){
        return "null";
    }else if (typeof(value)  === "function"){
        return "function";
    }else if (typeof(value)  === "undefined"){
        return "undefined";
    }else if ((value instanceof Date) === true){
        return "date";
    } else if (Array.isArray(value)){
        return "array";
    } else if (typeof(value) === 'object' && Array.isArray(value) === false && value !== null && value instanceof Date === false) {
        return "object";
    }
}
module.exports.typeOf = typeOf;



/**
 * first: Returns an array of the first values of the array up to or equal the number passed in
 * 
 * @param {Array} arr: Array to be iterated 
 * @param {Number} num: Number that determines how much of the array is iterated
 * 
 * @returns {Array}: A new array of values from the input array equal to or less than the 
 * input number
 */
 function first(arr, num){
    var ray = [];
    if (!Array.isArray(arr)){
        return [];
    } else if (typeof num !== "number"){
        return arr[0];
    } else if(num < 0) {
        return [];
    } else if(num <= arr.length && num >= 0) {
        for (let i = 0; i < num; i++){
            ray.push(arr[i]);
        }
    } else if(num > arr.length) {
        for (let i = 0; i < arr.length; i++){
            ray.push(arr[i]);
        }
    }
    return ray;
}
module.exports.first = first;



/**
 * last: Returns the an array of last values of the array up to or equal the number passed in
 * 
 * @param {Array} arr: Array to be iterated
 * @param {Number} num: Number that determines how much of the array is iterated
 * 
 * @returns {Array}: A new array of values from the input array starting from the last up to
 * or less than the input number
 */
function last(arr, num){
    var ray = [];
    if (!Array.isArray(arr)){
        return [];
    } else if (typeof num !== "number"){
        return arr[arr.length - 1];
    } else if(num < 0) {
        return [];
    } else if(num <= arr.length && num >= 0) {
        var vers = [];
        for (let i = num; i > 0; i--){
            vers.push(arr[i]);
        }
        for (let i = vers.length - 1; i >= 0; i--){
            ray.push(vers[i]);
        }
    } else if(num > arr.length) {
        for (let i = 0; i < arr.length; i++){
            ray.push(arr[i]);
        }
    }
    return ray;
}
module.exports.last = last;


/**
 * indexOf: Iterates through an input array to find the input value and return its index
 * 
 * @param {Array} arr: Array to be iterated 
 * @param {Anything} value: value being searched for
 * 
 * @returns {number}: Returns number equal to the index of the value in the array, but will
 * return -1 if the value is not found
 */
function indexOf(arr, value){
    var result = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === value){
            result.push(i);
        }
    }
    if (result.length > 0){
        return result[0];
    } else {
        return -1;
    }
}
module.exports.indexOf = indexOf;


/**
 * contains: Checks if the input value is inside the input array
 * 
 * @param {Array} array: Array to be searched through
 * @param {Anything} value: Value being searched for
 * 
 * @returns {Boolean}: Returns true if the value is inside the array and returns false if not
 */
 function contains(array, value){
    return (array.includes(value) ? true : false);
}
module.exports.contains = contains;


/**
 * 
 * @param {*} collection 
 * @param {*} callback 
 */
function each(collection, callback){
    if (Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            callback(collection[i], i, collection);
        }

    } else if (typeof(collection) === 'object' && Array.isArray(collection) === false && collection !== null && collection instanceof Date === false) {
        for(var key in collection){
            callback(collection[key], key, collection);
        }
    }
}



/**
 * unique: Iterates the input array and returns a new array of values from input without
 * duplicate values
 * 
 * @param {Array} array: Array to be iterated
 * 
 * @returns {Array}: Returns new array of values from the input array without duplicates
 */
function unique(array){
    var diff = [];
    for (let i = 0; i < array.length; i++){
        if (array.indexOf(array[i]) === i){
            diff.push(array[array.indexOf(array[i])]);
        }
    }
    return diff;
}
module.exports.unique = unique;


/**
 * filter: Iterates through input array, applies callback function to each element, pushes
 * those values that resolved to true into a new array and returns new array
 * 
 * @param {Array} array: Array to be iterated
 * @param {Function} callback: Function to be applied to each element of input array
 * 
 * @returns {Array}: Returns array of values resulting from the callback being applied
 * to every element of the input array and resolving to true
 */
function filter(array, callback){
    var filtered = [];
    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)){
            filtered.push(array[i]);
        }
    }
    return filtered;
}
module.exports.filter = filter;



/**
 * reject: Iterates through input array, applies callback function to each element, pushes
 * those values that resolved to false into a new array and returns new array
 * 
 * @param {Array} array: Array to be iterated
 * @param {Function} callback: Function to be applied to each element of input array
 * 
 * @returns {Array}: Returns array of values resulting from the callback being applied
 * to every element of the input array and resolving to false
 */
function reject(array, callback){
    var rejected = [];
    for (let i = 0; i < array.length; i++){
        if (!callback(array[i], i, array)){
            rejected.push(array[i]);
        }
    }
    return rejected;
}
module.exports.reject = reject;



/**
 * partition: Iterates through input array, applies callback function to each element, pushes
 * those values that resolved to truthy into a new array, pushes the values that resolved
 * to falsy into another, and returns both arrays
 * 
 * @param {Array} array: Array to be iterated
 * @param {Function} callback: Function to be applied to each index of input array
 * 
 * @returns {Array}: Returns array of values resulting from the callback being applied
 * to every element of the input array and resolving to truthy and another array for those
 * resolving to falsy
 */
 function partition(array, callback){
    var accepted = [];
    var rejected = [];
    var partitioned = [];
    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)){
            accepted.push(array[i]);
        } else {
            rejected.push(array[i]);
        }
    }
    partitioned.push(accepted);
    partitioned.push(rejected);
    return partitioned;
    
}
module.exports.partition = partition;


/**
 * map: Iterate through an input collection and apply callback to its values and return a
 * new array of those new values
 * 
 * @param {Array, Object} collection: Collection to be iterated through
 * @param {Function} callback: Function to be applied to elements of the input collection
 * 
 * @returns {Array}: Returns array with new values
 */
function map(collection, callback){
    let mapped = [];
    if (Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++){
            var result = callback(collection[i], i, collection);
            mapped.push(result);
        }

    } else {
        for (let key in collection){
            mapped.push(callback(collection[key], key, collection));
        }

    }
    return mapped;
}
module.exports.map = map;


/**
 * pluck: Iterates through the array of objects and returns an array of the values of the
 * input key
 * 
 * @param {Array} array: Array of objects for iteration
 * @param {Key} key: Key being searched for
 * 
 * @returns {Array}: Returns an array of the values of key for each object in the input array
 */
function pluck(array, key){
    return array.map(o => o[key]);
}
module.exports.pluck = pluck;


/**
 * every: Iterates through collection, applies callback to all elements of collection, then
 * if every application of callback is truthy, return true, but return false if not
 * 
 * @param {Array, Object} collection: Collection to be iterated through
 * @param {Function} callback: Function to ba applied to every element of collection
 * 
 * @returns {Boolean}: Returns true if all applications of the callback resolve to truthy,
 * returns false if at least one resolves to false. When no callback is given return true
 * if all values of collection resolve to truthy and return false if not.
 */
function every(collection, callback){
    
    if(callback === undefined){
        if (Array.isArray(collection)){
            for (var i = 0; i < collection.length; i++){
                if(!collection[i]){
                    return false;
                }
            }
            

        } else {
            for (let key in Object){
                if (!collection[key]){
                    return false;
                }
            }

        }
        return true;

    } else { 
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (!callback(collection[i], i, collection)){
                    return false;
                }
            }
        }
        return true;

    }
}
module.exports.every = every;


/**
 * some: Iterates through collection, applies callback to all elements of collection, then
 * if at least one application of callback is truthy, return true, but return false if not
 *  
 * @param {Array, Object} collection: Collection to be iterated through
 * @param {Function} callback: Function to ba applied to every element of collection
 * 
 * @returns {Boolean}: Returns true if at least one application of the callback resolves to
 * truthy, returns false if all resolve to false. When no callback is given return true
 * if at least one value of collection resolve to truthy and return false if not.
 */
function some(collection, callback){
    if(callback === undefined){
        if (Array.isArray(collection)){
            for (var i = 0; i < collection.length; i++){
                if(collection[i]){
                    return true;
                }
            }

        } else {
            for (let key in Object){
                if (collection[key]){
                    return true;
                }
            }

        }
    } else { 
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (callback(collection[i], i, collection)){
                    return true;
                } 
            } 
        } else {
            for (let key in collection){
                if (callback(collection[key], key, collection)){
                    return true;
                }
            }
        }
    }
    return false;

}
module.exports.some = some;


/**
 * reduce: Iterate through array and accumulate values into seed to be returned
 * 
 * @param {Array} array: Array to be iterated
 * @param {Function} callback: Function called during iteration
 * @param {Anything} seed: Variable used to accumulate values and later be returned
 * 
 * @returns {Anything}: Returns the value of the final call
 */
 function reduce(array, callback, seed) {
    if (seed === undefined){
        seed = array[0];
        for (let i = 1; i < array.length; i++){
            seed = callback(seed, array[i], i);
        }
    } else {
        for (let i = 0; i < array.length; i++){
            seed = callback(seed, array[i], i);
        }
    }
    return seed;

}
module.exports.reduce = reduce;


/**
 * extend: Assign properties of some number of objects upon one object with the values
 * of subsequent objects overwritting values of previous objects with the same key
 * 
 * @param {Object} base: Object upon which other object's properties will be copied onto 
 * 
 * @returns {object}: Returns an object
 */
function extend(base){
    var updated = {};
    var args = Array.from(arguments);
    for (var i = 1; i < args.length; i++){
        updated = Object.assign(base, args[i]);
    }
    return updated;

}
module.exports.extend = extend;


