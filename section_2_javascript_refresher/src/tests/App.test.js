import { render, screen } from '@testing-library/react';
import App from '../App';
import { sum } from '../services/sum';
import { multiplyByTwo, repeatString } from '../services/arrowFunctions';

describe('Test for Javascript review', () => {
  describe('Test Something simple', () => {
    test('sum of 4 and 5 is 9', () => {
      expect(sum(4, 5)).toBe(9);
    })
  });
  describe('Test let and const', () => {
    test('let should be block scoped', () => {
      let x = 1;
      if (x === 1) {
        let x = 2;
        expect(x).toBe(2);
      } 
      expect(x).toBe(1);
    }); 
    test('const value should remain fixed', () => {
      const x = 3; 
      expect(x).toBe(3);
      expect(() => x = 4).toThrow(TypeError);
    });
  });
  describe('Test arrow functions', () => {
    test('should multiply by two', () => {
      expect(multiplyByTwo(4)).toBe(8); 
    }); 
    test('should repeat a string n times', () => {
      expect(repeatString("foo", 3)).toBe("foofoofoo"); 
    });
  });
});

