
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {title: 'title1', description: 'description1', technologies: 'tech1', url: 'url1', image: 'image1'},
        {title: 'title2', description: 'description2', technologies: 'tech2', url: 'url2', image: 'image2'},
        {title: 'title3', description: 'description3', technologies: 'tech3', url: 'url3', image: 'image3'}
      ]);
    });
};
