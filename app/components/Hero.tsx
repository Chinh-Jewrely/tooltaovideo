'use client';
import { useEffect, useRef } from 'react';

const stats = [
    { value: '< 5 phút', label: 'Nghiên cứu Trend' },
    { value: '4 Bước', label: 'Quy trình hoàn chỉnh' },
    { value: '3 Kênh', label: 'Đăng tải đồng thời' },
    { value: '100%', label: 'Tự động hóa' },
];

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    }, []);

    return (
        <section id="overview" style={{
            position: 'relative', minHeight: '100vh',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '120px 24px 80px', overflow: 'hidden',
        }}>
            {/* Background orbs */}
            <div className="orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(124,58,237,0.5), transparent)', top: '-100px', left: '-200px' }} />
            <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(236,72,153,0.35), transparent)', top: '100px', right: '-150px', animationDelay: '3s' }} />
            <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(6,182,212,0.25), transparent)', bottom: '0px', left: '30%', animationDelay: '6s' }} />

            <div ref={ref} style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860 }}>
                {/* Badge */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
                    <span className="badge">✨ Nền Tảng AI Sản Xuất Content Thế Hệ Mới</span>
                </div>

                {/* Headline */}
                <h1 style={{ fontSize: 'clamp(38px, 6vw, 76px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-1.5px', marginBottom: 24 }}>
                    Từ Ý Tưởng Đến<br />
                    <span className="gradient-text">Video Viral</span><br />
                    Chỉ Trong Vài Phút
                </h1>

                <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 40px', fontWeight: 400 }}>
                    AI nghiên cứu xu hướng → Tự viết kịch bản → Render video → Đăng tải đa kênh. Bạn chỉ cần một cái bấm.
                </p>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 72 }}>
                    <a href="#step1" className="btn-primary" style={{ textDecoration: 'none', fontSize: 16, padding: '16px 40px' }}>
                        🚀 Xem Quy Trình Demo
                    </a>
                    <a href="#pricing" className="btn-secondary" style={{ textDecoration: 'none', fontSize: 16, padding: '16px 36px' }}>
                        📋 Xem Bảng Giá
                    </a>
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, maxWidth: 760, margin: '0 auto' }}>
                    {stats.map((s, i) => (
                        <div key={i} className="glass" style={{ padding: '20px 12px', textAlign: 'center' }}>
                            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 22, background: 'linear-gradient(135deg,#A855F7,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 4 }}>
                                {s.value}
                            </div>
                            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.5 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Cuộn xuống để khám phá</span>
                <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }} />
            </div>

            <style>{`@media(max-width:600px){.stat-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
        </section>
    );
}
