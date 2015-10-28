import {create, createMany} from './factory';
import generators from './generators';
import {deepMap} from './utils.js';

/**
 * Deep clone the factory descriptor, but treating generator objects as primitives
 */
function clone(obj) {
    return deepMap(obj);
}

export {create, createMany, generators, clone};
