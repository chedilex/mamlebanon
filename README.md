# MAM Lebanon — Arabic-first mobile application

## Run
Open `index.html` in a modern browser, or upload the entire folder to static hosting.

## Project structure
- `index.html` — app shell and semantic markup
- `assets/style.css` — all application styling, layout, spacing, RTL/LTR and responsive rules
- `assets/app.js` — navigation, page rendering, language switching, settings, and prototype account interactions
- `pages/` — direct links to individual application screens
- `manifest.webmanifest` — installable app metadata

## Arabic and direction
The application starts in Arabic with `lang="ar"` and `dir="rtl"`. The first-load script also sets Arabic/RTL before the main stylesheet and application render. If the user previously chose French or English, that saved choice is restored. French and English use LTR.

## Design notes
- The baby-image hero and legacy brochure sections have been removed entirely.
- The home screen now uses an abstract orange/black gradient card, without the previous background photo.
- There is no traditional website footer.
- CSS and JavaScript are separate files.
- Layout uses logical spacing properties, responsive grids, safe-area insets, and mobile bottom navigation.

## Production notes
Login/profile are local prototype interactions only, not secure authentication. The AI page is a UI placeholder and needs a secure server-side API integration. Daily readings require verified liturgical content. News/events need an admin content system.


## اللغة والاتجاه والخط
- يبدأ التطبيق باللغة العربية وباتجاه RTL عند أول تشغيل بعد هذا التحديث.
- عند اختيار Français أو English يتحول اتجاه التطبيق بالكامل إلى LTR.
- عند اختيار العربية يعود الاتجاه إلى RTL.
- يتم حفظ اختيار اللغة في localStorage ويُستعاد في الزيارات التالية.
- الخط المستخدم في جميع أجزاء التطبيق هو Cairo.


## Profile, accounts and notifications (v3)
- Profile: picture (camera/gallery), name, position in council, date of birth, phone, access, policy, account settings, delete account.
- Accounts are stored **locally on the device** (passwords hashed). Real multi-device accounts and the *Access* level need a backend.
- Notifications page: enable + **Send test notification**. It uses the service worker (`sw.js`), so the app must be served over **HTTPS** (or localhost); it will not work from `file://`. On iPhone (iOS 16.4+) add the app to the Home Screen first.
- `sw.js` already handles server `push` events; sending real pushes from a server (when the app is closed) needs VAPID keys + a push backend.

- Readings page: custom month calendar (localized, RTL/LTR aware). The selected date drives the readings title; texts stay placeholders until verified content is added.
- The back button is hidden on the four tab pages (Readings, News, Assistant, Profile) and shown on sub-pages.

- News: edit the `NEWS` array in `assets/app.js` (id, image, type, date, and ar/en/fr title, description, source, body). Current items and the SVG images in `assets/news/` are samples. Tapping a card opens the article page.

- Logo: `assets/logo-mark.png` (header), `assets/icons/*` (app icons, generated from the official logo), `badge-96.png` (monochrome notification badge). News cards show a small 1:1 image, type, date, title and source (no description).
