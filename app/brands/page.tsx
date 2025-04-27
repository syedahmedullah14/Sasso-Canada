import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function BrandsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1000&auto=format&fit=crop"
            alt="Our Brands"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Brands</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Discover the industry-leading brands that make up the Sasso Canada family
          </p>
        </div>
      </section>

      {/* Brands Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Sasso Canada Family of Brands</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Sasso Canada brings together three industry-leading brands to provide comprehensive solutions for the
              stone and surface fabrication industry across Canada. Each brand brings its own expertise, innovation, and
              heritage to create a powerful synergy that benefits our customers.
            </p>
          </div>

          <div className="space-y-16">
            {/* Stone Fabrica */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1000&auto=format&fit=crop"
                  alt="Stone Fabrica"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Stone Fabrica</h3>
                <p className="text-gray-700 mb-4">
                  Stone Fabrica specializes in advanced CNC machinery and automated systems for stone fabrication. With
                  a focus on innovation, precision, and efficiency, Stone Fabrica has revolutionized the way countertops
                  and other stone products are manufactured.
                </p>
                <h4 className="text-xl font-semibold mb-2">Key Products:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                  <li>K-Titan CNC Bridge Saw - 5-axis cutting capability with automated tool changing</li>
                  <li>Robotic Material Handling Systems - Automated slab movement and positioning</li>
                  <li>Waterjet Pro - High-precision waterjet cutting for intricate designs</li>
                  <li>Production Management Software - Comprehensive workflow optimization</li>
                </ul>
                <Button className="mt-2">
                  Explore Stone Fabrica
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Sasso Meccanica */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1000&auto=format&fit=crop"
                  alt="Sasso Meccanica"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Sasso Meccanica</h3>
                <p className="text-gray-700 mb-4">
                  Founded in 1982 in Italy, Sasso Meccanica represents excellence in stone processing machinery. Their
                  edge polishers, bridge saws, and waterjet systems combine Italian craftsmanship with cutting-edge
                  technology to deliver unmatched performance and reliability.
                </p>
                <h4 className="text-xl font-semibold mb-2">Key Products:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                  <li>Flying Flat Edge Polisher - 8 polishing heads for perfect edge finishes</li>
                  <li>K-Kut Bridge Saw - Precision cutting with automated programming</li>
                  <li>Hydra Waterjet System - High-pressure cutting for intricate designs</li>
                  <li>Miter Machines - Specialized equipment for perfect 45° edges</li>
                </ul>
                <Button className="mt-2">
                  Explore Sasso Meccanica
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Laser Products */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1000&auto=format&fit=crop"
                  alt="Laser Products"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Laser Products</h3>
                <p className="text-gray-700 mb-4">
                  Since 1994, Laser Products has been the industry leader in digital templating and measuring solutions.
                  Their innovative systems have transformed how fabricators measure, template, and manage projects,
                  increasing accuracy and efficiency while reducing errors and material waste.
                </p>
                <h4 className="text-xl font-semibold mb-2">Key Products:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                  <li>LT-2D3D Laser Templator - Digital templating system with 3D modeling capabilities</li>
                  <li>Digital Inventory System - Software for managing stone inventory</li>
                  <li>JobTracker - Project management software for fabricators</li>
                  <li>Cloud Storage Solutions - Secure storage and sharing of digital templates</li>
                </ul>
                <Button className="mt-2">
                  Explore Laser Products
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Synergy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Power of Brand Synergy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Complete Workflow Solutions</h3>
              <p className="text-gray-700">
                By combining the strengths of our three brands, Sasso Canada offers complete end-to-end solutions for
                stone fabrication, from digital templating with Laser Products to cutting with Stone Fabrica equipment
                and finishing with Sasso Meccanica edge polishers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Integrated Technology</h3>
              <p className="text-gray-700">
                Our brands work seamlessly together, with compatible software and systems that allow for smooth data
                transfer between digital templating, CNC programming, and production management, eliminating errors and
                increasing efficiency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Unified Support</h3>
              <p className="text-gray-700">
                With Sasso Canada, you get unified support for all your equipment needs. Our technicians are
                cross-trained on all three brands, ensuring expert service and maintenance for your entire fabrication
                line from a single source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Best in Stone Fabrication Technology</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to learn how our family of brands can transform your fabrication business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Request a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20">
              Download Brand Catalogs
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
