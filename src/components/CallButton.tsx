import { Phone } from "lucide-react";

const CallButton = () => {
  return (
    <a 
      href="tel:+17347953007" 
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
    >
      <Phone className="h-6 w-6" />
      <span className="hidden sm:block font-semibold">Call Now</span>
      <span className="sm:hidden font-semibold">Call</span>
    </a>
  );
};

export default CallButton;
