import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { contentService } from "@/services/content/content.service";
import type { ContentData } from "@/types/content";

function PolicyPage() {
  const { t, i18n } = useTranslation("policy");
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPolicyContent = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await contentService.getPrivacyPolicy();
        setContent(response.data);
      } catch (err) {
        setError("Failed to load content. Please try again later.");
        console.error("Error fetching privacy policy content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicyContent();
  }, [i18n.language]); // Refetch when language changes

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-8 sm:pt-12 md:pt-18">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("title")}
          </h1>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {!loading && !error && content && (
            <div 
              className="content-html space-y-8"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PolicyPage;
