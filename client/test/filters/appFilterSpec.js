describe('VideoApp: FilterTestSuite', function() {

	beforeEach(module('videoApp'));

	var $filter;

	beforeEach(inject(function(_$filter_) {
		$filter = _$filter_;
	}));

	//Testing removeArrayinTitle filter
	describe('removeArrayinTitle filter', function() {

		it('should trim [0] from beginning of text', function() {
			var removeArrayinTitle = $filter('removeArrayinTitle');
			expect(removeArrayinTitle('[0] Video title text')).toBe('Video title text');
		});

	});

});