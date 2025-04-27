import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check } from "lucide-react"

export default function LaserProductsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581093196277-9f608bb3a2ed?q=80&w=1920&auto=format&fit=crop"
            alt="Laser Products"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Laser Products</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Revolutionary digital templating and measuring solutions since 1994
          </p>
        </div>
      </section>

      {/* Brand Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Laser Products</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1994, Laser Products has established itself as the industry leader in digital templating and
                measuring solutions for the stone, woodworking, and glass industries. Their innovative laser measuring
                systems and software have transformed how fabricators measure, template, and manage projects.
              </p>
              <p className="text-gray-700 mb-4">
                Laser Products' commitment to accuracy, efficiency, and user-friendly technology has made their systems
                the preferred choice for fabricators who demand precision and reliability. By eliminating the need for
                physical templates, their digital solutions reduce errors, save time, and improve overall project
                management.
              </p>
              <p className="text-gray-700 mb-4">
                As part of the Sasso Canada family, Laser Products continues to innovate and provide Canadian fabricators
                with cutting-edge digital templating solutions that integrate seamlessly with CNC machinery and
                production software for a complete fabrication workflow.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581093196277-9f608bb3a2ed?q=80&w=1000&auto=format&fit=crop"
                alt="Laser Products technology"
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
            {/* LT-2D3D Laser Templator */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1581093196277-9f608bb3a2ed?q=80&w=1000&auto=format&fit=crop"
                  alt="LT-2D3D Laser Templator"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">LT-2D3D Laser Templator</h3>
                <p className="text-gray-700 mb-4">
                  The LT-2D3D Laser Templator is Laser Products' flagship digital templating system, designed for
                  precise measurements of countertops, showers, and other surfaces. This revolutionary system combines
                  laser measuring technology with powerful software to create accurate digital templates that can be
                  exported directly to CNC machinery.
                </p>
                <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Accurate measurements within 1/16\" over 30 feet",
                    "3D modeling capabilities for complex surfaces",
                    "Cloud storage for secure template management",
                    "Seamless integration with CNC software",
                    "Tablet-based interface for easy operation",
                    "Battery-powered for all-day use on job sites",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    View LT-2D3D Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Download Brochure</Button>
                </div>
              </div>
            </div>

            {/* Digital Inventory System */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1000&auto=format&fit=crop"
                  alt="Digital Inventory System"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Digital Inventory System</h3>
                <p className="text-gray-700 mb-4">
                  The Digital Inventory System is a comprehensive software solution for managing stone inventory with
                  digital precision. This powerful system allows fabricators to track slabs, remnants, and materials
                  throughout the fabrication process, reducing waste and improving efficiency.
                </p>
                <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Barcode scanning for easy slab identification",
                    "Remnant tracking and optimization",
                    "Integration with accounting systems",
                    "Real-time inventory updates",
                    "Material cost tracking and reporting",
                    "Cloud-based access for remote management",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    View Digital Inventory Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Download Brochure</Button>
                </div>
              </div>
            </div>

            {/* JobTracker */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1000&auto=format&fit=crop"
                  alt="JobTracker"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">JobTracker Project Management</h3>
                <p className="text-gray-700 mb-4">
                  JobTracker is a comprehensive project management software designed specifically for stone fabricators.
                  This powerful tool allows fabricators to track projects from initial quote to final installation,
                  ensuring nothing falls through the cracks and improving customer satisfaction.
                </p>
                <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Complete project lifecycle management",
                    "Customer relationship management",
                    "Scheduling and calendar integration",
                    "Digital template and drawing storage",
                    "Mobile access for field updates",
                    "Integration with QuickBooks and other accounting software",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    View JobTracker Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Download Brochure</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Storage Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cloud Storage Solutions</h2>
              <p className="text-gray-700 mb-4">
                Laser Products' Cloud Storage Solutions provide secure, reliable storage and sharing of digital templates
                and project files. This system allows fabricators to access their templates from anywhere, share them
                with team members, and integrate them seamlessly with CNC machinery and production software.
              </p>
              <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Secure cloud storage with automatic backups",
                  "Team collaboration and file sharing",
                  "Version control for template revisions",
                  "Integration with LT-2D3D and other Laser Products systems",
                  "Mobile access for field teams",
                  "Unlimited storage capacity for growing businesses",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-2">
                Learn More About Our Cloud Solutions
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1000&auto=format&fit=crop"
                alt="Cloud Storage Solutions"
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
                <h3 className="text-xl font-bold mb-2">Halifax Stone Design</h3>
                <p className="text-gray-700 mb-4">
                  This Nova Scotia fabricator reduced template-to-installation time by 40% after implementing the
                  LT-2D3D Laser Templator, eliminating rework and improving customer satisfaction.
                </p>
                <Link href="#" className="text-blue-600 hover:underline font-medium flex items-center">
                  Read case study <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo\
