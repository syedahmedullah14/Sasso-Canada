import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function IndustriesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Industries We Serve"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Specialized solutions for a wide range of stone and surface fabrication industries
          </p>
        </div>
      </section>

      {/* Industries Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tailored Solutions for Every Industry</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Machinery Alliance, we understand that different industries have unique requirements. Our comprehensive
              range of machinery and technology solutions are designed to meet the specific needs of various sectors
              within the stone and surface fabrication industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={industry.link}
                className="group bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
                  <p className="text-gray-700 mb-4">{industry.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industry Section - Countertop Fabrication */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Industry
              </div>
              <h2 className="text-3xl font-bold mb-6">Countertop Fabrication</h2>
              <p className="text-gray-700 mb-4">
                The countertop fabrication industry demands precision, efficiency, and versatility. Our comprehensive
                range of machinery and technology solutions are designed specifically for countertop fabricators, from
                small shops to large production facilities.
              </p>
              <p className="text-gray-700 mb-4">
                From digital templating and CNC cutting to edge polishing and material handling, our solutions
                streamline every step of the countertop fabrication process, helping you increase productivity, reduce
                waste, and deliver exceptional quality to your customers.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">Digital Templating:</span> Precise measurements and templates for
                    perfect fits
                  </span>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">CNC Machinery:</span> Automated cutting and shaping for complex
                    designs
                  </span>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">Edge Polishing:</span> Perfect edge finishes for countertops and
                    islands
                  </span>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">Material Handling:</span> Safe and efficient movement of stone slabs
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Button>
                  Explore Countertop Solutions
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Countertop fabrication"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Industry Success Stories</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            See how our solutions have helped businesses across different industries achieve their goals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 relative">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {study.industry}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-700 mb-4">{study.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Results:</span> {study.results}
                    </div>
                    <Link href={study.link} className="text-blue-600 hover:underline font-medium flex items-center">
                      Read more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline">
              View All Case Studies
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industry-Specific Solutions</h2>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="col-span-1 md:col-span-1">
                <h3 className="text-xl font-bold mb-4">Countertop Fabrication</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Digital templating systems</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>CNC bridge saws</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Edge polishers</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Material handling systems</span>
                  </li>
                </ul>
                <Link
                  href="/industries/countertop-fabrication"
                  className="text-blue-600 hover:underline font-medium flex items-center mt-4"
                >
                  View solutions <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="col-span-1 md:col-span-1">
                <h3 className="text-xl font-bold mb-4">Architectural Stone</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>5-axis CNC machines</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Waterjet cutting systems</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Large-format bridge saws</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Robotic material handling</span>
                  </li>
                </ul>
                <Link
                  href="/industries/architectural-stone"
                  className="text-blue-600 hover:underline font-medium flex items-center mt-4"
                >
                  View solutions <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="col-span-1 md:col-span-1">
                <h3 className="text-xl font-bold mb-4">Monument & Memorials</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sandblasting equipment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Engraving CNC machines</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Shape carving systems</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Design software</span>
                  </li>
                </ul>
                <Link
                  href="/industries/monuments"
                  className="text-blue-600 hover:underline font-medium flex items-center mt-4"
                >
                  View solutions <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="col-span-1 md:col-span-1">
                <h3 className="text-xl font-bold mb-4">Tile Production</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>High-volume cutting systems</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automated polishing lines</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Calibration equipment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Production management software</span>
                  </li>
                </ul>
                <Link
                  href="/industries/tile-production"
                  className="text-blue-600 hover:underline font-medium flex items-center mt-4"
                >
                  View solutions <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="col-span-1 md:col-span-1">
                <h3 className="text-xl font-bold mb-4">Solid Surface</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Specialized CNC routers</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Thermoforming equipment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Seaming tools</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Finishing systems</span>
                  </li>
                </ul>
                <Link
                  href="/industries/solid-surface"
                  className="text-blue-600 hover:underline font-medium flex items-center mt-4"
                >
                  View solutions <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="col-span-1 md:col-span-1">
                <h3 className="text-xl font-bold mb-4">Glass Fabrication</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Glass cutting systems</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Edge processing machines</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Drilling equipment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Digital templating for glass</span>
                  </li>
                </ul>
                <Link
                  href="/industries/glass-fabrication"
                  className="text-blue-600 hover:underline font-medium flex items-center mt-4"
                >
                  View solutions <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Find the Perfect Solution for Your Industry</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our experts can help you identify the right machinery and technology solutions for your specific industry
            needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Download Industry Guides
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample data
const industries = [
  {
    name: "Countertop Fabrication",
    description: "Complete solutions for residential and commercial countertop manufacturing",
    image: "/placeholder.svg?height=300&width=500",
    link: "/industries/countertop-fabrication",
  },
  {
    name: "Architectural Stone",
    description: "Machinery for processing stone for architectural applications and installations",
    image: "/placeholder.svg?height=300&width=500",
    link: "/industries/architectural-stone",
  },
  {
    name: "Monument & Memorials",
    description: "Specialized equipment for monument makers and memorial fabricators",
    image: "/placeholder.svg?height=300&width=500",
    link: "/industries/monuments",
  },
  {
    name: "Tile Production",
    description: "High-volume solutions for tile cutting, polishing, and finishing",
    image: "/placeholder.svg?height=300&width=500",
    link: "/industries/tile-production",
  },
  {
    name: "Solid Surface",
    description: "Machinery designed for processing engineered and solid surface materials",
    image: "/placeholder.svg?height=300&width=500",
    link: "/industries/solid-surface",
  },
  {
    name: "Glass Fabrication",
    description: "Precision equipment for glass cutting, edging, and special applications",
    image: "/placeholder.svg?height=300&width=500",
    link: "/industries/glass-fabrication",
  },
]

const caseStudies = [
  {
    title: "Increasing Production Capacity by 300%",
    industry: "Countertop Fabrication",
    description:
      "How a mid-sized countertop fabricator transformed their business with automated CNC machinery and digital templating.",
    results: "300% increase in production, 40% reduction in waste",
    image: "/placeholder.svg?height=300&width=500",
    link: "/case-studies/countertop-production-increase",
  },
  {
    title: "Precision Engineering for Landmark Project",
    industry: "Architectural Stone",
    description:
      "How a stone contractor delivered complex architectural elements for a high-profile building using advanced 5-axis CNC technology.",
    results: "Completed project 2 months ahead of schedule",
    image: "/placeholder.svg?height=300&width=500",
    link: "/case-studies/landmark-architectural-project",
  },
  {
    title: "Revolutionizing Monument Production",
    industry: "Monument & Memorials",
    description:
      "How a traditional monument company embraced digital technology to offer custom designs while increasing efficiency.",
    results: "50% reduction in production time, new custom product line",
    image: "/placeholder.svg?height=300&width=500",
    link: "/case-studies/monument-production-revolution",
  },
]
