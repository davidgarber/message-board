Messageboard.QuestionsController = Ember.ArrayController.extend({
  actions: {
    question: function() {
      var newQuestion = this.store.createRecord('question', {
        question: this.get('question')
      });

      newQuestion.save();
      }
  }
});
