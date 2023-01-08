const data: Record<number, Datum[]> = {
  2023: [
    {
      date: "2023-01-01",
      alcohol: 0,
    },
    {
      date: "2023-01-02",
      alcohol: 0,
    },
    {
      date: "2023-01-03",
      alcohol: 0,
    },
    {
      date: "2023-01-04",
      alcohol: 0,
    },
    {
      date: "2023-01-05",
      alcohol: 0,
    },
    {
      date: "2023-01-06",
      alcohol: 0,
    },
    {
      date: "2023-01-07",
      alcohol: 0,
    },
    {
      date: "2023-01-08",
      alcohol: 0,
    },
  ],
};

interface Datum {
  date: `${number}-${number}-${number}`;
  /**
   * Counted in drinks
   */
  alcohol: number;
}
