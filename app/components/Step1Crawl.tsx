'use client';
import { useState } from 'react';

const mockResults = [
    { id: 1, title: 'Top 10 Bí Kíp Võ Đang Khiến MXH Phát Cuồng (2.3M views)', viral: 96, tag: '🔥 Viral', source: 'YouTube', selected: false },
    { id: 2, title: 'Người Việt Chi 200 Triệu Học AI - Có Đáng?', viral: 88, tag: '📈 Trending', source: 'TikTok', selected: false },
    { id: 3, title: 'Review Siêu Thực: Ăn Gì Ở Đà Lạt Hết 500k?', viral: 82, tag: '📈 Trending', source: 'YouTube', selected: false },
    { id: 4, title: 'ChatGPT vs Gemini: Ai Thắng Cuộc Trong 2026?', viral: 79, tag: '💡 Hot', source: 'Blog', selected: false },
    { id: 5, title: 'Drama Streamer Lớn Nhất Năm - Sự Thật Phía Sau', viral: 75, tag: '💡 Hot', source: 'TikTok', selected: false },
];

const sources = ['YouTube', 'TikTok', 'Facebook', 'Blog/News'];
const tiers = [
    { id: 'starter', label: '🥉 Sơ Cấp', desc: '1–2 nguồn, từ khóa cơ bản', cost: 100 },
    { id: 'pro', label: '🥈 Trung Cấp', desc: 'Đa nguồn, phân tích top view', cost: 200 },
    { id: 'agency', label: '🥇 Cao Cấp', desc: 'Deep Research + phân tích comment', cost: 500 },
];

export default function Step1Crawl() {
    const [keyword, setKeyword] = useState('');
    const [tier, setTier] = useState('pro');
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [results, setResults] = useState<typeof mockResults>([]);
    const [selected, setSelected] = useState<number[]>([]);

    const runCrawl = () => {
        if (!keyword.trim()) return;
        setLoading(true); setProgress(0); setResults([]);
        const steps = [
            { p: 15, delay: 400 }, { p: 35, delay: 900 },
            { p: 60, delay: 1600 }, { p: 80, delay: 2200 },
            { p: 100, delay: 2900 },
        ];
        steps.forEach(({ p, delay }) => {
            setTimeout(() => {
                setProgress(p);
                if (p === 100) { setLoading(false); setResults(mockResults); }
            }, delay);
        });
    };

    const toggleSelect = (id: number) => {
        setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const statusMessages = ['🔍 Đang quét nguồn dữ liệu...', '⚡ Đang phân tích nội dung...', '🤖 AI đang chấm điểm viral...', '📊 Đang xếp hạng kết quả...', '✅ Hoàn tất!'];
    const statusIdx = progress < 20 ? 0 : progress < 45 ? 1 : progress < 70 ? 2 : progress < 95 ? 3 : 4;

    return (
        <section id="step1" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                <div className="step-number" style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7)', color: '#fff', boxShadow: '0 4px 16px rgba(124,58,237,0.5)' }}>1</div>
                <div>
                    <div className="badge" style={{ marginBottom: 6 }}>📡 Bước 1</div>
                    <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, letterSpacing: '-0.5px' }}>
                        Nghiên Cứu &amp; Cào Dữ Liệu <span className="gradient-text">Trend</span>
                    </h2>
                </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, marginBottom: 40, maxWidth: 600, lineHeight: 1.7 }}>
                Nhập từ khóa → AI tự động cào đa nguồn → Phân tích, chấm điểm viral → Bạn chọn nội dung ưng ý nhất.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {/* Left: Config */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {/* Keyword input */}
                    <div className="glass" style={{ padding: 24 }}>
                        <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 10, display: 'block', fontWeight: 600 }}>🔑 Từ Khóa Tìm Kiếm</label>
                        <div style={{ display: 'flex', gap: 10 }}>
                            <input
                                value={keyword}
                                onChange={e => setKeyword(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && runCrawl()}
                                placeholder="Ví dụ: Võ Đang, AI 2026, Du lịch Đà Lạt..."
                                style={{
                                    flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                                    borderRadius: 12, padding: '12px 16px', color: '#fff', fontSize: 14, outline: 'none',
                                }}
                            />
                        </div>
                    </div>

                    {/* Tier select */}
                    <div className="glass" style={{ padding: 20 }}>
                        <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 12, display: 'block', fontWeight: 600 }}>⚡ Cấp Độ Phân Tích</label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {tiers.map(t => (
                                <div key={t.id} onClick={() => setTier(t.id)}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                        padding: '12px 16px', borderRadius: 12, cursor: 'pointer', transition: 'all 0.2s',
                                        background: tier === t.id ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)',
                                        border: `1px solid ${tier === t.id ? 'rgba(124,58,237,0.6)' : 'rgba(255,255,255,0.08)'}`,
                                    }}
                                >
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: 14 }}>{t.label}</div>
                                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{t.desc}</div>
                                    </div>
                                    <span style={{ fontSize: 12, color: '#A855F7', fontWeight: 700 }}>–{t.cost} Cr</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sources */}
                    <div className="glass" style={{ padding: 20 }}>
                        <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 10, display: 'block', fontWeight: 600 }}>📌 Nguồn Dữ Liệu</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {sources.map(s => (
                                <span key={s} className="tag-chip selected">{s}</span>
                            ))}
                        </div>
                    </div>

                    <button onClick={runCrawl} disabled={loading} className="btn-primary"
                        style={{ width: '100%', fontSize: 16, padding: '16px', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
                        {loading ? '⏳ Đang Phân Tích...' : '🚀 Bắt Đầu Crawl & Phân Tích'}
                    </button>
                </div>

                {/* Right: Results */}
                <div className="glass-dark" style={{ padding: 24, minHeight: 480 }}>
                    {!loading && results.length === 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', opacity: 0.4, gap: 12 }}>
                            <div style={{ fontSize: 48 }}>📡</div>
                            <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', fontSize: 15 }}>Nhập từ khóa và bấm<br />"Bắt Đầu Crawl" để xem kết quả</p>
                        </div>
                    )}

                    {loading && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: '20px 0' }}>
                            <p style={{ fontSize: 14, color: '#A855F7', fontWeight: 600 }}>{statusMessages[statusIdx]}</p>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${progress}%` }} />
                            </div>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Đang cào từ: YouTube, TikTok, Facebook, Blog...</p>
                            {[...Array(3)].map((_, i) => (
                                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '14px 16px', animation: 'pulse-glow 1.5s infinite', animationDelay: `${i * 0.3}s` }}>
                                    <div style={{ height: 12, background: 'rgba(255,255,255,0.08)', borderRadius: 6, marginBottom: 8, width: `${70 + i * 10}%` }} />
                                    <div style={{ height: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 6, width: '40%' }} />
                                </div>
                            ))}
                        </div>
                    )}

                    {results.length > 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>✅ Tìm thấy {results.length} nội dung</span>
                                {selected.length > 0 && (
                                    <a href="#step2" className="btn-primary" style={{ fontSize: 12, padding: '8px 18px', textDecoration: 'none' }}>
                                        Dùng {selected.length} item đã chọn →
                                    </a>
                                )}
                            </div>
                            {results.map((item) => (
                                <div key={item.id} onClick={() => toggleSelect(item.id)}
                                    style={{
                                        display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', borderRadius: 14, cursor: 'pointer',
                                        transition: 'all 0.2s', background: selected.includes(item.id) ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.04)',
                                        border: `1px solid ${selected.includes(item.id) ? 'rgba(124,58,237,0.5)' : 'rgba(255,255,255,0.07)'}`,
                                    }}
                                >
                                    <div style={{
                                        width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 2,
                                        background: selected.includes(item.id) ? 'linear-gradient(135deg,#7C3AED,#EC4899)' : 'rgba(255,255,255,0.1)',
                                        border: `1px solid ${selected.includes(item.id) ? 'transparent' : 'rgba(255,255,255,0.2)'}`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12,
                                    }}>
                                        {selected.includes(item.id) ? '✓' : ''}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 6, lineHeight: 1.4 }}>{item.title}</p>
                                        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                                            <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 6, background: 'rgba(16,185,129,0.15)', color: '#34D399', border: '1px solid rgba(16,185,129,0.2)' }}>{item.tag}</span>
                                            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>📺 {item.source}</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }}>
                                                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Viral</div>
                                                <div style={{ width: 60, height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
                                                    <div style={{ height: '100%', width: `${item.viral}%`, background: item.viral > 90 ? '#EC4899' : item.viral > 80 ? '#A855F7' : '#06B6D4', borderRadius: 2 }} />
                                                </div>
                                                <span style={{ fontSize: 11, fontWeight: 700, color: item.viral > 90 ? '#EC4899' : '#A855F7' }}>{item.viral}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
