Messageboard.QuestionsController = Ember.ArrayController.extend({
  actions: {
    question: function() {
      var newQuestion = this.store.createRecord('new-question', {
        newQuestion: this.get('new-question')
      });

      newQuestion.save();
      }
  }
});
