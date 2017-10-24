(function(global) {
    'use strict';

    global.nanowrimo = global.nanowrimo || {};

    global.nanowrimo.obfuscateText = function(text) {
        return text
            .replace(/\W/, ' ')
            .split(' ')
            .filter(function(x) { return x !== '' })
            .map(function() { return 'a' })
            .join(' ');
    };

    global.nanowrimo.countWords = function(text) {
        return text
            .replace(/\W/, ' ')
            .split(' ')
            .filter(function(x) { return x !== '' })
            .map(function() { return 'a' })
            .length;
    };
})(this);
