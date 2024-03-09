// Function to fetch data from a publicly accessible Google Sheet
  function fetchDataFromSheet() {
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSxPSGsbzCKZ94OqW-YqdDkgVHHQFHqqqIthVMwkhlYaVqUL1CMMg9JapgIqUmx8hP6F9HvLHItW59Y/pubhtml';

    fetch(sheetUrl)
      .then(response => response.text())
      .then(html => {
        displayTimelineFromSheet(html);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  // Function to display timeline based on fetched data from the sheet
  function displayTimelineFromSheet(html) {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    const table = document.createElement('table');
    table.innerHTML = html;
    const rows = table.querySelectorAll('tr');

    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      if (cells.length >= 4) {
        const event = cells[2].innerHTML; // Get event HTML content
        const description = cells[3].innerHTML; // Get description HTML content
        const date = cells[1].innerText; // Get event date

        const li = document.createElement('li');
        li.innerHTML = `<span>${event}</span><div>${parseDescription(description)}</div><small>${date}</small>`;
        timeline.appendChild(li);
      }
    });
  }

  // Function to parse description and handle hyperlinks
  function parseDescription(description) {
    // Regular expression to match hyperlinks
    const linkRegex = /HYPERLINK\s+"([^"]+)"\s+([^"]+)/g;
    return description.replace(linkRegex, '<a href="$1">$2</a>');
  }

  // Function to filter timeline based on search input
  function filterTimeline() {
    const searchInput = document.getElementById('searchInput').value.toUpperCase();
    const timeline = document.getElementById('timeline');
    const events = timeline.getElementsByTagName('li');

    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      const text = event.innerText.toUpperCase();
      if (text.indexOf(searchInput) > -1) {
        event.style.display = '';
      } else {
        event.style.display = 'none';
      }
    }
  }

  // Initial data fetch
  fetchDataFromSheet();

  // Event listener for search input
  document.getElementById('searchInput').addEventListener('input', filterTimeline);
