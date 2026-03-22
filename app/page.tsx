import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlowBar from './components/FlowBar';
import Step1Crawl from './components/Step1Crawl';
import Step2Script from './components/Step2Script';
import Step3Render from './components/Step3Render';
import Step4Publish from './components/Step4Publish';
import TemplateLibrary from './components/TemplateLibrary';
import RepurposeTools from './components/RepurposeTools';
import ThumbnailGenerator from './components/ThumbnailGenerator';
import BlogToVideo from './components/BlogToVideo';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import ContentCalendar from './components/ContentCalendar';
import Pricing from './components/Pricing';

function SectionDivider({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '0 24px', margin: '20px 0 48px' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16, padding: '10px 28px',
        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 40,
      }}>
        <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg,transparent,rgba(124,58,237,0.5))' }} />
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>{label}</span>
        <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg,rgba(124,58,237,0.5),transparent)' }} />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '60px 24px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 22, marginBottom: 12 }}>
              🎬 Tooltao<span style={{ background: 'linear-gradient(135deg,#A855F7,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Video</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 16 }}>
              Nen tang AI tao video viral tu dong — tu nghien cuu den dang tai trong vai phut.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[{ icon: '▶️', label: 'YouTube' }, { icon: '🎵', label: 'TikTok' }, { icon: '📘', label: 'Facebook' }].map(s => (
                <a key={s.label} href="#" style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, textDecoration: 'none' }}>{s.icon}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>San Pham</div>
            {['Crawl & Trend', 'Bien Kich AI', 'Tao Video', 'Dang Tai Tu Dong', 'Template Library', 'Repurpose & Dub', 'Bang Gia'].map(l => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 10, textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Ho Tro</div>
            {['Tai lieu API', 'Huong dan su dung', 'FAQ', 'Lien he'].map(l => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 10, textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Lien He</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>hello@tooltaovideo.com</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>Zalo / Telegram 24/7</div>
            <div style={{ padding: '10px 16px', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 12 }}>
              <div style={{ fontSize: 12, color: '#C084FC', fontWeight: 600, marginBottom: 4 }}>Du lieu an toan</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Ma hoa end-to-end.</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>2026 TooltaoVideo. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Dieu khoan', 'Bao mat', 'Cookie'].map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>{l}</a>
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

      {/* === CORE 4-STEP WORKFLOW === */}
      <Step1Crawl />
      <SectionDivider label="Buoc 1 → Buoc 2" />
      <Step2Script />
      <SectionDivider label="Buoc 2 → Buoc 3" />
      <Step3Render />
      <SectionDivider label="Buoc 3 → Buoc 4" />
      <Step4Publish />

      <SectionDivider label="Cong Cu Bo Sung — Bonus Features" />

      {/* === 6 BONUS FEATURES === */}
      <TemplateLibrary />
      <SectionDivider label="Blog → Video" />
      <BlogToVideo />
      <SectionDivider label="Repurpose & Multi-Language" />
      <RepurposeTools />
      <SectionDivider label="AI Thumbnail Generator" />
      <ThumbnailGenerator />
      <SectionDivider label="Analytics Dashboard" />
      <AnalyticsDashboard />
      <SectionDivider label="Content Calendar" />
      <ContentCalendar />

      <SectionDivider label="Bang Gia — Pricing" />

      <Pricing />
      <Footer />
    </main>
  );
}
