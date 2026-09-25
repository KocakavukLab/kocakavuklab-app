import GoToTopButton from "../common/GoToTopButton";
import coverImg from "../../assets/covers/maincover.optimized.webp";

// ---- Theme (light) ----
const T = { page: "#F6F2EC", surface: "#FFFFFF", ink: "#14181F", muted: "#5B6472", line: "#E4DCD1" };
const DISPLAY = '"Space Grotesk", system-ui, sans-serif';
const BODY = '"DM Sans", system-ui, -apple-system, sans-serif';
const MONO = "ui-monospace, 'SF Mono', Menlo, monospace";
const ORANGE = "#FF914D";

const PrivacyPolicy = () => {
  const h3 = "mt-5 text-base font-semibold";
  const p = "mt-2 text-sm leading-relaxed";

  return (
    <div className="min-h-screen" style={{ background: T.page, fontFamily: BODY }}>
      {/* Header band */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coverImg})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ORANGE, fontFamily: MONO }}>Legal</p>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: DISPLAY, letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,.5)" }}>Privacy Policy</h1>
          <p className="mt-2 text-white/85">How your personal data is handled on this site.</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border bg-white p-8 shadow-sm md:p-12" style={{ borderColor: T.line }}>
          {/* 1. Overview */}
          <section className="mb-8">
            <div className="flex items-center gap-2.5">
              <span className="text-lg font-extrabold" style={{ fontFamily: DISPLAY, color: ORANGE }}>01</span>
              <h2 className="text-[13px] font-bold uppercase tracking-[0.14em]" style={{ color: T.ink }}>An Overview of Data Protection</h2>
            </div>
            <h3 className={h3} style={{ color: T.ink }}>General Information</h3>
            <p className={p} style={{ color: T.muted }}>
              The following information provides an easy-to-navigate overview of how your personal
              data is handled when visiting our website. The term <strong style={{ color: T.ink }}>“personal data”</strong> refers
              to any information that can be used to personally identify you. For more details,
              please refer to our full <strong style={{ color: T.ink }}>Data Protection Declaration</strong> below.
            </p>
          </section>

          {/* 2. Hosting */}
          <section className="mb-8">
            <div className="flex items-center gap-2.5">
              <span className="text-lg font-extrabold" style={{ fontFamily: DISPLAY, color: ORANGE }}>02</span>
              <h2 className="text-[13px] font-bold uppercase tracking-[0.14em]" style={{ color: T.ink }}>Hosting</h2>
            </div>
            <p className={p} style={{ color: T.muted }}>
              We host our website with Cloudflare, a platform providing seamless deployment and
              infrastructure for modern web applications. It allows us to build and publish our
              website efficiently with GNU licensing.
            </p>
          </section>

          {/* 3. Custom Services */}
          <section className="mb-8">
            <div className="flex items-center gap-2.5">
              <span className="text-lg font-extrabold" style={{ fontFamily: DISPLAY, color: ORANGE }}>03</span>
              <h2 className="text-[13px] font-bold uppercase tracking-[0.14em]" style={{ color: T.ink }}>Custom Services</h2>
            </div>
            <p className={p} style={{ color: T.muted }}>
              We offer visitors the opportunity to submit job applications through various channels
              (email, postal mail, or online forms). Below is an outline of how we collect and
              process applicant data while maintaining compliance with GDPR and other data
              protection laws.
            </p>

            <h3 className={h3} style={{ color: T.ink }}>Handling Applicant Data</h3>
            <p className={p} style={{ color: T.muted }}>
              If you submit a job application to us, we process all relevant data (e.g., contact
              details, CV, interview notes) necessary for evaluating your application. The legal
              basis for data processing is based on:
            </p>
            <ul className="mt-2 list-disc pl-6 text-sm" style={{ color: T.muted }}>
              <li><strong style={{ color: T.ink }}>§ 26 GDPR</strong> (Employment Relationship Negotiation - German Law)</li>
              <li><strong style={{ color: T.ink }}>Art. 6(1)(b) GDPR</strong> (General Contract Negotiations)</li>
              <li><strong style={{ color: T.ink }}>Art. 6(1)(a) GDPR</strong> (Your explicit consent, which can be withdrawn at any time)</li>
            </ul>

            <h3 className={h3} style={{ color: T.ink }}>Data Retention Policy</h3>
            <p className={p} style={{ color: T.muted }}>
              If your application does not result in an offer or is withdrawn, we retain your data
              for <strong style={{ color: T.ink }}>up to 6 months</strong> after the end of the application process based on our{" "}
              <strong style={{ color: T.ink }}>legitimate interests</strong> (Art. 6(1)(f) GDPR). This retention allows us to provide
              evidence in case of a legal dispute. Beyond this period, your data will be deleted.
            </p>
            <p className={p} style={{ color: T.muted }}>
              If required for ongoing legal proceedings, or if you provide explicit consent, data
              may be stored beyond this timeframe in compliance with <strong style={{ color: T.ink }}>Article 6(1)(a) GDPR</strong> and
              applicable statutory retention requirements.
            </p>
          </section>

          {/* Closing */}
          <div className="border-t pt-5 text-sm" style={{ borderColor: T.line, color: T.muted }}>
            If you have any questions regarding your personal data, please refer to our full{" "}
            <strong style={{ color: T.ink }}>Data Protection Declaration</strong> or reach out to us directly.
          </div>
        </div>
      </div>
      <GoToTopButton />
    </div>
  );
};

export default PrivacyPolicy;
