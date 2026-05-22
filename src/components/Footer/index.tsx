function Footer() {
  return (
    <div className="footer text-xs text-center text-neutral-700">
      <span className="text-amber-600 underline">
        <a
          href="https://www.linkedin.com/in/kalashsharma99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kalash Sharma
        </a>
      </span>
      {` • Copyright © ${new Date().getFullYear()} . All rights reserved.`}
    </div>
  );
}

export default Footer;
