import test from 'ava';
import fetchTask from './';

test('fetch must work like a Task', t => {
	fetchTask('https://jsonplaceholder.typicode.com/users')
	.rejectedMap(console.error)
	.fork(console.warn, resp => t.pass());
});
