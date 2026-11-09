const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-caption">
          <p>© {currentYear} Min Cho. All rights reserved.</p>
          <p>Last updated: November 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
