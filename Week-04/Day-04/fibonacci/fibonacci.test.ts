'use strict';
import{test} from 'tape';
import {fibonacci} from './fibonacci';

test ('give us a number', t => {
    const actual = fibonacci(9);
    const expected = 21;

    t.equal(actual,expected);
    t.end()

});