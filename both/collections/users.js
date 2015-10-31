Meteor.users.helpers({
  name: function () {
  	if (this.profile && this.profile.name)
  		return this.profile.name;

  	if (!_.isEmpty(this.emails) && this.emails[0].address)
  		return this.emails[0].address;

  	return 'User';
  }
});