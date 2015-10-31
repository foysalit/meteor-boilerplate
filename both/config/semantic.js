Meteor.startup(function () {
  if (Meteor.isClient)
	AutoForm.setDefaultTemplate("semanticUI");
});