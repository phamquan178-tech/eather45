const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

  // Disable smooth scroll
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = 'auto';
  });

  // Screenshot 1: Header + Hero (top of page)
  await page.evaluate(() => { window.scrollTo(0, 0); });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshot-hero.png', fullPage: false });

  // Screenshot 2: DNA section (~900px down)
  await page.evaluate(() => { window.scrollTo(0, 950); });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshot-dna.png', fullPage: false });

  // Screenshot 3: Footer (scroll to bottom)
  await page.evaluate(() => { window.scrollTo(0, document.body.scrollHeight); });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshot-footer.png', fullPage: false });

  await browser.close();
  console.log('Done');
})();
