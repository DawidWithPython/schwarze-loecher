document.addEventListener('DOMContentLoaded', function() {
  if (document.referrer === "" || !document.referrer.includes(window.location.hostname)) alert("This GitHub repository and website is a project for physics class.");
});
