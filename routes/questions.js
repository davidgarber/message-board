Messageboard.QuestionsRoute = Ember.Route.extend({
  model: function(){
    renderTemplate: function() {
    this.render('questions');
  },
    return this.store.find('question');
  }
});
