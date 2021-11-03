'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        // // const results = ['大吉', '中吉', '凶', '末吉'];
        // const results = ['大吉', '大吉', '大吉', '大吉', '凶'];
        // btn.textContent = results[Math.floor(Math.random() * results.length)];
        const n = Math.random();
        if (n < 0.01) {
            btn.textContent = 'スーパー'; // 1%
        } else if (n < 0.1) {
            btn.textContent = '大吉'; // 9%
        } else if (n < 0.3) {
            btn.textContent = '中吉'; // 20%
        } else if (n < 0.65) {
            btn.textContent = '吉'; // 35%
        } else if (n < 0.9) {
            btn.textContent = '末吉'; // 25%
        } else if (n < 0.99) {
            btn.textContent = '凶'; // 9%
        } else {
            btn.textContent = 'ヤバイ凶'; // 1%
        }

    })
}