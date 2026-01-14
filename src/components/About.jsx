export default function AboutPage() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1>About Us</h1>

      <p style={{ marginTop: 20, lineHeight: 1.7 }}>
        We provide premium quality products across beauty, fragrance, grocery, and lifestyle categories.
      </p>

      <h2 style={{ marginTop: 30 }}>Our Mission</h2>
      <p style={{ lineHeight: 1.7 }}>
        To offer a seamless shopping experience with the best brands at the best prices.
      </p>

      <h2 style={{ marginTop: 30 }}>Why Choose Us</h2>
      <ul style={{ lineHeight: 1.7, marginLeft: 20 }}>
        <li>Quality Assurance</li>
        <li>Fast Delivery</li>
        <li>Affordable Pricing</li>
        <li>Customer Support</li>
      </ul>
    </div>
  );
}
