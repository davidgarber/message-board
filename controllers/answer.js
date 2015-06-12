Messageboard.AnswerController = Ember.Controller.extend({
  needs:['question'],
  actions: {
    delete: function() {
      if(confirm('Are you sure you want to delete this answer?')) {
        this.get('model').destroyRecord();
        question.save();
        this.transitionToRoute('questions');
      }
    }
  }
});
