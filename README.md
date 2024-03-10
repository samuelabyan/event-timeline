# Bible Timeline
Bible timeline web view based on Google Spreadsheet. (In development)

[Live preview](https://samuelabyan.github.io/bible-timeline/) of the timeline. See public [Google Sheet of the events](https://docs.google.com/spreadsheets/d/e/2PACX-1vSxPSGsbzCKZ94OqW-YqdDkgVHHQFHqqqIthVMwkhlYaVqUL1CMMg9JapgIqUmx8hP6F9HvLHItW59Y/pubhtml).

### Description
This simple script provides a user-friendly interface to view events stored in a Google Sheet as a dynamic vertical timeline. This app is designed to efficiently display a large number of events in a chronological order, allowing users to explore and search through them easily.

**Data Fetching**: The app fetches event data from a public Google Sheet provided by the user. It parses the HTML content of the sheet to extract relevant event information such as sequence number, date, event name, description, and tags.

**Dynamic Loading**: To optimize performance and avoid overwhelming the user with a large dataset, the app dynamically loads events in batches of 20 as the user scrolls down the page. This ensures smooth browsing experience and reduces initial loading time.

**Search Functionality**: Users can search for specific events using the search input field provided. The app filters events based on the search query, including event name, description, and date. This allows users to quickly find events of interest without manually browsing through the entire timeline.

### Updates
**March 10, 2024**: Updated structure and script. Timeline now uses Google Sheets as database.

### Future changes
- Update user interface to make it more friendly.
