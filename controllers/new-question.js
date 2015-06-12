Messageboard.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        question: this.get('question'),
        author: this.get('author')
      });

      newQuestion.save();
      this.transitionToToute('questions')
    }
  }
});
