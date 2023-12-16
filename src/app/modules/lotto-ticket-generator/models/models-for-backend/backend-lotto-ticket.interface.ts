import { BackendLottoTicketBoxInterface } from "./backend-lotto-ticket-box.interface";

export interface BackendLottoTicketInterface {
  superzahl: number | null | undefined;
  boxes: BackendLottoTicketBoxInterface[];
}