'use strict';

this.ns = this.ns || {};

this.ns.obfuscateText = function (text) {
    return text
        .replace('-', ' ')
        .split(' ')
        .filter(function(x) { return x !== '' })
        .map(function() { return 'a' })
        .join(' ');
};

if (typeof Window !== 'undefined' && this instanceof Window) {
    alert(this.ns.test());
}
