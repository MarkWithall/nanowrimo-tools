'use strict';

const sample = require('../index.js');

describe('obfuscateText', () => {
    it('returns an empty string given an empty string', () => {
        expect(sample.ns.obfuscateText('')).toBe('');
    });
    it('returns "a" given a single word', () => {
        expect(sample.ns.obfuscateText('hello')).toBe('a');
    });
    it('returns "a" given a different single word', () => {
        expect(sample.ns.obfuscateText('world')).toBe('a');
    });
    it('returns two "a a" given two words', () => {
        expect(sample.ns.obfuscateText('hello world')).toBe('a a');
    });
    it('returns "a a a" given three words', () => {
        expect(sample.ns.obfuscateText('foo bar baz')).toBe('a a a');
    });
});
