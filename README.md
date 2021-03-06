# lob-node

[downloads-image]: http://img.shields.io/npm/dm/lob.svg
[npm-url]: https://npmjs.org/package/lob
[npm-image]: https://badge.fury.io/js/lob.svg
[travis-url]: https://travis-ci.org/lob/lob-node
[travis-image]: https://travis-ci.org/lob/lob-node.svg?branch=master
[depstat-url]: https://david-dm.org/Lob/Lob-node
[depstat-image]: https://david-dm.org/Lob/Lob-node.svg

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]  [![Build Status](https://travis-ci.org/lob/lob-node.svg?branch=master)](https://travis-ci.org/lob/lob-node) [![Dependency Status](https://gemnasium.com/lob/lob-node.svg)](https://gemnasium.com/lob/lob-node) [![Coverage Status](https://coveralls.io/repos/lob/lob-node/badge.svg?branch=master)](https://coveralls.io/r/lob/lob-node?branch=master)

Node.js wrapper for the [Lob.com](https://lob.com) API. See full Lob.com documentation [here](https://lob.com/docs/node).

## Table of Contents

- [Getting Started](#getting-started)
  - [Registration](#registration)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Options](#options)
- [Examples](#examples)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Testing](#testing)

## Getting Started

Here's a general overview of the Lob services available, click through to read more.

- [Simple Postcard Service](https://lob.com/services/postcards)
- [Simple Letter Service](https://lob.com/services/letters)
- [Simple Check Service](https://lob.com/services/checks)
- [Simple Print Service](https://lob.com/services/sps)
- [Simple Area Mail](https://lob.com/services/sam)
- [Address Verification](https://lob.com/verification/address)

### Registration

First, you will need to first create an account at [Lob.com](https://dashboard.lob.com/#/register) and obtain your Test and Live API Keys.

Once you have created an account, you can access your API Keys from the [Settings Panel](https://dashboard.lob.com/#/settings).

### Installation

lob-node can be installed through the npm:

```
$ npm install lob
```

To build and install from the latest source:

```
$ git clone git@github.com:lob/lob-node.git
$ npm install
```

### Usage
```javascript
var Lob = require('lob')('YOUR API KEY');

// change api version
var Lob = require('lob')('YOUR API KEY');

// change internal defaults (e.g. host)
var options = {/* see options below */};
var Lob = require('lob')('YOUR API KEY', options);

// you can also just pass options
var options = { apiKey: 'foo', host: 'bar' };
var Lob = require('lob')(options);

// callback pattern
Lob.settings.list({ type: 1 }, function (err, body) {
  if (err) return callback(err);
  return callback(null, body.data);
});
```

Additionally, every resource method returns a promise, so you don't have to use the regular callback. E.g.

```javascript
var Lob = require('lob')('YOUR API KEY');

Lob.settings.list({ type: 1 })
.then(function (res) {
  console.log(res.data);
})
.catch(function (e) {
  console.log(e);
});
```

### Options
The Lob constructor accepts an `options` object which may contain one or more of the following options:

* `apiVersion` - Optionally set the version of the Lob API to use. Defaults to latest.
* `host` - Override the default host API calls are issued to.
* `userAgent` - Override the default userAgent.
* `headers` - Edit the headers sent in all API calls.

## Examples

We've provided various examples for you to try out [here](https://github.com/lob/lob-node/tree/master/examples).

There are simple scripts to demonstrate how to create all the core Lob objects (checks, letters, postcards. etc.) as well as more complex examples that utilize other libraries and external files:

- [Creating Dynamic Postcards with HTML and Data From a CSV](https://github.com/lob/lob-node/tree/master/examples/csv_postcards)

## API Documentation

- [Introduction](https://lob.com/docs/node#introduction)
- [Versioning](https://lob.com/docs/node#version)
- [Image Prepping](https://lob.com/docs/node#prepping)
- **Addresses**
  - [Address Book](https://lob.com/docs/node#addresses)
    - [Create an Address](https://lob.com/docs/node#addresses_create)
    - [Retrieve an Address](https://lob.com/docs/node#addresses_retrieve)
    - [Delete an Address](https://lob.com/docs/node#addresses_delete)
    - [List all Addresses](https://lob.com/docs/node#addresses_list)
  - [Simple Address Verification](https://lob.com/docs/node#verify)
    - [Verify an Address](https://lob.com/docs/node#verify_create)
- **Simple Postcard Service**
  - [Postcards](https://lob.com/docs/node#postcards)
    - [Create a Postcard](https://lob.com/docs/node#postcards_create)
    - [Retrieve a Postcard](https://lob.com/docs/node#postcards_retrieve)
    - [List all Postcards](https://lob.com/docs/node#postcards_list)
- **Simple Letter Service**
  - [Letters](https://lob.com/docs/node#letters)
    - [Create a Letter](https://lob.com/docs/node#letters_create)
    - [Retrieve a Letter](https://lob.com/docs/node#letters_retrieve)
    - [List all Letters](https://lob.com/docs/node#letters_list)
- **Simple Check Service**
  - [Checks](https://lob.com/docs/node#checks)
    - [Create a Check](https://lob.com/docs/node#checks_create)
    - [Retrieve a Check](https://lob.com/docs/node#checks_retrieve)
    - [List all Checks](https://lob.com/docs/node#checks_list)
  - [Bank Accounts](https://lob.com/docs/node#bank-accounts)
    - [Create a Bank Account](https://lob.com/docs/node#bankaccounts_create)
    - [Retrieve a Bank Account](https://lob.com/docs/node#bankaccounts_retrieve)
    - [List all Bank Accounts](https://lob.com/docs/node#bankaccounts_list)
    - [Verify a Bank Account](https://lob.com/docs/node#bankaccounts_verify)
    - [Delete a Bank Account](https://lob.com/docs/node#bankaccounts_delete)
- **Simple Print Service**
  - [Jobs](https://lob.com/docs/node#jobs)
    - [Create a Job](https://lob.com/docs/node#jobs_create)
    - [Retrieve a Job](https://lob.com/docs/node#jobs_retrieve)
    - [List all Jobs](https://lob.com/docs/node#jobs_list)
  - [Objects](https://lob.com/docs/node#objects)
    - [Create an Object](https://lob.com/docs/node#objects_create)
    - [Retrieve an Object](https://lob.com/docs/node#objects_retrieve)
    - [Delete an Object](https://lob.com/docs/node#objects_delete)
    - [List all Objects](https://lob.com/docs/node#objects_list)
  - [Settings](https://lob.com/docs/node#settings)
    - [Retrieve a Setting](https://lob.com/docs/node#settings_retrieve)
    - [List all Settings](https://lob.com/docs/node#settings_list)
- **Simple Area Mail**
  - [Areas](https://lob.com/docs/node#areas)
    - [Create an Area Mailing](https://lob.com/docs/node#areas_create)
    - [Retrieve an Area Mailing](https://lob.com/docs/node#areas_retrieve)
    - [List all Area Mailings](https://lob.com/docs/node#areas_list)
  - [Routes](https://lob.com/docs/node#routes)
    - [Retrieve a Zip Code](https://lob.com/docs/node#routes_retrieve)
    - [List all Zip Codes](https://lob.com/docs/node#routes_list)
- **Resources**
  - [Countries](https://lob.com/docs/node#countries)
    - [List all Countries](https://lob.com/docs/node#countries_list)
  - [States](https://lob.com/docs/node#states)
    - [List all States](https://lob.com/docs/node#states_list)
- **Appendix**
  - [SPS Templates](https://lob.com/docs/node#sps-templates)
  - [Custom Fonts with HTML](https://lob.com/docs/node#html-fonts)
  - [Postcard HTML Examples](https://lob.com/docs/node#postcard-examples)
  - [Area HTML Examples](https://lob.com/docs/node#area-examples)
  - [Letter HTML Examples](https://lob.com/docs/node#letter-examples)

## Contributing

To contribute, please see the [CONTRIBUTING.md](https://github.com/lob/lob-node/blob/master/CONTRIBUTING.md) file.

## Testing

To run the tests with coverage:

    gulp testCI

To run the tests without coverage:

    gulp test

=======================

Copyright &copy; 2013 Lob.com

Released under the MIT License, which can be found in the repository in `LICENSE.txt`.
