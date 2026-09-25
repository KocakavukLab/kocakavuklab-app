import entries from './generated/news';
export const NEWS_CATEGORIES = {
  GRANT: {
    id: 'grant',
    label: 'Grants & Funding',
    color: '#10B981',
    icon: 'FaMoneyBillWave'
  },
  AWARD: {
    id: 'award',
    label: 'Awards & Recognition',
    color: '#F59E0B',
    icon: 'FaAward'
  },
  NEW_MEMBER: {
    id: 'new_member',
    label: 'New Members',
    color: '#3B82F6',
    icon: 'FaUserPlus'
  },
  PUBLICATION: {
    id: 'publication',
    label: 'Publications',
    color: '#8B5CF6',
    icon: 'FaNewspaper'
  },
  GENERAL: {
    id: 'general',
    label: 'General News',
    color: '#6B7280',
    icon: 'FaNewspaper'
  }
};

export const newsItems = entries.map(({ date, ...entry }) => {
  const [year, month, day] = date.split('-').map(Number);
  return { ...entry, date: new Date(year, month - 1, day) };
});

export const getYears = () => {
  const years = [...new Set(newsItems.map(item => item.date.getFullYear()))];
  return years.sort((a, b) => b - a);
};

// Get news items by year
export const getNewsByYear = (year) => {
  return newsItems.filter(item => item.date.getFullYear() === year);
};

// Get news items by category
export const getNewsByCategory = (categoryId) => {
  return newsItems.filter(item => item.category === categoryId);
};

// Get news item by ID
export const getNewsById = (id) => {
  return newsItems.find(item => item.id === id);
};

// Sort news items by date (descending)
export const getSortedNews = () => {
  return [...newsItems].sort((a, b) => b.date - a.date);
};

// Group news by year
export const getNewsGroupedByYear = () => {
  const grouped = {};
  const sortedNews = getSortedNews();

  sortedNews.forEach(item => {
    const year = item.date.getFullYear();
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(item);
  });

  return grouped;
};
