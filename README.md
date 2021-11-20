# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @onesmartcookie/lotide`

**Require it:**

`const _ = require('@onesmartcookie/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following utility functions are currently implemented:

* `countOnly(...)` : Given an array of items and the items we're interested in counting return an object that reports the count of each item

* `eqArrays(...)`: Returns true if two arrays are equal
* `eqObjects(...)`: Returns true if two objects are equal
* `findKey(...)`: Returns the first key found when a callback returns a truthy value otherwise undefined is returned
* `findKeyByValue(...)`: Returns the firsy key that contains the value or undefined
* `head(...)`: Retrieves the head of an array
* `isEmpty(...)`: Helper to check if an object isEmpty
* `map(...)`: Returns a map of value that performs the callback on each elements
* `middle(...)`: Returns the middle element of an array
* `takeUntil(...)`: Return a slice of an array until callback returns truthy
* `without(...)`: Return an array without the items we want removed