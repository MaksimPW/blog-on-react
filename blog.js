const { DOM, PropTypes } = React;
const { bind } = _;

const posts = [
  {
   id: 0,
   image: {
     src: 'http://maksim.pw/wp-content/uploads/2017/01/yXa_Zvmys_-ToDOhci2TupdbratAP4cvUQFXdxKTLScDJmxS-508x381.jpg',
     alt: 'kek'
   },
    details: {
      author: 'Andrey',
      createdAt: moment("20170101", "YYYYMMDD").fromNow(),
      updatedAt: moment("20170401", "YYYYMMDD").fromNow()
    },
    likes: 10
  },
  {
   id: 1,
   image: {
    src: 'http://maksim.pw/wp-content/uploads/2016/08/kurs-973x730.jpg'
   },
   text: 'Отзыв о курсе',
   details: {
      author: 'Zahar',
      createdAt: moment("20160101", "YYYYMMDD").fromNow(),
      updatedAt: moment("20160901", "YYYYMMDD").fromNow()
   },
   likes: 5
  },
  {
   id: 2,
   text: 'Полумарафон'
  }
];

const Image = (props) => (
  <img {...props} />
);


Image.defaultProps = {
  src: 'http://maksim.pw/wp-content/uploads/2016/09/05OB6lDjCQvsXlwMc-C_T_qMMU3qjtEZ3Uz18-9f3kiewcVM-508x381.jpg',
  alt: 'default alt',
  width: '200px',
  height: '200px'
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

const TextBox = (props) => (
  <span>{props.children}</span>
);

TextBox.defaultProps = {
  children: 'default text',
}

TextBox.propTypes = {
  children: PropTypes.string
}

const DetailsBox = (props) => (
  <div>
    <p>Author: {props.author}</p>
    <p>createdAt: {props.createdAt}</p>
    <p>updatedAt: {props.updatedAt}</p>
  </div>
)

DetailsBox.defaultProps = {
  author: 'Admin',
  createdAt: moment("19700101", "YYYYMMDD").fromNow(),
  updatedAt: moment("20170420", "YYYYMMDD").fromNow()
}

DetailsBox.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
}

const Like = ({count, likeAdd, postId}) => (
  <div>
    <button onClick={()=> likeAdd(postId)}>
      Like+
    </button>
      {count}
  </div>
)

Like.defaultProps = {
  count: 0
}

Like.propTypes = {
  count: PropTypes.number,
  likeAdd: PropTypes.func.isRequired,
  postId: PropTypes.number
}

const BlogItem = ({ id, image, details, text, likes, likeAdd }) => (
  DOM.div(
    { },
    React.createElement(Image, image),
    React.createElement(DetailsBox, details),
    React.createElement(TextBox, {}, text ),
    React.createElement(Like, {count: likes, likeAdd: likeAdd, postId: id})
  )
)

BlogItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.object,
  details: PropTypes.object,
  text: PropTypes.string,
  likes: PropTypes.number,
  likeAdd: PropTypes.func.isRequired
}

const BlogList = ( { posts, likeAdd } ) => (
  DOM.div(
    { },
    _.map(
      posts,
      (post) => (
        React.createElement(BlogItem, _.assign({}, post, { key: post.id, likeAdd: likeAdd }))
      )
    )
  )
)


BlogList.propTypes = {
  posts:  PropTypes.arrayOf(PropTypes.object),
  likeAdd: PropTypes.func.isRequired
}

class BlogPage extends React.Component {
  constructor(props){
    super(props);

    this.state = { posts };
    this.likeAdd = this.likeAdd.bind(this);
  }

  likeAdd(postId) {
    this.state.posts.map((post)=> {
      if (postId == post.id) {
        post.likes++;
        return post;
      }
    });

    this.setState({posts: posts})
  }

  render() {
    const { posts } = this.state;
    return (
      <BlogList posts={posts} likeAdd={this.likeAdd} />
    )
  }
}

ReactDOM.render(
  React.createElement(BlogPage, { posts }),
  document.getElementById('app')
);
