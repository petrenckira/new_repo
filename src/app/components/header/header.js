require('./header.less'); // example of including component's styles
window.addEventListener('DOMContentLoaded', function () {
  new StickyHeader();
});


function StickyHeader() {
  window.addEventListener('scroll', this.scrollHeader);
}

StickyHeader.prototype.scrollHeader = function () {
  this.body = document.querySelector('body');
  if (window.pageYOffset > 100){
    this.body.classList.add("body-fixed");
  }
  else{
    this.body.classList.remove("body-fixed");
  }
};
