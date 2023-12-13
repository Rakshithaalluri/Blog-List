// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item-container">
      <div className="blog-item">
        <h1 className="blog-title"> {title} </h1>
        <p className="blog-date"> {publishedDate} </p>
      </div>
      <p className="blog-description"> {description} </p>
      <hr />
    </li>
  )
}

export default BlogItem
