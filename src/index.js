import React from "react"
import ReactDOM from "react-dom"
import PostList from "./posts"
import './style.sass'

class App extends React.Component {
  state = {
    isLoading: true,
    articles: [],
    error: null
  }

  fetchArticles = () => {
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

  onSearchChange = e => {
    let query = e.target.value;
    let { articles } = this.state;

    if (!query) this.setState({articles: articles})

    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(res => {
        let updatedList = res.filter(article => {
          return article.title.toLowerCase().search(query.toLowerCase()) !== -1;
        });

        this.setState({articles: updatedList});
      })
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

        <input className="search" type="search"
               onChange={this.onSearchChange}
               name="search"
               placeholder="Search the news you like!" />

        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          <PostList articles={this.state.articles} />
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));