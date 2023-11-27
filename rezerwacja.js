document.addEventListener('DOMContentLoaded', function () {
    var appointmentTimeInput = document.getElementById('appointmentTime');

    appointmentTimeInput.addEventListener('input', function () {
      var selectedTime = appointmentTimeInput.value;
      var minTime = appointmentTimeInput.min;
      var maxTime = appointmentTimeInput.max;

      if (selectedTime < minTime || selectedTime > maxTime) {
        alert('Proszę wybrać godzinę w zakresie od ' + minTime + ' do ' + maxTime);
        appointmentTimeInput.setCustomValidity('Proszę wybrać godzinę w zakresie od ' + minTime + ' do ' + maxTime);
      } else {
        appointmentTimeInput.setCustomValidity('');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var appointmentTimeInput = document.getElementById('appointmentTime');
    appointmentTimeInput.addEventListener('input', function() {
      var selectedTime = new Date('1970-01-01T' + appointmentTimeInput.value + 'Z');
      var minutes = selectedTime.getHours() * 60 + selectedTime.getMinutes();
      var roundedMinutes = Math.round(minutes / 15) * 15;
      selectedTime.setMinutes(roundedMinutes % 60);
      selectedTime.setHours(Math.floor(roundedMinutes / 60));
      var formattedTime = selectedTime.toTimeString().substring(0, 5);
      appointmentTimeInput.value = formattedTime;
    });
  });

  function handleCalendarClick(day, month, year, time) {
    // Ustaw wartości w formularzu
    var formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    document.getElementById('appointmentDate').value = formattedDate; // Ustaw pełną datę
    document.getElementById('appointmentTime').value = time; // Ustaw godzinę

    // Scroll to the form
    var form = document.getElementById("appointmentForm");
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Optionally, add a visual highlight by adding a CSS class
    form.classList.add("highlighted");

    // Optionally, remove the highlight after a delay
    setTimeout(function () {
        form.classList.remove("highlighted");
    }, 2000); // 2000 milliseconds (2 seconds) in this example
}