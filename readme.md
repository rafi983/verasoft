# Vera Software Solutions (Next.js)

This project is a component-based Next.js App Router conversion of the original Vera template.

## Stack

- Next.js `16.2.4` (App Router)
- React `19.2.4`
- `styled-components` for custom/global template styling
- Bootstrap + Font Awesome CSS for template utility and icon classes

## Project Structure

- `app/` - App Router routes and root layout
- `components/site/` - site sections (`SiteNavbar`, `HomeContent`, `SiteFooter`, `PrivacyContent`)
- `lib/StyledComponentsRegistry.tsx` - styled-components SSR registry for App Router
- `components/site/SiteGlobalStyles.tsx` - template custom styles injected via styled-components
- `public/images/` - site images used by sections/components

## Run Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

Lint:

```bash
npm run lint
```

## Notes

- Legacy template files (`index.html`, `privacy.html`, `scss/`, `js/`) are removed from runtime usage.
- Styling parity is maintained through Bootstrap + Font Awesome imports and styled-components global template rules.
