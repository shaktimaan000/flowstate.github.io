
export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">SpotSeeker</h3>
            <p className="text-sm text-gray-600">
              Find the perfect parking spot for your vehicle, anytime, anywhere.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="px-4 py-2 text-sm text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; 2024 SpotSeeker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
