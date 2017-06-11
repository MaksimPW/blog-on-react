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
      updatedAt: moment("20170401", "YYYYMMDD").fromNow(),
      likes: 10,
    }
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
      updatedAt: moment("20160901", "YYYYMMDD").fromNow(),
      likes: 5,
   }
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
    <Like count ={props.likes} />
  </div>
)

DetailsBox.defaultProps = {
  author: 'Admin',
  createdAt: moment("19700101", "YYYYMMDD").fromNow(),
  updatedAt: moment("20170420", "YYYYMMDD").fromNow(),
  likes: 0
}

DetailsBox.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  likes: PropTypes.number
}

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };

    this.handleClick = bind(this.handleClick, this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Like +</button>
      </div>
    )
  }
}

Like.defaultProps = {
  count: 0
}

Like.propTypes = {
  count: PropTypes.number
}

const BlogItem = (props) => (
  DOM.div(
    { },
    React.createElement(Image, props.image),
    React.createElement(DetailsBox, props.details),
    React.createElement(TextBox, {}, props.text ),
  )
)

BlogItem.propTypes = {
  image: PropTypes.object,
  details: PropTypes.object,
  text: PropTypes.string
}

const BlogList = ( { posts } ) => (
  DOM.div(
    { },
    _.map(
      posts,
      (post) => (
        React.createElement(BlogItem, { text: post.text, details: post.details, image: post.image, key: post.id })
      )
    )
  )
)


BlogList.propTypes = {
  posts:  PropTypes.arrayOf(PropTypes.object)
}

ReactDOM.render(
  React.createElement(BlogList, { posts }),
  document.getElementById('app')
);
