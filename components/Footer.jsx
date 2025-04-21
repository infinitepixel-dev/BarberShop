const Footer = () => {
  return (
    <footer className="mt-auto py-4 text-white">
      <div className="text-center container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Fresh Cuts</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#" className="text-white text-decoration-none">
              Privacy
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white text-decoration-none">
              Terms
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white text-decoration-none">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
