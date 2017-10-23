'use strict';

this.nanowrimo = this.nanowrimo || {};

this.nanowrimo.obfuscateText = function (text) {
    return text
        .replace(/[-\t\r\n]/, ' ')
        .split(' ')
        .filter(function(x) { return x !== '' })
        .map(function() { return 'a' })
        .join(' ');
};
