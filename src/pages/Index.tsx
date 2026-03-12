import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  const [desktopPhotoWidth, setDesktopPhotoWidth] = useState<number | null>(null);

  useEffect(() => {
    const updatePhotoWidth = () => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      if (!isDesktop) {
        setDesktopPhotoWidth(null);
        return;
      }

      const researchLink = document.querySelector('a[href="/research"]');
      const contactLink = document.querySelector('a[href="/contact"]');

      if (!researchLink || !contactLink) return;

      const researchRect = researchLink.getBoundingClientRect();
      const contactRect = contactLink.getBoundingClientRect();
      const width = Math.round(contactRect.right - researchRect.left);

      if (width > 0) {
        setDesktopPhotoWidth(width);
      }
    };

    updatePhotoWidth();
    window.addEventListener("resize", updatePhotoWidth);
    return () => window.removeEventListener("resize", updatePhotoWidth);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <PageLayout className="!min-h-0 !pb-[1.5in]">
        <div className="grid md:grid-cols-[1fr,auto] gap-8 md:gap-x-16 md:gap-y-6 items-start">
          <div className="order-2 md:order-none md:col-start-1 md:row-start-1">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Min Cho
            </h1>
          </div>

          <div className="order-3 md:order-none md:col-start-1 md:row-start-2 space-y-6">
            <p className="leading-relaxed text-justify">
              Welcome to my website!
              I am a PhD candidate in Political Science at University at Buffalo. My research focuses on political violence, 
              transitional justice, and human rights. 
            </p>
            <p className="leading-relaxed text-justify">
              I study how various transitional justice mechanisms including domestic trials, truth commissions, 
              and the International Criminal Court shape political violence-related decisions in post-conflict and post-democratization contexts.  
            </p>
            <p className="leading-relaxed text-justify">
              I also serve as the Replication Assistant for <em>International Studies Quarterly</em>, 
              where I verify the statistical results of manuscripts.
            </p>
            <p className="leading-relaxed text-justify">
              Prior to University at Buffalo, I received my M.A. in International Area Studies from Seoul National University 
              and my B.A. in Government from Smith College. 
            </p>
          </div>

          <div className="order-1 md:order-none md:col-start-2 md:row-start-2 md:justify-self-end md:h-full">
            <img
              src={profilePhoto}
              alt="Min Cho"
              className="block w-full h-auto rounded-sm md:w-auto"
              style={desktopPhotoWidth ? { width: `${desktopPhotoWidth}px` } : undefined}
            />
          </div>
        </div>
      </PageLayout>

      <Footer />
    </div>
  );
};

export default Index;
