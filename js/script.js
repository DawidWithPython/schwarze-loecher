document.addEventListener('DOMContentLoaded', function() {
  if (document.referrer === "" || !document.referrer.includes(window.location.hostname)) alert("This site was created as a school project.");
});