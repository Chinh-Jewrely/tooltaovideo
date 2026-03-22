'use client';
import { useEffect, useState, useRef } from 'react';

// Fake "live" notifications of users creating videos
const ACTIVITIES = [
    { user: 'Nguyễn Văn A', location: 'Hà Nội', topic: 'Bí Mật Núi Võ Đang', platform: '🎵', views: '124K' },
    { user: 'Trần Thị B', location: 'TP.HCM', topic: 'Top 10 Quán Ăn Sài Gòn', platform: '▶️', views: '87K' },
    { user: 'Lê Minh C', location: 'Đà Nẵng', topic: 'Cách Đầu Tư Crypto 2026', platform: '🎵', views: '203K' },
    { user: 'Phạm Thu D', location: 'Cần Thơ', topic: 'Bí Quyết Học Tiếng Anh', platform: '📸', views: '56K' },
    { user: 'Hoàng Văn E', location: 'Hải Phòng', topic: 'Lịch Sử Thời Hùng Vương', platform: '▶️', views: '91K' },
    { user: 'Vũ Thị F', location: 'Huế', topic: 'Ẩm Thực Miền Trung', platform: '🎵', views: '178K' },
    { user: 'Đặng Minh G', location: 'Nha Trang', topic: 'Review Du Lịch Phú Quốc', platform: '📸', views: '64K' },
    { user: 'Bùi Thu H', location: 'Hà Nội', topic: 'AI và Tương Lai Con Người', platform: '▶️', views: '147K' },
];

const LIVE_VIDEOS = [
    { emoji: '⚔️', title: 'Bí Mật Võ Lâm', views: '2.4M', tag: '#khoahoc' },
    { emoji: '🍜', title: 'Phở Hà Nội 100 Năm', views: '1.8M', tag: '#amthuc' },
    { emoji: '💰', title: 'Kiếm Tiền Online 2026', views: '3.1M', tag: '#taichinh' },
    { emoji: '🏛️', title: 'Sử Việt Hào Hùng', views: '940K', tag: '#lichsu' },
    { emoji: '🤖', title: 'ChatGPT Tất Tần Tật', views: '4.2M', tag: '#congnghe' },
    { emoji: '🌏', title: 'Du Lịch Đà Lạt 2026', views: '1.2M', tag: '#dulich' },
    { emoji: '💪', title: 'Gym Tại Nhà 0 Đồng', views: '2.7M', tag: '#suckhoe' },
    { emoji: '📱', title: 'Review iPhone 16 Pro', views: '5.1M', tag: '#review' },
];

const COUNTER_TARGETS = [
    { label: 'Video đã tạo', end: 24891, suffix: '+', icon: '🎬' },
    { label: 'Kênh đang dùng', end: 1247, suffix: '', icon: '📡' },
    { label: 'Lượt xem tổng', end: 892, suffix: 'M+', icon: '👁️' },
    { label: 'Tiết kiệm giờ', end: 48600, suffix: 'h', icon: '⏱️' },
];

function useCountUp(target: number, duration = 2000, started: boolean) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!started) return;
        let start = 0;
        const step = target / (duration / 16);
        const t = setInterval(() => {
            start = Math.min(start + step, target);
            setCount(Math.floor(start));
            if (start >= target) clearInterval(t);
        }, 16);
        return () => clearInterval(t);
    }, [target, duration, started]);
    return count;
}

function Counter({ item, started }: { item: typeof COUNTER_TARGETS[0]; started: boolean }) {
    const count = useCountUp(item.end, 2200, started);
    return (
        <div className="stat-card feature-card" style={{ padding: '24px 20px', flex: 1, minWidth: 160 }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, fontSize: 28, background: 'linear-gradient(135deg,#A855F7,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {count.toLocaleString()}{item.suffix}
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{item.label}</div>
        </div>
    );
}

export default function SocialProof() {
    const [notif, setNotif] = useState<typeof ACTIVITIES[0] | null>(null);
    const [notifVisible, setNotifVisible] = useState(false);
    const [counterStarted, setCounterStarted] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Rotate notifications
    useEffect(() => {
        let idx = 0;
        const show = () => {
            setNotif(ACTIVITIES[idx % ACTIVITIES.length]);
            setNotifVisible(true);
            setTimeout(() => setNotifVisible(false), 3500);
            idx++;
        };
        show();
        const t = setInterval(show, 5000);
        return () => clearInterval(t);
    }, []);

    // Intersection observer to start counter
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCounterStarted(true); }, { threshold: 0.3 });
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <>
            {/* Floating live notification */}
            <div style={{
                position: 'fixed', bottom: 24, left: 24, zIndex: 999,
                maxWidth: 320,
                transition: 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)',
                opacity: notifVisible ? 1 : 0,
                transform: notifVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                pointerEvents: notifVisible ? 'auto' : 'none',
            }}>
                {notif && (
                    <div style={{
                        background: 'rgba(15,7,40,0.92)', backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(124,58,237,0.35)', borderRadius: 16, padding: '14px 18px',
                        display: 'flex', alignItems: 'flex-start', gap: 12,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,58,237,0.1)',
                    }}>
                        <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg,#7C3AED,#EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>
                            🎬
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 3, display: 'flex', alignItems: 'center', gap: 6 }}>
                                {notif.user}
                                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block', flexShrink: 0 }} />
                                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 400 }}>{notif.location}</span>
                            </div>
                            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>
                                Vừa tạo video về <strong style={{ color: '#C084FC' }}>"{notif.topic}"</strong>
                            </div>
                            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>
                                {notif.platform} Dự kiến {notif.views} lượt xem · vừa xong
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Social Proof section */}
            <section ref={sectionRef} style={{ padding: '80px 24px', overflow: 'hidden' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>

                    {/* Live counter */}
                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 64 }}>
                        {COUNTER_TARGETS.map(item => (
                            <Counter key={item.label} item={item} started={counterStarted} />
                        ))}
                    </div>

                    {/* Social proof header */}
                    <div style={{ textAlign: 'center', marginBottom: 36 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 40, padding: '6px 18px', marginBottom: 16 }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444', display: 'inline-block', animation: 'pulse-glow 1s ease-in-out infinite' }} />
                            <span style={{ fontSize: 12, color: '#FCA5A5', fontWeight: 700 }}>VIDEOS ĐANG HOT — Được tạo bởi TooltaoVideo</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, marginBottom: 12 }}>
                            Hàng Nghìn Video Viral Mỗi Ngày
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>Đây là những video thật được tạo bởi người dùng của TooltaoVideo</p>
                    </div>

                    {/* Scrolling video wall */}
                    <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg,transparent,black 10%,black 90%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,black 10%,black 90%,transparent)' }}>
                        <div style={{ display: 'flex', gap: 16, animation: 'marquee 30s linear infinite', width: 'max-content' }}>
                            {[...LIVE_VIDEOS, ...LIVE_VIDEOS].map((v, i) => (
                                <div key={i} style={{ width: 200, flexShrink: 0, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)', cursor: 'pointer', transition: 'transform 0.2s' }}
                                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04) translateY(-4px)')}
                                    onMouseLeave={e => (e.currentTarget.style.transform = '')}
                                >
                                    <div style={{
                                        height: 118, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44,
                                        background: `linear-gradient(135deg, rgba(${[
                                            '124,58,237', '236,72,153', '6,182,212', '245,158,11',
                                            '16,185,129', '239,68,68', '59,130,246', '168,85,247'
                                        ][i % 8]},0.2) 0%, rgba(0,0,0,0.4) 100%)`,
                                    }}>{v.emoji}</div>
                                    <div style={{ padding: '10px 12px' }}>
                                        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v.title}</div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: 11, color: '#A855F7', fontWeight: 600 }}>👁️ {v.views}</span>
                                            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.06)', borderRadius: 6, padding: '2px 7px' }}>{v.tag}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA strip */}
                    <div style={{ marginTop: 48, textAlign: 'center', padding: '32px 24px', background: 'linear-gradient(135deg,rgba(124,58,237,0.12),rgba(236,72,153,0.08))', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 24 }}>
                        <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>📊 Video đầu tiên của bạn có thể đạt <span style={{ color: '#A855F7' }}>100K+ lượt xem</span></p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 24 }}>Không cần kinh nghiệm quay phim. Không cần thiết bị đắt tiền. Chỉ cần ý tưởng.</p>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="#live-demo" className="btn-primary animate-pulse-glow" style={{ textDecoration: 'none', padding: '14px 32px', fontSize: 15 }}>🎬 Thử Miễn Phí Ngay</a>
                            <a href="#pricing" className="btn-secondary" style={{ textDecoration: 'none', padding: '13px 28px', fontSize: 15 }}>Xem gói giá →</a>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </>
    );
}
