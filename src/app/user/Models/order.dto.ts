export class SpecificationsDTO {
  proces: string;
  duration: number;
  observatuon: string;

  constructor(proces: string, duration: number, observatuon: string) {
    this.proces = proces;
    this.duration = duration;
    this.observatuon = observatuon;
  }
}

export class ProgresDTO {
  etapa: string;
  date_inici: Date;
  date_fi!: Date | null;

  constructor(etapa: string, date_inici: Date, date_fi: Date | null) {
    this.etapa = etapa;
    this.date_inici = date_inici;
    this.date_fi = date_fi;
  }
}

export class ObservationsDTO {
  user_id!: string;
  date_observation!: Date;
  description: string;
  action: string;

  constructor(
    description: string,
    action: string
  ) {
    this.description = description;
    this.action = action;
  }
}

export class OrderDTO {
  order_id!: string;
  user_id!: string;
  order_name: string;
  specifications: SpecificationsDTO[];
  progres!: ProgresDTO[];
  observations: ObservationsDTO[];

  constructor(
    order_name: string,
    specifications: SpecificationsDTO[],
    observations: ObservationsDTO[],
  ) {
    this.order_name = order_name;
    this.specifications = specifications;
    this.observations = observations;
  }
}

export class SerchOrderDTO {
  order_id: string;
  email: string;

  constructor(
    order_id: string,
    email: string,
  ) {
    this.order_id = order_id;
    this.email = email;
  }
}


