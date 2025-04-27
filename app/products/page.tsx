import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Filter } from "lucide-react"

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Machinery Alliance Products"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Products</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Comprehensive machinery solutions for stone and surface fabrication from our family of brands
          </p>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    View products <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Discover our most innovative machinery and technology solutions for the stone and surface fabrication
            industry
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between mb-8 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center mb-4 md:mb-0">
              <Filter className="h-5 w-5 mr-2 text-gray-500" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="rounded-full">
                All Products
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Stone Fabrica
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Sasso Meccanica
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Laser Products
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-64 relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.brand}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <Link href={product.link} className="text-blue-600 hover:underline font-medium flex items-center">
                      View details <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                    <Button variant="outline" size="sm">
                      Request Quote
                    </Button>
                  </div>
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

      {/* Product Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Compare Our Solutions</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Find the perfect machinery for your specific needs with our easy comparison tools
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left font-bold border-b">Product Series</th>
                  <th className="py-3 px-4 text-left font-bold border-b">Brand</th>
                  <th className="py-3 px-4 text-left font-bold border-b">Type</th>
                  <th className="py-3 px-4 text-left font-bold border-b">Key Features</th>
                  <th className="py-3 px-4 text-left font-bold border-b">Best For</th>
                  <th className="py-3 px-4 text-left font-bold border-b"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">K-Series</td>
                  <td className="py-4 px-4">Stone Fabrica</td>
                  <td className="py-4 px-4">CNC Bridge Saw</td>
                  <td className="py-4 px-4">5-axis cutting, automatic tool change</td>
                  <td className="py-4 px-4">High-volume countertop production</td>
                  <td className="py-4 px-4">
                    <Button variant="outline" size="sm">
                      Compare
                    </Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Flying Flat</td>
                  <td className="py-4 px-4">Sasso Meccanica</td>
                  <td className="py-4 px-4">Edge Polisher</td>
                  <td className="py-4 px-4">8 polishing heads, automatic calibration</td>
                  <td className="py-4 px-4">High-quality edge finishing</td>
                  <td className="py-4 px-4">
                    <Button variant="outline" size="sm">
                      Compare
                    </Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">LT-2D3D</td>
                  <td className="py-4 px-4">Laser Products</td>
                  <td className="py-4 px-4">Digital Templator</td>
                  <td className="py-4 px-4">Laser measuring, 3D modeling</td>
                  <td className="py-4 px-4">Precise digital templating</td>
                  <td className="py-4 px-4">
                    <Button variant="outline" size="sm">
                      Compare
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Waterjet Pro</td>
                  <td className="py-4 px-4">Stone Fabrica</td>
                  <td className="py-4 px-4">Waterjet Cutter</td>
                  <td className="py-4 px-4">High-pressure cutting, intricate designs</td>
                  <td className="py-4 px-4">Custom projects, inlays</td>
                  <td className="py-4 px-4">
                    <Button variant="outline" size="sm">
                      Compare
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Link href="/product-comparison" className="text-blue-600 hover:underline font-medium">
              View full comparison chart
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Product Is Right For You?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our experts can help you find the perfect solution for your specific needs and budget
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Download Product Catalog
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample data
const productCategories = [
  {
    name: "CNC Machinery",
    description: "Advanced CNC machines for stone cutting, routing, and carving with precision control",
    image: "/placeholder.svg?height=300&width=500",
    link: "/products/cnc-machinery",
  },
  {
    name: "Bridge Saws",
    description: "Precision bridge saws for dimensional stone cutting with automated features",
    image: "/placeholder.svg?height=300&width=500",
    link: "/products/bridge-saws",
  },
  {
    name: "Edge Polishers",
    description: "Automatic edge polishing machines for perfect finishes on stone edges",
    image: "/placeholder.svg?height=300&width=500",
    link: "/products/edge-polishers",
  },
  {
    name: "Waterjet Systems",
    description: "High-pressure waterjet cutting for intricate designs and special materials",
    image: "/placeholder.svg?height=300&width=500",
    link: "/products/waterjet-systems",
  },
  {
    name: "Digital Templating",
    description: "Laser measuring and digital templating solutions for accurate measurements",
    image: "/placeholder.svg?height=300&width=500",
    link: "/products/digital-templating",
  },
  {
    name: "Software Solutions",
    description: "CAD/CAM and production management software for streamlined operations",
    image: "/placeholder.svg?height=300&width=500",
    link: "/products/software",
  },
]

const featuredProducts = [
  {
    name: "LT-2D3D Laser Templator",
    brand: "Laser Products",
    description: "Digital templating system for precise measurements of countertops, showers, and more.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/laser-templator",
  },
  {
    name: "K-Titan CNC Bridge Saw",
    brand: "Stone Fabrica",
    description: "Advanced CNC bridge saw with 5-axis capability for complex stone cutting operations.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/titan-cnc",
  },
  {
    name: "Flying Flat Edge Polisher",
    brand: "Sasso Meccanica",
    description: "High-speed automatic edge polisher with 8 polishing heads for perfect finishes.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/flying-flat",
  },
  {
    name: "Robotic Material Handling",
    brand: "Stone Fabrica",
    description: "Automated material handling system for improved workflow and reduced labor costs.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/robotic-handling",
  },
  {
    name: "Waterjet Cutting System",
    brand: "Sasso Meccanica",
    description: "Precision waterjet cutting for intricate designs and special materials.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/waterjet",
  },
  {
    name: "Digital Inventory System",
    brand: "Laser Products",
    description: "Software solution for managing stone inventory with digital precision.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/digital-inventory",
  },
]
