function initApplication() {
  var color = {
    primary: '#1a73e8',
    production: '#eb391a',
    sandbox: '#fa6900',
    uat: '#fa6900'
  };
  var url = window.location.href;
  if (url.includes('prod')) {
    var color = color.production;
  } else if (url.includes('sandbox')) {
    var color = color.sandbox;
  } else if (url.includes('uat')) {
    var color = color.uat;
  }
  if (typeof color !== 'undefined') {
    var container = document.querySelector('.cfc-platform-bar-container');
    container.style.transition = 'all .2s ease-in-out';
    container.style.backgroundColor = color;
    setTimeout(() => {
      var flashColor = color.primary;
      if (url.includes('prod')) {
        flashes = 6;
        var flash = setInterval(() => {
          if (flashColor === color.primary) {
            flashColor = color;
          } else {
            flashColor = color.primary;
          }
          container.style.backgroundColor = flashColor;
          if (flashes === 0) {
            clearInterval(flash);
          }
          flashes--;
        }, 750);
      }
    }, 3000);
  }
}
document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'complete') {
    initApplication();
  }
});

