const { Blog } = require('../models');

const postdata = [
  {
    title: 'Concert in RTP area!',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Raleigh',
    user_id: 1
  },

  {
    title: 'Going to Charlotte Hornets basketball game',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Charlotte',
    user_id: 6
  },

  {
    title: 'Soaking up the sun in Miami',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Miami',
    user_id: 3
  },

  {
    title: 'Sightseeing in Los Angeles',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Los Angeles',
    user_id: 7
  },

  {
    title: 'Visiting the culture of Charleston',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Charleston',
    user_id: 5
  },

  {
    title: 'Change in scenary in Seattle',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Seattle',
    user_id: 2
  },

  {
    title: 'Seeing what Dallas has to offer',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Dallas',
    user_id: 4
  },

  {
    title: 'Vacation to paradise in Hawaii',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Honolulu',
    user_id: 8
  },

  {
    title: 'Had to see the Aquarium',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Atlanta',
    user_id: 9
  },

  {
    title: 'Traveling to Milan',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo eget magna fermentum iaculis eu non. Massa enim nec dui nunc mattis enim. Dignissim sodales ut eu sem integer vitae justo eget magna. Sit amet cursus sit amet.',
    city_location: 'Milan',
    user_id: 1
  },

  {
    title: 'Going to Rome',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Sed risus ultricies tristique nulla aliquet enim tortor at. Nibh ipsum consequat nisl vel pretium. Arcu bibendum at varius vel pharetra vel.',
    city_location: 'Rome',
    user_id: 2
  },

  {
    title: 'Vacation to Rome',
    content: 'Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Hendrerit gravida rutrum quisque non tellus. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. ',
    city_location: 'Rome',
    user_id: 3
  },

  {
    title: 'Visiting the old roots in Rome',
    content: 'Sit amet aliquam id diam maecenas ultricies mi eget mauris. A scelerisque purus semper eget duis at tellus. Urna molestie at elementum eu. Ut ornare lectus sit amet est placerat in egestas. A pellentesque sit amet porttitor eget dolor morbi. Feugiat in fermentum posuere urna.',
    city_location: 'Rome',
    user_id: 3
  },

  {
    title: 'Sightseeing Barcelona',
    content: 'Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Etiam erat velit scelerisque in dictum non consectetur a. Aenean pharetra magna ac placerat vestibulum lectus mauris. Nulla facilisi morbi tempus iaculis urna. Quis commodo odio aenean sed adipiscing diam donec. Mattis nunc sed blandit libero volutpat. Est ultricies integer quis auctor elit. Commodo elit at imperdiet dui accumsan sit amet nulla. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Posuere ac ut consequat semper. Vestibulum sed arcu non odio.',
    city_location: 'Barcelona',
    user_id: 3
  },

  {
    title: 'Visiting the ruins of Rome',
    content: 'Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. A condimentum vitae sapien pellentesque. Sit amet tellus cras adipiscing enim. Tortor vitae purus faucibus ornare suspendisse sed. Morbi tincidunt augue interdum velit. Nec feugiat nisl pretium fusce. Leo duis ut diam quam nulla porttitor massa id. Cras semper auctor neque vitae tempus. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Dolor sit amet consectetur adipiscing elit duis. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Diam sit amet nisl suscipit adipiscing bibendum. Magnis dis parturient montes nascetur ridiculus mus mauris vitae.',
    city_location: 'Rome',
    user_id: 4
  },

  {
    title: 'The authentic Irish experience',
    content: 'Metus dictum at tempor commodo ullamcorper. Placerat in egestas erat imperdiet. Eget velit aliquet sagittis id consectetur purus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Quis ipsum suspendisse ultrices gravida dictum fusce. Sit amet mauris commodo quis imperdiet massa. Sed nisi lacus sed viverra. Tincidunt dui ut ornare lectus sit. Enim ut sem viverra aliquet eget sit amet. Sit amet aliquam id diam maecenas ultricies mi eget. Arcu risus quis varius quam quisque id. Consectetur libero id faucibus nisl tincidunt eget nullam. Neque ornare aenean euismod elementum nisi quis eleifend. Est ante in nibh mauris cursus mattis. Mauris sit amet massa vitae tortor condimentum lacinia quis vel.',
    city_location: 'Dublin',
    user_id: 5
  },

  {
    title: 'The sunny beaches of Cozumel',
    content: 'Morbi non arcu risus quis varius quam quisque id. Volutpat commodo sed egestas egestas fringilla. Dictum at tempor commodo ullamcorper a. Congue quisque egestas diam in arcu cursus. Proin nibh nisl condimentum id venenatis a. Penatibus et magnis dis parturient. Libero justo laoreet sit amet cursus sit amet dictum. Id leo in vitae turpis massa sed elementum. Enim lobortis scelerisque fermentum dui faucibus in ornare. Quis blandit turpis cursus in. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Sed elementum tempus egestas sed sed risus pretium. Rutrum tellus pellentesque eu tincidunt tortor. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. At urna condimentum mattis pellentesque id nibh tortor. Ac auctor augue mauris augue neque gravida in fermentum. Sodales neque sodales ut etiam sit amet nisl. Bibendum ut tristique et egestas quis ipsum suspendisse.',
    city_location: 'Cozumel',
    user_id: 6
  }
];

const seedPosts = () => Blog.bulkCreate(postdata);

module.exports = seedPosts;
