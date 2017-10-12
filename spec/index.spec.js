'use strict';

const sample = require('../index.js');

describe('obfuscateText', () => {
    it('returns an empty string given an empty string', () => {
        expect(sample.ns.obfuscateText('')).toBe('');
    });
});
