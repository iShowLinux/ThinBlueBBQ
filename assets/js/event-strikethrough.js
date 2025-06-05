document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const eventItems = document.querySelectorAll('.event-item');

    eventItems.forEach(item => {
        const dateText = item.querySelector('.event-date').textContent;
        // Parse the date assuming it's in 2025
        const eventDateParts = dateText.split(' ');
        const dayRange = eventDateParts[0].split('-');
        const endDay = dayRange.length > 1 ? parseInt(dayRange[1], 10) : parseInt(dayRange[0], 10);
        const month = eventDateParts[1].toUpperCase();
        // Map month abbreviation to number
        const monthMap = {
            'JAN': 0, 'FEB': 1, 'MAR': 2, 'APR': 3, 'MAY': 4, 'JUN': 5,
            'JUL': 6, 'AUG': 7, 'SEP': 8, 'OCT': 9, 'NOV': 10, 'DEC': 11
        };
        const monthNum = monthMap[month];
        const eventDate = new Date(2025, monthNum, endDay);

        // Check if the event date is in the past
        if (currentDate > eventDate) {
            item.querySelector('.event-date').style.textDecoration = 'line-through';
            item.querySelector('.event-details').style.textDecoration = 'line-through';
        }
    });
});
