## Add scroll-to-top button

Add a floating "back to top" button to the landing page (`src/routes/index.tsx`).

### Behavior
- Fixed position: bottom-right (`fixed bottom-6 right-6 z-50`).
- Hidden until the user scrolls past ~400px, then fades in.
- Click smooth-scrolls window to top.
- Accessible: `aria-label="Scroll to top"`.

### Implementation
- New `ScrollToTopButton` component inside `src/routes/index.tsx`.
- Uses `useState` + `useEffect` with a `scroll` listener to toggle visibility.
- Renders a shadcn `Button` (variant `default`, `size="icon"`, rounded-full) with the `ArrowUp` icon from `lucide-react`.
- Mounted once at the bottom of the page layout.

No other files change.