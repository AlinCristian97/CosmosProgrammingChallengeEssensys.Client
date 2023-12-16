export interface BackendLottoTicketBoxInterface {
  id: number;
  createdOn: Date;

  rows: number;
  cols: number;
  values: number[];
  selectedValues: number[];
  selectedValuesSorted: number[];
}