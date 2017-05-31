const Image = ({ image }) => (
  <img src={image.src} width={image.width} height={image.height} alt={image.alt}/>
);

Image.defaultProps = {
  // TODO: Need fix. Now it not work
  src: 'http://maksim.pw/wp-content/uploads/2016/09/05OB6lDjCQvsXlwMc-C_T_qMMU3qjtEZ3Uz18-9f3kiewcVM-508x381.jpg'
  alt: 'default alt',
  width: '100',
  height: '100',
};
