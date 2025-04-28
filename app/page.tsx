import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Award, Settings, Users, Globe, Phone } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sasso Canada Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Canadian Leaders in Stone & Surface Fabrication Technology
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Uniting the expertise of Stone Fabrica, Sasso Meccanica, and Laser Products to deliver unmatched quality and
            service across Canada
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={"/brands"}>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-200">
              Explore Our Solutions
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
            

            <Link href={"/contact"}>
            <Button size="lg" variant="outline" className="border-white text-blue-700 hover:bg-white/90 hover:text-blue-700">
              Contact Us
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Family of Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 mb-4 flex items-center">
                <h3 className="text-2xl font-bold">Stone Fabrica</h3>
              </div>
              <p className="mb-4 text-gray-700">
                Industry leaders in advanced stone fabrication machinery with innovative solutions for countertop
                manufacturing, featuring state-of-the-art CNC technology and automated systems.
              </p>
              <Link
                href="/brands/stone-fabrica"
                className="text-blue-600 hover:underline font-medium flex items-center"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 mb-4 flex items-center">
                <h3 className="text-2xl font-bold">Sasso Meccanica</h3>
              </div>
              <p className="mb-4 text-gray-700">
                Italian excellence in stone processing machinery since 1982, offering precision engineering and
                cutting-edge technology for edge polishing, bridge saws, and waterjet systems.
              </p>
              <Link
                href="/brands/sasso-meccanica"
                className="text-blue-600 hover:underline font-medium flex items-center"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 mb-4 flex items-center">
                <h3 className="text-2xl font-bold">Laser Products</h3>
              </div>
              <p className="mb-4 text-gray-700">
                Revolutionizing the industry with digital templating and measuring solutions for stone, woodworking, and
                glass, featuring the LT-2D3D laser measuring system for unmatched precision.
              </p>
              <Link
                href="/brands/laser-products"
                className="text-blue-600 hover:underline font-medium flex items-center"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Solutions</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Discover our most innovative machinery and technology solutions for the stone and surface fabrication
            industry, designed to enhance productivity and quality
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-64 relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{product.brand}</div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <Link href={product.link} className="text-blue-600 hover:underline font-medium flex items-center">
                    View details <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg">
              View All Products
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Sasso Canada</h2>
              <p className="text-gray-700 mb-8">
                With over 40 years of combined experience, our family of brands delivers unmatched expertise,
                innovation, and support in the stone and surface fabrication industry across Canada.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Canadian Industry Leadership</h3>
                    <p className="text-gray-700">
                      Pioneering technology and setting industry standards for decades in the Canadian market
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Precision Engineering</h3>
                    <p className="text-gray-700">
                      Uncompromising quality and attention to detail in every machine we offer
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Local Canadian Support</h3>
                    <p className="text-gray-700">
                      Comprehensive training, service, and technical assistance from our Canadian team
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">National Coverage</h3>
                    <p className="text-gray-700">
                      Serving customers across all Canadian provinces with local support and expertise
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=600&auto=format&fit=crop"
                alt="Machinery in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Industries We Serve</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Our solutions power businesses across multiple industries throughout Canada, delivering precision,
            efficiency, and innovation
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={`/industries/${industry.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 relative">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-700">{industry.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">to Transform Your Production?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our Canadian experts today to discover how our solutions can enhance your business efficiency and
            product quality
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
              Request a Consultation
            </Button>
              <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white/90 hover:text-blue-600">
              <Phone className="mr-2 h-4 w-4" />
              Call Us: +1 (800) 555-1234
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample data with enhanced descriptions and Unsplash images
const featuredProducts = [
  {
    name: "LT-2D3D Laser Templator",
    brand: "Laser Products",
    description:
      "Revolutionary digital templating system for precise measurements of countertops, showers, and more. Features 3D modeling capabilities and cloud storage for seamless project management.",
    // image: "https://images.unsplash.com/photo-1581093196277-9f608bb3a2ed?q=80&w=600&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=600&auto=format&fit=crop",
    link: "/products/laser-templator",
  },
  {
    name: "K-Titan CNC Bridge Saw",
    brand: "Stone Fabrica",
    description:
      "Advanced CNC bridge saw with 5-axis capability for complex stone cutting operations. Includes automated tool changing and integrated water recycling system for eco-friendly operation.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=600&auto=format&fit=crop",
    link: "/products/titan-cnc",
  },
  {
    name: "Flying Flat Edge Polisher",
    brand: "Sasso Meccanica",
    description:
      "High-speed automatic edge polisher with 8 polishing heads for perfect finishes. Features variable speed control and automatic thickness detection for consistent results on any material.",
    // image: "https://images.unsplash.com/photo-1581093588401-31f7a2243a0c?q=80&w=600&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=600&auto=format&fit=crop",
    link: "/products/flying-flat",
  },
  {
    name: "Robotic Material Handling",
    brand: "Stone Fabrica",
    description:
      "Automated material handling system for improved workflow and reduced labor costs. Includes safety sensors and programmable movement patterns to integrate with your existing production line.",
    image: "https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=600&auto=format&fit=crop",
    link: "/products/robotic-handling",
  },
  {
    name: "Waterjet Cutting System",
    brand: "Sasso Meccanica",
    description:
      "Precision waterjet cutting for intricate designs and special materials. Features 5-axis cutting head and advanced software for creating complex inlays and detailed artistic elements.",
    // image: "https://images.unsplash.com/photo-1581093458791-9d9a4a96d8d2?q=80&w=600&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=600&auto=format&fit=crop",
    link: "/products/waterjet",
  },
  {
    name: "Digital Inventory System",
    brand: "Laser Products",
    description:
      "Comprehensive software solution for managing stone inventory with digital precision. Includes barcode scanning, remnant tracking, and integration with accounting systems for complete control.",
    image: "https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=600&auto=format&fit=crop",
    link: "/products/digital-inventory",
  },
]

const industries = [
  {
    name: "Countertop Fabrication",
    description: "Complete solutions for residential and commercial countertop manufacturing across Canada",
    // image: "https://images.unsplash.com/photo-1556909114-44e3e9399e2b?q=80&w=500&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=600&auto=format&fit=crop",
    slug: "countertop-fabrication",
  },
  {
    name: "Architectural Stone",
    description: "Machinery for processing stone for architectural applications and installations in Canadian projects",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=500&auto=format&fit=crop",
    slug: "architectural-stone",
  },
  {
    name: "Monument & Memorials",
    description: "Specialized equipment for Canadian monument makers and memorial fabricators with precision engraving",
    image: "https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=500&auto=format&fit=crop",
    slug: "monuments",
  },
  {
    name: "Tile Production",
    description: "High-volume solutions for tile cutting, polishing, and finishing for Canadian manufacturers",
    // image: "https://images.unsplash.com/photo-1581093588401-31f7a2243a0c?q=80&w=500&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=500&auto=format&fit=crop",
    slug: "tile-production",
  },
  {
    name: "Solid Surface",
    description: "Machinery designed for processing engineered and solid surface materials for Canadian fabricators",
    // image: "https://images.unsplash.com/photo-1581093196277-9f608bb3a2ed?q=80&w=500&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=500&auto=format&fit=crop",
    slug: "solid-surface",
  },
  {
    name: "Glass Fabrication",
    description: "Precision equipment for glass cutting, edging, and special applications for the Canadian market",
    // image: "https://images.unsplash.com/photo-1581093458791-9d9a4a96d8d2?q=80&w=500&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=500&auto=format&fit=crop",
    slug: "glass-fabrication",
  },
]
