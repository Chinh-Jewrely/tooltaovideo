'use client';

const steps = [
    { icon: '📡', label: 'Crawl Trend', color: '#7C3AED', href: '#step1' },
    { icon: '✍️', label: 'Kịch Bản AI', color: '#EC4899', href: '#step2' },
    { icon: '🎬', label: 'Tạo Video', color: '#06B6D4', href: '#step3' },
    { icon: '🚀', label: 'Đăng Tải', color: '#10B981', href: '#step4' },
];

export default function FlowBar() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 24px 0', position: 'relative', zIndex: 10 }}>
            <div style={{
                display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20, padding: '10px 20px',
            }}>
                {steps.map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                        <a href={s.href} style={{
                            display: 'flex', alignItems: 'center', gap: 8,
                            padding: '8px 16px', borderRadius: 12, textDecoration: 'none', transition: 'all 0.2s',
                        }}
                            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = `${s.color}22`; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                        >
                            <span style={{ fontSize: 18 }}>{s.icon}</span>
                            <span style={{ fontSize: 13, fontWeight: 600, color: s.color }}>{s.label}</span>
                        </a>
                        {i < steps.length - 1 && (
                            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 14, margin: '0 4px' }}>→</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
