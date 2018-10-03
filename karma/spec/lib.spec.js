import helper from '../../src/lib/helper'


describe("lib.js", function() {
    beforeEach(function() {
       console.log('beforeeach')
    });
    
    it("validTimeFormat方法", function() {
        expect(helper.validTimeFormat()).toBe(false);
        expect(helper.validTimeFormat('2013-12-')).toBe(false);
        expect(helper.validTimeFormat('2013-51-23')).toBe(false);
        expect(helper.validTimeFormat('2015-11-31')).toBe(true);
        expect(helper.validTimeFormat('2001-2-29')).toBe(false);
    });
    it("getEndDate方法", function() {
        expect(helper.getEndDate()).toBe(false);
        expect(helper.getEndDate(2013, '1a')).toBe(false);
        expect(helper.getEndDate(2018,2)).toBe(28);
        expect(helper.getEndDate(2016,2)).toBe(29);
        expect(helper.getEndDate(2017,2)).toBe(28);
        expect(helper.getEndDate(2018,1)).toBe(31);
        expect(helper.getEndDate(2018,6)).toBe(30);
    });
    it("getCurrentDate方法", function(done) {
        let datePromise = helper.getCurrentDate()
        datePromise.then((date) => {
            expect(date).toBe('2018-10-05');
            done()
        })
    });
});