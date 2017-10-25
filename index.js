(function(global) {
    'use strict';

    global.nanowrimo = global.nanowrimo || {};

    global.nanowrimo.obfuscateText = function(text) {
        return splitIntoWords(text).join(' ');
    };

    global.nanowrimo.countWords = function(text) {
        return splitIntoWords(text).length;
    };

    function splitIntoWords(text) {
        return text
            .replace(/\W/, ' ')
            .split(' ')
            .filter(function(x) { return x !== '' })
            .map(function() { return 'a' });
    }
})(this);
