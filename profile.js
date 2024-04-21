$(document).ready(function () {
    $(".bio-toggle").click(function () {
      $(this).prev(".profile-bio").toggleClass("hidden");
      if ($(this).text() === "Read more") {
        $(this).text("Read less");
      } else {
        $(this).text("Read more");
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const moreInfo = document.querySelector('.more-info');
  
    readMoreBtn.addEventListener('click', function() {
      if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        readMoreBtn.textContent = 'Read less';
      } else {
        moreInfo.style.display = 'none';
        readMoreBtn.textContent = 'Read more';
      }
    });
  });
  