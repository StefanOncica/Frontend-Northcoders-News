import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-api-knls.onrender.com/api",
});

export const fetchAllUsers = () => {
  return newsApi.get("/users").then(({ data }) => {
    return data.users;
  });
};

export const fetchAllArticles = () => {
  return newsApi.get(`/articles`).then(({ data })=> {
    return data.articles;
  });
};

export const fetchArticleById = (id) => {
  return newsApi.get(`/articles/${id}`).then(({ data }) => {
    return data;
  });
};

export const fetchCommentsById = (id) => {
  return newsApi.get(`/articles/${id}/comments`).then(({ data }) => {
    return data;
  });
};

export const updateVotes = (id, incVotes) => {
  return newsApi
    .patch(`/articles/${id}`, { inc_votes: incVotes })
    .then(({ data }) => {
      return data;
    });
};

export const postComment = (id, body, user) => {
  return newsApi
    .post(`/articles/${id}/comments`, {
      username: user,
      body: body
    })
    
};

export const deleteComment = (id) => {
  return newsApi
    .delete(`/comments/${id}`)
}
