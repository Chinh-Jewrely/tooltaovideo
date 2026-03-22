'use client';
import { useState, useEffect } from 'react';

const trustLogos = [
    { icon: '▶️', name: 'YouTube API' },
    { icon: '🎵', name: 'TikTok For Business' },
    { icon: '🤖', name: 'OpenAI GPT-4o' },
    { icon: '📘', name: 'Meta Graph API' },
    { icon: '☁️', name: 'AWS Cloud' },
    { icon: '🎙️', name: 'ElevenLabs TTS' },
];

export default function Hero() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section
            id="overview"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '140px 24px 60px',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
            }}
        >
            {/* Floating orbs */}
            <div className="orb" style={{ width: 500, height: 500, top: '-80px', left: '-100px', background: 'radial-gradient(circle, rgba(124,58,237,0.5), rgba(124,58,237,0))' }} />
            <div className="orb" style={{ width: 400, height: 400, top: '20%', right: '-60px', background: 'radial-gradient(circle, rgba(236,72,153,0.4), rgba(236,72,153,0))', animationDelay: '3s' }} />
            <div className="orb" style={{ width: 300, height: 300, bottom: '10%', left: '20%', background: 'radial-gradient(circle, rgba(6,182,212,0.35), rgba(6,182,212,0))', animationDelay: '6s' }} />

            {/* Badge */}
            <div className="badge animate-fade-up" style={{ marginBottom: 24 }}>
                ✨ Nền Tảng AI Sản Xuất Content Thế Hệ Mới
            </div>

            {/* Main headline */}
            <h1
                className="animate-fade-up"
                style={{
                    fontSize: 'clamp(36px, 7vw, 80px)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: '-2px',
                    marginBottom: 24,
                    animationDelay: '0.1s',
                    maxWidth: 900,
                }}
            >
                Từ Ý Tưởng Đến{' '}
                <span
                    style={{
                        background: 'linear-gradient(135deg, #A855F7, #EC4899, #06B6D4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '200% auto',
                        animation: 'shimmer 3s linear infinite',
                    }}
                >
                    Video Viral
                </span>
                <br />
                Chỉ Trong Vài Phút
            </h1>

            {/* Sub headline */}
            <p
                className="animate-fade-up"
                style={{
                    fontSize: 'clamp(15px, 2vw, 20px)',
                    color: 'rgba(255,255,255,0.65)',
                    maxWidth: 580,
                    lineHeight: 1.7,
                    marginBottom: 40,
                    animationDelay: '0.2s',
                }}
            >
                AI nghiên cứu xu hướng → Tự viết kịch bản → Render video → Đăng tải đa kênh.{' '}
                <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Bạn chỉ cần một cái bấm.</strong>
            </p>

            {/* CTA Buttons */}
            <div
                className="hero-buttons animate-fade-up"
                style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64, animationDelay: '0.3s' }}
            >
                <a href="#step1" className="btn-primary animate-pulse-glow" style={{ textDecoration: 'none', fontSize: 16, padding: '16px 36px' }}>
                    🚀 Xem Quy Trình Demo
                </a>
                <a href="#pricing" className="btn-secondary" style={{ textDecoration: 'none', fontSize: 16, padding: '15px 32px' }}>
                    💰 Xem Bảng Giá
                </a>
            </div>

            {/* Stats */}
            <div
                className="stats-grid animate-fade-up"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 16,
                    width: '100%',
                    maxWidth: 700,
                    marginBottom: 0,
                    animationDelay: '0.4s',
                }}
            >
                {[
                    { icon: '⚡', value: '< 5 phút', label: 'Nghiên cứu Trend' },
                    { icon: '🔄', value: '4 Bước', label: 'Quy trình hoàn chỉnh' },
                    { icon: '📡', value: '3 Kênh', label: 'Đăng tải đồng thời' },
                    { icon: '🤖', value: '100%', label: 'Tự động hóa' },
                ].map((s) => (
                    <div key={s.value} className="stat-card">
                        <span style={{ fontSize: 22 }}>{s.icon}</span>
                        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 20, background: 'linear-gradient(135deg,#A855F7,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {s.value}
                        </span>
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', lineHeight: 1.3 }}>{s.label}</span>
                    </div>
                ))}
            </div>

            {/* Trust bar */}
            <div className="trust-bar" style={{ width: '100%', maxWidth: 800, marginTop: 40 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', flexBasis: '100%', marginBottom: 4 }}>
                    Tích hợp với
                </span>
                {trustLogos.map(t => (
                    <div key={t.name} className="trust-logo">
                        <span style={{ fontSize: 18 }}>{t.icon}</span>
                        <span>{t.name}</span>
                    </div>
                ))}
            </div>

            {/* Scroll indicator */}
            {!scrolled && (
                <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: 1 }}>CUỘN XUỐNG</span>
                    <div className="scroll-indicator" style={{ fontSize: 20, color: 'rgba(255,255,255,0.4)' }}>↓</div>
                </div>
            )}
        </section>
    );
}
