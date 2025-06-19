// Dynamically adjust font sizes based on viewport width
function adjustLabelFontSizes() {
  const labels = document.querySelectorAll('.sponsor-label, .affiliate-label');
  const viewportWidth = window.innerWidth;
  
  // Base sizes for different screen sizes
  const baseSize = viewportWidth < 480 ? 12 : // Mobile
                   viewportWidth < 768 ? 14 : // Small tablet
                   16; // Desktop
  
  // Apply font size to all labels
  labels.forEach(label => {
    label.style.fontSize = `${baseSize}px`;
    label.style.fontWeight = 'bold';
    label.style.marginBottom = '0.5rem';
  });
}

// Initial adjustment
adjustLabelFontSizes();

// Adjust on window resize
window.addEventListener('resize', adjustLabelFontSizes);
