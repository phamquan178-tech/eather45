const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo(0, 0); });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'screenshot-hero-fixed.png', fullPage: false });

  // Mobile check
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo(0, 0); });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'screenshot-hero-mobile.png', fullPage: false });

  await browser.close();
  console.log('Done');
})();
