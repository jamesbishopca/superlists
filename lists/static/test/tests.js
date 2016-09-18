QUnit.module('list.js');
QUnit.test("errors should be hidden on keypress", function(assert) {
  $('input[name="text"]').trigger('keypress');
  assert.notOk($('.has-error').is(':visible'));
});

QUnit.test('errors should be hidden on click', function(assert) {
  $('input[name="text"]').trigger('click');
  assert.notOk($('.has-error').is(':visible'));
});

QUnit.test('clicking on the parent container does nothing', function(assert) {
  $('input[name="text"]').closest('div').trigger('click');
  assert.ok($('.has-error').is(':visible'));
});

QUnit.test( "errors should not be hidden unless there is a keypress", function( assert ) {
  assert.ok($('.has-error').is(':visible'))
});
