import { useEffect } from 'react';

export function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  // trava scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // fechar com ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* overlay */}
      <button
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Fechar modal"
      />

      {/* modal */}
      <div className="relative mx-auto w-full h-full mt-20 rounded-2xl bg-transparent p-6 ">
        {children}

        <button
          onClick={onClose}
          className="mt-4 rounded-lg bg-black px-4 py-2 text-white"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
