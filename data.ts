const data: Record<number, Datum[]> = {
  2023: [
    {
      date: "2023-01-01",
      alcohol: 0,
      instantCoffee: 4,
    },
    {
      date: "2023-01-02",
      alcohol: 0,
      instantCoffee: 3,
    },
    {
      date: "2023-01-03",
      alcohol: 0,
      instantCoffee: 2,
    },
    {
      date: "2023-01-04",
      alcohol: 0,
      instantCoffee: 2,
    },
    {
      date: "2023-01-05",
      alcohol: 0,
      instantCoffee: 2,
    },
    {
      date: "2023-01-06",
      alcohol: 0,
      instantCoffee: 4,
    },
    {
      date: "2023-01-07",
      alcohol: 0,
      instantCoffee: 5,
    },
    {
      date: "2023-01-08",
      alcohol: 0,
      instantCoffee: 1,
    },
    {
      date: "2023-01-09",
      alcohol: 0,
      instantCoffee: 2,
      coffee: 3,
    },
    {
      date: "2023-01-10",
      alcohol: 0,
      instantCoffee: 0,
    },
  ],
};

interface Datum {
  date: `${number}-${number}-${number}`;
  /**
   * Counted in drinks
   */
  alcohol: number;
  /**
   * Counted in cups
   */
  instantCoffee: number;
  /**
   * Counted in cups, excluding instant coffee
   */
  coffee?: number;
}
