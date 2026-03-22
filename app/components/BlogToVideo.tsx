'use client';
import { useState } from 'react';

const sampleUrl = 'https://cafef.vn/bai-viet-mau-ve-cong-nghe-ai.html';
const sampleBlogContent = {
    title: 'ChatGPT Đạt 200 Triệu Người Dùng — Cuộc Cách Mạng AI Không Dừng Lại',
    source: 'cafef.vn',
    words: 1240,
    readTime: '5 phút',
    keyPoints: [
        'ChatGPT đạt 200 triệu người dùng hàng tuần trong năm 2025',
        'OpenAI mở rộng sang lĩnh vực video, âm nhạc và lập trình tự động',
        'Việt Nam nằm trong top 20 quốc gia dùng AI nhiều nhất',
        'AI tạo nội dung đang thay thế dần công việc content thủ công',
    ],
};

export default function BlogToVideo() {
    const [url, setUrl] = useState('');
    const [step, setStep] = useState<'idle' | 'fetching' | 'preview' | 'converting' | 'done'>('idle');
    const [progress, setProgress] = useState(0);

    const fetchBlog = () => {
        setStep('fetching');
        setTimeout(() => setStep('preview'), 2000);
    };

    const convert = () => {
        setStep('converting');
        setProgress(0);
        const steps = [15, 35, 55, 75, 90, 100];
        steps.forEach((p, i) => setTimeout(() => {
            setProgress(p);
            if (p === 100) setStep('done');
        }, (i + 1) * 600));
    };

    return (
        <section id="blog-to-video" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <div className="badge" style={{ marginBottom: 14, background: 'rgba(6,182,212,0.15)', borderColor: 'rgba(6,182,212,0.4)', color: '#67E8F9' }}>📰 Blog to Video</div>
                <h2 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 14 }}>
                    Dán Link Bài Viết → <span style={{ background: 'linear-gradient(135deg,#06B6D4,#3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Video Trong 60 Giây</span>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, maxWidth: 540, margin: '0 auto' }}>
                    Hỗ trợ: CafeF, VnExpress, Dân Trí, Thanh Niên, Medium, Substack, WordPress... AI tóm tắt và dựng video tự động.
                </p>
            </div>

            <div style={{ maxWidth: 820, margin: '0 auto' }}>
                {/* URL input */}
                <div className="glass" style={{ padding: 24, marginBottom: 20 }}>
                    <label style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.8)', display: 'block', marginBottom: 12 }}>🔗 Dán URL bài viết</label>
                    <div style={{ display: 'flex', gap: 12 }}>
                        <input
                            value={url || (step !== 'idle' ? sampleUrl : '')}
                            onChange={e => setUrl(e.target.value)}
                            placeholder={sampleUrl}
                            style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '12px 16px', color: '#fff', fontSize: 14, outline: 'none' }}
                        />
                        <button onClick={fetchBlog} disabled={step !== 'idle'} className="btn-primary" style={{ whiteSpace: 'nowrap', background: 'linear-gradient(135deg,#06B6D4,#3B82F6)', boxShadow: '0 4px 16px rgba(6,182,212,0.4)' }}>
                            {step === 'fetching' ? '⏳ Đang đọc...' : '📥 Đọc Bài Viết'}
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: 16, marginTop: 14, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Hỗ trợ:</span>
                        {['CafeF', 'VnExpress', 'Dân Trí', 'Medium', 'Substack', 'WordPress'].map(s => (
                            <span key={s} style={{ fontSize: 11, background: 'rgba(255,255,255,0.05)', borderRadius: 6, padding: '3px 10px', color: 'rgba(255,255,255,0.45)' }}>{s}</span>
                        ))}
                    </div>
                </div>

                {/* Blog preview */}
                {(step === 'preview' || step === 'converting' || step === 'done') && (
                    <div className="glass" style={{ padding: 24, marginBottom: 20 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
                            <div>
                                <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 6 }}>{sampleBlogContent.title}</div>
                                <div style={{ display: 'flex', gap: 10 }}>
                                    <span style={{ fontSize: 12, color: '#67E8F9' }}>📰 {sampleBlogContent.source}</span>
                                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>• {sampleBlogContent.words} từ</span>
                                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>• Đọc {sampleBlogContent.readTime}</span>
                                </div>
                            </div>
                            <span style={{ fontSize: 11, background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 8, padding: '4px 10px', color: '#34D399' }}>✅ Đã phân tích</span>
                        </div>

                        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10, color: '#67E8F9' }}>📋 AI đã trích xuất {sampleBlogContent.keyPoints.length} điểm chính:</div>
                        {sampleBlogContent.keyPoints.map((p, i) => (
                            <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: 13 }}>
                                <span style={{ color: '#06B6D4', fontWeight: 700, flexShrink: 0 }}>0{i + 1}</span>
                                <span style={{ color: 'rgba(255,255,255,0.8)' }}>{p}</span>
                            </div>
                        ))}

                        <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: 160 }}>
                                <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 6 }}>Định dạng xuất</label>
                                <select style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '9px 12px', color: '#fff', fontSize: 13 }}>
                                    <option>TikTok Vertical (9:16) — 60s</option>
                                    <option>YouTube Shorts (9:16) — 60s</option>
                                    <option>YouTube Standard (16:9) — 3-5 phút</option>
                                </select>
                            </div>
                            <div style={{ flex: 1, minWidth: 160 }}>
                                <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 6 }}>Giọng đọc AI</label>
                                <select style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '9px 12px', color: '#fff', fontSize: 13 }}>
                                    <option>Nam — Trầm & Uy quyền</option>
                                    <option>Nữ — Nhẹ nhàng & Chuyên nghiệp</option>
                                    <option>Clone giọng của tôi (Pro+)</option>
                                </select>
                            </div>
                        </div>

                        {step === 'preview' && (
                            <button onClick={convert} className="btn-primary" style={{ width: '100%', marginTop: 16, background: 'linear-gradient(135deg,#06B6D4,#3B82F6)', boxShadow: '0 4px 20px rgba(6,182,212,0.4)' }}>
                                🎬 Tạo Video Từ Bài Viết Này (–200 Cr)
                            </button>
                        )}
                    </div>
                )}

                {/* Progress */}
                {step === 'converting' && (
                    <div className="glass" style={{ padding: 24, marginBottom: 20 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>🤖 Đang xây dựng video...</div>
                        {[
                            { label: '📝 Tóm tắt & viết kịch bản', done: progress >= 20 },
                            { label: '🎙️ Tổng hợp giọng đọc AI', done: progress >= 40 },
                            { label: '🖼️ Ghép hình minh họa & B-roll', done: progress >= 65 },
                            { label: '📱 Thêm subtitle & hiệu ứng', done: progress >= 85 },
                            { label: '✅ Render & xuất file', done: progress >= 100 },
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10, fontSize: 13 }}>
                                <span style={{ fontSize: 16 }}>{s.done ? '✅' : progress > i * 20 ? '⏳' : '⬜'}</span>
                                <span style={{ color: s.done ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)' }}>{s.label}</span>
                            </div>
                        ))}
                        <div className="progress-bar" style={{ marginTop: 16 }}>
                            <div className="progress-fill" style={{ width: `${progress}%`, background: 'linear-gradient(90deg,#06B6D4,#3B82F6)' }} />
                        </div>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 6 }}>{progress}%</p>
                    </div>
                )}

                {/* Done */}
                {step === 'done' && (
                    <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 16, padding: 24, textAlign: 'center' }}>
                        <div style={{ fontSize: 40, marginBottom: 12 }}>🎉</div>
                        <div style={{ fontSize: 18, fontWeight: 800, color: '#34D399', marginBottom: 8 }}>Video đã sẵn sàng!</div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>Bài viết {sampleBlogContent.words} từ → Video 58s TikTok Vertical với 4 điểm chính</p>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button className="btn-primary" style={{ background: 'linear-gradient(135deg,#34D399,#059669)' }}>▶ Preview Video</button>
                            <button className="btn-secondary">⬇ Tải Xuống</button>
                            <a href="#step4" className="btn-primary" style={{ textDecoration: 'none' }}>📡 Đăng Ngay →</a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
