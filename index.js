function receivesAFunction(callback) {
    return callback();
} 

receivesAFunction(function(callback) {return 'Hello!'});

function returnsANamedFunction(fn) {
    return function fn() {
        return 'function'
    };
}
returnsANamedFunction(fn);

function returnsAnAnonymousFunction(fn) {
    return function() {
        return 'ananymous function';
    }
}
returnsAnAnonymousFunction(fn);