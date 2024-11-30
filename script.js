// Add any interactive effects like floating elements
window.onload = () => {
    const floatingText = document.createElement('div');
    floatingText.innerText = "Welcome to My Portfolio!";
    floatingText.style.position = "fixed";
    floatingText.style.bottom = "20px";
    floatingText.style.right = "20px";
    floatingText.style.background = "#3498db";
    floatingText.style.color = "white";
    floatingText.style.padding = "10px";
    floatingText.style.borderRadius = "5px";
    document.body.appendChild(floatingText);
    setTimeout(() => floatingText.remove(), 5000);
};
