'use client';
import { useState, useEffect, useRef } from 'react';

const TOPICS = [
    'Bí Mật Võ Đang 700 Năm',
    'Top 10 Món Ăn Việt Nam',
    'AI Thay Thế Con Người?',
    'Bí Quyết Kiếm 10 Triệu/Tháng',
    'Lịch Sử Triều Nguyễn',
    'Cách Đầu Tư Crypto 2026',
];

const PIPELINE = [
    {
        step: 1, icon: '📡', label: 'Crawl & Phân Tích Trend',
        color: '#7C3AED',
        actions: [
            '🔍 Đang quét YouTube, TikTok, Google Trends...',
            '📊 Tìm thấy 847 video liên quan...',
            '🤖 AI đang chấm điểm viral...',
            '✅ Top 5 góc độ viral được chọn → Điểm: 94/100',
        ],
    },
    {
        step: 2, icon: '✍️', label: 'Viết Kịch Bản AI',
        color: '#EC4899',
        actions: [
            '🧠 GPT-4o đang phân tích cấu trúc video viral...',
            '📝 Đang viết hook 3 giây đầu...',
            '🎯 Tối ưu caption & hashtag tự động...',
            '✅ Kịch bản 90 giây hoàn chỉnh, 8 cảnh quay',
        ],
    },
    {
        step: 3, icon: '🎬', label: 'Render Video AI',
        color: '#06B6D4',
        actions: [
            '🖼️ Ghép 47 ảnh/video B-roll từ thư viện...',
            '🎙️ Tổng hợp giọng đọc AI (giọng nam trầm)...',
            '📱 Thêm subtitle động, hiệu ứng chuyển cảnh...',
            '✅ Video 1080p 90 giây — sẵn sàng đăng',
        ],
    },
    {
        step: 4, icon: '🚀', label: 'Đăng Tải Tự Động',
        color: '#10B981',
        actions: [
            '🎵 TikTok: Đang đăng với hashtag tối ưu...',
            '▶️ YouTube Shorts: Upload + SEO description...',
            '📸 Instagram Reels: Đăng kèm caption...',
            '✅ Đã đăng 3 kênh đồng thời lúc 20:00 giờ vàng!',
        ],
    },
];

export default function LivePipelineDemo() {
    const [topic, setTopic] = useState('');
    const [placeholder, setPlaceholder] = useState(TOPICS[0]);
    const [running, setRunning] = useState(false);
    const [currentStep, setCurrentStep] = useState(-1);
    const [stepActions, setStepActions] = useState<string[][]>([[], [], [], []]);
    const [done, setDone] = useState(false);
    const [result, setResult] = useState({ views: 0, ctr: 0 });
    const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);

    // Typewriter placeholder cycling
    useEffect(() => {
        let i = 0;
        const t = setInterval(() => { i = (i + 1) % TOPICS.length; setPlaceholder(TOPICS[i]); }, 2200);
        return () => clearInterval(t);
    }, []);

    const runDemo = () => {
        if (running) return;
        const finalTopic = topic || placeholder;
        setRunning(true); setDone(false); setCurrentStep(0);
        setStepActions([[], [], [], []]);

        let delay = 200;
        timerRef.current = [];

        PIPELINE.forEach((step, si) => {
            // Activate step
            timerRef.current.push(setTimeout(() => setCurrentStep(si), delay));
            delay += 400;

            step.actions.forEach((action, ai) => {
                const d = delay;
                timerRef.current.push(setTimeout(() => {
                    setStepActions(prev => {
                        const next = [...prev];
                        next[si] = [...next[si], action];
                        return next;
                    });
                }, d));
                delay += ai === step.actions.length - 1 ? 900 : 600;
            });

            delay += 200;
        });

        // Done
        timerRef.current.push(setTimeout(() => {
            setRunning(false); setDone(true);
            setResult({ views: Math.floor(Math.random() * 800 + 200), ctr: parseFloat((Math.random() * 3 + 6).toFixed(1)) });
        }, delay));
    };

    const reset = () => {
        timerRef.current.forEach(clearTimeout);
        setRunning(false); setDone(false); setCurrentStep(-1);
        setStepActions([[], [], [], []]); setTopic('');
    };

    return (
        <section id="live-demo" style={{ padding: '100px 24px 80px', position: 'relative', overflow: 'hidden' }}>
            {/* Glow bg */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.35)', borderRadius: 40, padding: '6px 18px', marginBottom: 20 }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block', animation: 'pulse-glow 1.5s ease-in-out infinite' }} />
                        <span style={{ fontSize: 13, color: '#34D399', fontWeight: 700 }}>LIVE DEMO — Thử Ngay, Không Cần Đăng Ký</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>
                        Gõ Chủ Đề.<br />
                        <span style={{ background: 'linear-gradient(135deg,#A855F7,#EC4899,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Xem AI Làm Tất Cả.
                        </span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
                        Trải nghiệm toàn bộ quy trình 4 bước ngay trên màn hình — từ ý tưởng đến video sẵn sàng đăng.
                    </p>
                </div>

                {/* Input */}
                {!running && !done && (
                    <div style={{ display: 'flex', gap: 12, marginBottom: 40, maxWidth: 680, margin: '0 auto 40px' }}>
                        <div style={{ flex: 1, position: 'relative' }}>
                            <input
                                value={topic}
                                onChange={e => setTopic(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && runDemo()}
                                placeholder={`Ví dụ: "${placeholder}"`}
                                style={{
                                    width: '100%', background: 'rgba(255,255,255,0.07)', border: '2px solid rgba(124,58,237,0.4)',
                                    borderRadius: 16, padding: '16px 20px', color: '#fff', fontSize: 16, outline: 'none',
                                    transition: 'border-color 0.2s',
                                    boxSizing: 'border-box',
                                }}
                                onFocus={e => (e.target.style.borderColor = 'rgba(124,58,237,0.8)')}
                                onBlur={e => (e.target.style.borderColor = 'rgba(124,58,237,0.4)')}
                            />
                        </div>
                        <button onClick={runDemo} className="btn-primary animate-pulse-glow" style={{ padding: '16px 32px', fontSize: 16, fontWeight: 800, whiteSpace: 'nowrap', borderRadius: 16 }}>
                            ⚡ Chạy Ngay
                        </button>
                    </div>
                )}

                {/* Pipeline Steps */}
                {(running || done) && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                        {PIPELINE.map((step, si) => {
                            const isActive = currentStep === si;
                            const isDone = currentStep > si || done;
                            const isPending = currentStep < si;

                            return (
                                <div key={si} style={{
                                    borderRadius: 16, overflow: 'hidden',
                                    border: `1.5px solid ${isActive ? step.color : isDone ? `${step.color}55` : 'rgba(255,255,255,0.06)'}`,
                                    background: isActive ? `rgba(${si === 0 ? '124,58,237' : si === 1 ? '236,72,153' : si === 2 ? '6,182,212' : '16,185,129'},0.08)` : 'rgba(255,255,255,0.03)',
                                    transition: 'all 0.4s ease',
                                    opacity: isPending ? 0.4 : 1,
                                }}>
                                    <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                                        <div style={{
                                            width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                                            background: isDone ? `linear-gradient(135deg,${step.color},${step.color}88)` : isActive ? `rgba(${si === 0 ? '124,58,237' : si === 1 ? '236,72,153' : si === 2 ? '6,182,212' : '16,185,129'},0.2)` : 'rgba(255,255,255,0.05)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                                            boxShadow: isActive ? `0 0 20px ${step.color}66` : 'none',
                                            transition: 'all 0.4s',
                                        }}>
                                            {isDone ? '✅' : step.icon}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: 14, fontWeight: 700, color: isDone ? step.color : '#fff' }}>
                                                Bước {step.step}: {step.label}
                                            </div>
                                            {isActive && <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>AI đang xử lý...</div>}
                                            {isDone && <div style={{ fontSize: 12, color: step.color, marginTop: 2 }}>Hoàn thành ✓</div>}
                                        </div>
                                        {isActive && (
                                            <div style={{ display: 'flex', gap: 4 }}>
                                                {[0, 1, 2].map(i => (
                                                    <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: step.color, opacity: 0.8, animation: `typing 1.2s ${i * 0.3}s ease-in-out infinite` }} />
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Step actions log */}
                                    {stepActions[si].length > 0 && (
                                        <div style={{ padding: '0 20px 14px 74px' }}>
                                            {stepActions[si].map((action, ai) => (
                                                <div key={ai} style={{ fontSize: 12, color: action.startsWith('✅') ? step.color : 'rgba(255,255,255,0.6)', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                                                    {action}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Done result */}
                {done && (
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(124,58,237,0.12))',
                        border: '1.5px solid rgba(16,185,129,0.35)',
                        borderRadius: 24, padding: 28, textAlign: 'center',
                    }}>
                        <div style={{ fontSize: 44, marginBottom: 12 }}>🎉</div>
                        <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, fontSize: 22, marginBottom: 8 }}>
                            Video "{topic || placeholder}" đã sẵn sàng!
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 24 }}>
                            Hoàn thành trong <strong style={{ color: '#34D399' }}>4 phút 12 giây</strong> · Đề xuất xem lúc <strong style={{ color: '#A855F7' }}>20:00 tối nay</strong>
                        </p>
                        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
                            {[
                                { label: 'CTR Dự đoán', val: `${result.ctr}%`, icon: '📈', color: '#34D399' },
                                { label: 'Reach ước tính', val: `${result.views}K+`, icon: '👁️', color: '#A855F7' },
                                { label: 'Thời gian tạo', val: '4 phút', icon: '⚡', color: '#06B6D4' },
                                { label: 'Kênh đã đăng', val: '3 kênh', icon: '📡', color: '#EC4899' },
                            ].map(s => (
                                <div key={s.label} style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
                                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 900, color: s.color }}>{s.val}</div>
                                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button onClick={reset} className="btn-secondary" style={{ padding: '12px 28px' }}>🔄 Thử Chủ Đề Khác</button>
                            <a href="#pricing" className="btn-primary animate-pulse-glow" style={{ textDecoration: 'none', padding: '12px 32px' }}>🚀 Bắt Đầu Miễn Phí →</a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
