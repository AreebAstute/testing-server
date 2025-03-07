export function getHeader(metaData) {
    return `
      <title>${metaData.seoTitle}</title>
      <meta name="description" content="${metaData.seoDescription}" />
      <meta property="og:title" content="${metaData.seoTitle}" />
      <meta property="og:description" content="${metaData.seoDescription}" />
      <meta property="og:image" content="${metaData.seoImage}" />
      <meta property="og:type" content="website" />
    `;
  }
  