/*global describe, it */
'use strict';
(function () {
    describe('Backbone View Practice', function () {
        describe('should', function () {
        	var Test = new NCAAModel({school: "Test U"})
    	  	 var TestView = new NCAAView({model: Test})

            it('confirm jQuery is avaliable', function () {
        		expect(jQuery() !== undefined || null).to.equal(true);
    	    });

    	  	 it('confirm Underscore is avaliable', function () {
        		expect(_.VERSION !== undefined || null).to.equal(true);
    	    });

    	  	 it('confirm Backbone is avaliable', function () {
        		expect(Backbone.VERSION !== undefined || null).to.equal(true);
    	    });

    	  	 it('should create a contructor of a test object when read in', function () {
    	  	 	expect(Test !== undefined || null).to.equal(true);
    	  	 })

    	  	 it('should create a contructor of a test object with property school', function () {
    	  	 	expect(Test.get('school')).to.equal("Test U");
    	  	 })

    	  	 it('should create a backbone view with the model of the test constructor', function () {
    	  	 	expect(TestView !== undefined || null).to.equal(true);
    	  	 })

    	  	 it('should create a backbone view than can retrieve the school property from the constructor model', function () {
    	  	 	expect(TestView.model.get('school')).to.equal("Test U");
    	  	 })

    	  	 it('should create a backbone view with an edit function', function () {
    	  	 	expect(TestView.edit !== undefined || null).to.equal(true);
    	  	 })

    	  	 it('should create a backbone view with a destroy function', function () {
    	  	 	expect(TestView.destroy !== undefined || null).to.equal(true);
    	  	 })

    	  	 it('should create a backbone view with a save function', function () {
    	  	 	expect(TestView.save !== undefined || null).to.equal(true);
    	  	 })
			TestView.destroy()
    	  	 

    	  	 // it('should destroy the view when the destroy function is called', function () {
    	  	 	
    	  	 // 	expect(Test.get('school')).to.be(undefined);
    	  	 // })
        });
    });
})();
