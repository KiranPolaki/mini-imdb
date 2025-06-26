import { container } from "../../styles/reusableStyles";

const Footer = () => (
  <footer className="bg-slate-800 py-4 mt-auto">
    <div className={`${container} text-center text-slate-400`}>
      <p>Ghibli Films Clone. Data from Studio Ghibli API.</p>
    </div>
  </footer>
);

export default Footer;
