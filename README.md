# JavaScriptmas2022
Programming challenges from scrimba.com **JavaScriptmas 2022**.

## The Challenges

### Day 1
#### Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

> ***Example input:*** "Hello"
>
> ***Example output:*** "HELLO!"

> ***Example input:*** "I'm almost out of coffee"
>
> ***Example output:*** "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()

### Day 2
## Totally Private Data Farm 
Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. 
Each result in your array should look like this when you're done: 

```js
{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}
```

