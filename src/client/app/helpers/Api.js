const Api = {
  hostname: 'http://localhost:3000',
  index: 'http://localhost:3000/posts',
  addLike: (id) => {
    return 'http://localhost:3000/posts/'.concat(id, '/add_like')
  },
  defaultImage: 'http:///localhost:3000/images/original/missing.png'
}

export default Api;
