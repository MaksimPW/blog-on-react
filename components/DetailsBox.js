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
