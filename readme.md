# Hash Table Visualization

This small project has two objectives:

* First, it was to familiarize myself with `riot.js`, the framework used at my new workplace. 
* The second objective was to visualize the inside works of a hashtable as I figured it could help out people to realize how this is working.

## Summary 😅

This small project is meant to show the principle of a hash table.
According to the hash function and to the hash table size, the number of collisions will change and this project is a way to see that.

## How-to use

This project is still work-in-progress, but here is the gist:

* As this is a pedagocial project, you just need to enter the keys of the (key/value) pair. The value will be determined by random.
* First, you need to choose the "hash" function. A hash function is a function which changes a string (the key) into a integer (the index/hash number), which will indicate where the (value/pair) will be stored in the array.
* For now there are only two basic functions: 
	* Very basic one, the string length
	* A bit more advanced, the sum of the character codes of each character inside the string

The aim of the hash function being to reference an index inside the array, both hash functions end with taking the modulo by the array length, to make sure that we point at some place inside the storage array.

## Links 📚

- Link to the `Riot.js` framework: <https://riot.js.org/documentation/>
- Project bootstraped with the `webpack riot.js` template.
- The [Wikipedia hash table entry](https://en.wikipedia.org/wiki/Hash_table).

## Release 🛫

This project is available to see on the corresponding github pages, i.e. <https://alixfachin.github.io/hash-table-riot/>