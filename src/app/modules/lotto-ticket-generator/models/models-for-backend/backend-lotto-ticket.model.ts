import { BackendBaseEntityModel } from "./backend-base-entity.model";
import { BackendLottoTicketBoxInterface } from "./backend-lotto-ticket-box.interface";
import { BackendLottoTicketInterface } from "./backend-lotto-ticket.interface";

export class BackendLottoTicketModel extends BackendBaseEntityModel implements BackendLottoTicketInterface {
  public superzahl: number | null | undefined;
  public boxes: BackendLottoTicketBoxInterface[];

  constructor(
    id: number,
    createdOn: Date,

    boxes: BackendLottoTicketBoxInterface[]
    ) {
    super(id, createdOn);
    
    this.boxes = boxes;
  }
}