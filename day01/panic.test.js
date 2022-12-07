import { panic } from "./panic.js";
import { it, expect } from 'vitest';

it("Should return word in all uppercase with !",()=>{
    const msg = 'hello';
    const result = panic(msg);
    const expectedResult = `${msg.toUpperCase()}!`;
    expect(result).toBe(expectedResult);
});

it("Should return a sentence with emoji between words and !",() => {
   const msg = "I'm almost out of coffee";
   const result = panic(msg)
   const expectedResult = "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!";
   expect(result).toBe(expectedResult);
});

it('should return undefined if no arguments are provided', ()=>{
    const result = panic();
    expect(result).toBeUndefined();
});

it('Should return undefined if empty string is provided',()=>{
    const msg='';
    const result = panic(msg);
    expect(result).toBeUndefined();
});

it('Should return undefined if a number is provided',()=>{
    const msg=0;
    const result = panic(msg);
    expect(result).toBeUndefined();
});

it('Should return undefined if an object is provided',()=>{
    const msg={};
    const result = panic(msg);
    expect(result).toBeUndefined();
});

it('Should return undefined if an array is provided',()=>{
    const msg=[];
    const result = panic(msg);
    expect(result).toBeUndefined();
});

it('Should return undefined if boolean is provided',()=>{
    const msg=true;
    const result = panic(msg);
    expect(result).toBeUndefined();
});


