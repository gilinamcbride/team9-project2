const { Blog } = require('../models');

const postdata = [
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Raleigh',
    user_id: 1
  },

  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: '',
    user_id: 6
  },

  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: '',
    user_id: 3
  },

  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: '',
    user_id: 7
  },

  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: '',
    user_id: 5
  },

  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: '',
    user_id: 2
  },

  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: '',
    user_id: 4
  },

  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: '',
    user_id: 8
  },

  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: '',
    user_id: 9
  }
];

const seedPosts = () => Blog.bulkCreate(postdata);

module.exports = seedPosts;
