import { useState } from 'react';

export default function LanguageSelect() {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'id');

  function changeLanguage(event) {
    const nextLanguage = event.target.value;
    localStorage.setItem('language', nextLanguage);
    setLanguage(nextLanguage);
    window.dispatchEvent(new Event('languagechange'));
  }

  return <label className="language-select"><span>Language</span><select value={language} onChange={changeLanguage} aria-label="Pilih bahasa"><option value="id">ID</option><option value="en">EN</option></select></label>;
}
