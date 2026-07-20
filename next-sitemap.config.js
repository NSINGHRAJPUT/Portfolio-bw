module.exports = {
  siteUrl: "https://www.nsrgfx.in",
  generateRobotsTxt: true,
  exclude: ["/admin", "/admin/*", "/dashboard", "/dashboard/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/admin/", "/dashboard", "/dashboard/"] },
    ],
  },
};
