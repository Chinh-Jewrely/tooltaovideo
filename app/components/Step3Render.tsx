'use client';
import { useState } from 'react';

const resolutions = [
    { id: '720p', label: '720p HD', cost: 100, icon: '📺' },
    { id: '1080p', label: '1080p Full HD', cost: 300, icon: '🖥️' },
    { id: '4k', label: '4K Ultra HD', cost: 1000, icon: '🎯' },
];
const ttsOptions = [
    { id: 'basic', label: 'AI Cơ Bản', cost: 50, icon: '🔊' },
    { id: 'premium', label: 'AI Cao Cấp (Tự Nhiên)', cost: 200, icon: '🎙️' },
    { id: 'clone', label: 'Clone Giọng Thật', cost: 500, icon: '🎤' },
];
const effectOptions = [
    { id: 'none', label: 'Không hiệu ứng', cost: 0, icon: '⬜' },
    { id: 'standard', label: 'Hiệu ứng cơ bản', cost: 80, icon: '✨' },
    { id: 'cinematic', label: 'Cinematic (Điện Ảnh)', cost: 200, icon: '🎬' },
];
const aiPreset = { style: 'Kiếm Hiệp Wuxia', lighting: 'Cinematic', voice: 'Nam Trầm Ấm', effects: 'Cinematic', reason: 'Kịch bản về Võ Đang — phong cách cổ trang, điện ảnh sẽ tối ưu nhất cho YouTube.' };

export default function Step3Render() {
    const [resolution, setResolution] = useState('1080p');
    const [tts, setTts] = useState('premium');
    const [effect, setEffect] = useState('cinematic');
    const [music, setMusic] = useState(true);
    const [rendering, setRendering] = useState(false);
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);

    const resCost = resolutions.find(r => r.id === resolution)?.cost ?? 0;
    const ttsCost = ttsOptions.find(t => t.id === tts)?.cost ?? 0;
    const fxCost = effectOptions.find(f => f.id === effect)?.cost ?? 0;
    const musicCost = music ? 50 : 0;
    const total = resCost + ttsCost + fxCost + musicCost;

    const startRender = () => {
        setRendering(true); setProgress(0); setDone(false);
        const stages = [10, 25, 45, 65, 80, 95, 100];
        stages.forEach((p, i) => setTimeout(() => {
            setProgress(p);
            if (p === 100) { setRendering(false); setDone(true); }
        }, (i + 1) * 700));
    };

    const stageLabel = progress < 20 ? '🎙️ Đang tổng hợp giọng đọc...' : progress < 50 ? '🖼️ Đang dựng hình ảnh cảnh...' : progress < 70 ? '🎬 Đang ghép video + hiệu ứng...' : progress < 90 ? '🎵 Đang mix nhạc nền...' : '✅ Đang xuất file...';

    return (
        <section id="step3" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                <div className="step-number" style={{ background: 'linear-gradient(135deg,#06B6D4,#3B82F6)', color: '#fff', boxShadow: '0 4px 16px rgba(6,182,212,0.5)' }}>3</div>
                <div>
                    <div className="badge" style={{ background: 'rgba(6,182,212,0.15)', borderColor: 'rgba(6,182,212,0.4)', color: '#67E8F9', marginBottom: 6 }}>🎬 Bước 3</div>
                    <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, letterSpacing: '-0.5px' }}>
                        Đề Xuất Cấu Hình &amp; <span style={{ background: 'linear-gradient(135deg,#06B6D4,#3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tạo Video</span>
                    </h2>
                </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, marginBottom: 40, maxWidth: 600, lineHeight: 1.7 }}>
                AI đóng vai "Giám đốc Nghệ thuật" — tự đề xuất cấu hình tối ưu. Bạn xem dự toán trước khi bấm Tạo.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {/* Left: AI suggestion + config */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {/* AI Director preset */}
                    <div style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)', borderRadius: 16, padding: 20 }}>
                        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
                            <span style={{ fontSize: 24 }}>🤖</span>
                            <div>
                                <div style={{ fontSize: 13, fontWeight: 700, color: '#67E8F9' }}>AI Giám Đốc Nghệ Thuật đề xuất:</div>
                                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Dựa trên nội dung kịch bản đã chọn</div>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
                            {[['🎨 Phong cách', aiPreset.style], ['💡 Ánh sáng', aiPreset.lighting], ['🎙️ Giọng đọc', aiPreset.voice], ['✨ Hiệu ứng', aiPreset.effects]].map(([k, v]) => (
                                <div key={k} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '8px 12px' }}>
                                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>{k}</div>
                                    <div style={{ fontSize: 13, fontWeight: 600, color: '#67E8F9' }}>{v}</div>
                                </div>
                            ))}
                        </div>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>💡 "{aiPreset.reason}"</p>
                    </div>

                    {/* Resolution */}
                    <div className="glass" style={{ padding: 18 }}>
                        <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 10, display: 'block', fontWeight: 600 }}>📺 Độ Phân Giải</label>
                        <div style={{ display: 'flex', gap: 8 }}>
                            {resolutions.map(r => (
                                <button key={r.id} onClick={() => setResolution(r.id)} style={{
                                    flex: 1, padding: '10px 6px', borderRadius: 12, cursor: 'pointer', transition: 'all 0.2s', textAlign: 'center',
                                    background: resolution === r.id ? 'rgba(6,182,212,0.2)' : 'rgba(255,255,255,0.04)',
                                    border: `1px solid ${resolution === r.id ? 'rgba(6,182,212,0.6)' : 'rgba(255,255,255,0.1)'}`,
                                    color: '#fff',
                                }}>
                                    <div style={{ fontSize: 18 }}>{r.icon}</div>
                                    <div style={{ fontSize: 12, fontWeight: 600, marginTop: 4 }}>{r.label}</div>
                                    <div style={{ fontSize: 11, color: '#67E8F9', marginTop: 2 }}>–{r.cost}Cr</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* TTS */}
                    <div className="glass" style={{ padding: 18 }}>
                        <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 10, display: 'block', fontWeight: 600 }}>🎙️ Giọng Đọc AI</label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {ttsOptions.map(t => (
                                <button key={t.id} onClick={() => setTts(t.id)} style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', borderRadius: 10, cursor: 'pointer',
                                    background: tts === t.id ? 'rgba(6,182,212,0.15)' : 'rgba(255,255,255,0.04)',
                                    border: `1px solid ${tts === t.id ? 'rgba(6,182,212,0.5)' : 'rgba(255,255,255,0.08)'}`,
                                    color: '#fff',
                                }}>
                                    <span style={{ fontSize: 13 }}>{t.icon} {t.label}</span>
                                    <span style={{ fontSize: 12, color: '#67E8F9', fontWeight: 700 }}>–{t.cost}Cr</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Effects */}
                    <div className="glass" style={{ padding: 18 }}>
                        <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 10, display: 'block', fontWeight: 600 }}>✨ Hiệu Ứng</label>
                        <div style={{ display: 'flex', gap: 8 }}>
                            {effectOptions.map(f => (
                                <button key={f.id} onClick={() => setEffect(f.id)} style={{
                                    flex: 1, padding: '10px 6px', borderRadius: 12, cursor: 'pointer', textAlign: 'center',
                                    background: effect === f.id ? 'rgba(6,182,212,0.2)' : 'rgba(255,255,255,0.04)',
                                    border: `1px solid ${effect === f.id ? 'rgba(6,182,212,0.6)' : 'rgba(255,255,255,0.1)'}`,
                                    color: '#fff',
                                }}>
                                    <div style={{ fontSize: 18 }}>{f.icon}</div>
                                    <div style={{ fontSize: 11, fontWeight: 600, marginTop: 4 }}>{f.label}</div>
                                    <div style={{ fontSize: 11, color: '#67E8F9', marginTop: 2 }}>{f.cost > 0 ? `–${f.cost}Cr` : 'Miễn phí'}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <label style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '12px 16px', background: 'rgba(255,255,255,0.04)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer' }}>
                        <input type="checkbox" checked={music} onChange={e => setMusic(e.target.checked)} style={{ width: 16, height: 16, accentColor: '#06B6D4' }} />
                        <span style={{ fontSize: 13, fontWeight: 500 }}>🎵 Nhạc nền bản quyền (–50 Cr)</span>
                    </label>
                </div>

                {/* Right: Cost estimate + render */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {/* Cost breakdown */}
                    <div className="glass" style={{ padding: 24 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, color: 'rgba(255,255,255,0.9)' }}>💰 Bảng Dự Toán</div>
                        {[
                            ['Độ phân giải', `${resolutions.find(r => r.id === resolution)?.label}`, resCost],
                            ['Giọng đọc AI', `${ttsOptions.find(t => t.id === tts)?.label}`, ttsCost],
                            ['Hiệu ứng', `${effectOptions.find(f => f.id === effect)?.label}`, fxCost],
                            ['Nhạc nền', music ? 'Có' : 'Không', musicCost],
                        ].map(([k, v, c]) => (
                            <div key={k as string} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 500 }}>{k as string}</div>
                                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{v as string}</div>
                                </div>
                                <span style={{ fontSize: 14, fontWeight: 700, color: '#67E8F9' }}>–{c as number} Cr</span>
                            </div>
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, marginTop: 4 }}>
                            <span style={{ fontSize: 15, fontWeight: 700 }}>TỔNG CỘNG</span>
                            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, fontWeight: 900, background: 'linear-gradient(135deg,#06B6D4,#3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                –{total} Cr
                            </span>
                        </div>
                    </div>

                    {/* Render button / progress / result */}
                    {!rendering && !done && (
                        <button onClick={startRender} className="btn-primary" style={{ width: '100%', fontSize: 16, padding: '18px', background: 'linear-gradient(135deg,#06B6D4,#3B82F6)', boxShadow: '0 4px 24px rgba(6,182,212,0.4)' }}>
                            🎬 Xác Nhận &amp; Tạo Video (–{total} Credits)
                        </button>
                    )}

                    {rendering && (
                        <div className="glass" style={{ padding: 24 }}>
                            <p style={{ fontSize: 13, fontWeight: 600, color: '#67E8F9', marginBottom: 14 }}>{stageLabel}</p>
                            <div className="progress-bar" style={{ marginBottom: 12 }}>
                                <div className="progress-fill" style={{ width: `${progress}%`, background: 'linear-gradient(90deg,#06B6D4,#3B82F6)' }} />
                            </div>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{progress}% hoàn thành</p>
                        </div>
                    )}

                    {done && (
                        <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 16, padding: 24, textAlign: 'center' }}>
                            <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
                            <div style={{ fontSize: 18, fontWeight: 800, color: '#34D399', marginBottom: 8 }}>Video Đã Sẵn Sàng!</div>
                            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>File .mp4 đã được render xong với cấu hình đã chọn.</p>
                            <a href="#step4" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', background: 'linear-gradient(135deg,#10B981,#06B6D4)' }}>
                                🚀 Tiếp theo: Đăng Tải →
                            </a>
                        </div>
                    )}

                    <div className="glass-dark" style={{ padding: 20, borderRadius: 16 }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>💡 Lưu ý:</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                            Credits chỉ bị trừ sau khi bạn bấm "Xác Nhận &amp; Tạo Video". Bạn có thể thay đổi cấu hình tùy ý mà không mất tiền.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
