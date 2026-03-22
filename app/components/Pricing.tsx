'use client';
import { useState } from 'react';

const plans = [
    {
        id: 'starter', name: 'Starter', emoji: '🥉', price: '199.000', period: '/tháng',
        credits: '3.000', color: '#A855F7',
        features: ['Crawl 1–2 nguồn cơ bản', 'Phân tích từ khóa cơ bản', 'Chat AI sửa kịch bản', 'Render video 720p', 'Tải file thủ công', '⬜ Không auto-publish'],
        cta: 'Bắt Đầu Miễn Phí',
    },
    {
        id: 'pro', name: 'Pro', emoji: '🥈', price: '499.000', period: '/tháng',
        credits: '10.000', color: '#EC4899', popular: true,
        features: ['Crawl đa nguồn (YouTube, TikTok)', 'Phân tích top view xu hướng', 'Chat AI không giới hạn*', 'Render video 1080p Full HD', 'Auto-publish 1 kênh', 'Caption SEO tự động'],
        cta: 'Chọn Gói Pro',
    },
    {
        id: 'agency', name: 'Agency', emoji: '🥇', price: '1.490.000', period: '/tháng',
        credits: '40.000', color: '#F59E0B',
        features: ['Deep Research + phân tích comment', 'Dự báo xu hướng viral', 'Render video 4K / Clone giọng', 'Omnichannel (TikTok + YT + FB)', 'Lên lịch đăng thông minh', 'Admin Dashboard đầy đủ'],
        cta: 'Liên Hệ Agency',
    },
];

const topups = [
    { credits: '500', price: '25.000', badge: '' },
    { credits: '2.000', price: '100.000', badge: '🔥 Phổ biến' },
    { credits: '6.000', price: '250.000', badge: '💎 Tiết kiệm nhất' },
];

export default function Pricing() {
    const [selected, setSelected] = useState('pro');

    return (
        <section id="pricing" style={{ padding: '100px 24px 120px', maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <div className="badge" style={{ display: 'inline-flex', marginBottom: 16 }}>💰 Bảng Giá</div>
                <h2 style={{ fontSize: 'clamp(30px,5vw,54px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>
                    Chọn Gói Phù Hợp <span className="gradient-text">Với Bạn</span>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
                    Mọi hành động đều quy ra Credit. Kiểm soát chi phí hoàn toàn — không bao giờ bị tính phí bất ngờ.
                </p>
            </div>

            {/* Plans */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 60 }}>
                {plans.map(plan => (
                    <div key={plan.id} onClick={() => setSelected(plan.id)} style={{
                        position: 'relative', padding: '28px 24px', borderRadius: 24, cursor: 'pointer', transition: 'all 0.3s',
                        background: selected === plan.id ? `rgba(${plan.id === 'pro' ? '236,72,153' : plan.id === 'starter' ? '168,85,247' : '245,158,11'},0.1)` : 'rgba(255,255,255,0.04)',
                        border: `2px solid ${selected === plan.id ? plan.color : 'rgba(255,255,255,0.08)'}`,
                        transform: selected === plan.id ? 'translateY(-6px)' : 'none',
                        boxShadow: selected === plan.id ? `0 20px 60px rgba(0,0,0,0.3)` : 'none',
                    }}>
                        {plan.popular && (
                            <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg,#EC4899,#7C3AED)', borderRadius: 20, padding: '4px 16px', fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>
                                ⭐ Phổ Biến Nhất
                            </div>
                        )}
                        <div style={{ fontSize: 32, marginBottom: 10 }}>{plan.emoji}</div>
                        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 22, marginBottom: 6 }}>{plan.name}</div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, fontSize: 30, color: plan.color }}>{plan.price}</span>
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>VNĐ{plan.period}</span>
                        </div>
                        <div style={{ fontSize: 13, color: plan.color, fontWeight: 700, marginBottom: 20 }}>✨ {plan.credits} Credits/tháng</div>
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 18, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                            {plan.features.map((f, i) => (
                                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: f.startsWith('⬜') ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.8)' }}>
                                    <span style={{ color: f.startsWith('⬜') ? 'rgba(255,255,255,0.2)' : '#34D399', flexShrink: 0 }}>{f.startsWith('⬜') ? '—' : '✓'}</span>
                                    <span>{f.replace('⬜ ', '')}</span>
                                </div>
                            ))}
                        </div>
                        <button style={{
                            width: '100%', padding: '13px', borderRadius: 14, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer',
                            background: selected === plan.id ? `linear-gradient(135deg, ${plan.color}, ${plan.color}aa)` : 'rgba(255,255,255,0.08)',
                            border: `1px solid ${selected === plan.id ? 'transparent' : 'rgba(255,255,255,0.12)'}`,
                            color: '#fff', transition: 'all 0.2s',
                            boxShadow: selected === plan.id ? `0 4px 16px ${plan.color}55` : 'none',
                        }}>
                            {plan.cta} →
                        </button>
                    </div>
                ))}
            </div>

            {/* Top-up */}
            <div style={{ textAlign: 'center', marginBottom: 30 }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 24, marginBottom: 8 }}>💳 Nạp Thêm Credits (Top-up)</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Không giới hạn tần suất — dùng hết là nạp thêm ngay</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {topups.map(t => (
                    <div key={t.credits} className="glass" style={{ padding: '22px 20px', textAlign: 'center', position: 'relative', borderRadius: 18, cursor: 'pointer', transition: 'all 0.2s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = ''; (e.currentTarget as HTMLDivElement).style.transform = ''; }}
                    >
                        {t.badge && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg,#7C3AED,#EC4899)', borderRadius: 20, padding: '3px 12px', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap' }}>{t.badge}</div>}
                        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, fontSize: 28, background: 'linear-gradient(135deg,#A855F7,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 4 }}>
                            {t.credits} Cr
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{t.price} VNĐ</div>
                        <button className="btn-primary" style={{ width: '100%', fontSize: 13, padding: '10px' }}>Nạp Ngay</button>
                    </div>
                ))}
            </div>

            {/* Note */}
            <div style={{ marginTop: 40, textAlign: 'center', padding: '20px 24px', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 16 }}>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                    * Credits chỉ bị trừ khi bạn thực sự sử dụng tính năng AI. Khi hết Credits, hệ thống <strong style={{ color: '#C084FC' }}>Hard Stop</strong> sẽ khóa tính năng và thông báo ngay — bảo vệ bạn khỏi chi phí vượt kiểm soát.
                </p>
            </div>
        </section>
    );
}
