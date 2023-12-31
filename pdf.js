'use strict';

const puppeteer = require('puppeteer');

(async () => {

  // headless by default
  // const browser = await puppeteer.launch({ headless: false });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {
    waitUntil: 'networkidle2',
  });

  await page.pdf({
    path: 'hn.pdf',
    format: 'letter',
  });

  await browser.close();
})();