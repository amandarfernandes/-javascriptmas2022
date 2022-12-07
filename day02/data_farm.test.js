import { transformData } from "./data_farm.js";
import userData from './data';
import { it, expect } from 'vitest';

it("Should return an array of objects",()=>{
    const result = transformData(userData);
    expect(result.constructor).toBe(Array)
});

it("Should return an array of objects with fullname and birthday", ()=>{
    const result = transformData(userData)[0];

    expect(result.hasOwnProperty("fullName")).toBeTruthy();
    expect(result.hasOwnProperty("birthday")).toBeTruthy();
});

it('should throw an error if no arguments are provided',()=>{
    const func = () =>{
        transformData();
    }

    expect(func).toThrow();
});

it('should throw an error if an object is provided',()=>{
    const func = () =>{
       transformData({});
    }

    expect(func).toThrow();
});
