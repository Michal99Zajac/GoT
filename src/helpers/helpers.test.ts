import {  } from '@testing-library/react';
import { calcAlive } from './calc-alive';
import { parseLink } from './parse-link';


describe('helpers', () => {
  describe('calcAlive function', () => {
    test('if two inputs are empty func should return "Unknown"', () => {
      expect(calcAlive('', '')).toBe('Unknown');
    })

    test('if only born is empty func should return "No"', () => {
      expect(calcAlive('', '23 year')).toBe('No');
    })

    test('if only died is empty func should return "Yes"', () => {
      expect(calcAlive('63 year', '')).toBe('Yes');
    })

    test('if born and died are with dates func should return "No, died at ${X} years old"', () => {
      const born = 24;
      const died = 53;

      expect(calcAlive(`${born} year`, `${died} yaer`)).toBe(`No, died at ${died - born} years old`)
    })

    test('if born or died is without date func should return "No, died at Unknown years old"', () => {
      const born = 24;
      const died = 'new';

      expect(calcAlive(`${born} year`, `${died} yaer`)).toBe(`No, died at Unknown years old`)
    })
  })

  describe('parseLink function', () => {
    test('if linkHeader is empty func should return object with only undefined values', () => {
      expect(parseLink('')).toMatchObject({
        next: undefined,
        previous: undefined,
        last: undefined,
        first: undefined
      })
    })

    test('if linkHeader hasnt a all rel property object should be partialy filled', () => {
      const raw = String.raw`
        <https://www.anapioficeandfire.com/api/characters?gender=Male&page=3&pageSize=50>; rel="next",
        <https://www.anapioficeandfire.com/api/characters?gender=Male&page=1&pageSize=50>; rel="prev",
        <https://www.anapioficeandfire.com/api/characters?gender=Male&page=1&pageSize=50>; rel="first"`

      expect(parseLink(raw)).toMatchObject({
        next: '3',
        previous: '1',
        last: undefined,
        first: '1'
      })
    })
  })
})
