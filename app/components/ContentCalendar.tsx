'use client';
import { useState } from 'react';

const DAYS = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
const HOURS_BEST = ['6:00', '9:00', '12:00', '18:00', '20:00', '22:00'];

type CalItem = { time: string; title: string; platform: string; status: 'done' | 'scheduled' | 'draft'; color: string };

const initialCalendar: Record<string, CalItem[]> = {
    'T2': [{ time: '18:00', title: 'Bí Mật Võ Đang', platform: '🎵', status: 'done', color: '#EE1D52' }],
    'T3': [{ time: '20:00', title: 'Top 10 Món Ăn Việt', platform: '▶️', status: 'done', color: '#FF0000' }],
    'T4': [],
    'T5': [{ time: '18:00', title: 'Lịch Sử Triều Nguyễn', platform: '📘', status: 'scheduled', color: '#1877F2' }],
    'T6': [{ time: '20:00', title: 'AI Thay Con Người?', platform: '▶️', status: 'scheduled', color: '#FF0000' }, { time: '22:00', title: 'Top Crypto 2026', platform: '🎵', status: 'draft', color: '#EE1D52' }],
    'T7': [{ time: '09:00', title: 'Ẩm Thực Đường Phố', platform: '📸', status: 'scheduled', color: '#E1306C' }],
    'CN': [],
};

const suggestions = [
    { title: 'Top 5 Bí Ẩn Châu Á', best: 'T4 20:00', viral: 89, platform: '🎵 TikTok' },
    { title: 'Cách Kiếm 10M/Tháng', best: 'CN 09:00', viral: 94, platform: '▶️ YouTube' },
    { title: 'Món Ngon Sài Gòn 50K', best: 'T6 18:00', viral: 82, platform: '📸 Instagram' },
];

export default function ContentCalendar() {
    const [cal] = useState(initialCalendar);
    const [activeDay, setActiveDay] = useState<string | null>(null);

    return (
        <section id="calendar" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
                <div>
                    <div className="badge" style={{ marginBottom: 10, background: 'rgba(236,72,153,0.15)', borderColor: 'rgba(236,72,153,0.4)', color: '#F9A8D4' }}>🗓️ Content Calendar</div>
                    <h2 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, letterSpacing: '-0.5px' }}>
                        Lên Lịch <span style={{ background: 'linear-gradient(135deg,#EC4899,#F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Thông Minh</span> Theo Trend
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginTop: 8 }}>AI đề xuất khung giờ đăng tối ưu dựa trên lịch sử tương tác của kênh bạn.</p>
                </div>
                <button className="btn-primary" style={{ fontSize: 13, padding: '11px 24px', background: 'linear-gradient(135deg,#EC4899,#F97316)' }}>
                    + Tạo Video Mới
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 24 }}>
                {/* Calendar grid */}
                <div className="glass" style={{ padding: 20 }}>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
                        <span>Tuần 12 — Tháng 3, 2026</span>
                        <div style={{ display: 'flex', gap: 12, fontSize: 11 }}>
                            <span>🟢 Đã đăng</span><span>🔵 Lên lịch</span><span>⚪ Nháp</span>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
                        {DAYS.map(day => (
                            <div key={day} onClick={() => setActiveDay(activeDay === day ? null : day)} style={{ cursor: 'pointer' }}>
                                <div style={{
                                    fontSize: 12, fontWeight: 700, textAlign: 'center', marginBottom: 6,
                                    color: activeDay === day ? '#EC4899' : 'rgba(255,255,255,0.5)',
                                }}>{day}</div>
                                <div style={{
                                    minHeight: 90, borderRadius: 12, padding: 6,
                                    background: activeDay === day ? 'rgba(236,72,153,0.1)' : 'rgba(255,255,255,0.03)',
                                    border: `1px solid ${activeDay === day ? 'rgba(236,72,153,0.4)' : 'rgba(255,255,255,0.07)'}`,
                                    display: 'flex', flexDirection: 'column', gap: 4,
                                }}>
                                    {cal[day].map((item, i) => (
                                        <div key={i} style={{
                                            fontSize: 9, padding: '4px 6px', borderRadius: 6, lineHeight: 1.3,
                                            background: item.status === 'done' ? 'rgba(16,185,129,0.2)' : item.status === 'scheduled' ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.06)',
                                            border: `1px solid ${item.status === 'done' ? 'rgba(16,185,129,0.4)' : item.status === 'scheduled' ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.1)'}`,
                                        }}>
                                            <div style={{ color: 'rgba(255,255,255,0.7)' }}>{item.time} {item.platform}</div>
                                            <div style={{ color: '#fff', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</div>
                                        </div>
                                    ))}
                                    {cal[day].length === 0 && (
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.1)', fontSize: 16 }}>+</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Best posting times */}
                    <div style={{ marginTop: 16, padding: '12px 14px', background: 'rgba(236,72,153,0.06)', borderRadius: 12, border: '1px solid rgba(236,72,153,0.15)' }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#F9A8D4', marginBottom: 8 }}>⏰ Khung Giờ Vàng Của Bạn</div>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                            {HOURS_BEST.map(h => (
                                <span key={h} style={{ fontSize: 11, background: 'rgba(236,72,153,0.12)', border: '1px solid rgba(236,72,153,0.25)', borderRadius: 8, padding: '3px 10px', color: '#F9A8D4' }}>{h}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: AI Suggestions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div className="glass" style={{ padding: 20 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>🤖 AI Gợi Ý Content Tiếp Theo</div>
                        {suggestions.map((s, i) => (
                            <div key={i} style={{ padding: '12px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: 12, marginBottom: 10, border: '1px solid rgba(255,255,255,0.07)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                                    <span style={{ fontSize: 13, fontWeight: 600 }}>{s.title}</span>
                                    <span style={{ fontSize: 11, color: '#34D399', fontWeight: 700 }}>Viral {s.viral}%</span>
                                </div>
                                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>📅 Tốt nhất: {s.best}</span>
                                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>·</span>
                                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{s.platform}</span>
                                </div>
                                <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                                    <button className="btn-primary" style={{ flex: 1, fontSize: 11, padding: '6px', background: 'linear-gradient(135deg,#EC4899,#F97316)' }}>Tạo Ngay</button>
                                    <button className="btn-secondary" style={{ flex: 1, fontSize: 11, padding: '6px' }}>Lên Lịch</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="glass-dark" style={{ padding: 18 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>📊 Thống Kê Tuần Này</div>
                        {[
                            { label: 'Đã đăng', val: '2 videos', icon: '✅' },
                            { label: 'Lên lịch', val: '3 videos', icon: '⏰' },
                            { label: 'Nháp chờ', val: '1 video', icon: '✏️' },
                            { label: 'Tổng reach dự kiến', val: '~240K', icon: '📡' },
                        ].map(s => (
                            <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: 13 }}>
                                <span style={{ color: 'rgba(255,255,255,0.55)' }}>{s.icon} {s.label}</span>
                                <span style={{ fontWeight: 700, color: '#EC4899' }}>{s.val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
