const Api = ({
  hostname: 'http://localhost:3000',
  index: '/posts',
  show: (id) => `/posts/${id}`,
  addLike: (id) => `/posts/${id}/add_like`,
  defaultImage: 'http://localhost:3000/images/original/missing.png',
  formatDate: 'DD MMM YYYY'
});

export default Api;
