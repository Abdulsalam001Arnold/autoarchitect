"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import Loader from "./ui/loader";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
    role: "user" | "bot";
    content: string;
}

export default function ChatbotModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", content: "Hello! How can I help you today?" },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        setSessionId(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch(
                "https://larryautomated.app.n8n.cloud/webhook/c2749817-53ce-4a5c-8493-93c824fba342/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        action: "sendMessage",
                        sessionId: sessionId,
                        chatInput: userMessage
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch response");
            }

            const data = await response.json();

            // Handle different possible response structures from n8n
            const botResponse = data.output || data.text || data.response || data.message || JSON.stringify(data);

            setMessages((prev) => [
                ...prev,
                { role: "bot", content: botResponse },
            ]);
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages((prev) => [
                ...prev,
                { role: "bot", content: "Sorry, I encountered an error. Please try again." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden z-50"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex justify-between items-center">
                            <h3 className="font-semibold text-neutral-900 dark:text-white">Archie - (AutoArchitect Assistant)</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full transition-colors"
                            >
                                <X size={20} className="text-neutral-500 dark:text-neutral-400" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm overflow-hidden ${msg.role === "user"
                                            ? "bg-blue-600 text-white rounded-br-none"
                                            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-bl-none"
                                            }`}
                                    >
                                        {msg.role === "user" ? (
                                            <p className="whitespace-pre-wrap break-words">{msg.content}</p>
                                        ) : (
                                            <div className="break-words space-y-2">
                                                <ReactMarkdown
                                                    remarkPlugins={[remarkGfm]}
                                                    components={{
                                                        a: ({ node, ...props }) => (
                                                            <a {...props} className="text-blue-600 dark:text-blue-400 hover:underline break-all" target="_blank" rel="noopener noreferrer" />
                                                        ),
                                                        p: ({ node, ...props }) => <p {...props} className="whitespace-pre-wrap mb-2 last:mb-0" />,
                                                        ul: ({ node, ...props }) => <ul {...props} className="list-disc ml-4 mb-2 space-y-1" />,
                                                        ol: ({ node, ...props }) => <ol {...props} className="list-decimal ml-4 mb-2 space-y-1" />,
                                                        li: ({ node, ...props }) => <li {...props} className="mb-1" />,
                                                        strong: ({ node, ...props }) => <strong {...props} className="font-semibold" />,
                                                    }}
                                                >
                                                    {msg.content}
                                                </ReactMarkdown>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <Loader />
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Type a message..."
                                    className="flex-1 p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-neutral-900 dark:text-white text-sm"
                                    disabled={isLoading}
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={isLoading || !input.trim()}
                                    className="p-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg z-50 flex items-center justify-center transition-colors"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </>
    );
}
