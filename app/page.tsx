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
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px', textAlign: 'center' }}>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 22, marginBottom: 8,
      }}>
        🎬 Tooltao
        <span style={{ background: 'linear-gradient(135deg,#A855F7,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Video
        </span>
      </div>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 6 }}>
        Nền Tảng AI Tạo Video Viral Tự Động — Thế Hệ Mới
      </p>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>© 2026 TooltaoVideo. All rights reserved.</p>
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
