'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, Compass, Eye, Gem, GitBranch, Heart, Shield, Target, Users, Zap } from 'lucide-react';
import './about.css';

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0f] text-[#f0f0f5] font-body about-page">
      <Navbar />

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-label">About Us</div>
        <h1>Trusted. Honest.<br/><em>Community.</em></h1>
        <p className="hero-tagline">Our future is too important for guesswork. We make sure it never comes to that.</p>
        <a href="/contact" className="hero-cta">
            Book Free Consultation
            <ArrowRight size={20} />
        </a>
      </section>

      <main>
        {/* Our Story */}
        <section id="story">
            <div className="section-header">
                <div className="section-label">Our Story</div>
                <h2 className="section-title">We saw what was broken.<br/>So we built something better.</h2>
            </div>

            <div className="story-section">
                <div className="story-content">
                    <p className="lead">Before Rhinny Global existed, our founder spent years working inside the study abroad industry. What they saw was not reassuring.</p>
                    <p>Students were being sold dreams without details. Parents were parting with life savings to agents who vanished after receiving payment. Visa rejections were explained away.</p>
                    <p>Nobody was really walking with the student — they were just processing them.</p>
                    <p style={{ color: 'var(--color-text)', fontWeight: 500 }}>Rhinny Global was built for the student in Lagos who has researched universities at midnight. For the parent in Abuja who is afraid of being cheated again. For the young person in Accra, Nairobi or Johannesburg who just wants a clear, honest answer. We are here to be the partner we wish we had.</p>
                </div>
                <div className="story-quote">
                    <p>"Our foundation isn’t just business; it’s a promise. A promise to guide with integrity, to support with empathy, and to build a community that lifts every member."</p>
                </div>
            </div>
        </section>
        
        {/* Vision & Mission */}
        <section id="vision-mission">
            <div className="vision-mission">
                <div className="vm-card">
                    <div className="vm-icon"><Eye size={28} color="var(--color-accent)"/></div>
                    <h3>Our Vision</h3>
                    <p>To be Africa's most trusted and transparent educational consultancy, empowering every student to achieve their global academic and career aspirations without compromise.</p>
                </div>
                <div className="vm-card">
                    <div className="vm-icon"><Target size={28} color="var(--color-accent)"/></div>
                    <h3>Our Mission</h3>
                    <p>To provide ethical, personalized, and comprehensive guidance to students, ensuring they have the knowledge, resources, and support to navigate their study abroad journey successfully and confidently.</p>
                </div>
            </div>
        </section>

        {/* Our Values */}
        <section id="values">
            <div className="section-header">
                <div className="section-label">Our Core Values</div>
                <h2 className="section-title">The Principles That Guide Us</h2>
            </div>
            <div className="values-grid">
                <div className="value-card">
                    <div className="value-icon"><Shield size={24} color="var(--color-accent)"/></div>
                    <h3>Integrity First</h3>
                    <p>We operate with unwavering honesty and transparency. Our advice is unbiased, our processes are clear, and our commitment is always to the student's best interest.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon"><Heart size={24} color="var(--color-accent)"/></div>
                    <h3>Empathetic Guidance</h3>
                    <p>We listen before we advise. We understand the hopes and fears of each family, and we provide compassionate support that goes beyond applications and deadlines.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon"><Users size={24} color="var(--color-accent)"/></div>
                    <h3>Community-Centric</h3>
                    <p>We are more than consultants; we are community builders. We foster connections between students, alumni, and partners to create a network of lifelong support.</p>
                </div>
            </div>
        </section>

        {/* Our Journey */}
        <section id="roadmap">
            <div className="section-header">
                <div className="section-label">Our Journey</div>
                <h2 className="section-title">From a Simple Idea to a<br/>Growing Global Community</h2>
            </div>
            <div className="roadmap">
                <div className="roadmap-item">
                    <div className="roadmap-marker">2019</div>
                    <div className="roadmap-content">
                        <h3>The Spark</h3>
                        <p>Our founder, frustrated with the industry's lack of transparency, conceptualizes a new kind of consultancy—one built on ethics and genuine student support.</p>
                    </div>
                </div>
                <div className="roadmap-item">
                    <div className="roadmap-marker">2021</div>
                    <div className="roadmap-content">
                        <h3>Rhinny Global is Born</h3>
                        <p>With a small, dedicated team, we officially launch, helping our first cohort of 20 students secure admissions and scholarships in Canada and the UK.</p>
                    </div>
                </div>
                <div className="roadmap-item">
                    <div className="roadmap-marker">2023</div>
                    <div className="roadmap-content">
                        <h3>Expanding Horizons</h3>
                        <p>We establish key partnerships with universities in Australia and the USA, growing our student community to over 200 and achieving a 98% visa success rate.</p>
                    </div>
                </div>
                <div className="roadmap-item">
                    <div className="roadmap-marker">2024</div>
                    <div className="roadmap-content">
                        <h3>Digital Transformation</h3>
                        <p>Launch of our integrated digital platform, providing students with 24/7 access to application tracking, resources, and direct communication with our team.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us">
            <div className="section-header">
                <div className="section-label">Why Choose Rhinny Global?</div>
                <h2 className="section-title">The Rhinny Difference</h2>
            </div>
            <div className="features-grid">
                <div className="feature-item">
                    <div className="icon"><Compass size={40} color="var(--color-accent)"/></div>
                    <h3>Unmatched Expertise</h3>
                    <p>Our team possesses deep, firsthand knowledge of international education systems and visa processes.</p>
                </div>
                <div className="feature-item">
                    <div className="icon"><BookOpen size={40} color="var(--color-accent)"/></div>
                    <h3>Total Transparency</h3>
                    <p>No hidden fees, no false promises. You see what we see, every step of the way.</p>
                </div>
                <div className="feature-item">
                    <div className="icon"><Zap size={40} color="var(--color-accent)"/></div>
                    <h3>Personalized Pathways</h3>
                    <p>We craft unique strategies for each student, focusing on the right fit, not just the easy one.</p>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section>
            <div className="cta-section">
                <h2>Ready to Start Your <em>Journey</em>?</h2>
                <p>Let's build your future together. Book a free, no-obligation consultation with one of our expert advisors today.</p>
                <a href="/contact" className="cta-btn">
                    Book Free Consultation
                    <ArrowRight size={20} />
                </a>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
