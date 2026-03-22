'use client';
import { useState } from 'react';

const platforms = [
    { id: 'tiktok', name: 'TikTok', icon: '🎵', color: '#EE1D52', status: 'connected' },
    { id: 'youtube', name: 'YouTube Shorts', icon: '▶️', color: '#FF0000', status: 'connected' },
    { id: 'facebook', name: 'Facebook Reels', icon: '📘', color: '#1877F2', status: 'connected' },
    { id: 'instagram', name: 'Instagram Reels', icon: '📸', color: '#E1306C', status: 'coming' },
];

const tierAccess: Record<string, string[]> = {
    starter: [],
    pro: ['tiktok'],
    agency: ['tiktok', 'youtube', 'facebook'],
};

export default function Step4Publish() {
    const [tier, setTier] = useState<'starter' | 'pro' | 'agency'>('agency');
    const [selected, setSelected] = useState<string[]>(['tiktok', 'youtube', 'facebook']);
    const [schedule, setSchedule] = useState('now');
    const [publishing, setPublishing] = useState(false);
    const [done, setDone] = useState(false);

    const togglePlatform = (id: string) => {
        if (!tierAccess[tier].includes(id)) return;
        setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const generatedCaption = {
        tiktok: '🗡️ Bí mật 700 năm của Võ Đang ẩn trong từng đường kiếm... #VoDang #KiemHiep #BIMat #LearnOnTikTok #fyp #viral #wuxia2026',
        youtube: 'Bí mật Võ Đang 700 năm — Sự thật ít ai biết về ngọn núi huyền thoại của Trung Hoa. Trong video này chúng tôi khám phá...\n\n🔔 Subscribe để không bỏ lỡ nội dung độc đáo!\n\n#VoDang #KiemHiep #LichSu #Wuxia',
        facebook: '🔥 SHOCK: Bí mật 700 năm của Võ Đang cuối cùng đã được hé lộ!\n\nNhững điều bạn chưa bao giờ được nghe về ngọn núi võ thuật huyền bí nhất Trung Hoa...\n\n👍 Like nếu bạn thấy thú vị! Comment 🗡️ nếu muốn xem phần 2!',
    };

    const [activePlatform, setActivePlatform] = useState<'tiktok' | 'youtube' | 'facebook'>('tiktok');

    const runPublish = () => {
        setPublishing(true);
        setTimeout(() => { setPublishing(false); setDone(true); }, 3000);
    };

    return (
        <section id="step4" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                <div className="step-number" style={{ background: 'linear-gradient(135deg,#10B981,#06B6D4)', color: '#fff', boxShadow: '0 4px 16px rgba(16,185,129,0.5)' }}>4</div>
                <div>
                    <div className="badge" style={{ background: 'rgba(16,185,129,0.15)', borderColor: 'rgba(16,185,129,0.4)', color: '#6EE7B7', marginBottom: 6 }}>🚀 Bước 4</div>
                    <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, letterSpacing: '-0.5px' }}>
                        Đăng Tải Tự Động <span style={{ background: 'linear-gradient(135deg,#10B981,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Đa Kênh</span>
                    </h2>
                </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, marginBottom: 40, maxWidth: 600, lineHeight: 1.7 }}>
                AI viết Caption SEO + gắn Hashtag trending cho từng nền tảng → Đăng ngay hoặc đặt lịch tự động.
            </p>

            {/* Tier switch */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
                {(['starter', 'pro', 'agency'] as const).map(t => (
                    <button key={t} onClick={() => setTier(t)} style={{
                        padding: '8px 20px', borderRadius: 24, cursor: 'pointer', fontWeight: 600, fontSize: 13, transition: 'all 0.2s',
                        background: tier === t ? 'linear-gradient(135deg,#10B981,#06B6D4)' : 'rgba(255,255,255,0.06)',
                        border: tier === t ? 'none' : '1px solid rgba(255,255,255,0.1)', color: '#fff',
                    }}>
                        {t === 'starter' ? '🥉 Sơ Cấp' : t === 'pro' ? '🥈 Trung Cấp' : '🥇 Cao Cấp (Agency)'}
                    </button>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {/* Left: Platform select + schedule */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div className="glass" style={{ padding: 20 }}>
                        <label style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginBottom: 14, display: 'block' }}>📡 Chọn Kênh Đăng Tải</label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {platforms.map(p => {
                                const locked = p.status === 'coming' || !tierAccess[tier].includes(p.id);
                                const isSelected = selected.includes(p.id);
                                return (
                                    <div key={p.id} onClick={() => togglePlatform(p.id)} style={{
                                        display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 14, cursor: locked ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.2s', opacity: locked ? 0.45 : 1,
                                        background: isSelected && !locked ? 'rgba(16,185,129,0.12)' : 'rgba(255,255,255,0.04)',
                                        border: `1px solid ${isSelected && !locked ? 'rgba(16,185,129,0.4)' : 'rgba(255,255,255,0.08)'}`,
                                    }}>
                                        <span style={{ fontSize: 24 }}>{p.icon}</span>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: 14, fontWeight: 600 }}>{p.name}</div>
                                            <div style={{ fontSize: 11, color: locked ? '#F87171' : '#34D399', marginTop: 2 }}>
                                                {p.status === 'coming' ? '🔜 Sắp ra mắt' : locked ? `🔒 Cần gói ${tier === 'starter' ? 'Trung Cấp' : 'Agency'}` : '✅ Đã kết nối API'}
                                            </div>
                                        </div>
                                        <div style={{
                                            width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                                            background: isSelected && !locked ? 'linear-gradient(135deg,#10B981,#06B6D4)' : 'rgba(255,255,255,0.1)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13,
                                        }}>
                                            {isSelected && !locked ? '✓' : ''}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="glass" style={{ padding: 18 }}>
                        <label style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginBottom: 12, display: 'block' }}>⏰ Thời Gian Đăng</label>
                        <div style={{ display: 'flex', gap: 8 }}>
                            {[{ id: 'now', label: '⚡ Đăng Ngay' }, { id: 'schedule', label: '📅 Đặt Lịch' }].map(s => (
                                <button key={s.id} onClick={() => setSchedule(s.id)} style={{
                                    flex: 1, padding: '12px', borderRadius: 12, cursor: 'pointer', fontWeight: 600, fontSize: 13,
                                    background: schedule === s.id ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.05)',
                                    border: `1px solid ${schedule === s.id ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.1)'}`,
                                    color: '#fff',
                                }}>{s.label}</button>
                            ))}
                        </div>
                        {schedule === 'schedule' && (
                            <input type="datetime-local" style={{
                                width: '100%', marginTop: 12, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)',
                                borderRadius: 10, padding: '10px 14px', color: '#fff', fontSize: 13, outline: 'none', colorScheme: 'dark',
                            }} />
                        )}
                    </div>

                    {!done && (
                        <button onClick={runPublish} disabled={publishing || selected.length === 0} className="btn-primary"
                            style={{ width: '100%', fontSize: 16, padding: '17px', background: 'linear-gradient(135deg,#10B981,#06B6D4)', boxShadow: '0 4px 24px rgba(16,185,129,0.4)', opacity: selected.length === 0 ? 0.5 : 1, cursor: selected.length === 0 ? 'not-allowed' : 'pointer' }}>
                            {publishing ? '📡 Đang Đăng Tải...' : `🚀 Đăng Lên ${selected.length} Kênh`}
                        </button>
                    )}
                    {done && (
                        <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 14, padding: 20, textAlign: 'center' }}>
                            <div style={{ fontSize: 32, marginBottom: 8 }}>🎉</div>
                            <div style={{ fontWeight: 800, color: '#34D399', marginBottom: 4 }}>Đã đăng thành công!</div>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Video đang được phân phối trên {selected.length} kênh.</p>
                        </div>
                    )}
                </div>

                {/* Right: AI Caption preview */}
                <div className="glass-dark" style={{ padding: 22 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginBottom: 14 }}>🤖 AI Caption Đã Tạo</div>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                        {(['tiktok', 'youtube', 'facebook'] as const).map(p => (
                            <button key={p} onClick={() => setActivePlatform(p)} style={{
                                padding: '6px 14px', borderRadius: 20, cursor: 'pointer', fontSize: 12, fontWeight: 600, transition: 'all 0.2s',
                                background: activePlatform === p ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.06)',
                                border: `1px solid ${activePlatform === p ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.1)'}`,
                                color: '#fff',
                            }}>
                                {p === 'tiktok' ? '🎵 TikTok' : p === 'youtube' ? '▶️ YouTube' : '📘 Facebook'}
                            </button>
                        ))}
                    </div>
                    <pre style={{
                        fontFamily: 'inherit', fontSize: 13, lineHeight: 1.7, whiteSpace: 'pre-wrap', wordBreak: 'break-word',
                        color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 16, minHeight: 200, maxHeight: 320, overflowY: 'auto',
                    }}>{generatedCaption[activePlatform]}</pre>
                    <div style={{ marginTop: 14, padding: '12px 14px', background: 'rgba(16,185,129,0.08)', borderRadius: 10, border: '1px solid rgba(16,185,129,0.15)' }}>
                        <p style={{ fontSize: 12, color: '#6EE7B7' }}>✅ Hashtag được lấy tự động từ dữ liệu Bước 1 (Trend Analysis)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
