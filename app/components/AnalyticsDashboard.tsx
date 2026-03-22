'use client';
import { useState } from 'react';

const metrics = [
    { label: 'Tổng Lượt Xem', value: '2.84M', change: '+32%', icon: '👁️', color: '#7C3AED' },
    { label: 'Videos Đã Tạo', value: '47', change: '+12 tuần này', icon: '🎬', color: '#EC4899' },
    { label: 'Watch Time Avg', value: '68%', change: '+5% so KNN', icon: '⏱️', color: '#06B6D4' },
    { label: 'Subscribers Mới', value: '+18.4K', change: '+210% MoM', icon: '📈', color: '#10B981' },
];

const topVideos = [
    { title: 'Bí Mật Võ Đang Ít Ai Biết', views: '840K', ctr: '9.2%', watch: '74%', platform: '🎵 TikTok', trend: '↑' },
    { title: 'Top 10 Món Ăn Việt Nam Kỳ Lạ', views: '620K', ctr: '7.8%', watch: '69%', platform: '▶️ YouTube', trend: '↑' },
    { title: 'Sự Thật Về Lịch Sử Triều Nguyễn', views: '490K', ctr: '8.1%', watch: '71%', platform: '📘 Facebook', trend: '→' },
    { title: 'AI Sẽ Thay Thế Con Người Không?', views: '380K', ctr: '6.4%', watch: '65%', platform: '▶️ YouTube', trend: '↓' },
    { title: 'Đường Phố Hà Nội 100 Năm Trước', views: '310K', ctr: '7.2%', watch: '72%', platform: '🎵 TikTok', trend: '↑' },
];

const chartData = [40, 65, 45, 80, 95, 72, 88, 110, 130, 125, 149, 160];
const months = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
const maxVal = Math.max(...chartData);

export default function AnalyticsDashboard() {
    const [period, setPeriod] = useState('30d');

    return (
        <section id="analytics" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
                <div>
                    <div className="badge" style={{ marginBottom: 10, background: 'rgba(16,185,129,0.15)', borderColor: 'rgba(16,185,129,0.4)', color: '#6EE7B7' }}>📊 Analytics Dashboard</div>
                    <h2 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, letterSpacing: '-0.5px' }}>
                        Hiệu Suất <span style={{ background: 'linear-gradient(135deg,#10B981,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Đa Kênh</span>
                    </h2>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                    {['7d', '30d', '90d', '1y'].map(p => (
                        <button key={p} onClick={() => setPeriod(p)} style={{
                            padding: '7px 16px', borderRadius: 20, cursor: 'pointer', fontSize: 13, fontWeight: 600,
                            background: period === p ? 'linear-gradient(135deg,#10B981,#06B6D4)' : 'rgba(255,255,255,0.06)',
                            border: `1px solid ${period === p ? 'transparent' : 'rgba(255,255,255,0.1)'}`, color: '#fff',
                        }}>{p}</button>
                    ))}
                </div>
            </div>

            {/* Metrics row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
                {metrics.map(m => (
                    <div key={m.label} className="feature-card glass" style={{ padding: 20 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                            <span style={{ fontSize: 22 }}>{m.icon}</span>
                            <span style={{ fontSize: 11, background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 20, padding: '2px 8px', color: '#34D399' }}>{m.change}</span>
                        </div>
                        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, fontSize: 26, color: m.color, marginBottom: 4 }}>{m.value}</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{m.label}</div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 24 }}>
                {/* Chart */}
                <div className="glass" style={{ padding: 24 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 20 }}>📈 Tăng Trưởng Lượt Xem (2026)</div>
                    <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 140, marginBottom: 8 }}>
                        {chartData.map((v, i) => (
                            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                                <div style={{
                                    width: '100%', borderRadius: '4px 4px 0 0',
                                    height: `${(v / maxVal) * 120}px`,
                                    background: i === chartData.length - 1
                                        ? 'linear-gradient(180deg,#A855F7,#7C3AED)'
                                        : `rgba(124,58,237,${0.3 + (v / maxVal) * 0.5})`,
                                    transition: 'all 0.3s',
                                    cursor: 'pointer',
                                    position: 'relative',
                                }}
                                    title={`${months[i]}: ${v}K views`}
                                />
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: 4 }}>
                        {months.map(m => (
                            <div key={m} style={{ flex: 1, fontSize: 10, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>{m}</div>
                        ))}
                    </div>
                </div>

                {/* Platform breakdown */}
                <div className="glass" style={{ padding: 24 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 20 }}>📡 Phân Bổ Theo Kênh</div>
                    {[
                        { platform: '🎵 TikTok', pct: 48, views: '1.36M', color: '#EE1D52' },
                        { platform: '▶️ YouTube', pct: 34, views: '965K', color: '#FF0000' },
                        { platform: '📘 Facebook', pct: 18, views: '511K', color: '#1877F2' },
                    ].map(p => (
                        <div key={p.platform} style={{ marginBottom: 18 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                                <span style={{ fontSize: 13, fontWeight: 600 }}>{p.platform}</span>
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{p.views} ({p.pct}%)</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${p.pct}%`, background: p.color }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Videos table */}
            <div className="glass" style={{ marginTop: 24, padding: 24 }}>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 20 }}>🏆 Top Videos Tuần Này</div>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                                {['Video', 'Nền tảng', 'Lượt xem', 'CTR', 'Watch Time', 'Trend'].map(h => (
                                    <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {topVideos.map((v, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }}
                                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                >
                                    <td style={{ padding: '12px', fontWeight: 600, maxWidth: 240, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v.title}</td>
                                    <td style={{ padding: '12px', color: 'rgba(255,255,255,0.6)' }}>{v.platform}</td>
                                    <td style={{ padding: '12px', fontWeight: 700, color: '#A855F7' }}>{v.views}</td>
                                    <td style={{ padding: '12px', color: '#34D399', fontWeight: 600 }}>{v.ctr}</td>
                                    <td style={{ padding: '12px', color: 'rgba(255,255,255,0.6)' }}>{v.watch}</td>
                                    <td style={{ padding: '12px', fontSize: 16, color: v.trend === '↑' ? '#34D399' : v.trend === '↓' ? '#F87171' : '#F59E0B' }}>{v.trend}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
