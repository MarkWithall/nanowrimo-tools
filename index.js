'use strict';

this.ns = this.ns || {};

this.ns.obfuscateText = function (text) {
    return '';
};

if (typeof Window !== 'undefined' && this instanceof Window) {
    alert(this.ns.test());
}
