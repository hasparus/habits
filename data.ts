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
      instantCoffee: 1,
      coffee: 4,
    },
    {
      date: "2023-01-11",
      alcohol: 0,
      instantCoffee: 1,
      coffee: 3,
    },
    {
      date: "2023-01-12",
      alcohol: 0,
      instantCoffee: 4,
      coffee: 4,
    },
    {
      date: "2023-01-13",
      alcohol: 1,
      instantCoffee: 0,
      coffee: 1,
    },
    {
      date: "2023-01-14",
      alcohol: 0,
      instantCoffee: 0,
      coffee: 1,
    },
    {
      date: "2023-01-15",
      alcohol: 0,
      instantCoffee: 0,
      coffee: 3,
    },
    {
      date: "2023-01-16",
      alcohol: 0,
      instantCoffee: 1,
      coffee: 2,
    },
    {
      date: "2023-01-17",
      alcohol: 0,
      instantCoffee: 3,
      coffee: 3,
    },
    {
      date: "2023-01-18",
      alcohol: 7,
      instantCoffee: 1,
      coffee: 2,
    },
    {
      date: "2023-01-19",
      alcohol: 3,
      instantCoffee: 2,
      coffee: 0,
    },
    {
      date: "2023-01-20",
      alcohol: 5,
      instantCoffee: 1,
      coffee: 2,
    },
    {
      date: "2023-01-21",
      alcohol: 0,
      instantCoffee: 2,
      coffee: 2,
    },
    {
      date: "2023-01-22",
      alcohol: 0,
      instantCoffee: 0,
      coffee: 3,
    },
    {
      date: "2023-01-23",
      alcohol: 0,
      instantCoffee: 0,
      coffee: 4,
    },
    {
      date: "2023-01-24",
      alcohol: 0,
      instantCoffee: 0,
      coffee: 3,
    },
    {
      date: "2023-01-25",
      alcohol: 1,
      instantCoffee: 0,
      coffee: 4,
    },
    {
      date: "2023-01-26",
      alcohol: 0,
      instantCoffee: 0,
      coffee: 4,
    },
    {
      date: "2023-01-27",
      alcohol: 0,
      instantCoffee: 0,
      coffee: 7,
    },
    {
      date: "2023-01-28",
      alcohol: 0,
      instantCoffee: 0,
      coffee: 3,
    },
    {
      date: "2023-01-29",
      alcohol: 0,
      instantCoffee: 0,
      coffee: 3,
    },
    {
      date: "2023-01-30",
      alcohol: 0,
      instantCoffee: 1,
      coffee: 4,
    },
    {
      date: "2023-01-31",
      alcohol: 1, // Trying Carmenere wine the first time
      instantCoffee: 0,
      coffee: 7,
    },
    {
      date: "2023-02-01",
      alcohol: 2, // Carmenere wine on the hike & beer at the hotel
      instantCoffee: 0,
      coffee: 2,
    },
    {
      date: "2023-02-02",
      alcohol: 1,
      instantCoffee: 0,
      coffee: 4,
    },
    {
      date: "2023-02-03",
      alcohol: 2,
      instantCoffee: 0,
      coffee: 4,
    },
    {
      date: "2023-02-04",
      alcohol: 4, // beer in KrossBar and the karaoke bar
      instantCoffee: 0,
      coffee: 4,
    },
    {
      date: "2023-02-05",
      alcohol: 1,
      coffee: 1,
    },
    {
      date: "2023-02-06",
      alcohol: 0,
      coffee: 3,
    },
    {
      date: "2023-02-07",
      alcohol: 0,
      coffee: 8,
    },
    {
      date: "2023-02-08",
      alcohol: 1, // Baby Yoda in Insert Coin game pub with Joel
      coffee: 2,
    },
    {
      date: "2023-02-09",
      alcohol: 0,
      coffee: 4,
    },
    {
      date: "2023-02-10",
      alcohol: 0,
      coffee: 4,
    },
    {
      date: "2023-02-11",
      alcohol: 0,
      coffee: 3,
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
  instantCoffee?: number;
  /**
   * Counted in cups, excluding instant coffee
   */
  coffee?: number;
}
