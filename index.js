'use strict';

this.ns = this.ns || {};

this.ns.test = function () {
    return 'hello world';
};

if (typeof Window !== 'undefined' && this instanceof Window) {
    alert(this.ns.test());
}
