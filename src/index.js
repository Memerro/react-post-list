import React from "react"
import ReactDOM from "react-dom"
import './style.sass'

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
      <div className="wrapper">
        <h1>Fresh news for today!</h1>
        <input className="search" type="text" name="seacrh" placeholder="Search the news you like!" />
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          articles.map(article => {
            const { id, title } = article;
            return (
              <div className="post" key={id}>
                <h3>{title}</h3>
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));