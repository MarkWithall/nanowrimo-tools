'use strict';

const sample = require('../index.js');

describe('obfuscateText', () => {
    it('returns an empty string given an empty string', () => {
        expect(sample.ns.obfuscateText('')).toBe('');
    });
    it('returns a single a for a single word', () => {
        expect(sample.ns.obfuscateText('hello')).toBe('a');
    });
});
