export function generateMetaInfo({ path }) {
    switch (path) {
      case "/":
        return {
          seoTitle: "home page ",
          seoDescription:
            "home page home page home pagehome pagehome pagehome pagehome pagehome pagehome pagehome pagehome pagehome page",
          seoImage: "https://s3.drivex.dev/og_image_drivex.png",
        };
  
      case `/contact-us`:
        return {
          seoTitle: ` this is contact us`,
          seoDescription: ` this is contact us`,
        };
    
      case `/how-we-deliver`:
        return {
            seoTitle: ` this is how we deliver `,
            seoDescription: ` this is how we deliver`,
        };
  
      default:
        return {
          seoTitle: "Buy and Sell Used Bikes Online | DriveX default",
          seoDescription:
            "Choose from a variety of Quality Used Bikes. DriveX Certified evaluated at 100+ checkpoints. Benefit from Simple Financing, RC transfer & Free Home Inspections",
          seoImage: "https://s3.drivex.dev/og_image_drivex.png",
        };
    }
  }
  