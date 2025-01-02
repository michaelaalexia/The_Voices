const zCon = document.querySelector('.z_con');
const zoomLense = document.getElementById('zoomLense');
const zoomEnd = document.getElementById('zoomEnd');
const imageM = document.getElementById('imageM'); // Main image
const imageZ = document.getElementById('imageZ'); // Zoomed image

// Show lens and zoom result on hover
zCon.addEventListener('mouseenter', () => {
    zoomLense.style.display = 'block'; // Show the lens
    zoomEnd.style.display = 'block';  // Show the zoom result
});

// Hide lens and zoom result when the mouse leaves
zCon.addEventListener('mouseleave', () => {
    zoomLense.style.display = 'none'; // Hide the lens
    zoomEnd.style.display = 'none';  // Hide the zoom result
});

// Move lens and zoom image
zCon.addEventListener('mousemove', moveLens);

function moveLens(e) {
    const rect = zCon.getBoundingClientRect();

    // Calculate mouse position relative to the container
    const x = e.clientX - rect.left - (zoomLense.offsetWidth / 2);
    const y = e.clientY - rect.top - (zoomLense.offsetHeight / 2);

    // Limit lens position within the main image bounds
    const maxX = zCon.offsetWidth - zoomLense.offsetWidth;
    const maxY = zCon.offsetHeight - zoomLense.offsetHeight;
    const lensX = Math.max(0, Math.min(x, maxX));
    const lensY = Math.max(0, Math.min(y, maxY));

    // Position the lens
    zoomLense.style.left = `${lensX}px`;
    zoomLense.style.top = `${lensY}px`;

    // Calculate zoom factor
    const zoomFactorX = imageZ.offsetWidth / imageM.offsetWidth;
    const zoomFactorY = imageZ.offsetHeight / imageM.offsetHeight;

    // Move the zoomed image
    imageZ.style.left = `-${lensX * zoomFactorX}px`;
    imageZ.style.top = `-${lensY * zoomFactorY}px`;
}
