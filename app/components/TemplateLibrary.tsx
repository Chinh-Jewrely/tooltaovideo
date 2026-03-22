'use client';
import { useState } from 'react';

const categories = ['Tất Cả', 'Kiếm Hiệp', 'Lịch Sử', 'Công Nghệ', 'Ẩm Thực', 'Du Lịch', 'Tài Chính', 'Sức Khỏe'];

const templates = [
    { id: 1, name: 'Viral Hook Documentary', cat: 'Kiếm Hiệp', views: '2.4M avg', rating: 4.9, thumbnail: '⚔️', duration: '90s', style: 'Wuxia Cinematic', used: 12400 },
    { id: 2, name: 'Top 10 Countdown', cat: 'Lịch Sử', views: '1.8M avg', rating: 4.8, thumbnail: '🏆', duration: '120s', style: 'Infographic Bold', used: 8900 },
    { id: 3, name: 'Tech Explained Fast', cat: 'Công Nghệ', views: '3.1M avg', rating: 4.9, thumbnail: '💡', duration: '60s', style: 'Minimalist Dark', used: 21000 },
    { id: 4, name: 'Recipe Reel', cat: 'Ẩm Thực', views: '900K avg', rating: 4.7, thumbnail: '🍜', duration: '45s', style: 'Warm & Vibrant', used: 5600 },
    { id: 5, name: 'Travel Vlog AI', cat: 'Du Lịch', views: '1.2M avg', rating: 4.8, thumbnail: '✈️', duration: '75s', style: 'Cinematic Wide', used: 7800 },
    { id: 6, name: 'Money Tips Short', cat: 'Tài Chính', views: '2.9M avg', rating: 4.9, thumbnail: '💰', duration: '60s', style: 'Corporate Clean', used: 15000 },
    { id: 7, name: 'Wellness Routine', cat: 'Sức Khỏe', views: '780K avg', rating: 4.7, thumbnail: '🌿', duration: '90s', style: 'Calm Aesthetic', used: 4300 },
    { id: 8, name: 'Breaking News Flash', cat: 'Lịch Sử', views: '4.2M avg', rating: 5.0, thumbnail: '📰', duration: '45s', style: 'News Broadcast', used: 28000 },
    { id: 9, name: 'AI Deep Dive', cat: 'Công Nghệ', views: '2.2M avg', rating: 4.8, thumbnail: '🤖', duration: '180s', style: 'Futuristic Glow', used: 9400 },
];

export default function TemplateLibrary() {
    const [activeCategory, setActiveCategory] = useState('Tất Cả');
    const [selected, setSelected] = useState<number | null>(null);
    const [search, setSearch] = useState('');

    const filtered = templates.filter(t =>
        (activeCategory === 'Tất Cả' || t.cat === activeCategory) &&
        (search === '' || t.name.toLowerCase().includes(search.toLowerCase()) || t.cat.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <section id="templates" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <div className="badge" style={{ marginBottom: 14 }}>📋 Template Library</div>
                <h2 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 14 }}>
                    Hơn <span className="gradient-text">500+ Kịch Bản Mẫu</span> Sẵn Sàng
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, maxWidth: 540, margin: '0 auto' }}>
                    Mỗi template được tối ưu hoá bởi AI từ hàng triệu video viral — chọn 1 click, customize trong 60 giây.
                </p>
            </div>

            {/* Search + Filter */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap', alignItems: 'center' }}>
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="🔍 Tìm template..."
                    style={{ flex: 1, minWidth: 200, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '11px 16px', color: '#fff', fontSize: 14, outline: 'none' }}
                />
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {categories.map(c => (
                        <button key={c} onClick={() => setActiveCategory(c)} style={{
                            padding: '8px 14px', borderRadius: 20, cursor: 'pointer', fontSize: 12, fontWeight: 600, transition: 'all 0.2s',
                            background: activeCategory === c ? 'linear-gradient(135deg,#7C3AED,#EC4899)' : 'rgba(255,255,255,0.06)',
                            border: `1px solid ${activeCategory === c ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                            color: '#fff',
                        }}>{c}</button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
                {filtered.map(t => (
                    <div key={t.id} onClick={() => setSelected(selected === t.id ? null : t.id)} className="feature-card" style={{
                        background: selected === t.id ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.04)',
                        border: `1.5px solid ${selected === t.id ? '#7C3AED' : 'rgba(255,255,255,0.08)'}`,
                        borderRadius: 16, padding: 18, cursor: 'pointer', transition: 'all 0.2s',
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                            <div style={{ fontSize: 36 }}>{t.thumbnail}</div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: 11, color: '#F59E0B', marginBottom: 2 }}>{'★'.repeat(Math.round(t.rating))} {t.rating}</div>
                                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>{t.used.toLocaleString()} lần dùng</div>
                            </div>
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{t.name}</div>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
                            <span style={{ fontSize: 11, background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 6, padding: '2px 8px', color: '#C084FC' }}>{t.cat}</span>
                            <span style={{ fontSize: 11, background: 'rgba(255,255,255,0.05)', borderRadius: 6, padding: '2px 8px', color: 'rgba(255,255,255,0.5)' }}>{t.duration}</span>
                            <span style={{ fontSize: 11, background: 'rgba(255,255,255,0.05)', borderRadius: 6, padding: '2px 8px', color: 'rgba(255,255,255,0.5)' }}>{t.style}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: 12, color: '#34D399' }}>📈 {t.views}</div>
                            {selected === t.id
                                ? <span style={{ fontSize: 12, background: 'linear-gradient(135deg,#7C3AED,#EC4899)', padding: '4px 12px', borderRadius: 20, fontWeight: 700 }}>✓ Chọn Template Này</span>
                                : <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Click để chọn →</span>
                            }
                        </div>
                    </div>
                ))}
            </div>

            {selected && (
                <div style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 16, padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                    <div>
                        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>✅ Đã chọn: {templates.find(t => t.id === selected)?.name}</div>
                        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Template sẽ được load vào editor Bước 2 với cấu trúc kịch bản tối ưu</div>
                    </div>
                    <a href="#step2" className="btn-primary" style={{ textDecoration: 'none', fontSize: 13, padding: '10px 24px' }}>Dùng Template Này →</a>
                </div>
            )}
        </section>
    );
}
