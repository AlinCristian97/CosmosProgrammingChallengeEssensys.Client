export class LottoTicketBoxModel {
  private readonly numberOfSelectedValues: number = 6;

  private rows: number;
  private cols: number;
  private values: number[];
  private selectedValues: number[];
  private selectedValuesSorted: number[];

  public getRows(): number {
    return this.rows;
  }

  public getCols(): number {
    return this.cols;
  }

  public getValuesCopy(): number[] {
    const valuesCopy: number[] = [...this.values];
    return valuesCopy;
  }

  public getSelectedValuesCopy(): number[] {
    const selectedValuesCopy: number[] = [...this.selectedValues];
    return selectedValuesCopy;
  }

  public getSelectedValuesSortedCopy(): number[] {
    const selectedValuesSortedCopy: number[] = [...this.selectedValuesSorted];
    return selectedValuesSortedCopy;
  }

  constructor() {
    this.rows = 7;
    this.cols = 7;
    this.values = Array.from({ length: (this.rows * this.cols) }, (_, index) => index + 1);

    this.selectedValues = this.getRandomSelectedValues();
    this.selectedValuesSorted = this.sortValues(true);
  }

  private getRandomSelectedValues(): number[] {
    const arrayCopy = [...this.values];

    let selectedValues: number[] = [];

    for (let i = 0; i < this.numberOfSelectedValues; i++) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      const randomValue = arrayCopy.splice(randomIndex, 1)[0];
      selectedValues.push(randomValue);
    }

    return selectedValues;
  }

  private sortValues(ascending: boolean): number[] {
    const selectedValuesCopy = [...this.selectedValues];

    let sortedValues: number[];

    if (ascending === true) {
      sortedValues = selectedValuesCopy.sort((a, b) => a - b);
    } else {
      sortedValues = selectedValuesCopy.sort((a, b) => b - a);
    }

    return sortedValues;
  }
}