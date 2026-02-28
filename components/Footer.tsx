export default function Footer() {
  return (
    <footer id="contact" className="bg-dark border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        <h2 className="text-[12vw] font-heavy text-white/5 leading-[0.8] mb-10 select-none text-center md:text-left">
          TASTERHOOD
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-10">
          <div>
            <h4 className="font-display font-bold text-white mb-4 uppercase">Location</h4>
            <p className="text-gray-500 font-body">
              1117 Budapest<br/>Példa utca 12.<br/>Hungary
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4 uppercase">Contact</h4>
            <p className="text-gray-500 font-body">
              +36 30 123 4567<br/>
              hello@tasterhood.hu
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4 uppercase">Social</h4>
            <div className="flex gap-4 text-gray-500 font-body">
              <a href="#" className="hover:text-primary">Instagram</a>
              <a href="#" className="hover:text-primary">Facebook</a>
              <a href="#" className="hover:text-primary">TikTok</a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-between text-xs text-gray-700 uppercase tracking-widest font-display">
          <p>© 2024 TASTERHOOD</p>
          <p>STREET FOOD REDEFINED</p>
        </div>

      </div>
    </footer>
  );
}
