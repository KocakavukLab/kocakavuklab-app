# News System Maintenance Guide

This guide provides comprehensive instructions for maintaining and updating the Kocakavuk Lab news system.

## Table of Contents

1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Adding New News Items](#adding-new-news-items)
4. [News Categories](#news-categories)
5. [Templates by Category](#templates-by-category)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

---

## Overview

The news system is designed to showcase lab achievements, announcements, and milestones in a structured, chronological format with automatic categorization and filtering.

**Key Features:**
- Hierarchical organization by year
- Category-based filtering (Grants, Awards, New Members, Publications, General)
- Automatic date sorting
- Tag system for enhanced searchability
- Responsive design with animations
- Previous/Next navigation in detail views

---

## File Structure

```
src/
├── data/
│   └── newsData.js          # All news items and configuration
├── components/
│   └── pages/
│       ├── News.js          # Main news timeline page
│       └── NewsDetail.js    # Individual news article page
docs/
└── NEWS_MAINTENANCE_GUIDE.md  # This guide
```

**Important:** All news data is stored in `src/data/newsData.js`. You should NEVER need to edit the component files (`News.js` or `NewsDetail.js`) unless you're adding new features to the news system itself.

---

## Adding New News Items

### Step-by-Step Process

1. **Open the data file:**
   ```bash
   src/data/newsData.js
   ```

2. **Add your news item to the `newsItems` array:**
   - Add it at the **top of the array** (after the opening bracket)
   - Follow the template structure below
   - Ensure all required fields are filled

3. **Required fields:**
   - `id`: Unique identifier (lowercase, hyphenated, e.g., "new-grant-2025")
   - `title`: News headline
   - `date`: JavaScript Date object (e.g., `new Date(2025, 11, 15)`)
   - `dateDisplay`: Human-readable format (e.g., "December 2025")
   - `category`: One of the predefined categories (see below)
   - `shortDescription`: Brief summary for timeline view (1-2 sentences)
   - `fullContent`: Detailed content (supports Markdown)
   - `image`: Path to image file in `/public/news/` folder

4. **Optional fields:**
   - `tags`: Array of relevant keywords (e.g., `["DFG", "Funding", "AI"]`)

---

## News Categories

### Available Categories

| Category ID | Label | Color | Icon | Use For |
|------------|-------|-------|------|---------|
| `grant` | Grants & Funding | Green | 💰 | Funding awards, fellowships, grants |
| `award` | Awards & Recognition | Orange | 🏆 | Awards, honors, recognitions |
| `new_member` | New Members | Blue | 👤 | New team members joining |
| `publication` | Publications | Purple | 📰 | Research papers, preprints |
| `general` | General News | Gray | 📰 | Other announcements |

**Note:** To use a category, reference it in your news item as: `category: NEWS_CATEGORIES.GRANT.id` or simply `category: "grant"`.

---

## Templates by Category

### 1. Grant/Funding Template

```javascript
{
  id: "grant-name-2025",
  title: "Grant Name by Funding Organization",
  date: new Date(2025, 11, 1), // December 1, 2025 (month is 0-indexed)
  dateDisplay: "December 2025",
  category: "grant",
  shortDescription: "Brief one-sentence description of the grant and its purpose.",
  fullContent:
    "Detailed description of the grant, what it will fund, and its significance.\n\n" +
    "**Key Details:**\n" +
    "- Funding amount: €X,XXX,XXX\n" +
    "- Duration: X years\n" +
    "- Focus area: [Research area]\n\n" +
    "This funding will enable [specific research activities and expected outcomes].",
  image: "/news/grant-logo.png",
  tags: ["Grant", "Funding Organization", "Research Area"]
}
```

**Example:**
```javascript
{
  id: "humboldt-fellowship-2026",
  title: "Alexander von Humboldt Fellowship",
  date: new Date(2026, 0, 15), // January 15, 2026
  dateDisplay: "January 2026",
  category: "grant",
  shortDescription: "Dr. Jane Smith has been awarded the prestigious Alexander von Humboldt Fellowship to pursue cancer genomics research.",
  fullContent:
    "We are thrilled to announce that Dr. Jane Smith has been awarded the Alexander von Humboldt Fellowship, one of the most prestigious international research fellowships.\n\n" +
    "**Fellowship Details:**\n" +
    "- Duration: 2 years\n" +
    "- Research focus: Single-cell analysis of tumor microenvironments\n" +
    "- Collaboration with: [Partner institutions]\n\n" +
    "This fellowship will enable cutting-edge research into understanding how tumor cells interact with their surrounding environment at single-cell resolution.",
  image: "/news/humboldt.png",
  tags: ["Humboldt", "Fellowship", "Single-Cell", "Tumor Microenvironment"]
}
```

---

### 2. Award Template

```javascript
{
  id: "award-name-2025",
  title: "Award Name",
  date: new Date(2025, 11, 1), // December 1, 2025
  dateDisplay: "December 2025",
  category: "award",
  shortDescription: "Brief description of who received the award and for what achievement.",
  fullContent:
    "Full announcement of the award.\n\n" +
    "Include details about:\n" +
    "- What the award recognizes\n" +
    "- Significance of the achievement\n" +
    "- Context and impact\n\n" +
    "Quote or additional information if relevant.",
  image: "/news/award-image.jpg",
  tags: ["Award", "Achievement Area", "Recipient Name"]
}
```

**Example:**
```javascript
{
  id: "best-paper-asco-2026",
  title: "Best Paper Award at ASCO 2026",
  date: new Date(2026, 5, 1), // June 1, 2026
  dateDisplay: "June 2026",
  category: "award",
  shortDescription: "Our research on AI-driven treatment prediction won the Best Paper Award at the American Society of Clinical Oncology (ASCO) Annual Meeting 2026.",
  fullContent:
    "We are proud to announce that our paper 'Deep Learning for Personalized Treatment Response Prediction in Lung Cancer' has been awarded Best Paper at the ASCO Annual Meeting 2026.\n\n" +
    "This work demonstrates how AI can accurately predict patient responses to immunotherapy, potentially saving time and improving outcomes by avoiding ineffective treatments.\n\n" +
    "The research was led by [Names] and represents a collaborative effort between our lab and [Partner institutions].\n\n" +
    "Read the full paper [here](https://doi.org/...)",
  image: "/news/asco-award.jpg",
  tags: ["ASCO", "Best Paper", "AI", "Immunotherapy", "Lung Cancer"]
}
```

---

### 3. New Member Template

```javascript
{
  id: "new-member-name-2025",
  title: "New members joining the lab",
  date: new Date(2025, 11, 1), // December 1, 2025
  dateDisplay: "December 2025",
  category: "new_member",
  shortDescription: "We are delighted to welcome [Name(s)] to the Kocakavuk Lab.",
  fullContent:
    "**[Full Name]** joins as a [Position], focusing on [Research area].\n\n" +
    "[Background information about the person - previous institution, expertise, etc.]\n\n" +
    "**[Additional Member Name]** joins as a [Position]...\n\n" +
    "Welcome to the team!",
  image: "/news/new-members-photo.jpg",
  tags: ["New Members", "Research Area 1", "Research Area 2"]
}
```

**Example:**
```javascript
{
  id: "new-members-march-2026",
  title: "New members joining the lab",
  date: new Date(2026, 2, 1), // March 1, 2026
  dateDisplay: "March 2026",
  category: "new_member",
  shortDescription: "We are excited to welcome three new talented researchers to our team: Dr. Lisa Chen, Max Müller, and Sarah Johnson.",
  fullContent:
    "**Dr. Lisa Chen** joins as a Postdoctoral Researcher, focusing on spatial transcriptomics in brain tumors. She completed her PhD at Stanford University, where she developed novel methods for analyzing spatial gene expression patterns.\n\n" +
    "**Max Müller** joins as a PhD student, working on machine learning applications for predicting therapy response in hematological malignancies. He brings strong computational skills from his Master's in Bioinformatics at TU Munich.\n\n" +
    "**Sarah Johnson** joins as a Visiting Scholar from the University of Toronto for a 6-month research stay, collaborating on multi-omic integration methods.\n\n" +
    "Welcome to the team!",
  image: "/news/march-2026-members.jpg",
  tags: ["New Members", "Spatial Transcriptomics", "Machine Learning", "Multi-omics"]
}
```

---

### 4. Publication Template

```javascript
{
  id: "publication-name-2025",
  title: "New Publication in [Journal Name]",
  date: new Date(2025, 11, 1), // December 1, 2025
  dateDisplay: "December 2025",
  category: "publication",
  shortDescription: "Our latest research on [topic] has been published in [Journal Name].",
  fullContent:
    "We are excited to share that our paper '[Paper Title]' has been published in [Journal Name].\n\n" +
    "**Abstract/Summary:**\n" +
    "[Brief summary of the research findings and significance]\n\n" +
    "**Key Findings:**\n" +
    "- [Finding 1]\n" +
    "- [Finding 2]\n" +
    "- [Finding 3]\n\n" +
    "This work was a collaborative effort with [Collaborators].\n\n" +
    "Read the full paper [here](https://doi.org/...)",
  image: "/news/publication-figure.jpg",
  tags: ["Publication", "Journal Name", "Research Area"]
}
```

**Example:**
```javascript
{
  id: "nature-paper-2026",
  title: "New Publication in Nature",
  date: new Date(2026, 3, 15), // April 15, 2026
  dateDisplay: "April 2026",
  category: "publication",
  shortDescription: "Our groundbreaking research on AI-driven cancer subtype discovery has been published in Nature.",
  fullContent:
    "We are thrilled to announce that our paper 'Unsupervised Discovery of Cancer Subtypes through Foundation Model Analysis of Histopathology Images' has been published in Nature.\n\n" +
    "**Key Findings:**\n" +
    "- Identified 12 novel cancer subtypes across multiple tumor types using AI analysis of H&E images\n" +
    "- These subtypes show distinct molecular profiles and treatment responses\n" +
    "- Validated findings across 15,000+ patients from 5 independent cohorts\n" +
    "- Demonstrated improved survival prediction compared to traditional pathology classification\n\n" +
    "This work represents a major step forward in precision oncology, potentially enabling more personalized treatment strategies.\n\n" +
    "The research was led by [Names] and represents collaboration between our lab and [Partner institutions].\n\n" +
    "Read the full paper [here](https://doi.org/10.1038/...)\n\n" +
    "Press coverage: [Link to university press release]",
  image: "/news/nature-paper-figure.jpg",
  tags: ["Nature", "Publication", "AI", "Cancer Subtypes", "Precision Oncology"]
}
```

---

### 5. General News Template

```javascript
{
  id: "general-news-2025",
  title: "Announcement Title",
  date: new Date(2025, 11, 1), // December 1, 2025
  dateDisplay: "December 2025",
  category: "general",
  shortDescription: "Brief description of the announcement.",
  fullContent:
    "Full details about the news or announcement.\n\n" +
    "Include relevant context, implications, and any action items if applicable.",
  image: "/news/general-news-image.jpg",
  tags: ["Relevant", "Tags", "Here"]
}
```

---

## Best Practices

### 1. Date Formatting

**JavaScript Date Constructor:**
```javascript
new Date(year, monthIndex, day)
```

**Important:** Month index is **0-based**:
- January = 0
- February = 1
- March = 2
- ...
- December = 11

**Examples:**
```javascript
new Date(2025, 0, 15)  // January 15, 2025
new Date(2025, 5, 1)   // June 1, 2025
new Date(2025, 11, 31) // December 31, 2025
```

### 2. Creating Unique IDs

- Use lowercase letters and hyphens only
- Make it descriptive but concise
- Include relevant keywords
- Examples:
  - `emmy-noether-grant`
  - `new-members-june-2025`
  - `esmo-merit-award`
  - `nature-publication-2026`

### 3. Writing Effective Descriptions

**Short Description (for timeline):**
- 1-2 sentences
- Focus on the "what" and "who"
- Should entice readers to click for more

**Full Content (for detail page):**
- Provide comprehensive context
- Use Markdown for formatting
- Include links where relevant
- Break into paragraphs for readability
- Use bold (`**text**`) for emphasis
- Use bullet points for lists

### 4. Image Guidelines

**Storage:**
- Place all images in `/public/news/` folder
- Reference in code as `/news/filename.jpg`

**Format & Size:**
- Preferred formats: JPG, PNG, WebP
- Recommended dimensions: 1200x600px or 16:9 aspect ratio
- Keep file size under 500KB for performance
- Use descriptive filenames: `emmy-noether-logo.jpg` (not `img123.jpg`)

**Naming Convention:**
- Lowercase
- Hyphens instead of spaces
- Descriptive: `merit-award-ceremony.jpg`

### 5. Tag Selection

- Use 3-7 tags per news item
- Include:
  - Main topic/category
  - Specific techniques or areas
  - Funding organizations
  - Collaborating institutions
  - Key researchers (if applicable)
- Use consistent capitalization
- Examples: `["DFG", "Emmy Noether", "2M EUR", "6 years"]`

### 6. Markdown in Content

**Supported Markdown:**
```markdown
**Bold text**
*Italic text*

# Heading 1
## Heading 2
### Heading 3

- Bullet point
- Another point

1. Numbered item
2. Another item

[Link text](https://example.com)

> Blockquote

`Inline code`
```

---

## Example: Complete News Item

Here's a complete, real-world example:

```javascript
{
  id: "dkfz-collaboration-2026",
  title: "Strategic Partnership with DKFZ Heidelberg",
  date: new Date(2026, 8, 1), // September 1, 2026
  dateDisplay: "September 2026",
  category: "general",
  shortDescription: "We are excited to announce a new strategic research partnership with the German Cancer Research Center (DKFZ) in Heidelberg.",
  fullContent:
    "We are thrilled to announce a strategic research partnership between the Kocakavuk Lab and the German Cancer Research Center (DKFZ) in Heidelberg, one of the world's leading cancer research institutions.\n\n" +
    "**Partnership Highlights:**\n" +
    "- Joint research projects on AI-driven precision oncology\n" +
    "- Exchange program for PhD students and postdocs\n" +
    "- Shared access to computational resources and datasets\n" +
    "- Collaborative grant applications\n\n" +
    "This partnership will accelerate our research on using artificial intelligence and computational methods to understand cancer biology and improve patient outcomes.\n\n" +
    "Dr. Kocakavuk commented: *'This collaboration brings together complementary expertise in cancer biology and computational methods. Together, we can tackle some of the most challenging questions in precision oncology.'*\n\n" +
    "The partnership officially begins on October 1, 2026, with the first joint project focusing on multi-omic analysis of therapy-resistant tumors.\n\n" +
    "Learn more about DKFZ [here](https://www.dkfz.de/en/)",
  image: "/news/dkfz-partnership.jpg",
  tags: ["DKFZ", "Collaboration", "AI", "Precision Oncology", "Partnership"]
}
```

---

## Troubleshooting

### Issue: News item doesn't appear

**Possible causes:**
1. ✓ Check that the item is added to the `newsItems` array in `newsData.js`
2. ✓ Verify all required fields are present
3. ✓ Ensure the `date` field is a valid JavaScript Date object
4. ✓ Check browser console for errors

### Issue: News items in wrong order

**Solution:**
- The system automatically sorts by date (newest first)
- Verify your `date` field is correct
- Remember: months are 0-indexed in JavaScript

### Issue: Image not displaying

**Checklist:**
1. ✓ Image file exists in `/public/news/` folder
2. ✓ Image path in code starts with `/news/` (not `./news/` or `public/news/`)
3. ✓ Check filename spelling and capitalization (exact match required)
4. ✓ Try clearing browser cache

### Issue: Markdown not rendering

**Solution:**
- Check that ReactMarkdown is properly parsing your content
- Verify markdown syntax (e.g., no missing brackets in links)
- Ensure line breaks are `\n\n` for paragraphs

### Issue: Category colors/icons wrong

**Solution:**
- Verify you're using one of the predefined category IDs:
  - `"grant"`, `"award"`, `"new_member"`, `"publication"`, `"general"`
- Check spelling (must be exact match)

---

## Quick Reference

### Adding News Checklist

- [ ] Create unique ID (lowercase, hyphenated)
- [ ] Write compelling title
- [ ] Set correct date (remember 0-indexed months!)
- [ ] Write dateDisplay in "Month YYYY" format
- [ ] Choose appropriate category
- [ ] Write short description (1-2 sentences)
- [ ] Write full content (with Markdown formatting)
- [ ] Add image to `/public/news/` folder
- [ ] Reference image path as `/news/filename.jpg`
- [ ] Add 3-7 relevant tags
- [ ] Test locally before committing
- [ ] Verify image loads correctly
- [ ] Check that news appears in correct chronological position

---

## Need Help?

If you encounter issues not covered in this guide:

1. Check the existing news items in `newsData.js` for examples
2. Review the component code in `News.js` and `NewsDetail.js`
3. Consult with the technical lead
4. Refer to React documentation: https://react.dev/
5. Check ReactMarkdown documentation: https://github.com/remarkjs/react-markdown

---

**Last Updated:** December 2025
**Maintained by:** Kocakavuk Lab Team
