// src/utils/scroll.js
// Central place for all programmatic scrolling. Keeping this explicit (rather
// than relying on a global CSS `scroll-behavior: smooth`) avoids surprise
// animated scrolls on hard page/route resets, which can visually "fight"
// with a user's own scroll input.

export const NAV_HEIGHT = 80; // matches Navbar's h-20

export function scrollToId(id, { offset = NAV_HEIGHT, behavior = 'smooth' } = {}) {
    const el = document.getElementById(id);
    if (!el) return false;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior });
    return true;
}

export function resetScroll() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

// Reference-counted body scroll lock: safe when multiple overlays (e.g. a
// lightbox and a popup) want to lock scroll at the same time, since each
// unlock only restores scrolling once every locker has released.
let lockCount = 0;
let originalOverflow = '';

export function lockScroll() {
    if (lockCount === 0) {
        originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    }
    lockCount += 1;
}

export function unlockScroll() {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) {
        document.body.style.overflow = originalOverflow;
    }
}
