'use strict';

this.ns = this.ns || {};

this.ns.obfuscateText = function (text) {
    if (text === '') {
        return '';
    }
    return text.split(' ').map(function() { return 'a' }).join(' ');
};

if (typeof Window !== 'undefined' && this instanceof Window) {
    alert(this.ns.test());
}
