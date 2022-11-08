const Comment = require("./Comment");

class Post {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.createdAt = new Date();
    this.comments = [];
  }

  addComment(username, comment) {
    this.comments.push(new Comment(username, comment));
  }
}

module.exports = Post;
