function toggleDetails(projectId) {
  var detailsElement = document.getElementById(projectId);
  if (detailsElement.style.display === 'none' || detailsElement.style.display === '') {
    detailsElement.style.display = 'block';  // Show the details
  } else {
    detailsElement.style.display = 'none';   // Hide the details
  }
}