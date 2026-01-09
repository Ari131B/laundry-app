"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 1200, margin: "0 auto", padding: "20px" }}>
      
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "80px 20px", backgroundColor: "#f5f5f5", borderRadius: "12px", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#0070f3" }}>
          Welcome to Laundry & Cleaning Service
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "20px", lineHeight: "1.6", maxWidth: 700, margin: "20px auto 0" }}>
          Professional laundry and cleaning services for your home and office. Book your service online quickly and easily.
        </p>
        <div style={{ marginTop: "30px" }}>
          <Link href="/register">
            <button style={{
              backgroundColor: "#0070f3",
              color: "white",
              padding: "12px 30px",
              borderRadius: "6px",
              fontSize: "1rem",
              cursor: "pointer",
              marginRight: "10px"
            }}>
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>How It Works</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ flex: "1 1 300px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#fafafa" }}>
            <h3>Step 1: Create an Account</h3>
            <p>Sign up easily to start booking laundry or cleaning services online.</p>
          </div>
          <div style={{ flex: "1 1 300px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#fafafa" }}>
            <h3>Step 2: Choose a Service</h3>
            <p>Select laundry, house cleaning, office cleaning, or shop products.</p>
          </div>
          <div style={{ flex: "1 1 300px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#fafafa" }}>
            <h3>Step 3: Submit Your Request</h3>
            <p>Provide your details, address, and any special instructions.</p>
          </div>
          <div style={{ flex: "1 1 300px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#fafafa" }}>
            <h3>Step 4: Relax</h3>
            <p>Our team takes care of your laundry or cleaning. Payment is done in cash upon completion.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Our Services</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>
          <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h3>Laundry Service</h3>
            <p>Clothes washing, ironing, and dry cleaning delivered to your door.</p>
          </div>
          <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h3>House Cleaning</h3>
            <p>Full home cleaning including bedrooms, kitchen, bathrooms, and living areas.</p>
          </div>
          <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h3>Office Cleaning</h3>
            <p>Keep your workspace spotless with professional office cleaning services.</p>
          </div>
          <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h3>Cleaning Products</h3>
            <p>Buy detergents, fabric softeners, and other products directly online.</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "#f5f5f5", borderRadius: "12px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Ready to Start?</h2>
        <Link href="/register">
          <button style={{
            backgroundColor: "#0070f3",
            color: "white",
            padding: "12px 30px",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer"
          }}>
            Sign Up Now
          </button>
        </Link>
      </section>

    </div>
  );
}
