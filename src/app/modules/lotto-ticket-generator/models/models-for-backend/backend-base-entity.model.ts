import { BackendBaseEntityInterface } from "./backend-base-entity.interface";

export class BackendBaseEntityModel implements BackendBaseEntityInterface {
  id: number;
  createdOn: Date;

  constructor(
    id: number,
    createdOn: Date
  ) {
    this.id = id;
    this.createdOn = createdOn;
  }
}