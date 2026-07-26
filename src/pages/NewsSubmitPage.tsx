import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, FileText, Calendar, User, Folder, CheckCircle, AlertCircle, ArrowRight, Copy, Check } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function NewsSubmitPage() {
  // Authorization State
  const [accessCode, setAccessCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authError, setAuthError] = useState(false);

  // Form States
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Legislative Update');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [author, setAuthor] = useState('LanCan Immigration');

  // Key configurations
  const [key1, setKey1] = useState(import.meta.env.VITE_WEB3FORMS_KEY_1 || '');
  const [key2, setKey2] = useState(import.meta.env.VITE_WEB3FORMS_KEY_2 || '');

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Handle access code validation
  const handleAuthorize = (e: React.FormEvent) => {
    e.preventDefault();
    const correctCode = import.meta.env.VITE_NEWS_SUBMIT_CODE || 'LANCAN2026';
    if (accessCode === correctCode) {
      setIsAuthorized(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  // Generate output JSON for manual website updates
  const generatedNewsJSON = JSON.stringify(
    {
      title,
      category,
      date,
      author,
      summary,
      content: content.split('\n\n').filter(Boolean), // Splits content into paragraphs
    },
    null,
    2
  );

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedNewsJSON);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Handle form submission to Web3Forms
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    const submissionKeys = [key1.trim(), key2.trim()].filter(Boolean);

    if (submissionKeys.length === 0) {
      setSubmitError('Please configure or enter at least one Web3Forms Access Key.');
      setIsSubmitting(false);
      return;
    }

    try {
      const submissions = submissionKeys.map(async (key) => {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            access_key: key,
            subject: `New News Submission: ${title}`,
            from_name: 'LanCan Immigration Portal',
            title,
            category,
            author,
            date,
            summary,
            content,
          }),
        });

        const data = await response.json();
        if (!response.ok || !data.success) {
          throw new Error(data.message || 'Submission failed on one of the endpoints.');
        }
        return data;
      });

      await Promise.all(submissions);
      setSubmitSuccess(true);
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong during submission. Please check your keys and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" />

        <div className="relative page-container">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/news" className="hover:text-cyan-400 transition-colors">News</Link>
              <span>/</span>
              <span className="text-cyan-400">Publish Portal</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">News Publish Portal</h1>
            <p className="text-lg text-white/50 max-w-2xl">
              Submit news details to collect updates and prepare structured items for the LanCan website.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Administrative Portal */}
      <section className="section-padding bg-gray-50 min-h-[500px]">
        <div className="page-container max-w-4xl">
          {/* STEP 1: AUTHENTICATION GATE */}
          {!isAuthorized ? (
            <AnimatedSection>
              <div className="max-w-md mx-auto bg-white rounded-2xl shadow-premium border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-blue-950 mb-2">Editor Verification Required</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Please enter the admin access code to unlock the news submission portal.
                </p>

                <form onSubmit={handleAuthorize} className="space-y-4">
                  <div>
                    <input
                      type="password"
                      placeholder="Access Code"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-center font-mono"
                    />
                  </div>

                  {authError && (
                    <div className="flex items-center gap-2 text-sm text-red-600 justify-center bg-red-50 p-2.5 rounded-lg border border-red-100">
                      <AlertCircle className="w-4 h-4" />
                      <span>Incorrect access code. Please try again.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-950 text-white font-semibold rounded-xl hover:bg-blue-900 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-premium"
                  >
                    Unlock Portal <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </AnimatedSection>
          ) : (
            /* STEP 2: NEWS SUBMISSION FORM */
            <div className="space-y-8">
              {submitSuccess ? (
                /* SUCCESS VIEW WITH STRUCTURAL CODE EXPORT */
                <AnimatedSection>
                  <div className="bg-white rounded-2xl shadow-premium border border-green-100 p-8 md:p-12">
                    <div className="flex items-center gap-4 text-green-600 mb-6">
                      <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-heading font-bold text-blue-950">Submission Successful!</h2>
                        <p className="text-sm text-gray-500">
                          The news article details have been routed to the configured email address(es).
                        </p>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-500">Structured Article Data (JSON)</span>
                        <button
                          onClick={handleCopyCode}
                          className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition-colors cursor-pointer"
                        >
                          {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          {copiedCode ? 'Copied!' : 'Copy Code'}
                        </button>
                      </div>
                      <pre className="text-xs font-mono text-gray-800 overflow-x-auto bg-gray-900 text-cyan-400 p-4 rounded-lg leading-relaxed max-h-[300px]">
                        <code>{generatedNewsJSON}</code>
                      </pre>
                    </div>

                    <div className="mt-8 flex gap-4">
                      <button
                        onClick={() => {
                          setSubmitSuccess(false);
                          setTitle('');
                          setSummary('');
                          setContent('');
                        }}
                        className="px-6 py-3 border border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
                      >
                        Publish Another Article
                      </button>
                      <Link
                        to="/news"
                        className="px-6 py-3 bg-blue-950 text-white font-semibold rounded-xl hover:bg-blue-900 transition-all flex items-center gap-2 cursor-pointer shadow-premium"
                      >
                        Go to News Page <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              ) : (
                /* MAIN FORM WRAPPER */
                <AnimatedSection>
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-premium border border-gray-100 p-8 md:p-12 space-y-8">
                    <div>
                      <h2 className="text-3xl font-heading font-bold text-blue-950 mb-2">Publish New Article</h2>
                      <p className="text-gray-500 text-sm">
                        Fill out the details below. They will be mailed directly to your email addresses for easy publishing.
                      </p>
                    </div>

                    {submitError && (
                      <div className="flex items-start gap-2.5 text-sm text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Submission Error</p>
                          <p className="text-red-500 mt-0.5">{submitError}</p>
                        </div>
                      </div>
                    )}

                    {/* TWO-COLUMN GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Left Column: Metadata */}
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-semibold text-blue-950 mb-2 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-cyan-500" /> Title
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Bill To Amend The Canadian Citizenship Act"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-blue-950 mb-2 flex items-center gap-2">
                            <Folder className="w-4 h-4 text-cyan-500" /> Category
                          </label>
                          <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm bg-white"
                          >
                            <option value="Legislative Update">Legislative Update</option>
                            <option value="Express Entry">Express Entry</option>
                            <option value="Provincial Nominee (PNP)">Provincial Nominee (PNP)</option>
                            <option value="Study Permit">Study Permit</option>
                            <option value="Work Permit">Work Permit</option>
                            <option value="General News">General News</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-blue-950 mb-2 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-cyan-500" /> Publish Date
                          </label>
                          <input
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-blue-950 mb-2 flex items-center gap-2">
                            <User className="w-4 h-4 text-cyan-500" /> Author / Source
                          </label>
                          <input
                            type="text"
                            required
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm"
                          />
                        </div>
                      </div>

                      {/* Right Column: API Keys (Fallback config visible here) */}
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-semibold text-blue-950 mb-2">
                            Web3Forms Access Key 1
                          </label>
                          <input
                            type="text"
                            placeholder="Paste Web3Forms Key 1"
                            value={key1}
                            onChange={(e) => setKey1(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm font-mono"
                          />
                          <p className="text-[11px] text-gray-400 mt-1">
                            {import.meta.env.VITE_WEB3FORMS_KEY_1 ? '✓ Key loaded from environment variable (.env).' : 'No default Key 1 loaded. Paste key here.'}
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-blue-950 mb-2">
                            Web3Forms Access Key 2 (Optional)
                          </label>
                          <input
                            type="text"
                            placeholder="Paste Web3Forms Key 2"
                            value={key2}
                            onChange={(e) => setKey2(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm font-mono"
                          />
                          <p className="text-[11px] text-gray-400 mt-1">
                            {import.meta.env.VITE_WEB3FORMS_KEY_2 ? '✓ Key loaded from environment variable (.env).' : 'No default Key 2 loaded. Paste to enable double-email routing.'}
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-blue-950 mb-2">
                            Summary / Excerpt
                          </label>
                          <textarea
                            required
                            rows={3}
                            placeholder="A brief 1-2 sentence description of the news post."
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Full-width: Article Body */}
                    <div>
                      <label className="block text-sm font-semibold text-blue-950 mb-2">
                        Main Article Content
                      </label>
                      <textarea
                        required
                        rows={10}
                        placeholder="Type or paste the main content of your article here. Break paragraphs with empty lines (press Enter twice) so it displays beautifully on the website."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-8 py-4 bg-blue-950 text-white font-semibold rounded-xl hover:bg-blue-900 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-premium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Routing Details...
                          </>
                        ) : (
                          <>
                            Send News to Email <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </AnimatedSection>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
