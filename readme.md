# fetch-task [![Build Status](https://travis-ci.org/hemanth/fetch-task.svg?branch=master)](https://travis-ci.org/hemanth/fetch-task)

> fetch API as a Task.


## Install

```
$ npm install --save fetch-task
```


## Usage

```js
const fetchTask = require('fetch-task');

fetchTask('https://jsonplaceholder.typicode.com/users')
.rejectedMap(console.error)
.fork(console.warn, resp => resp[0]);

/*
^ Would log something like:
> { id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: 
   { street: 'Kulas Light',
     suite: 'Apt. 556',
     city: 'Gwenborough',
     zipcode: '92998-3874',
     geo: { lat: '-37.3159', lng: '81.1496' } },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: 
   { name: 'Romaguera-Crona',
     catchPhrase: 'Multi-layered client-server neural-net',
     bs: 'harness real-time e-markets' } }
*/
```

## How different is it from normal fetch?

* It's a Task! 

* It takes care of indentify the `content-type` and invokes the required consume body algorithm. (`json`, `text`, `blob` or `buffer`).


## API

### fetchTask(url)

#### url

Type: `string`

URL that needs to be fetched.

## License

MIT © [Hemanth.HM](https://h3manth.com)
