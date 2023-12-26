// Function to display timeline items
function displayTimeline() {
  let timelineData = localStorage.getItem('timeline');
  timelineData = timelineData ? JSON.parse(timelineData) : [];

  const timelineItemsContainer = document.getElementById('timelineItems');
  timelineItemsContainer.innerHTML = '';

  timelineData.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('timeline-item');
    itemElement.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p>Sources: <a href="${item.sources.link}" target="_blank">${item.sources.text}</a></p>
      <p>${item.year}</p>
      <p>${item.yearDescription}</p>
    `;
    timelineItemsContainer.appendChild(itemElement);
  });
}

// Call function to display timeline on page load
displayTimeline();
