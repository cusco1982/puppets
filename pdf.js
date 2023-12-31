'use strict';

const puppeteer = require('puppeteer');

(async () => {

  // headless by default ---- { headless: new } for the new Headless mode
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