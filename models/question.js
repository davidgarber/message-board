Messageboard.Question = DS.Model.extend({
  question: DS.attr(),
  questions: DS.hasMany('answers', {async: true})
});
