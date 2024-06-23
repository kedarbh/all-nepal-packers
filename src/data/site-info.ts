

export type SocialLink ={
  platform: string;
  href: string;
  me?: string;
  text: string;
  icon: string;
  footerOnly?: boolean;
};

export type SiteInfo ={
  name: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  socialLinks: SocialLink[];
};

const siteInfo: SiteInfo ={
  name: "All Nepal Packers and Movers",
  title: "Stress-Free Movers in Kathmandu",
  description: "Move in Lalitpur?  All Nepal Packers: Expert movers, budget-friendly rates. Get a FREE quote today!",
  image: {
    src: "/og.png",
    alt: "Get a quote for smooth move",
  },
  socialLinks: [
    {
      platform: "facebook",
      href: "https://www.facebook.com/AllNepalPackersAndMovers",
      me: "https://www.facebook.com/AllNepalPackersAndMovers",
      text: "Go to facebook",
      icon: "social/facebook",
    },
    {
      platform: "instagram",
      href: "https://www.instagram.com/allnepalpackersandmovers",
      me: "https://www.instagram.com/allnepalpackersandmovers",
      text: "Go to instagram",
      icon: "social/instagram",
    },
    {
      platform: "twitter",
      href: "https://x.com/AllNepalMovers",
      me: "https://x.com/AllNepalMovers",
      text: "Go to twitter",
      icon: "social/twitter",
    },
    {
      platform: "tiktok",
      href: "https://www.tiktok.com/@allnepalpackersandmovers",
      me: "https://www.tiktok.com/@allnepalpackersandmovers",
      text: "Go to tiktok",
      icon: "social/tiktok",
    },

  ]
}

export default siteInfo;