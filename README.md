
[![percent-value](http://i.imgur.com/aDuRzA9.png)](#)

# percent-value

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/percent-value.svg)](https://travis-ci.org/IonicaBizau/percent-value/) [![Version](https://img.shields.io/npm/v/percent-value.svg)](https://www.npmjs.com/package/percent-value) [![Downloads](https://img.shields.io/npm/dt/percent-value.svg)](https://www.npmjs.com/package/percent-value) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Percentage helper functions.

## :cloud: Installation

```sh
$ npm i --save percent-value
```


## :clipboard: Example



```js
const percent = require("percent-value");

console.log(percent(10).of(50));
// 20

console.log(percent(50).get(20));
// 10

console.log(percent(20).from(50));
// 10

console.log(percent(20).is(10));
// 50

console.log(percent("10%").from(420));
// 42
```

## :memo: Documentation


### `percentValue()`



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`fixed-or-percent`](https://github.com/IonicaBizau/fixed-or-percent#readme)—Get the percent or fixed value.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
