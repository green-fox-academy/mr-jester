import { letterCounter } from './counter';
import { test } from 'tape';
'use strict';
test('checking the counter', t => {
    let conter = letterCounter('b');
    t.deepEqual(conter, { b: 1 });
    t.end();
})
'use strict';
test('checking the counter', t => {
    let conter = letterCounter('byob');
    t.deepEqual(conter, { b: 2, y: 1, o: 1 });
    t.end();
})