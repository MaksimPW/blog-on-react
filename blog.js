const DOM = React.DOM;

const posts = [
  {
   id: 0,
   image: 'http://maksim.pw/wp-content/uploads/2017/01/yXa_Zvmys_-ToDOhci2TupdbratAP4cvUQFXdxKTLScDJmxS-508x381.jpg'
  },
  {
   id: 1,
   image: 'http://maksim.pw/wp-content/uploads/2016/08/kurs-973x730.jpg',
   text: 'Отзыв о курсе'
  },
  {
   id: 2,
   text: 'Полумарафон'
  }
];

const Image = ({ image }) => (
  <img src={image.src} width={image.width} height={image.height} alt={image.alt}/>
);

// TODO: Need fix. Now it not work
Image.defaultProps = {
  src: 'http://maksim.pw/wp-content/uploads/2016/09/05OB6lDjCQvsXlwMc-C_T_qMMU3qjtEZ3Uz18-9f3kiewcVM-508x381.jpg',
  alt: 'default alt',
  width: '100',
  height: '100',
};

const TextBox = ({ text }) => (
  <span>{text}</span>
);

TextBox.defaultProps = {
  text: 'default text',
};

const BlogItem = ({ props }) => (
  DOM.div(
    { },
    React.createElement(Image, { image: props.image }),
    React.createElement(TextBox, { text: props.text }),
  )
);

const BlogList = ( { posts } ) => (
  DOM.div(
    { },
    _.map(
      posts,
      (post) => (
        React.createElement(BlogItem, { props: { text: post.text, image: { src: post.image },  key: post.id }})
      )
    )
  )
)

ReactDOM.render(
  React.createElement(BlogList, { posts }),
  document.getElementById('app')
);
