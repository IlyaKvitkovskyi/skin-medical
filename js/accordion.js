const priceItems = document.querySelectorAll('[data-price-item]');

priceItems.forEach((item) => {
  const button = item.querySelector('[data-price-button]');
  const icon = item.querySelector('[data-price-button-icon]');
  const content = item.querySelector('[data-price-content]');

  window.addEventListener('resize', () => {
    if (content.getAttribute('data-price-content') === 'open') {
      content.style.height = 'auto';

      const contentHeight = content.scrollHeight;
      content.style.height = `${contentHeight}px`;
    }
  });

  button.addEventListener('click', () => {
    if (content.getAttribute('data-price-content') !== 'open') {
      const contentHeight = content.scrollHeight;

      icon.setAttribute('data-price-button-icon', 'open');
      content.setAttribute('data-price-content', 'open');
      content.style.height = `${contentHeight}px`;
    } else {
      icon.setAttribute('data-price-button-icon', 'closed');
      content.setAttribute('data-price-content', 'closed');
      content.style.height = '0';
    }
  });
});
