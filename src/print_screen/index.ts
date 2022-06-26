import robot from 'robotjs';
import fs from 'fs';
import Jimp from 'jimp';

export const prnt_scrn = async(x: number, y: number) => {
  const size: number = 100;
  const robotScreen = robot.screen.capture(x - size, y - size, size * 2, size * 2);
  const image = new Jimp({
    'data': robotScreen.image,
    'width': robotScreen.width,
    'height': robotScreen.height
  });

  let pos = 0;
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
    image.bitmap.data[idx + 2] = robotScreen.image.readUInt8(pos++);
    image.bitmap.data[idx + 1] = robotScreen.image.readUInt8(pos++);
    image.bitmap.data[idx + 0] = robotScreen.image.readUInt8(pos++);
    image.bitmap.data[idx + 3] = robotScreen.image.readUInt8(pos++);
  });
  const base64Image = await image.getBase64Async(Jimp.MIME_PNG);
  const base64 = base64Image.split(',')[1];
  return base64;
}; 
