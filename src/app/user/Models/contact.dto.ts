import { UserDTO } from "./user.dto";

export class ContactMethodDTO {
  method: string;
  methodValue: string | number;

  constructor(method: string, methodValue: string | number) {
    this.method = method;
    this.methodValue = methodValue;
  }
}

export class ContactDTO {
  contact_id!: string;
  user: string | UserDTO;
  subject: string;
  description: string;
  publication_date: Date;
  userId!: string;
  contact_methods: ContactMethodDTO;
  estate: string;

  constructor(
    user: string | UserDTO,
    subject: string,
    description: string,
    publication_date: Date,
    contact_methods: ContactMethodDTO,
    estate: string
  ) {
    this.user = user;
    this.subject = subject;
    this.description = description;
    this.publication_date = publication_date;
    this.contact_methods = contact_methods;
    this.estate = estate;
  }
}
