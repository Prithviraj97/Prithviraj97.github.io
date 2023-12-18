document.addEventListener('DOMContentLoaded', function() {
    // Get the last modified date of the current page
    var lastModified = new Date(document.lastModified);

    // Format the date as MM/DD/YYYY
    var formattedDate = `${(lastModified.getMonth() + 1).toString().padStart(2, '0')}/${lastModified.getDate().toString().padStart(2, '0')}/${lastModified.getFullYear()}`;

    // Display the formatted date in the HTML
    document.getElementById('last-updated-date').textContent = formattedDate;
});
