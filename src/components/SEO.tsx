import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: string;
  noIndex?: boolean;
}

const DEFAULT_TITLE = "Ayub Alam | Senior Full-Stack Software Engineer";
const DEFAULT_DESC = "Official portfolio of Ayub Alam, Senior Full-Stack Software Engineer specializing in Flutter, React, Tauri, Node.js, and AI-powered distributed systems. 5+ years of shipping scalable products.";
const BASE_URL = "https://ayub.pages.dev";
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800";

export function SEO({
  title,
  description = DEFAULT_DESC,
  keywords,
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
}: SEOProps) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | Ayub Alam` : DEFAULT_TITLE;
  const canonicalUrl = `${BASE_URL}${pathname === '/' ? '' : pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper to set or update meta tag
    const setMeta = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta
    setMeta('name', 'description', description);
    if (keywords && keywords.length > 0) {
      setMeta('name', 'keywords', keywords.join(', '));
    }
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // 3. Open Graph
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:site_name', 'Ayub Alam Portfolio');

    // 4. Twitter Card
    setMeta('property', 'twitter:title', fullTitle);
    setMeta('property', 'twitter:description', description);
    setMeta('property', 'twitter:url', canonicalUrl);
    setMeta('property', 'twitter:image', image);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

  }, [fullTitle, description, canonicalUrl, keywords, image, type, noIndex]);

  return null;
}

