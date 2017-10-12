'use strict';

this.nanowrimo = this.nanowrimo || {};

this.nanowrimo.obfuscateText = function (text) {
    return text
        .replace('-', ' ')
        .split(' ')
        .filter(function(x) { return x !== '' })
        .map(function() { return 'a' })
        .join(' ');
};
