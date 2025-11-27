/**
 * ShareButtons Component
 * Social sharing functionality for blog posts
 * Supports Facebook, Instagram, WhatsApp, and Copy Link
 */

'use client';

import { useState } from 'react';
import { Facebook, Instagram, MessageCircle, Link as LinkIcon, Check } from 'lucide-react';

export default function ShareButtons({ url, title }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    // Instagram doesn't support direct web sharing, so we use a placeholder
    instagram: `https://www.instagram.com/`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
  };

  return (
    <div className="flex items-center gap-3">
      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-blue-600 transition-colors border border-gray-300 rounded-full hover:border-blue-600"
        aria-label="Share on Facebook"
        title="Share on Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>

      {/* Instagram - Note: Instagram doesn't support web share, opens profile instead */}
      <a
        href={shareLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-pink-600 transition-colors border border-gray-300 rounded-full hover:border-pink-600"
        aria-label="Share on Instagram"
        title="View on Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>

      {/* WhatsApp */}
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-green-600 transition-colors border border-gray-300 rounded-full hover:border-green-600"
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-blue-600 transition-colors border border-gray-300 rounded-full hover:border-blue-600"
        aria-label="Copy link to clipboard"
        title="Copy link"
      >
        {copied ? (
          <Check className="w-5 h-5 text-green-600" />
        ) : (
          <LinkIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
