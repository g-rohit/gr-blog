import React from "react"
import { Link } from "gatsby"
import { Card, CardBody, CardText, CardTitle, CardSubtitle, Badge } from "reactstrap"
import Img from 'gatsby-image';
import {slugify} from '../../util/utilityFunctions';

const Post = ({ title, author, path, date, body, tags , fluid, timeToRead}) => {
  return (
    <Card>
        <Link to={path} className="" >
        <Img fluid={fluid} className="card-img-top"/>
        </Link>

      <CardBody>
        <CardTitle><Link to={path} className='h3 text-dark'>{title}</Link></CardTitle>
        <CardSubtitle>
          <span className="text-purple">{date}</span> by <span className="text-purple">{author}</span>
        </CardSubtitle>
        <CardText>
            { body }
        </CardText>
        <span className="text-purple">Tags:&nbsp;</span>
        <ul className="post-tags">

         {tags.map( tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge className="badge-custom">{tag}</Badge>
              </Link>
            </li>
          )) } 
          
        </ul>
         <small>Reading time: {timeToRead} min</small>
        <Link to={path} className="btn btn-outline-dark rounded float-right" >
          Read More
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
