const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('La página debería decir "¡Hola mundo!" en un h1', () => {
    const filePath = path.join(__dirname, '../index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    const dom = new JSDOM(html);
    const h1Content = dom.window.document.querySelector('h1').textContent;

    expect(h1Content).toBe('¡Hola mundo!');
});
