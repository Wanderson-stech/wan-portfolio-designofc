export const contact = {
  linkedin: "https://www.linkedin.com/in/wandersonsilvamiranda",
  whatsapp: "https://wa.me/5511921748152",
  email: "mailto:fwsmiranda@gmail.com",
};

export function siteUrl() {
  const host =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "wan-portfolio-designofc.vercel.app";

  return host.startsWith("http") ? host : `https://${host}`;
}
