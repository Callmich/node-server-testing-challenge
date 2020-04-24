
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dnd').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dnd').insert([
        {name: 'fighter'},
        {name: 'druid'},
        {name: 'wizard'},
      ]);
    });
};
