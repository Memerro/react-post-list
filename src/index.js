import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
  state = {
    isLoading: true,
    articles: [],
    error: null
  }

  fetchArticles() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          articles: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    const { isLoading, articles, error } = this.state;
    return (
      <React.Fragment>
        <h1>Fresh news for today!</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          articles.map(article => {
            const { id, title } = article;
            return (
              <div key={id}>
                <h3>{title}</h3>
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));