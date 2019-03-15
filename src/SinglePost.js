import React, {Fragment} from 'react';

import {Link} from "react-router-dom"
import NotFound from './404';
import Commentary from './commentary';
import './singlepost.sass'

class SinglePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      article: {},
      comments: [],
      isLoading: true
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params;

    if (!id) return (<NotFound/>)

    let index = id * 5 - 5;

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        if (response.status !== 200) {
          throw Error("Not Found")
        }

        return response.json()
      })
      .then(data => {
        this.setState({isLoading: false});
        if (typeof data.title === 'undefined') return (<NotFound/>)
        this.setState({article: data})
      })
      .catch(error => {
        this.setState({isLoading: false, error: error})
      });
    
    fetch(`https://jsonplaceholder.typicode.com/comments?_start=${index}&_limit=5`)
    .then(response => {
      if (response.status !== 200) {
        throw Error("Not Found")
      }

      return response.json()
    })
    .then(data => 
      this.setState({
        comments: data,
        isLoading: false,
      })
    )
    .catch(error => {
      this.setState({isLoading: false, error: error})
    });
  }


  render() {
    const {isLoading, article, comments, error} = this.state;
      return (
        <div className="wrapper">
          {error && <NotFound message={error}/>}
          <div className="home"> 
            <Link to='/'>Home</Link>
          </div>
          {!isLoading ? (
            <Fragment>
              <div className="article">
                <h1>{article.title}</h1>
                <p>{article.body}</p>
              </div>
              <div className="comments">
                <h2>Comments:</h2>
                <Commentary comments={comments} />
              </div>
            </Fragment>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      );
  }
}

export default SinglePost;
