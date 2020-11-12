'use strict';

require('../common');
const assert = require('assert');
const dns = require('dns');

dns.resolve4('ticbrasil.com.br', function(err, addresses, family) {
  assert.strictEqual(typeof addresses.length[addresses.length - 1],
                     'undefined');
});
