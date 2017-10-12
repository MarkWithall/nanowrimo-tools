'use strict';

const obfuscateText = require('../index.js').nanowrimo.obfuscateText;

describe('obfuscateText', () => {
    it('returns an empty string given an empty string', () => {
        expect(obfuscateText('')).toBe('');
    });
    it('returns "a" given a single word', () => {
        expect(obfuscateText('hello')).toBe('a');
    });
    it('returns "a" given a different single word', () => {
        expect(obfuscateText('world')).toBe('a');
    });
    it('returns "a a" given two words', () => {
        expect(obfuscateText('hello world')).toBe('a a');
    });
    it('returns "a a a" given three words', () => {
        expect(obfuscateText('foo bar baz')).toBe('a a a');
    });
    it('return "a a" given two words separated by two spaces', () => {
        expect(obfuscateText('hello  world')).toBe('a a');
    });
    it('returns "a a" given a single hyphenated word', () => {
        expect(obfuscateText('hello-world')).toBe('a a');
    });
});
