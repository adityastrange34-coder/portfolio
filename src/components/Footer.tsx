import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2">
          Made with <Heart size={16} className="text-red-500 fill-current" /> by Vantharam Aditya
        </p>
        <p className="text-gray-500 text-sm mt-2">
          {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
