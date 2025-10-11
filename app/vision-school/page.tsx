import Link from "next/link";

export const metadata = {
  title: "The Vision School — GoLarge",
  description: "The Vision School: Raising conceptual thinkers who see possibilities through the lens of purpose. Equipping believers to carry divine vision and create lasting impact.",
  openGraph: {
    title: "The Vision School — GoLarge",
    description: "The Vision School: Raising conceptual thinkers who see possibilities through the lens of purpose.",
    images: ["/logofolder/golargelogo.png"],
  },
};

export default function VisionSchoolPage() {
  return (
    <div className="min-h-screen px-6 lg:px-24 py-12 text-white">
      <header className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-3">The Vision School</h1>
        <p className="text-xl text-gray-300 italic">See Clearly. Think Deeply. Build Boldly</p>
      </header>

      <section className="max-w-4xl mx-auto mt-10 prose prose-invert">
        <h2>Vision</h2>
        <p>Raising conceptual thinkers who see possibilities through the lens of purpose.</p>

        <h2>Mission</h2>
        <p>Equipping believers to carry divine vision, think strategically, and create lasting impact in every sphere of influence.</p>

        <h3>Core Values</h3>
        <ul>
          <li><strong>Clarity:</strong> We pursue understanding and revelation before action.</li>
          <li><strong>Integrity:</strong> We build lives and visions that reflect godly character.</li>
          <li><strong>Faith:</strong> We trust God’s process in the unfolding of every vision.</li>
          <li><strong>Innovation:</strong> We embrace creativity and fresh ideas as expressions of divine wisdom.</li>
          <li><strong>Impact:</strong> We measure success by transformation, not recognition.</li>
        </ul>

        <h3>About The Vision School</h3>
        <p>
          The Vision School is a transformative learning platform dedicated to raising believers who think conceptually, lead purposefully, and create impact through divine insight. We exist to bridge revelation and application—helping individuals translate God-given visions into strategies that influence culture, ministry, and the marketplace. Through teaching, mentorship, and innovation, we equip a generation of leaders to see beyond limits and build according to divine patterns.
        </p>

        <h3>Program Overview</h3>
        <p>
          The Vision School is a leadership development platform designed to awaken the visionary capacity in believers. Through teaching, mentorship, and guided practice, participants learn how to receive divine ideas, interpret purpose, and translate revelation into real-world solutions. It is a place where vision meets clarity, and faith meets strategy—raising a generation of thinkers, builders, and innovators who create change from a place of conviction and divine insight.
        </p>

        <div className="mt-8">
          <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">Apply / Contact</Link>
        </div>
      </section>
    </div>
  );
}
