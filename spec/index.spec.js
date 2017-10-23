'use strict';

const obfuscateText = require('../index.js').nanowrimo.obfuscateText;
const countWords = require('../index.js').nanowrimo.countWords;

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
    it('returns "a a" given words separated by crlf', () => {
        expect(obfuscateText('hello\r\nworld')).toBe('a a');
    });
    it('returns "a a" given words separated by tab', () => {
        expect(obfuscateText('hello\tworld')).toBe('a a');
    });
});

describe('countWords', () => {
    it('returns 0 given an empty string', () => {
        expect(countWords('')).toBe(0);
    });
    it('returns 1 given a single word', () => {
        expect(countWords('hello')).toBe(1);
    });
    it('returns 1 given a different single word', () => {
        expect(countWords('world')).toBe(1);
    });
    it('returns 2 given two words', () => {
        expect(countWords('hello world')).toBe(2);
    });
    it('returns 3 given three words', () => {
        expect(countWords('foo bar baz')).toBe(3);
    });
    it('return 2 given two words separated by two spaces', () => {
        expect(countWords('hello  world')).toBe(2);
    });
    it('returns 2 given a single hyphenated word', () => {
        expect(countWords('hello-world')).toBe(2);
    });
    it('returns 2 given words separated by crlf', () => {
        expect(countWords('hello\r\nworld')).toBe(2);
    });
    it('returns 2 given words separated by tab', () => {
        expect(countWords('hello\tworld')).toBe(2);
    });
});
