Messageboard.AnswerController = Ember.ObjectController.extend({
  needs:['question'],
  actions: {
    delete_answer: function() {
      if(confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        question.save();
        this.transitionToRoute('questions');
      }
    }
  }
});
