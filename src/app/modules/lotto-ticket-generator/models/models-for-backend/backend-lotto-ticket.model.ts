import { BackendLottoTicketBoxInterface } from "./backend-lotto-ticket-box.interface";

export class BackendLottoTicketModel {
  public superzahl: number | null | undefined;
  public boxes: BackendLottoTicketBoxInterface[];

  constructor(boxes: BackendLottoTicketBoxInterface[]) {
    this.boxes = boxes;
  }
}