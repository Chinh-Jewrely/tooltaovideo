'use client';
import { useState } from 'react';

const languages = [
    { code: 'vi', flag: '🇻🇳', name: 'Tiếng Việt', nativeName: 'Vietnamese', voices: 4 },
    { code: 'en', flag: '🇺🇸', name: 'Tiếng Anh', nativeName: 'English', voices: 12 },
    { code: 'zh', flag: '🇨🇳', name: 'Tiếng Trung', nativeName: '普通话', voices: 6 },
    { code: 'ja', flag: '🇯🇵', name: 'Tiếng Nhật', nativeName: '日本語', voices: 5 },
    { code: 'ko', flag: '🇰🇷', name: 'Tiếng Hàn', nativeName: '한국어', voices: 4 },
    { code: 'id', flag: '🇮🇩', name: 'Tiếng Indonesia', nativeName: 'Bahasa Indonesia', voices: 3 },
    { code: 'th', flag: '🇹🇭', name: 'Tiếng Thái', nativeName: 'ภาษาไทย', voices: 3 },
    { code: 'es', flag: '🇪🇸', name: 'Tiếng Tây Ban Nha', nativeName: 'Español', voices: 8 },
];

const shortFormats = [
    { id: 'tiktok', label: 'TikTok Vertical', ratio: '9:16', duration: '15-60s', icon: '🎵', tips: 'Hook trong 1.5s đầu, text overlay lớn' },
    { id: 'yt-short', label: 'YouTube Shorts', ratio: '9:16', duration: '≤ 60s', icon: '▶️', tips: 'Loop-able, CTA cuối, caption auto' },
    { id: 'ig-reel', label: 'Instagram Reels', ratio: '9:16', duration: '7-90s', icon: '📸', tips: 'Trending audio, colorful thumbnail' },
    { id: 'fb-reel', label: 'Facebook Reels', ratio: '9:16', duration: '≤ 90s', icon: '📘', tips: 'Caption lớn, hook rõ ràng' },
];

export default function RepurposeTools() {
    const [activeLang, setActiveLang] = useState('vi');
    const [activeFormat, setActiveFormat] = useState('tiktok');
    const [dubbing, setDubbing] = useState(false);
    const [dubbed, setDubbed] = useState(false);
    const [clipping, setClipping] = useState(false);
    const [clips, setClips] = useState<null | number[]>(null);
    const [clipProgress, setClipProgress] = useState(0);

    const startDub = () => {
        setDubbing(true); setDubbed(false);
        setTimeout(() => { setDubbing(false); setDubbed(true); }, 3000);
    };

    const startClip = () => {
        setClipping(true); setClips(null); setClipProgress(0);
        const steps = [20, 45, 70, 90, 100];
        steps.forEach((p, i) => setTimeout(() => {
            setClipProgress(p);
            if (p === 100) { setClipping(false); setClips([28, 45, 52]); }
        }, (i + 1) * 700));
    };

    const activeLangData = languages.find(l => l.code === activeLang)!;
    const activeFormatData = shortFormats.find(f => f.id === activeFormat)!;

    return (
        <section id="repurpose" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <div className="badge" style={{ marginBottom: 14, background: 'rgba(245,158,11,0.15)', borderColor: 'rgba(245,158,11,0.4)', color: '#FCD34D' }}>✂️ Repurpose & Localize</div>
                <h2 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 14 }}>
                    1 Video → <span style={{ background: 'linear-gradient(135deg,#F59E0B,#F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Đa Nền Tảng & Đa Ngôn Ngữ</span>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, maxWidth: 560, margin: '0 auto' }}>
                    Tự động cắt Shorts từ video dài + dịch & lồng tiếng AI sang 50+ ngôn ngữ — không cần quay lại.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {/* Left: Short Clip Maker */}
                <div className="glass" style={{ padding: 24 }}>
                    <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 6 }}>✂️ AI Short Clip Maker</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>Upload video dài → AI tự tìm highlight → Cắt thành Shorts sẵn sàng đăng.</p>

                    {/* Format selector */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
                        {shortFormats.map(f => (
                            <button key={f.id} onClick={() => setActiveFormat(f.id)} style={{
                                padding: '10px 12px', borderRadius: 12, cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
                                background: activeFormat === f.id ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.04)',
                                border: `1px solid ${activeFormat === f.id ? 'rgba(245,158,11,0.5)' : 'rgba(255,255,255,0.08)'}`,
                                color: '#fff',
                            }}>
                                <div style={{ fontSize: 13, fontWeight: 700 }}>{f.icon} {f.label}</div>
                                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{f.ratio} · {f.duration}</div>
                            </button>
                        ))}
                    </div>

                    <div style={{ padding: '12px 14px', background: 'rgba(245,158,11,0.08)', borderRadius: 10, border: '1px solid rgba(245,158,11,0.2)', marginBottom: 16 }}>
                        <p style={{ fontSize: 12, color: '#FCD34D' }}>💡 Tip cho {activeFormatData.label}: {activeFormatData.tips}</p>
                    </div>

                    {/* Fake video input + button */}
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '2px dashed rgba(255,255,255,0.12)', borderRadius: 14, padding: '24px', textAlign: 'center', marginBottom: 14 }}>
                        <div style={{ fontSize: 28, marginBottom: 8 }}>🎬</div>
                        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>Kéo thả video hoặc nhập URL YouTube</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 6 }}>Demo: Video Võ Đang 15 phút (đã tạo ở Bước 3)</div>
                    </div>

                    {!clipping && !clips && (
                        <button onClick={startClip} className="btn-primary" style={{ width: '100%', background: 'linear-gradient(135deg,#F59E0B,#F97316)', boxShadow: '0 4px 20px rgba(245,158,11,0.4)' }}>
                            ✂️ Cắt {activeFormatData.label} Tự Động
                        </button>
                    )}

                    {clipping && (
                        <div>
                            <p style={{ fontSize: 13, color: '#FCD34D', marginBottom: 10 }}>🤖 AI đang phân tích điểm viral...</p>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${clipProgress}%`, background: 'linear-gradient(90deg,#F59E0B,#F97316)' }} />
                            </div>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 6 }}>{clipProgress}%</p>
                        </div>
                    )}

                    {clips && (
                        <div style={{ marginTop: 12 }}>
                            <p style={{ fontSize: 13, fontWeight: 700, color: '#34D399', marginBottom: 10 }}>✅ Tìm thấy {clips.length} đoạn viral nhất!</p>
                            {clips.map((sec, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, marginBottom: 8 }}>
                                    <div>
                                        <div style={{ fontSize: 13, fontWeight: 600 }}>Clip #{i + 1} · {sec}s</div>
                                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Viral score: {[94, 88, 82][i]}%</div>
                                    </div>
                                    <button className="btn-primary" style={{ fontSize: 11, padding: '6px 14px' }}>Xuất</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right: AI Dub Multi-language */}
                <div className="glass" style={{ padding: 24 }}>
                    <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 6 }}>🌐 AI Dub — Lồng Tiếng Đa Ngôn Ngữ</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>Dịch script + clone giọng đọc sang ngôn ngữ khác — giữ nguyên cảm xúc và ngữ điệu.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16, maxHeight: 280, overflowY: 'auto' }}>
                        {languages.map(l => (
                            <button key={l.code} onClick={() => { setActiveLang(l.code); setDubbed(false); }} style={{
                                padding: '10px 12px', borderRadius: 12, cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
                                background: activeLang === l.code ? 'rgba(6,182,212,0.15)' : 'rgba(255,255,255,0.04)',
                                border: `1px solid ${activeLang === l.code ? 'rgba(6,182,212,0.5)' : 'rgba(255,255,255,0.08)'}`,
                                color: '#fff',
                            }}>
                                <div style={{ fontSize: 13 }}>{l.flag} {l.name}</div>
                                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{l.nativeName} · {l.voices} giọng</div>
                            </button>
                        ))}
                    </div>

                    <div style={{ padding: '12px 14px', background: 'rgba(6,182,212,0.08)', borderRadius: 10, border: '1px solid rgba(6,182,212,0.2)', marginBottom: 16 }}>
                        <div style={{ fontSize: 12, color: '#67E8F9', fontWeight: 600 }}>Ngôn ngữ đích: {activeLangData.flag} {activeLangData.name}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>Có {activeLangData.voices} giọng đọc AI có thể chọn</div>
                    </div>

                    {!dubbing && !dubbed && (
                        <button onClick={startDub} className="btn-primary" style={{ width: '100%', background: 'linear-gradient(135deg,#06B6D4,#3B82F6)', boxShadow: '0 4px 20px rgba(6,182,212,0.4)' }}>
                            🌐 Dịch & Lồng Tiếng {activeLangData.flag}
                        </button>
                    )}
                    {dubbing && (
                        <div style={{ textAlign: 'center', padding: 16 }}>
                            <div style={{ fontSize: 24, marginBottom: 10, animation: 'spin 1s linear infinite', display: 'inline-block' }}>🔄</div>
                            <p style={{ fontSize: 13, color: '#67E8F9' }}>Đang dịch & tổng hợp giọng {activeLangData.name}...</p>
                        </div>
                    )}
                    {dubbed && (
                        <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 12, padding: 16 }}>
                            <div style={{ fontSize: 14, fontWeight: 700, color: '#34D399', marginBottom: 8 }}>✅ Đã lồng tiếng {activeLangData.flag} thành công!</div>
                            <div style={{ display: 'flex', gap: 8 }}>
                                <button className="btn-primary" style={{ flex: 1, fontSize: 12, padding: '8px' }}>▶ Preview</button>
                                <button className="btn-secondary" style={{ flex: 1, fontSize: 12, padding: '8px' }}>⬇ Tải Xuống</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
