class Comment {
  constructor(username, content) {
    this.username = username;
    this.content = content;
    this.creatAt = new Date();
  }
}

module.exports = Comment;
