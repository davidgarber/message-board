Messageboard.QuestionsController = Ember.ArrayController.extend({
  actions: {
    sortByQuestion: function() {
      this.set('sortProperties', ['question']);
    }
  }
});
