var assert = require('assert'), nodeModuleDemo = require('../index'), escape = nodeModuleDemo.escape, unescape = nodeModuleDemo.unescape;

describe('#escape', function() {
	it('converts & into &amp;', function() {
		assert.strictEqual(escape('&'), '&amp;', '&amp;');
	});

	it('converts " into &quot;', function() {
		assert.strictEqual(escape('"'), '&quot;', '&quot;');
	});
});