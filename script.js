
#### script.js

```javascript
const canvas = document.getElementById('fireCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawFlames() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < 50; i++) {
        let x = canvas.width / 2 + (Math.random() - 0.5) * 100;
        let y = canvas.height / 2 + Math.random() * 100;
        let radius = Math.random() * 10 + 5;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 100}, 0, 0.8)`;
        ctx.fill();
    }
}

setInterval(drawFlames, 100);
drawFlames();
