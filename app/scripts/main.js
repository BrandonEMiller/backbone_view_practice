NCAAView = Backbone.View.extend({
	className: "back-view",

	events: {
		"click .edit": "edit",
		"click .delete": "destroy",
		"click .save" : "save"
	},

	initialize: function() {
		//writes the title property of the model up
		$(this.el).html(this.model.get('school') + '<button class="edit">Edit</button>' + '<button class="delete">Delete</button>')
		$('.hero-unit').append(this.el )
	},

	edit: function() {
		$(this.el).html('<input class="input" value="' + this.model.get('school') + '"/> <button class="save">Save</button>')
		console.log ("You clicked edit")

	},

	destroy: function() {
		console.log ("You clicked delete")
		this.remove()
	},

	save: function() {
		console.log("You clicked save")
		this.model.set("school", $('.input').val())
		console.log (this.model.get('school'))
		$(this.el).html(this.model.get('school') + '<button class="edit">Edit</button>' + '<button class="delete">Delete</button>')
	}
})

NCAAModel = Backbone.Model.extend({

	initialize: function() {

	}

})



Alabama = new NCAAModel({school:'1. Alabama'})
AlabamaView = new NCAAView({model: Alabama})

Oregon = new NCAAModel({school:'2. Oregon'})
OregonView = new NCAAView({model: Oregon})

Clemson = new NCAAModel({school:'3. Clemson'})
ClemsonView = new NCAAView({model: Clemson})

OhioState = new NCAAModel({school:'4. Ohio State'})
OhioStateView = new NCAAView({model: OhioState})

Stanford = new NCAAModel({school:'5. Stanford'})
StanfordView = new NCAAView({model: Stanford})

LSU = new NCAAModel({school:'6. LSU'})
LSUView = new NCAAView({model: LSU})

Louisville = new NCAAModel({school:'7. Louisville'})
LouisvilleView = new NCAAView({model: Louisville})

FloridaState = new NCAAModel({school:'8. Florida State'})
FloridaStateView = new NCAAView({model: FloridaState})

Georgia = new NCAAModel({school:'9. Georgia'})
GeorgiaView = new NCAAView({model: Georgia})

TexasAM = new NCAAModel({school:'10. Texas A&M'})
TexasAMView = new NCAAView({model: TexasAM})

OklahomaState = new NCAAModel({school:'11. Oklahoma State'})
OklahomaStateView = new NCAAView({model: OklahomaState})

SouthCarolina = new NCAAModel({school:'12. South Carolina'})
SouthCarolinaView = new NCAAView({model: SouthCarolina})

UCLA = new NCAAModel({school:'13. UCLA'})
UCLAView = new NCAAView({model: UCLA})

Oklahoma = new NCAAModel({school:'14. Oklahoma'})
OklahomaView = new NCAAView({model: Oklahoma})

Miami = new NCAAModel({school:'15. Miami (FL)'})
MiamiView = new NCAAView({model: Miami})

Washington = new NCAAModel({school:'16. Washington'})
WashingtonView = new NCAAView({model: Washington})

Northwestern = new NCAAModel({school:'17. Northwestern'})
NorthwesternView = new NCAAView({model: Northwestern})

Michigan = new NCAAModel({school:'18. Michigan'})
MichiganView = new NCAAView({model: Michigan})

Baylor = new NCAAModel({school:'19. Baylor'})
BaylorView = new NCAAView({model: Baylor})

Florida = new NCAAModel({school:'20. Florida'})
FloridaView = new NCAAView({model: Florida})

OleMiss = new NCAAModel({school:'21. Ole Miss'})
OleMissView = new NCAAView({model: OleMiss})

NotreDame = new NCAAModel({school:'22. Notre Dame'})
NotreDameView = new NCAAView({model: NotreDame})

Wisconsin = new NCAAModel({school:'23. Wisconsin'})
WisconsinView = new NCAAView({model: Wisconsin})

TexasTech = new NCAAModel({school:'24. Texas Tech'})
TexasTechView = new NCAAView({model: TexasTech})

FresnoState = new NCAAModel({school:'25. Fresno State'})
FresnoStateView = new NCAAView({model: FresnoState})