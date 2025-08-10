// app/components/CookiePrefsLink.tsx
'use client';

export default function CookiePrefsLink({ className = '' }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        // ejemplo: reabrir el banner si guardaste algo en localStorage
        localStorage.removeItem('audcadpro_cookie_consent');
        window.location.reload();
      }}
    >
      Cambiar preferencias de cookies
    </button>
  );
}
