import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/919928653794?text=Hi!%20I%20want%20to%20enquire%20about%20SST%20Classes" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center gap-2"
  >
    <MessageCircle size={24} />
    <span className="font-bold hidden md:inline">Chat with Sir</span>
  </a>
);

export default WhatsAppButton;