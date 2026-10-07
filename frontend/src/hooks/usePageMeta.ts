import { useEffect } from "react";

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (description) {
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", description);
      document
        .querySelector('meta[property="og:title"]')
        ?.setAttribute("content", title);
    }
  }, [title, description]);
}
