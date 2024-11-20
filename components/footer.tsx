"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 bg-muted border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DadFitPro. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              href="/privacy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Notice
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}