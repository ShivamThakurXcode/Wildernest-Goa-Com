import { useState, useRef, useEffect } from "react";
import { FiSend, FiMessageSquare, FiX, FiChevronUp } from "react-icons/fi";
import { IoMdOptions } from "react-icons/io";
import { RiRobot2Line } from "react-icons/ri";

// Wilderest knowledge base
const wilderestKnowledge = {
  about:
    "Wilderest is a luxury eco-resort in Goa, blending sustainable practices with 5-star amenities. Our 25-acre property features private villas, organic dining, and immersive nature experiences.",
  accommodations: [
    "Treehouse Villas: Elevated suites with private decks (₹25,000/night)",
    "Beachfront Cottages: Direct beach access (₹18,000/night)",
    "Luxury Tents: Glamping with AC (₹12,000/night)",
  ].join("\n"),
  amenities: [
    "Infinity pool with sunset views",
    "Ayurvedic spa with organic treatments",
    "Yoga shala overlooking the forest",
    "Private beach access",
    "Farm-to-table restaurant",
  ].join("\n"),
  activities: [
    "Sunrise yoga sessions (daily 6:30 AM)",
    "Guided nature walks (twice daily)",
    "Goan cooking classes (MWF)",
    "Birdwatching tours (T/Th/Sa)",
    "Stargazing with telescope (clear nights)",
  ].join("\n"),
  dining: [
    "The Canopy: Organic breakfast 7-10:30 AM",
    "Shoreline: Beachfront seafood grill 12-10 PM",
    "Terra: Farm-to-table tasting menu (reservation required)",
    "In-villa dining available 24/7",
  ].join("\n"),
  contact: [
    "Phone: +91 832 2789 456",
    "Email: stay@wilderestgoa.com",
    "Address: 25 Forest Lane, North Goa 403516",
    "Emergency: +91 992 345 6789",
  ].join("\n"),
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ text: string; sender: "user" | "bot"; isCard?: boolean }>
  >([
    {
      text: "Hello! I'm Wilderest's AI concierge. Ask me about accommodations, amenities, dining, or activities.",
      sender: "bot",
      isCard: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [quickReplies, setQuickReplies] = useState([
    "Room types?",
    "What activities do you offer?",
    "Dining options?",
    "How to book?",
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" as const };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const botResponse = await getBotResponse(input);
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);

      // Update quick replies based on context
      if (
        input.toLowerCase().includes("room") ||
        input.toLowerCase().includes("stay")
      ) {
        setQuickReplies([
          "Pricing?",
          "Amenities included?",
          "View photos",
          "How to book?",
        ]);
      } else if (input.toLowerCase().includes("dining")) {
        setQuickReplies([
          "Breakfast hours?",
          "Vegetarian options?",
          "Private dining?",
          "Chef's specials",
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text:
            "Let me check that for you... Here's what I know:\n\n" +
            getLocalResponse(input) +
            "\n\nFor immediate assistance, call +91 832 2789 456",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const getLocalResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes("about") || lowerQuery.includes("wildereast")) {
      return wilderestKnowledge.about;
    } else if (
      lowerQuery.includes("room") ||
      lowerQuery.includes("stay") ||
      lowerQuery.includes("accommod")
    ) {
      return "Our accommodations:\n\n" + wilderestKnowledge.accommodations;
    } else if (lowerQuery.includes("amenit")) {
      return "Resort amenities:\n\n" + wilderestKnowledge.amenities;
    } else if (
      lowerQuery.includes("activ") ||
      lowerQuery.includes("do") ||
      lowerQuery.includes("experience")
    ) {
      return "Guest activities:\n\n" + wilderestKnowledge.activities;
    } else if (
      lowerQuery.includes("dining") ||
      lowerQuery.includes("eat") ||
      lowerQuery.includes("food")
    ) {
      return "Dining options:\n\n" + wilderestKnowledge.dining;
    } else if (
      lowerQuery.includes("contact") ||
      lowerQuery.includes("call") ||
      lowerQuery.includes("reach")
    ) {
      return "Contact information:\n\n" + wilderestKnowledge.contact;
    } else if (
      lowerQuery.includes("book") ||
      lowerQuery.includes("reserve") ||
      lowerQuery.includes("availability")
    ) {
      return (
        "For bookings:\n\n" +
        wilderestKnowledge.contact +
        "\n\nOr visit our website's booking page."
      );
    } else {
      return "I can help with:\n- Accommodation details\n- Activity schedules\n- Dining options\n- Booking information\n\nTry asking about any of these!";
    }
  };

  // Using Hugging Face's free inference API
  const getBotResponse = async (query: string): Promise<string> => {
    try {
      // First try local knowledge base
      const localResponse = getLocalResponse(query);
      if (!localResponse.includes("I can help with")) {
        return localResponse;
      }

      // Fallback to Hugging Face (remove if you want purely local)
      const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer YOUR_HF_API_KEY", // Get free key from Hugging Face
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: `You are a concierge for Wilderest Nature Resort in Goa. Respond to: "${query}". 
            Focus on nature, luxury, and local Goan experiences. Keep responses under 3 sentences.`,
          }),
        }
      );

      const result = await response.json();
      return result.generated_text || localResponse;
    } catch (error) {
      return localResponse;
    }
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div
          className={`w-96 ${
            isMinimized ? "h-16" : "h-[32rem]"
          } bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 overflow-hidden border border-gray-700`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <RiRobot2Line className="text-white text-md" />
              <h3 className="font-bold text-xl text-white">
                Wilderester Assistante
              </h3>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:text-amber-200 transition-colors"
              >
                <FiChevronUp
                  className={`transform ${isMinimized ? "rotate-180" : ""}`}
                />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-amber-200 transition-colors"
              >
                <FiX />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-900/50 backdrop-blur-sm">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-4 flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-tr-none"
                          : "bg-gray-800 text-gray-100 rounded-tl-none border border-gray-700"
                      }`}
                    >
                      {msg.text.split("\n").map((line, i) => (
                        <p key={i} className="mb-1 last:mb-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-gray-800 text-gray-100 px-4 py-3 rounded-2xl rounded-tl-none border border-gray-700 flex items-center">
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              {quickReplies.length > 0 && !isLoading && (
                <div className="px-4 pb-2 flex flex-wrap gap-2 bg-gray-900/30">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-gray-800 hover:bg-gray-700 text-amber-100 px-3 py-1.5 rounded-full border border-gray-700 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                <div className="relative flex">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask about Wilderest..."
                    className="flex-1 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-l-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 pr-12"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className={`bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 rounded-r-xl hover:from-amber-700 hover:to-orange-700 transition-all ${
                      isLoading || !input.trim()
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <FiSend />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Your trusted AI guide for Wilderest experiences
                </p>
              </div>
            </>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:from-orange-700 hover:to-amber-700 transition-all duration-300 flex items-center justify-center animate-pulse"
        >
          <RiRobot2Line size={24} />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-amber-700"></span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
