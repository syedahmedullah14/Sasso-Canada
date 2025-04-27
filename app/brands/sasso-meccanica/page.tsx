import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check } from "lucide-react"

export default function SassoMeccanicaPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581093588401-31f7a2243a0c?q=80&w=1920&auto=format&fit=crop"
            alt="Sasso Meccanica"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sasso Meccanica</h1>
          <p className="text-xl md:text-2xl max-w-3xl">Italian excellence in stone processing machinery since 1982</p>
        </div>
      </section>

      {/* Brand Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Sasso Meccanica</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1982 in Italy, Sasso Meccanica has established itself as a global leader in stone processing
                machinery. With a commitment to quality, innovation, and customer satisfaction, Sasso has been designing
                and manufacturing high-quality edge polishers, bridge saws, and waterjet systems that combine Italian
                craftsmanship with cutting-edge technology.
              </p>
              <p className="text-gray-700 mb-4">
                Sasso Meccanica's machines are known for their precision, reliability, and longevity, making them the
                preferred choice for stone fabricators who demand the highest quality results. The company's continuous
                investment in research and development ensures that their machinery remains at the forefront of
                technological innovation.
              </p>
              <p className="text-gray-700 mb-4">
                As part of the Sasso Canada family, Sasso Meccanica brings Italian engineering excellence to the
                Canadian market, providing stone fabricators with machinery that delivers exceptional performance and
                value.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581093588401-31f7a2243a0c?q=80&w=1000&auto=format&fit=crop"
                alt="Sasso Meccanica machinery"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="space-y-16">
            {/* Flying Flat Edge Polisher */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1581093588401-31f7a2243a0c?q=80&w=1000&auto=format&fit=crop"
                  alt="Flying Flat Edge Polisher"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Flying Flat Edge Polisher</h3>
                <p className="text-gray-700 mb-4">
                  The Flying Flat Edge Polisher is Sasso Meccanica's flagship edge polishing machine, designed for
                  high-speed, high-quality edge finishing on stone countertops and other surfaces. With 8 polishing
                  heads and advanced calibration technology, this machine delivers perfect edges with minimal operator
                  intervention.
                </p>
                <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "8 polishing heads for complete edge finishing in a single pass",
                    "Variable speed control for different materials and finishes",
                    "Automatic thickness detection and calibration",
                    "Touchscreen interface with intuitive controls",
                    "Pre-programmed edge profiles for common applications",
                    "Robust construction for continuous operation",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    View Flying Flat Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Download Brochure</Button>
                </div>
              </div>
            </div>

            {/* K-Kut Bridge Saw */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1000&auto=format&fit=crop"
                  alt="K-Kut Bridge Saw"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">K-Kut Bridge Saw</h3>
                <p className="text-gray-700 mb-4">
                  The K-Kut Bridge Saw combines precision cutting with automated programming for efficient stone
                  processing. This versatile machine is ideal for cutting slabs for countertops, vanities, and other
                  applications, with the accuracy and reliability that Sasso Meccanica is known for.
                </p>
                <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Precision cutting with 0.1mm accuracy",
                    "Automated programming for complex cuts",
                    "Tilting head for miter cuts up to 45 degrees",
                    "Laser alignment system for perfect positioning",
                    "Touchscreen interface with CAD/CAM capabilities",
                    "Water recycling system for eco-friendly operation",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    View K-Kut Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Download Brochure</Button>
                </div>
              </div>
            </div>

            {/* Hydra Waterjet System */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1581093458791-9d9a4a96d8d2?q=80&w=1000&auto=format&fit=crop"
                  alt="Hydra Waterjet System"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Hydra Waterjet System</h3>
                <p className="text-gray-700 mb-4">
                  The Hydra Waterjet System represents the pinnacle of precision cutting technology from Sasso
                  Meccanica. Using high-pressure water mixed with abrasive materials, this system can cut intricate
                  designs in any stone material with exceptional accuracy, making it perfect for artistic elements,
                  inlays, and medallions.
                </p>
                <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "High-pressure cutting up to 60,000 PSI",
                    "5-axis cutting capability for complex shapes",
                    "Advanced software for creating intricate designs",
                    "Minimal kerf width for material optimization",
                    "Ability to cut any material, including stone, metal, and glass",
                    "Eco-friendly water recycling system",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    View Hydra Waterjet Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Download Brochure</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miter Machines Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Specialized Miter Machines</h2>
              <p className="text-gray-700 mb-4">
                Sasso Meccanica's specialized miter machines are designed to create perfect 45° edges for seamless
                countertop joints, waterfall edges, and other applications requiring mitered corners. These machines
                combine precision cutting with edge polishing capabilities for a complete solution.
              </p>
              <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Precise 45° cutting for perfect mitered edges",
                  "Integrated polishing capabilities for finished edges",
                  "Adjustable angles for custom applications",
                  "Support for various material thicknesses",
                  "User-friendly controls for consistent results",
                  "Compact design for space-efficient installation",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-2">
                Learn More About Our Miter Machines
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1000&auto=format&fit=crop"
                alt="Miter Machine"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-44e3e9399e2b?q=80&w=500&auto=format&fit=crop"
                  alt="Countertop fabrication"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Elite Stone Design</h3>
                <p className="text-gray-700 mb-4">
                  This Calgary-based fabricator doubled their edge finishing capacity after installing the Flying Flat
                  Edge Polisher, allowing them to take on more high-end residential projects with complex edge profiles.
                </p>
                <Link href="#" className="text-blue-600 hover:underline font-medium flex items-center">
                  Read case study <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=500&auto=format&fit=crop"
                  alt="Architectural stone"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ottawa Marble Works</h3>
                <p className="text-gray-700 mb-4">
                  This architectural stone specialist used the Hydra Waterjet System to create custom floor medallions
                  for government buildings, achieving intricate designs that were previously impossible with traditional
                  methods.
                </p>
                <Link href="#" className="text-blue-600 hover:underline font-medium flex items-center">
                  Read case study <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=500&auto=format&fit=crop"
                  alt="Production facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Victoria Stone Supply</h3>
                <p className="text-gray-700 mb-4">
                  By implementing the K-Kut Bridge Saw and specialized miter machines, this company became the go-to
                  supplier for waterfall edge countertops in British Columbia, growing their business by 40% in one
                  year.
                </p>
                <Link href="#" className="text-blue-600 hover:underline font-medium flex items-center">
                  Read case study <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Italian Engineering Excellence</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to learn how Sasso Meccanica's precision machinery can elevate the quality and efficiency
            of your stone fabrication business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Request a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Schedule a Demonstration
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
