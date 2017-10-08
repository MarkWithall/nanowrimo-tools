'use strict';

const sample = require('../index.js');

describe('index', () => {
    it('test', () => {
        expect(sample.ns.test()).toBe('hello world');
    });
});
