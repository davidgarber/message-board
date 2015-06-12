Messageboard.AnswerController = Ember.Controller.extend({
  needs:['question'],
  actions: {
    delete_answer: function() {
      if(confirm('Are you sure?')) {
        this.get('model.answer').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
