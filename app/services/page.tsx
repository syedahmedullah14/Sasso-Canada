import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Settings, Users, Clock, Shield } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Machinery Alliance Services"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Comprehensive support and services to maximize your machinery investment
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Support Throughout Your Journey</h2>
              <p className="text-gray-700 mb-4">
                At Machinery Alliance, we understand that purchasing machinery is just the beginning of your journey.
                Our comprehensive service offerings ensure that you receive the support you need at every stage, from
                initial consultation and installation to ongoing maintenance and technical support.
              </p>
              <p className="text-gray-700 mb-4">
                Our team of experienced technicians and support staff are dedicated to maximizing your machinery's
                performance, minimizing downtime, and ensuring your long-term success. With service centers and
                technicians located worldwide, we provide timely and effective support wherever you are.
              </p>
              <div className="mt-6">
                <Button>
                  Contact Our Service Team
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Service technician working on machinery"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={service.link} className="text-blue-600 hover:underline font-medium flex items-center">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Service Plans</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Choose the service plan that best fits your needs and budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-6 text-center border-b">
                <h3 className="text-xl font-bold mb-2">Basic Care</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  $1,999<span className="text-sm text-gray-600 font-normal">/year</span>
                </div>
                <p className="text-gray-700">Essential coverage for your machinery</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Annual preventive maintenance visit</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Phone and email technical support</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>10% discount on parts and labor</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>48-hour response time</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Select Plan
                </Button>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow-md relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1">
                MOST POPULAR
              </div>
              <div className="bg-gray-50 p-6 text-center border-b">
                <h3 className="text-xl font-bold mb-2">Premium Care</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  $3,499<span className="text-sm text-gray-600 font-normal">/year</span>
                </div>
                <p className="text-gray-700">Comprehensive coverage and priority support</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Bi-annual preventive maintenance visits</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priority phone and email technical support</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>20% discount on parts and labor</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>24-hour response time</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Remote diagnostics and troubleshooting</span>
                  </li>
                </ul>
                <Button className="w-full">Select Plan</Button>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-6 text-center border-b">
                <h3 className="text-xl font-bold mb-2">Elite Care</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  $5,999<span className="text-sm text-gray-600 font-normal">/year</span>
                </div>
                <p className="text-gray-700">Ultimate protection and VIP service</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Quarterly preventive maintenance visits</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>24/7 VIP phone and email technical support</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>30% discount on parts and labor</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Same-day emergency response</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Advanced remote diagnostics and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Annual operator refresher training</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Select Plan
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 mb-4">Need a custom service plan? Contact us for a tailored solution.</p>
            <Button variant="outline">Request Custom Quote</Button>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden lg:order-first">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Training session"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Training Programs</h2>
              <p className="text-gray-700 mb-4">
                Maximize your investment with our comprehensive training programs designed to ensure your team has the
                knowledge and skills to operate your machinery safely and efficiently.
              </p>
              <p className="text-gray-700 mb-4">
                Our training programs are available in multiple formats to suit your needs, including on-site training
                at your facility, training at our dedicated training centers, and online courses for continuous
                learning.
              </p>
              <div className="space-y-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Operator Training</h3>
                  <p className="text-gray-700">Comprehensive hands-on training for machine operators</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Maintenance Training</h3>
                  <p className="text-gray-700">Technical training for maintenance personnel</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Software Training</h3>
                  <p className="text-gray-700">In-depth training on CAD/CAM and production software</p>
                </div>
              </div>
              <div className="mt-6">
                <Button>
                  View Training Calendar
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our World-Class Service?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our service team today to learn more about how we can support your machinery needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Service Team
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Download Service Brochure
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample data
const serviceCategories = [
  {
    name: "Installation & Setup",
    description: "Professional installation and setup of your machinery to ensure optimal performance from day one.",
    icon: <Settings className="h-6 w-6" />,
    features: [
      "Site preparation consultation",
      "Professional machinery installation",
      "Initial calibration and testing",
      "Operator training during installation",
      "Integration with existing systems",
    ],
    link: "/services/installation",
  },
  {
    name: "Training & Education",
    description:
      "Comprehensive training programs to ensure your team can operate and maintain your machinery effectively.",
    icon: <Users className="h-6 w-6" />,
    features: [
      "Hands-on operator training",
      "Maintenance staff training",
      "Software and CAD/CAM training",
      "Advanced techniques workshops",
      "Customized training programs",
    ],
    link: "/services/training",
  },
  {
    name: "Maintenance & Support",
    description: "Regular maintenance and responsive support to maximize uptime and extend the life of your machinery.",
    icon: <Clock className="h-6 w-6" />,
    features: [
      "Preventive maintenance programs",
      "Emergency repair services",
      "Remote diagnostics and support",
      "Genuine parts and supplies",
      "Software updates and upgrades",
    ],
    link: "/services/maintenance",
  },
  {
    name: "Warranty & Protection",
    description: "Comprehensive warranty and protection plans to safeguard your investment and provide peace of mind.",
    icon: <Shield className="h-6 w-6" />,
    features: [
      "Extended warranty options",
      "Comprehensive service plans",
      "Machinery insurance programs",
      "Upgrade and trade-in programs",
      "Preventive maintenance scheduling",
    ],
    link: "/services/warranty",
  },
]

const testimonials = [
  {
    quote:
      "The service team at Machinery Alliance has been exceptional. Their quick response and expertise have minimized our downtime and kept our production running smoothly.",
    name: "John Anderson",
    company: "Premium Countertops, Inc.",
  },
  {
    quote:
      "The training provided by Machinery Alliance was comprehensive and practical. Our operators were up and running efficiently within days of installation.",
    name: "Sarah Johnson",
    company: "Modern Stone Works",
  },
  {
    quote:
      "Their preventive maintenance program has been a game-changer for us. We've seen a significant reduction in unexpected breakdowns and increased productivity.",
    name: "Michael Chen",
    company: "Pacific Stone Fabricators",
  },
]
