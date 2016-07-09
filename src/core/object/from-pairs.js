//---------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// See LICENCE for licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//---------------------------------------------------------------------

const define = Object.defineProperty;


/*~
 * Constructs an object from an array of (key, value) pairs.
 *
 *  The resulting object is a plain JavaScript object, inheriting from
 * `Object.prototype`.
 *
 * The pairs are added to the object with `Object.defineProperty`, so no setters
 * defined in `Object.prototype` will be triggered during the process. All
 * properties are enumerable, writable, and configurable.
 * 
 * 
 * ## Example::
 * 
 *     fromPairs([['x', 10], ['y', 20]]);
 *     // ==> { x: 10, y: 20 }
 *
 * 
 * ## Caveats
 *
 * Properties are inserted in the object in the same order of the array. In an
 * ECMAScript 2015-compliant engine this means that the following equivalence
 * holds:
 *
 *     Object.keys(fromPairs(xs)) === xs.map(([k, v]) => k)
 * 
 * However, in engines that don't conform to ECMAScript 2015, this equivalence
 * is not guaranteed.
 *
 * ---
 * category    : Converting
 * stability   : stable
 * 
 * authors:
 *   - Quildreen Motta
 *
 * complexity : O(n), n is the length of the array
 * type: |
 *   (Array (String or Symbol, 'a)) => Object 'a
 */
const fromPairs = (pairs) =>
        pairs.reduce((r, [k, v]) => define(r, k, { value: v,
                                                   writable: true,
                                                   enumerable: true,
                                                   configurable: true
                                                  }),
                     {});


// --[ Exports ]-------------------------------------------------------
module.exports = fromPairs;
