'use client';
import { useState, useEffect } from 'react';

const TYPEWRITER_WORDS = [
    { text: 'Video Viral', color: 'linear-gradient(135deg,#A855F7,#EC4899)' },
    { text: 'Triệu Lượt Xem', color: 'linear-gradient(135deg,#EC4899,#F97316)' },
    { text: 'Content Creator', color: 'linear-gradient(135deg,#06B6D4,#3B82F6)' },
    { text: 'Thu Nhập Thụ Động', color: 'linear-gradient(135deg,#F59E0B,#10B981)' },
];

const TRUST_LOGOS = [
    { icon: '▶️', name: 'YouTube API' },
    { icon: '🎵', name: 'TikTok' },
    { icon: '🤖', name: 'OpenAI GPT-4o' },
    { icon: '📘', name: 'Meta Graph' },
    { icon: '🎙️', name: 'ElevenLabs' },
    { icon: '☁️', name: 'AWS Cloud' },
];

export default function Hero() {
    const [wordIdx, setWordIdx] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIdx, setCharIdx] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    // Scroll listener
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Typewriter
    useEffect(() => {
        const word = TYPEWRITER_WORDS[wordIdx].text;
        const speed = isDeleting ? 40 : charIdx === word.length ? 1600 : 70;

        const t = setTimeout(() => {
            if (!isDeleting && charIdx < word.length) {
                setDisplayText(word.slice(0, charIdx + 1));
                setCharIdx(c => c + 1);
            } else if (!isDeleting && charIdx === word.length) {
                setIsDeleting(true);
            } else if (isDeleting && charIdx > 0) {
                setDisplayText(word.slice(0, charIdx - 1));
                setCharIdx(c => c - 1);
            } else {
                setIsDeleting(false);
                setWordIdx(i => (i + 1) % TYPEWRITER_WORDS.length);
                setCharIdx(0);
            }
        }, speed);
        return () => clearTimeout(t);
    }, [charIdx, isDeleting, wordIdx]);

    const currentWord = TYPEWRITER_WORDS[wordIdx];

    return (
        <section id="overview" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '140px 24px 60px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
            {/* Animated gradient orbs */}
            <div className="orb" style={{ width: 600, height: 600, top: '-120px', left: '-140px', background: 'radial-gradient(circle, rgba(124,58,237,0.45), rgba(124,58,237,0))' }} />
            <div className="orb" style={{ width: 500, height: 500, top: '10%', right: '-100px', background: 'radial-gradient(circle, rgba(236,72,153,0.35), rgba(236,72,153,0))', animationDelay: '3s' }} />
            <div className="orb" style={{ width: 400, height: 400, bottom: '5%', left: '15%', background: 'radial-gradient(circle, rgba(6,182,212,0.3), rgba(6,182,212,0))', animationDelay: '6s' }} />

            {/* Live badge */}
            <div className="animate-fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 40, padding: '8px 20px', marginBottom: 28 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981', animation: 'pulse-glow 1.5s ease-in-out infinite' }} />
                <span style={{ fontSize: 13, color: '#34D399', fontWeight: 700 }}>1,247 người đang dùng ngay bây giờ</span>
            </div>

            {/* Main headline */}
            <h1 className="animate-fade-up" style={{ fontSize: 'clamp(38px,7.5vw,88px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-3px', marginBottom: 28, maxWidth: 980, animationDelay: '0.1s' }}>
                Từ Ý Tưởng Đến<br />
                <span style={{
                    background: currentWord.color,
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', transition: 'background 0.3s',
                }}>
                    {displayText}
                </span>
                <span style={{ color: '#A855F7', opacity: 0.8, animation: 'typing 0.8s ease-in-out infinite' }}>|</span>
                <br />
                <span style={{ fontSize: '0.6em', letterSpacing: '-1px', color: 'rgba(255,255,255,0.9)' }}>Chỉ Trong Vài Phút</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up" style={{ fontSize: 'clamp(15px,2vw,19px)', color: 'rgba(255,255,255,0.6)', maxWidth: 560, lineHeight: 1.75, marginBottom: 44, animationDelay: '0.2s' }}>
                AI nghiên cứu xu hướng · Tự viết kịch bản · Render video · Đăng tải đa kênh.
                <br /><strong style={{ color: 'rgba(255,255,255,0.9)' }}>Bạn không cần làm gì thêm.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons animate-fade-up" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56, animationDelay: '0.3s' }}>
                <a href="#live-demo" className="btn-primary animate-pulse-glow" style={{ textDecoration: 'none', fontSize: 16, padding: '18px 40px', borderRadius: 16, fontWeight: 800 }}>
                    ⚡ Thử Miễn Phí Ngay — 0đ
                </a>
                <a href="#step1" className="btn-secondary" style={{ textDecoration: 'none', fontSize: 15, padding: '17px 32px', borderRadius: 16 }}>
                    🎬 Xem Quy Trình Demo
                </a>
            </div>

            {/* Social proof line */}
            <div className="animate-fade-up" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 44, animationDelay: '0.35s', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ display: 'flex' }}>
                    {['🟣', '🔵', '🟠', '🟢', '🔴'].map((c, i) => (
                        <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid rgba(15,7,40,1)', background: `hsl(${i * 60},70%,55%)`, marginLeft: i > 0 ? -10 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{c}</div>
                    ))}
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                    <strong style={{ color: '#A855F7' }}>24.891+</strong> video đã được tạo · Đánh giá <strong style={{ color: '#F59E0B' }}>4.9⭐</strong>
                </div>
            </div>

            {/* Stats row */}
            <div className="stats-grid animate-fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, width: '100%', maxWidth: 720, marginBottom: 40, animationDelay: '0.4s' }}>
                {[
                    { icon: '⚡', value: '< 5 phút', label: 'Từ ý tưởng đến video' },
                    { icon: '🔄', value: '4 Bước', label: 'Quy trình hoàn chỉnh' },
                    { icon: '📡', value: '3+ Kênh', label: 'Đăng tải đồng thời' },
                    { icon: '🤖', value: '100%', label: 'Tự động hóa' },
                ].map(s => (
                    <div key={s.value} className="stat-card">
                        <span style={{ fontSize: 24 }}>{s.icon}</span>
                        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, fontSize: 18, background: 'linear-gradient(135deg,#A855F7,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {s.value}
                        </span>
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.3 }}>{s.label}</span>
                    </div>
                ))}
            </div>

            {/* Trust bar */}
            <div className="trust-bar animate-fade-up" style={{ width: '100%', maxWidth: 760, animationDelay: '0.5s' }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', flexBasis: '100%', marginBottom: 8 }}>
                    Tích hợp & cung cấp bởi
                </span>
                {TRUST_LOGOS.map(t => (
                    <div key={t.name} className="trust-logo">
                        <span style={{ fontSize: 18 }}>{t.icon}</span>
                        <span>{t.name}</span>
                    </div>
                ))}
            </div>

            {/* Scroll indicator */}
            {!scrolled && (
                <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 2, textTransform: 'uppercase' }}>Cuộn xuống</span>
                    <div className="scroll-indicator" style={{ fontSize: 18, color: 'rgba(255,255,255,0.3)' }}>↓</div>
                </div>
            )}
        </section>
    );
}
