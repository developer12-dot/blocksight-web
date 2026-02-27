export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-[1100px] mx-auto px-6 md:px-14 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs text-muted">© 2026 BlockSight. All rights reserved.</span>
        <div className="flex gap-6">
          {['Twitter', 'Discord', 'Docs', 'Privacy'].map(l => (
            <a key={l} href="#" className="text-xs text-muted hover:text-body transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
