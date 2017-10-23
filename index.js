'use strict';

this.nanowrimo = this.nanowrimo || {};

this.nanowrimo.obfuscateText = function (text) {
    return text
        .replace('-', ' ')
        .replace('\r', ' ')
        .replace('\n', ' ')
        .split(' ')
        .filter(function(x) { return x !== '' })
        .map(function() { return 'a' })
        .join(' ');
};
