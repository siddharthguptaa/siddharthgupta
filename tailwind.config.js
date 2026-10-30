/** Colors point at CSS variables in src/index.css, so light and dark mode
 *  switch by changing the variables, and you can re-theme the whole site
 *  by editing a few hex values there. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'on-accent': 'var(--on-accent)',
        signal: 'var(--signal)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1080px',
      },
    },
  },
  plugins: [],
};
