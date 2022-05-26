export class PostDTO {
  postId!: string;
  title: string;
  description: string;
  publication_date: Date;
  userId!: string;
  tags: string;

  constructor(
    title: string,
    description: string,
    publication_date: Date,
    tags: string,
  ) {
    this.title = title;
    this.description = description;
    this.publication_date = publication_date;
    this.tags = tags;
  }
}
