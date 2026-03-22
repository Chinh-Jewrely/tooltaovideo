'use client';
import { useState, useEffect } from 'react';

const navItems = [
    { label: 'Tổng Quan', href: '#overview' },
    { label: 'Bước 1: Crawl', href: '#step1' },
    { label: 'Bước 2: Kịch Bản', href: '#step2' },
    { label: 'Bước 3: Video', href: '#step3' },
    { label: 'Bước 4: Đăng Tải', href: '#step4' },
    { label: 'Bảng Giá', href: '#pricing' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(15,7,40,0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
                {/* Logo */}
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                    <div style={{
                        width: 38, height: 38, borderRadius: 10,
                        background: 'linear-gradient(135deg, #7C3AED, #EC4899)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 18, boxShadow: '0 4px 16px rgba(124,58,237,0.5)'
                    }}>🎬</div>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: '-0.3px' }}>
                        Tooltao<span style={{ background: 'linear-gradient(135deg, #A855F7, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Video</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }} className="desktop-nav">
                    {navItems.map(item => (
                        <a key={item.href} href={item.href} className="nav-link"
                            style={{ padding: '6px 14px', borderRadius: 8, transition: 'all 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                        >{item.label}</a>
                    ))}
                </div>

                {/* CTA */}
                <a href="#pricing" className="btn-primary" style={{ fontSize: 14, padding: '10px 22px', textDecoration: 'none' }}>
                    Xem Demo Ngay →
                </a>
            </div>

            <style>{`@media(max-width:900px){.desktop-nav{display:none!important}}`}</style>
        </nav>
    );
}
