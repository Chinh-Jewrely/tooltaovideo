'use client';
import { useState, useRef, useEffect } from 'react';

type Message = { role: 'ai' | 'user'; text: string; credits?: number };

const INITIAL_CREDITS = 1000;
const EDIT_COST = 50;

const SCRIPT_DRAFT = `🎬 KỊCH BẢN VIDEO: "Bí Mật Võ Đang Ít Ai Biết"
⏱ Thời lượng: 90 giây

[OPENING - 0:00–0:08]
Hình ảnh: Núi Võ Đang bao phủ trong mây mờ, ánh hoàng hôn rực rỡ.
Giọng đọc: "Có một nơi trên đất Trung Hoa... đã 700 năm giữ bí mật mà không ai dám hỏi."

[NỘI DUNG CHÍNH - 0:08–1:10]
Cảnh 1: Đạo sĩ luyện kiếm trong màn sương.
Giọng đọc: "Võ Đang không chỉ là kiếm thuật. Đó là triết học sống."

Cảnh 2: Tái hiện hoạt cảnh lịch sử.
Giọng đọc: "Năm 1400, Trương Tam Phong — vị tổ sư huyền thoại — đã sáng tạo ra Thái Cực Quyền..."

[CLOSING - 1:10–1:30]
Call to action mạnh: "Subscribe để khám phá những bí ẩn chưa ai kể."`;

const AI_RESPONSES: Record<string, string> = {
    default: 'Tôi đã hiểu yêu cầu của bạn. Đây là phiên bản được cải thiện:',
    kịch: '✅ Đã viết lại đoạn kết kịch tính hơn:\n\n[CLOSING MỚI]\n"Và rồi... bí mật 700 năm đó vẫn còn đó, ẩn sâu trong từng đường kiếm. Câu trả lời — chỉ có người dám leo lên Võ Đang mới biết được." 🗡️',
    ngắn: '✅ Đã rút ngắn xuống ~60 giây:\n\nBỏ một số cảnh phụ, giữ lại opening hook và closing CTA mạnh. Tổng thời lượng còn 58 giây.',
    hook: '✅ Đã viết hook mạnh hơn:\n\n[OPENING MỚI]\n"Tại sao các cao thủ Hollywood đều đến Võ Đang học võ... mà không ai được phép quay phim?" ⚡',
    cta: '✅ Đã thêm CTA cuối video:\n\n"Nếu bạn thích nội dung này — Like ngay để ủng hộ. Comment #VoDang nếu bạn muốn tôi đến tận nơi quay tiếp phần 2!" 🙏',
};

function getAIReply(msg: string): string {
    const lower = msg.toLowerCase();
    if (lower.includes('kịch') || lower.includes('kịch tính') || lower.includes('cuối')) return AI_RESPONSES.kịch;
    if (lower.includes('ngắn') || lower.includes('60') || lower.includes('rút')) return AI_RESPONSES.ngắn;
    if (lower.includes('hook') || lower.includes('mở đầu') || lower.includes('giật gân')) return AI_RESPONSES.hook;
    if (lower.includes('cta') || lower.includes('call')) return AI_RESPONSES.cta;
    return AI_RESPONSES.default + '\n\nPhiên bản đã được tinh chỉnh dựa trên yêu cầu của bạn. ✨';
}

export default function Step2Script() {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'ai', text: '👋 Xin chào! Tôi đã biên soạn kịch bản từ dữ liệu Võ Đang bạn đã chọn. Bạn có thể yêu cầu chỉnh sửa bất kỳ phần nào!', credits: INITIAL_CREDITS },
    ]);
    const [input, setInput] = useState('');
    const [credits, setCredits] = useState(INITIAL_CREDITS);
    const [isTyping, setIsTyping] = useState(false);
    const [blocked, setBlocked] = useState(false);
    const [showScript, setShowScript] = useState(true);
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages, isTyping]);

    const sendMessage = () => {
        if (!input.trim() || isTyping || blocked) return;
        if (credits < EDIT_COST) { setBlocked(true); return; }

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsTyping(true);

        setTimeout(() => {
            const newCredits = credits - EDIT_COST;
            setCredits(newCredits);
            setMessages(prev => [...prev, { role: 'ai', text: getAIReply(userMsg), credits: newCredits }]);
            setIsTyping(false);
            if (newCredits <= 0) setBlocked(true);
        }, 1500);
    };

    const suggestions = ['Sửa đoạn kết kịch tính hơn', 'Rút ngắn còn 60 giây', 'Làm hook mở đầu giật gân hơn', 'Thêm CTA cuối video'];

    return (
        <section id="step2" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                <div className="step-number" style={{ background: 'linear-gradient(135deg,#EC4899,#F97316)', color: '#fff', boxShadow: '0 4px 16px rgba(236,72,153,0.5)' }}>2</div>
                <div>
                    <div className="badge" style={{ background: 'rgba(236,72,153,0.15)', borderColor: 'rgba(236,72,153,0.4)', color: '#F9A8D4', marginBottom: 6 }}>✍️ Bước 2</div>
                    <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, letterSpacing: '-0.5px' }}>
                        Biên Soạn Kịch Bản &amp; <span style={{ background: 'linear-gradient(135deg,#EC4899,#F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Chat AI</span>
                    </h2>
                </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, marginBottom: 40, maxWidth: 600, lineHeight: 1.7 }}>
                AI biên soạn kịch bản nháp → Bạn chat trực tiếp để tinh chỉnh. Mỗi lần sửa trừ <strong style={{ color: '#F9A8D4' }}>{EDIT_COST} Credits</strong>.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {/* Left: Script preview */}
                <div className="glass" style={{ padding: 24 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>📄 Kịch Bản Hiện Tại</span>
                        <button onClick={() => setShowScript(!showScript)} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontSize: 12 }}>
                            {showScript ? '▲ Thu gọn' : '▼ Mở rộng'}
                        </button>
                    </div>
                    {showScript && (
                        <pre style={{ fontFamily: 'inherit', fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: 380, overflowY: 'auto' }}>
                            {SCRIPT_DRAFT}
                        </pre>
                    )}
                    <div style={{ marginTop: 16, padding: '10px 16px', background: 'rgba(124,58,237,0.1)', borderRadius: 10, border: '1px solid rgba(124,58,237,0.2)' }}>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>💳 Số dư Credits</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: `${(credits / INITIAL_CREDITS) * 100}%`, background: credits > 400 ? 'linear-gradient(90deg,#7C3AED,#A855F7)' : credits > 150 ? 'linear-gradient(90deg,#F59E0B,#F97316)' : '#EF4444', transition: 'all 0.5s ease', borderRadius: 3 }} />
                            </div>
                            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 16, color: credits > 400 ? '#A855F7' : credits > 150 ? '#FCD34D' : '#F87171' }}>{credits}</span>
                        </div>
                    </div>
                </div>

                {/* Right: Chat */}
                <div className="glass-dark" style={{ padding: 0, display: 'flex', flexDirection: 'column', height: 560, borderRadius: 20, overflow: 'hidden' }}>
                    {/* Chat header */}
                    <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: 12, alignItems: 'center' }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#EC4899,#7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🤖</div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: 14 }}>AI Biên Kịch</div>
                            <div style={{ fontSize: 11, color: '#34D399' }}>● Đang hoạt động</div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div ref={chatRef} style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {messages.map((m, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                                <div style={{
                                    maxWidth: '80%', padding: '12px 16px', borderRadius: m.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                                    background: m.role === 'user' ? 'linear-gradient(135deg,#7C3AED,#EC4899)' : 'rgba(255,255,255,0.07)',
                                    border: m.role === 'ai' ? '1px solid rgba(255,255,255,0.1)' : 'none',
                                    fontSize: 13, lineHeight: 1.6, whiteSpace: 'pre-wrap',
                                }}>
                                    {m.text}
                                    {m.credits !== undefined && i > 0 && (
                                        <div style={{ marginTop: 6, fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>💳 Còn lại: {m.credits} Credits</div>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div style={{ display: 'flex', gap: 6, padding: '12px 16px' }}>
                                {[0, 1, 2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: '#A855F7', animation: 'typing 1s infinite', animationDelay: `${i * 0.2}s` }} />)}
                            </div>
                        )}
                    </div>

                    {/* Suggestions */}
                    {!blocked && (
                        <div style={{ padding: '8px 16px', display: 'flex', gap: 6, overflowX: 'auto' }}>
                            {suggestions.map(s => (
                                <button key={s} onClick={() => { setInput(s); }} style={{
                                    whiteSpace: 'nowrap', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)',
                                    borderRadius: 20, padding: '5px 12px', color: '#C084FC', fontSize: 11, cursor: 'pointer',
                                }}>/{s}</button>
                            ))}
                        </div>
                    )}

                    {/* Hard Stop */}
                    {blocked ? (
                        <div style={{ padding: 20, background: 'rgba(239,68,68,0.1)', borderTop: '1px solid rgba(239,68,68,0.2)' }}>
                            <p style={{ fontSize: 13, fontWeight: 700, color: '#F87171', marginBottom: 8 }}>🔒 Hết Credits! Không thể tiếp tục chỉnh sửa.</p>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>Vui lòng nạp thêm Credits để tiếp tục sử dụng AI biên kịch.</p>
                            <button onClick={() => { setCredits(INITIAL_CREDITS); setBlocked(false); }} className="btn-primary" style={{ fontSize: 13, padding: '10px 24px' }}>
                                💳 Nạp Thêm Credits (Demo)
                            </button>
                        </div>
                    ) : (
                        <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 10 }}>
                            <input
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                                placeholder={`Yêu cầu chỉnh sửa... (–${EDIT_COST} Cr/lần)`}
                                style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12, padding: '11px 14px', color: '#fff', fontSize: 13, outline: 'none' }}
                            />
                            <button onClick={sendMessage} disabled={isTyping || !input.trim()} style={{
                                background: 'linear-gradient(135deg,#7C3AED,#EC4899)', border: 'none', borderRadius: 12,
                                width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 18,
                            }}>➤</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
