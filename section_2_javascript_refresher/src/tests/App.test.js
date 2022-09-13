import { render, screen } from '@testing-library/react';
import App from '../App';
import { sum } from '../services/sum';
import { multiplyByTwo, repeatString, exportX } from '../services/arrowFunctions';
import Person from '../services/person';
import Human from '../services/human';
import HumanTwo from '../services/human_two';
import PersonTwo from '../services/person_two';

describe('Test for Javascript review', () => {
  let expected, results;
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
    test('should not be able to change an imported variable', () => {
      expect(exportX).toBe(10); 
      expect(() => exportX = 11).toThrow(Error);
    });
  });
  describe('Test basic class syntax', () => {
    test('Human class should have both its own getters and setters', () => {
      expected = ['male', 'female'];
      const firstHuman = new Human();
      const secondHuman = new Human();
      secondHuman.gender = "female";
      results = [firstHuman.gender, secondHuman.gender];
      expect(results).toEqual(expected);
    }); 
    test('Person class inherits getters and setters from Human class', () => {
      expected = ['female', "Betty"]; 
      const person = new Person();
      person.gender = 'female';
      person.name = 'Betty';
      results = [person.gender, person.name];
      expect(results).toEqual(expected);
    });
  });
  describe('Test new class syntax', () => {
    test('should allow for getters and setters', () => {
    expected = ['male', 'female']; 
    const firstHuman = new HumanTwo();
    const secondHuman = new HumanTwo();
    secondHuman.gender = 'female';
    results = [firstHuman.gender, secondHuman.gender];
    expect(results).toEqual(expected);
    });
    test('should allow for inheritance in the new syntax', () => {
      expected = ['female', "Betty"]; 
      const person = new PersonTwo();
      person.gender = 'female';
      person.name = 'Betty';
      results = [person.gender, person.name];
      expect(results).toEqual(expected);
    });
  });
});
