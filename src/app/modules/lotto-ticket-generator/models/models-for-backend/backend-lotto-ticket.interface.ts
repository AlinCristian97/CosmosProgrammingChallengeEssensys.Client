import { BackendBaseEntityInterface } from "./backend-base-entity.interface";
import { BackendLottoTicketBoxInterface } from "./backend-lotto-ticket-box.interface";

export interface BackendLottoTicketInterface extends BackendBaseEntityInterface {
  superzahl: number | null | undefined;
  boxes: BackendLottoTicketBoxInterface[];
}