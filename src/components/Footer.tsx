export function Footer() {
  return (
    <footer className="bg-background border-t border-surface-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-primary-500 rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-white rounded-full"></div>
              </div>
              <span className="font-display font-bold text-lg tracking-tight">VOLAR ALTA</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              The industrial AI operating intelligence platform for critical infrastructure.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Robotic Hardware</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Multimodal Fusion</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">AI Cognition</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Business Intelligence</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Power Generation</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Oil & Gas</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Chemical</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Manufacturing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-surface-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>&copy; {new Date().getFullYear()} Volar Alta. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
