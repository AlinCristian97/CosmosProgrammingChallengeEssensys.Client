export class LottoTicketBoxModel {
  private readonly numberOfSelectedValues: number = 6;

  private rows: number;
  private cols: number;
  private values: number[];
  private selectedValues: number[];

  getRows(): number {
    return this.rows;
  }

  getCols(): number {
    return this.cols;
  }

  getValues(): number[] {
    return this.values;
  }

  getSelectedValues(): number[] {
    return this.selectedValues;
  }

  getSelectedValuesSorted(): number[] {
    const selectedValuesCopy = [...this.selectedValues];
    const sortedValues = selectedValuesCopy.sort((a, b) => a - b);
    return sortedValues;
  }

  constructor() {
    this.rows = 7;
    this.cols = 7;
    this.values = Array.from({ length: (this.rows * this.cols) }, (_, index) => index + 1);

    this.selectedValues = this.getRandomSelectedValues();
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
}