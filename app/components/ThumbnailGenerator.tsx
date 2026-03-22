'use client';
import { useState } from 'react';

const thumbnailStyles = [
    { id: 'viral', label: 'Giật Gân / Viral', icon: '🔥', desc: 'Chữ to, màu đỏ/vàng, mặt shock' },
    { id: 'clean', label: 'Sạch / Minimalist', icon: '✨', desc: 'Nền trắng/tối, typography sang' },
    { id: 'dark', label: 'Cinematic Dark', icon: '🎬', desc: 'Nền tối, hiệu ứng ánh sáng kịch tính' },
    { id: 'news', label: 'Breaking News', icon: '📰', desc: 'Layout TV news với headline nổi bật' },
];

const fakeResults = [
    { bg: 'linear-gradient(135deg,#1a0a3c,#0d1847)', title: 'BÍ MẬT', sub: 'Võ Đang 700 năm', ctr: '8.4%', badge: '🔥 Hot' },
    { bg: 'linear-gradient(135deg,#7C3AED,#EC4899)', title: 'SỰ THẬT', sub: 'Ngọn Núi Huyền Bí', ctr: '7.1%', badge: '⭐ Top' },
    { bg: 'linear-gradient(135deg,#0F2027,#203A43)', title: 'ÍT AI BIẾT', sub: 'Lịch Sử Võ Đang', ctr: '6.8%', badge: '' },
    { bg: 'linear-gradient(135deg,#C33764,#1D2671)', title: 'SHOCK!', sub: 'Bí Kíp Võ Công Thật', ctr: '9.2%', badge: '💎 Best CTR' },
];

export default function ThumbnailGenerator() {
    const [activeStyle, setActiveStyle] = useState('viral');
    const [titleText, setTitleText] = useState('BÍ MẬT VÕ ĐANG');
    const [generating, setGenerating] = useState(false);
    const [generated, setGenerated] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);

    const generate = () => {
        setGenerating(true); setGenerated(false); setSelected(null);
        setTimeout(() => { setGenerating(false); setGenerated(true); }, 2500);
    };

    return (
        <section id="thumbnail" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <div className="badge" style={{ marginBottom: 14, background: 'rgba(239,68,68,0.15)', borderColor: 'rgba(239,68,68,0.4)', color: '#FCA5A5' }}>🖼️ AI Thumbnail Generator</div>
                <h2 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 14 }}>
                    Thumbnail <span style={{ background: 'linear-gradient(135deg,#EF4444,#F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Triệu View</span> Trong 10 Giây
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, maxWidth: 540, margin: '0 auto' }}>
                    CTR thumbnail quyết định 70% lượt xem. AI tạo 4 phiên bản A/B test cùng lúc, hiển thị dự đoán CTR.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {/* Left: Config */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div className="glass" style={{ padding: 20 }}>
                        <label style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginBottom: 10, display: 'block' }}>📝 Tiêu đề thumbnail</label>
                        <input
                            value={titleText}
                            onChange={e => setTitleText(e.target.value)}
                            style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '11px 14px', color: '#fff', fontSize: 14, outline: 'none' }}
                            placeholder="Nhập tiêu đề ngắn gọn, giật gân..."
                        />
                        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 6 }}>Tip: 3-5 từ, ALL CAPS, có hook chữ</p>
                    </div>

                    <div className="glass" style={{ padding: 20 }}>
                        <label style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginBottom: 12, display: 'block' }}>🎨 Phong cách thumbnail</label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {thumbnailStyles.map(s => (
                                <button key={s.id} onClick={() => setActiveStyle(s.id)} style={{
                                    display: 'flex', gap: 12, padding: '12px 14px', borderRadius: 12, cursor: 'pointer', textAlign: 'left',
                                    background: activeStyle === s.id ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.04)',
                                    border: `1px solid ${activeStyle === s.id ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'}`,
                                    color: '#fff',
                                }}>
                                    <span style={{ fontSize: 20 }}>{s.icon}</span>
                                    <div>
                                        <div style={{ fontSize: 13, fontWeight: 600 }}>{s.label}</div>
                                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{s.desc}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="glass" style={{ padding: 16 }}>
                        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                            {['📸 Upload ảnh bìa', '🎬 Frame từ video', '🖼️ Stock AI'].map(opt => (
                                <label key={opt} style={{ flex: 1, display: 'flex', gap: 6, alignItems: 'center', cursor: 'pointer', fontSize: 11, padding: '8px 10px', background: 'rgba(255,255,255,0.04)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <input type="radio" name="img" style={{ accentColor: '#EF4444' }} defaultChecked={opt.includes('Frame')} />
                                    {opt}
                                </label>
                            ))}
                        </div>
                    </div>

                    <button onClick={generate} className="btn-primary" style={{ background: 'linear-gradient(135deg,#EF4444,#F97316)', boxShadow: '0 4px 20px rgba(239,68,68,0.4)', padding: '16px' }}>
                        {generating ? '🤖 Đang tạo 4 phiên bản...' : '🖼️ Tạo 4 Thumbnail A/B Test (–120 Cr)'}
                    </button>
                </div>

                {/* Right: Results */}
                <div>
                    {!generated && !generating && (
                        <div className="glass" style={{ height: '100%', minHeight: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                            <div style={{ fontSize: 48, opacity: 0.3 }}>🖼️</div>
                            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>4 phiên bản thumbnail AI sẽ hiện ra đây</p>
                            <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>Cùng với dự đoán CTR từng phiên bản</p>
                        </div>
                    )}

                    {generating && (
                        <div className="glass" style={{ height: '100%', minHeight: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                            <div style={{ fontSize: 40, animation: 'float 1s ease-in-out infinite' }}>🎨</div>
                            <p style={{ color: '#FCA5A5', fontSize: 14, fontWeight: 600 }}>AI đang vẽ 4 phiên bản thumbnail...</p>
                            <div className="progress-bar" style={{ width: '80%' }}>
                                <div className="progress-fill" style={{ width: '70%', background: 'linear-gradient(90deg,#EF4444,#F97316)', animation: 'shimmer 1.5s linear infinite' }} />
                            </div>
                        </div>
                    )}

                    {generated && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                            {fakeResults.map((r, i) => (
                                <div key={i} onClick={() => setSelected(i)} style={{
                                    borderRadius: 14, overflow: 'hidden', cursor: 'pointer', position: 'relative',
                                    border: `2px solid ${selected === i ? '#EF4444' : 'rgba(255,255,255,0.1)'}`,
                                    transition: 'all 0.2s', transform: selected === i ? 'scale(1.03)' : 'scale(1)',
                                }}>
                                    <div style={{ background: r.bg, height: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
                                        {r.badge && <div style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,0.6)', borderRadius: 8, padding: '2px 8px', fontSize: 10, fontWeight: 700 }}>{r.badge}</div>}
                                        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, fontSize: 22, textAlign: 'center', lineHeight: 1.1, textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>{r.title}</div>
                                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>{r.sub}</div>
                                    </div>
                                    <div style={{ padding: '8px 12px', background: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Phiên bản {i + 1}</span>
                                        <span style={{ fontSize: 12, fontWeight: 700, color: '#34D399' }}>CTR: {r.ctr}</span>
                                    </div>
                                </div>
                            ))}
                            {selected !== null && (
                                <div style={{ gridColumn: '1/-1', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 12, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                                    <div>
                                        <div style={{ fontSize: 13, fontWeight: 700 }}>✅ Đã chọn phiên bản {selected + 1} · CTR dự đoán: {fakeResults[selected].ctr}</div>
                                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>Thumbnail sẽ được đính kèm khi đăng video tự động</div>
                                    </div>
                                    <button className="btn-primary" style={{ fontSize: 12, padding: '8px 20px', background: 'linear-gradient(135deg,#EF4444,#F97316)' }}>⬇ Tải Thumbnail</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
