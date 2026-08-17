// Demo-only contact form handler for Harborlight Insurance.
// This does NOT send data anywhere — it's purely for demo/mock purposes.
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var name = document.getElementById('name').value.trim();

    status.textContent = 'Thanks, ' + (name || 'there') + '! This is a demo form, so no message was actually sent — but in a live site, our support team would follow up shortly.';

    form.reset();
  });
});
