// Function to display all timeline items in a list
function displayTimelineList() {
  let timelineData = localStorage.getItem('timeline');
  timelineData = timelineData ? JSON.parse(timelineData) : [];

  const timelineList = document.getElementById('timelineList');
  timelineList.innerHTML = '';

  timelineData.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.title} - ${item.year}`;
    timelineList.appendChild(listItem);
  });
}

// Function to filter timeline items
document.getElementById('filterButton').addEventListener('click', function() {
  const filterText = document.getElementById('filter').value.toLowerCase();

  let timelineData = localStorage.getItem('timeline');
  timelineData = timelineData ? JSON.parse(timelineData) : [];

  const filteredItems = timelineData.filter(item => {
    return item.title.toLowerCase().includes(filterText);
  });

  const timelineList = document.getElementById('timelineList');
  timelineList.innerHTML = '';

  filteredItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.title} - ${item.year}`;
    timelineList.appendChild(listItem);
  });
});

// Show add item form when the 'Add New Item' button is clicked
document.getElementById('addItemButton').addEventListener('click', function() {
  const addItemForm = document.getElementById('addItemForm');
  addItemForm.style.display = 'block';
});

// Function to add a new source input field
document.getElementById('addSourceButton').addEventListener('click', function() {
  const sourcesDiv = document.getElementById('sources');
  const newSource = document.createElement('div');
  newSource.classList.add('source');
  newSource.innerHTML = `
    <label for="sourcesText">Sources Text:</label>
    <input type="text" class="sourcesText" required><br>
    <label for="sourcesLink">Sources Link:</label>
    <input type="text" class="sourcesLink" required><br>
  `;
  sourcesDiv.appendChild(newSource);
});

// Function to handle form submission
document.getElementById('timelineForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const sources = document.querySelectorAll('.source');
  const sourcesArray = [];
  sources.forEach(source => {
    const sourcesText = source.querySelector('.sourcesText').value;
    const sourcesLink = source.querySelector('.sourcesLink').value;
    sourcesArray.push({ text: sourcesText, link: sourcesLink });
  });
  const year = document.getElementById('year').value;
  const era = document.getElementById('era').value;
  const yearDesc = document.getElementById('yearDesc').value;

  const newItem = {
    title,
    description,
    sources: sourcesArray,
    year: `${year} ${era}`,
    yearDescription: yearDesc
  };

  let timelineData = localStorage.getItem('timeline');
  timelineData = timelineData ? JSON.parse(timelineData) : [];
  timelineData.push(newItem);
  localStorage.setItem('timeline', JSON.stringify(timelineData));

  alert('Item added successfully!');
  // Reload the list after adding a new item
  displayTimelineList();
  // Hide the form after adding a new item
  document.getElementById('addItemForm').style.display = 'none';
});

// Display all timeline items on page load
displayTimelineList();
