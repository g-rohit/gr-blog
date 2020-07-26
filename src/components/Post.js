import React from "react"
import { Link } from "gatsby"
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap"
import img from 'gatsby-image';

const Post = ({ title, author, path, date, body, tags , fluid}) => {
  return (
    <Card>
        <Link to={path} className="" >
        <img fluid="{fluid}" className="card-img-top" src={fluid.src}/>
        </Link>

      <CardBody>
        <CardTitle><Link to={path} className='h3 text-dark'>{title}</Link></CardTitle>
        <CardSubtitle>
          <span className="text-purple">{date}</span> by <span className="text-purple">{author}</span>
        </CardSubtitle>
        <CardText>
            { body }
        </CardText>
        <CardSubtitle>
          <span className="text-purple">Tags: {tags}</span>
        </CardSubtitle>
        <Link to={path} className="btn btn-outline-dark rounded float-right" >
          Read More
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
