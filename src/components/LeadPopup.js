import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Contact from './Contact';
import { lockScroll, unlockScroll } from '../utils/scroll';

// 30s is the common sweet spot used by lead-gen tools (HubSpot, OptinMonster,
// Unbounce): long enough to signal real engagement, short enough not to miss
// visitors who leave quickly.
const POPUP_DELAY_MS = 30000;

const EXCLUDED_PATHS = ['/privacy', '/terms'];

const LeadPopup = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (EXCLUDED_PATHS.includes(location.pathname)) return;

        const alreadyShown = sessionStorage.getItem('makeship_popup_shown');
        const alreadySubmitted = sessionStorage.getItem('makeship_lead_submitted');
        if (alreadyShown || alreadySubmitted) return;

        const timer = setTimeout(() => {
            setOpen(true);
            sessionStorage.setItem('makeship_popup_shown', '1');
        }, POPUP_DELAY_MS);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('keydown', onKeyDown);
        lockScroll();
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            unlockScroll();
        };
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setOpen(false)}
        >
            <div
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <Contact variant="modal" onSubmitted={() => setTimeout(() => setOpen(false), 2000)} />
            </div>
        </div>
    );
};

export default LeadPopup;
