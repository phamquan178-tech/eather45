const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Email signup section (scroll near bottom of homepage)
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
  await page.evaluate(() => {
    const el = document.querySelector('section.py-24');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshot-email-signup.png', fullPage: false });

  // Contact page
  await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshot-contact.png', fullPage: false });

  await browser.close();
  console.log('Done');
})();
