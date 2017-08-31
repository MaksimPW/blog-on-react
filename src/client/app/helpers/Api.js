const Api = ({
  hostname: 'http://localhost:3000',
  index: {
    endpoint: '/posts',
    method: 'GET'
  },
  show: {
    endpoint: (id) => `/posts/${id}`,
    method: 'GET'
  },
  addLike: {
    endpoint: (id) => `/posts/${id}/add_like`,
    method: 'PATCH'
  },

  defaultImage: 'http://localhost:3000/images/original/missing.png',
  formatDate: 'DD MMM YYYY'
});

export default Api;
