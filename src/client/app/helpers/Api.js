/* globals __DEVELOPMENT__ */

const Api = ({
  hostname:
    __DEVELOPMENT__ ? 'http://localhost:3000' : 'http://localhost:3000',
  index: {
    endpoint: '/posts',
    method: 'GET'
  },
  show: {
    endpoint: (id) => `/posts/${id}`,
    method: 'GET'
  },
  update: {
    endpoint: (id) => `/posts/${id}`,
    method: 'PATCH'
  },
  create: {
    endpoint: '/posts',
    method: 'POST'
  },
  addLike: {
    endpoint: (id) => `/posts/${id}/add_like`,
    method: 'PATCH'
  },

  defaultImage: 'http://localhost:3000/system/posts/images/missing.jpg',
  formatDate: 'DD MMM YYYY'
});

export default Api;
