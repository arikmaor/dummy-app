import { writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const shapes = ['square', 'circle', 'star'];
const colors = ['red', 'lightblue', 'green', 'pink', 'yellow', 'purple'];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const shapesData = {
  shapes: Array.from({ length: 4 }, () => ({
    shape: getRandomElement(shapes),
    color: getRandomElement(colors),
  })),
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'src/shapes.json');

async function createShapesJson() {
  try {
    await writeFile(filePath, JSON.stringify(shapesData, null, 2));
    console.log('File shapes.json has been created successfully.');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

createShapesJson();

