'use strict';

const sample = require('../index.js');

describe('obfuscateText', () => {
    it('returns an empty string given an empty string', () => {
        expect(sample.ns.obfuscateText('')).toBe('');
    });
    it('returns "a" given a single word', () => {
        expect(sample.ns.obfuscateText('hello')).toBe('a');
    });
    it('returns two "a a" given two words', () => {
        expect(sample.ns.obfuscateText('hello world')).toBe('a a');
    });
});
