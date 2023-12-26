// Function to handle form submission
document.getElementById('timelineForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const sourcesText = document.getElementById('sourcesText').value;
  const sourcesLink = document.getElementById('sourcesLink').value;
  const year = document.getElementById('year').value;
  const era = document.getElementById('era').value;
  const yearDesc = document.getElementById('yearDesc').value;

  const newItem = {
    title,
    description,
    sources: {
      text: sourcesText,
      link: sourcesLink
    },
    year: `${year} ${era}`,
    yearDescription: yearDesc
  };

  let timelineData = localStorage.getItem('timeline');
  timelineData = timelineData ? JSON.parse(timelineData) : [];
  timelineData.push(newItem);
  localStorage.setItem('timeline', JSON.stringify(timelineData));

  alert('Item added successfully!');
  // You may redirect the user to the view page here
});
