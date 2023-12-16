import { BackendBaseEntityModel } from "./backend-base-entity.model";
import { BackendLottoTicketBoxInterface } from "./backend-lotto-ticket-box.interface";

export class BackendLottoTicketBoxModel extends BackendBaseEntityModel implements BackendLottoTicketBoxInterface {
  public rows: number;
  public cols: number;
  public values: number[];
  public selectedValues: number[];
  public selectedValuesSorted: number[];

  constructor(
    id: number,
    createdOn: Date,

    rows: number,
    cols: number,
    values: number[],
    selectedValues: number[],
    selectedValuesSorted: number[]
  ) {
    super(id, createdOn);

    this.rows = rows;
    this.cols = cols;
    this.values = values;
    this.selectedValues = selectedValues;
    this.selectedValuesSorted = selectedValuesSorted;
  }
}