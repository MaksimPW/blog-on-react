const Image = (props) => (
  <img src={props.src} width={props.width} height={props.height} alt={props.alt}/>
);


Image.defaultProps = {
  src: 'http://maksim.pw/wp-content/uploads/2016/09/05OB6lDjCQvsXlwMc-C_T_qMMU3qjtEZ3Uz18-9f3kiewcVM-508x381.jpg',
  alt: 'default alt',
  width: '200',
  height: '200',
};
