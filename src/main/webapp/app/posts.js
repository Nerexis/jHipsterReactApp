import React from 'react';
import ContentRow from "./content-row";
import axios from "axios";
import ContentBox from "./content-box";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      console.log(res.data);
      this.setState({
        posts: res.data
      });
      console.log(this.state);

    });
  };

  render() {
    return (this.state.posts.length) ? (this.state.posts.map(post => {
          return (
            <ContentRow>
              <ContentBox>
                <h1 key={post.id}>{post.title}</h1>
                <p>{post.body}</p>
              </ContentBox>
            </ContentRow>
          )
        }
      )
    ) : (
      <ContentBox>
        <h1>Please wait...</h1>
      </ContentBox>
    );
  }
}

export default Posts;
