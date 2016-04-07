# list-lover
A list for lovers of lists.

This experiment displays a scrollable list of 1,000,000 books, with an
ability to sort by author name or book title. Additionally, one can filter
on author gender or by book genre.

All 1mm items are represented by the application, and are immediately scrollable,
however only those within the viewport are rendered. Sorting and filtering is done
on the entire list.

There are additionally two indicators that will show.
- books in the "horror" genre, published on Halloween
- books in the "finance" genre, published on the last Friday of any month

Both indicators are represented as thick colored borders on the left side
of the list item. Halloween is orange; Finance is green.

## Install Dependencies
Before the application can run, the dependencies must be installed.

```bash
$ npm install
```

## Seeding
Data for this example application is provided by a JSON file. The file
should be created with the following command:

```bash
$ ./bin/seed -i 1000000
```

Optionally, one can enter a seed value to ensure records are generated
with expected data.

```bash
$ ./bin/seed -i 1000000 -s sumolist
```

## Running
To run, execute the following:

```bash
$ npm start
```

The application will be available at `localhost:3000`. It has been tested against Node 5.5.0 stable.
