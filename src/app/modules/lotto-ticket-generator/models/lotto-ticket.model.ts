import { LottoTicketBoxModel } from "./lotto-ticket-box.model";
import { LottoTicketInterface } from "./lotto-ticket.interface";

export class LottoTicketModel implements LottoTicketInterface{
  private superzahl: number | null | undefined;
  private boxes: LottoTicketBoxModel[];

  getSuperzahl(): number | null | undefined {
    return this.superzahl;
  }

  getBoxesCopy(): LottoTicketBoxModel[] {
    const boxesCopy = [...this.boxes];
    return boxesCopy;
  }

  constructor(
    superzahl: number | null | undefined,
    boxes: LottoTicketBoxModel[]
    ) {
    this.boxes = boxes;
    this.superzahl = superzahl;
  }
}