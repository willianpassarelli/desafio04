import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Bruce Wayne",
          avatar:
            "https://img.cinemablend.com/filter:scale/quill/e/e/7/0/0/0/ee7000faa4c2f4f05032c012302901c6ffbc5e27.jpg?mw=600"
        },
        date: "10 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Arlequina",
              avatar:
                "https://i.correiobraziliense.com.br/tMzOlfBu3jXULvXGlQKskTS7OmQ=/675x/smart/imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2019/02/14/737488/20190214113727654321o.jpg"
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Willian Passarelli",
          avatar:
            "https://img.cinemablend.com/filter:scale/quill/e/e/7/0/0/0/ee7000faa4c2f4f05032c012302901c6ffbc5e27.jpg?mw=600"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Rocketseat",
              avatar:
                "https://i.correiobraziliense.com.br/tMzOlfBu3jXULvXGlQKskTS7OmQ=/675x/smart/imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2019/02/14/737488/20190214113727654321o.jpg"
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          },
          {
            id: 2,
            author: {
              name: "Teste",
              avatar:
                "https://i.correiobraziliense.com.br/tMzOlfBu3jXULvXGlQKskTS7OmQ=/675x/smart/imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2019/02/14/737488/20190214113727654321o.jpg"
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
