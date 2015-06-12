Messageboard.AnswerController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if(confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('question', question.id);
      }
    }
  }
});
