const Api = ({
  hostname: 'http://localhost:3000',
  index: 'http://localhost:3000/posts',
  show: (id) => `http://localhost:3000/posts/${id}`,
  addLike: (id) => `http://localhost:3000/posts/${id}/add_like`,
  defaultImage: 'http://localhost:3000/images/original/missing.png'
});

export default Api;
