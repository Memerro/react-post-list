import React, {Fragment} from 'react';

import {Link} from "react-router-dom"
import NotFound from './404';

class SinglePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      article: {},
      isLoading: true
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params;

    if (!id) return (<NotFound/>)

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

        console.log(11);

        this.setState({article: data})
      })
      .catch(error => {
        this.setState({isLoading: false, error: error})
      });
  }


  render() {
    const {isLoading, article, error} = this.state;

    return (
      <div>
        {error && <NotFound message={error}/>}
        <Link to='/'>Home</Link>
        {!isLoading ? (
          <Fragment>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
          </Fragment>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }

}

export default SinglePost;
