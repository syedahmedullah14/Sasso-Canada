import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check } from "lucide-react"

export default function StoneFabricaPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1920&auto=format&fit=crop"
            alt="Stone Fabrica"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Stone Fabrica</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Advanced CNC machinery and automated systems for stone fabrication excellence
          </p>
        </div>
      </section>

      {/* Brand Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Stone Fabrica</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1995, Stone Fabrica has established itself as a leader in advanced stone fabrication
                machinery. With a focus on automation, precision, and efficiency, Stone Fabrica's CNC machines, bridge
                saws, and material handling systems have revolutionized the stone fabrication industry.
              </p>
              <p className="text-gray-700 mb-4">
                Stone Fabrica's commitment to innovation has led to the development of cutting-edge technology that
                addresses the evolving needs of stone fabricators. From small shops to large production facilities,
                Stone Fabrica offers scalable solutions that help businesses increase productivity, reduce waste, and
                deliver exceptional quality.
              </p>
              <p className="text-gray-700 mb-4">
                As part of the Sasso Canada family, Stone Fabrica continues to push the boundaries of what's possible in
                stone fabrication, combining robust engineering with user-friendly interfaces to create machinery that's
                both powerful and accessible.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581093458791-9d9a4a96d8d2?q=80&w=1000&auto=format&fit=crop"
                alt="Stone Fabrica machinery"
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
            {/* K-Titan CNC Bridge Saw */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1000&auto=format&fit=crop"
                  alt="K-Titan CNC Bridge Saw"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">K-Titan CNC Bridge Saw</h3>
                <p className="text-gray-700 mb-4">
                  The K-Titan CNC Bridge Saw represents the pinnacle of stone cutting technology. With its 5-axis
                  capability, this advanced machine can handle complex cutting operations with precision and efficiency,
                  making it ideal for countertop fabrication, architectural elements, and artistic pieces.
                </p>
                <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "5-axis cutting capability for complex shapes and miter cuts",
                    "Automated tool changing system with up to 40 tools",
                    "Integrated water recycling system for eco-friendly operation",
                    "User-friendly CAD/CAM software with 3D visualization",
                    "Remote diagnostics and support capabilities",
                    "Robust construction for heavy-duty use",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    View K-Titan Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Download Brochure</Button>
                </div>
              </div>
            </div>

            {/* Robotic Material Handling System */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1000&auto=format&fit=crop"
                  alt="Robotic Material Handling System"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Robotic Material Handling System</h3>
                <p className="text-gray-700 mb-4">
                  The Robotic Material Handling System revolutionizes stone fabrication workflow by automating the
                  movement of heavy stone slabs throughout the production process. This system increases safety, reduces
                  labor costs, and improves efficiency by eliminating manual handling of materials.
                </p>
                <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Automated slab movement and positioning",
                    "Integration with CNC machines and other equipment",
                    "Safety sensors and collision avoidance technology",
                    "Programmable movement patterns for custom workflows",
                    "Vacuum lifting system for secure handling",
                    "Capacity for slabs up to 1,000 kg",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    View Robotic System Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Download Brochure</Button>
                </div>
              </div>
            </div>

            {/* Waterjet Pro */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1581093458791-9d9a4a96d8d2?q=80&w=1000&auto=format&fit=crop"
                  alt="Waterjet Pro"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Waterjet Pro Cutting System</h3>
                <p className="text-gray-700 mb-4">
                  The Waterjet Pro Cutting System offers unparalleled precision for intricate designs and special
                  applications. Using high-pressure water mixed with abrasive materials, this system can cut through any
                  stone material with exceptional accuracy, making it perfect for inlays, medallions, and artistic
                  elements.
                </p>
                <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "High-pressure cutting up to 60,000 PSI",
                    "5-axis cutting head for bevels and complex shapes",
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
                    View Waterjet Pro Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Download Brochure</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Management Software */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Production Management Software</h2>
              <p className="text-gray-700 mb-4">
                Stone Fabrica's Production Management Software is a comprehensive solution for optimizing workflow in
                stone fabrication facilities. This powerful software integrates with all Stone Fabrica machinery as well
                as Laser Products templating systems and Sasso Meccanica equipment for a seamless production process.
              </p>
              <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Real-time production tracking and monitoring",
                  "Job scheduling and resource allocation",
                  "Material inventory management",
                  "Nesting optimization for material efficiency",
                  "Integration with digital templating systems",
                  "Comprehensive reporting and analytics",
                  "Cloud-based access for remote management",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-2">
                Learn More About Our Software Solutions
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1000&auto=format&fit=crop"
                alt="Production Management Software"
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
                <h3 className="text-xl font-bold mb-2">Premium Countertops Ltd.</h3>
                <p className="text-gray-700 mb-4">
                  This Toronto-based fabricator increased production by 300% after implementing the K-Titan CNC Bridge
                  Saw and Robotic Material Handling System, allowing them to take on larger commercial projects.
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
                <h3 className="text-xl font-bold mb-2">Vancouver Stone Works</h3>
                <p className="text-gray-700 mb-4">
                  This architectural stone specialist used the Waterjet Pro to create intricate medallions for a
                  high-profile hotel project, reducing production time by 60% compared to manual methods.
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
                <h3 className="text-xl font-bold mb-2">Montreal Granite Inc.</h3>
                <p className="text-gray-700 mb-4">
                  By implementing Stone Fabrica's Production Management Software, this company reduced material waste by
                  25% and improved on-time delivery rates to 98%, enhancing customer satisfaction.
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
          <h2 className="text-3xl font-bold mb-4">Transform Your Stone Fabrication Business</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to learn how Stone Fabrica's advanced machinery and software can help you increase
            productivity, reduce waste, and deliver exceptional quality
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
