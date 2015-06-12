Messageboard.Question = DS.Model.extend({
  question: DS.attr(),
  description: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answers', {async: true})
});
