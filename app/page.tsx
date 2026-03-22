import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlowBar from './components/FlowBar';
import Step1Crawl from './components/Step1Crawl';
import Step2Script from './components/Step2Script';
import Step3Render from './components/Step3Render';
import Step4Publish from './components/Step4Publish';
import Pricing from './components/Pricing';

function SectionDivider({ step, next }: { step: number; next: number }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '0 24px', marginBottom: 40 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '10px 24px',
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 40,
      }}>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Bước {step}</span>
        <div style={{ display: 'flex', gap: 4 }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: i < 2 ? 'rgba(124,58,237,0.8)' : 'rgba(255,255,255,0.15)' }} />
          ))}
        </div>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Bước {next}</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '60px 24px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 22, marginBottom: 12 }}>
              🎬 Tooltao<span style={{ background: 'linear-gradient(135deg,#A855F7,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Video</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 16 }}>
              Nền tảng AI tạo video viral tự động — từ nghiên cứu đến đăng tải trong vài phút.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: '▶️', label: 'YouTube', url: '#' },
                { icon: '🎵', label: 'TikTok', url: '#' },
                { icon: '📘', label: 'Facebook', url: '#' },
              ].map(s => (
                <a key={s.label} href={s.url} title={s.label} style={{
                  width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(124,58,237,0.2)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(124,58,237,0.5)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Sản phẩm */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Sản Phẩm</div>
            {['Crawl & Trend', 'Biên Kịch AI', 'Tạo Video', 'Đăng Tải Tự Động', 'Bảng Giá'].map(l => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 10, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >{l}</a>
            ))}
          </div>

          {/* Hỗ trợ */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Hỗ Trợ</div>
            {['Tài liệu API', 'Hướng dẫn sử dụng', 'FAQ', 'Liên hệ'].map(l => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 10, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >{l}</a>
            ))}
          </div>

          {/* Contact box */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Liên Hệ</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>📧 hello@tooltaovideo.com</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>📱 Zalo / Telegram hỗ trợ 24/7</div>
            <div style={{ padding: '10px 16px', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 12 }}>
              <div style={{ fontSize: 12, color: '#C084FC', fontWeight: 600, marginBottom: 4 }}>🔒 Dữ liệu an toàn</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Mã hóa end-to-end. Không chia sẻ dữ liệu.</div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>© 2026 TooltaoVideo. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Điều khoản sử dụng', 'Chính sách bảo mật', 'Cookie'].map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FlowBar />
      <Step1Crawl />
      <SectionDivider step={1} next={2} />
      <Step2Script />
      <SectionDivider step={2} next={3} />
      <Step3Render />
      <SectionDivider step={3} next={4} />
      <Step4Publish />
      <Pricing />
      <Footer />
    </main>
  );
}
