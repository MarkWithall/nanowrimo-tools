'use strict';

this.ns = this.ns || {};

this.ns.obfuscateText = function (text) {
    if (text === '') {
        return '';
    }
    if (text.split(' ').length === 1) {
        return 'a';
    }
    return 'a a';
};

if (typeof Window !== 'undefined' && this instanceof Window) {
    alert(this.ns.test());
}
