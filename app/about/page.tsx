import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Award, Users, Globe, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Sasso Canada"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Sasso Canada</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Uniting the world's leading stone and surface fabrication technology brands to serve the Canadian market
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Sasso Canada was established to bring together the world's most innovative and respected brands in the
                stone and surface fabrication industry to serve the Canadian market. By uniting Stone Fabrica, Sasso
                Meccanica, and Laser Products under one organization, we've created a comprehensive solution provider
                that leverages the strengths and expertise of each brand.
              </p>
              <p className="text-gray-700 mb-4">
                With a combined history of over 40 years in the industry, our brands have been at the forefront of
                technological innovation, setting new standards for precision, efficiency, and reliability in stone and
                surface fabrication machinery throughout Canada.
              </p>
              <p className="text-gray-700 mb-4">
                Today, Sasso Canada serves customers across all Canadian provinces, providing not just cutting-edge
                equipment, but complete solutions that include training, support, and ongoing service to ensure our
                customers' success. Our Canadian headquarters in Toronto serves as the hub for our operations, with
                regional support teams across the country.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=600&auto=format&fit=crop"
                alt="Our company history"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Brands</h2>
          <div className="space-y-16">
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
                  Stone Fabrica specializes in advanced stone fabrication machinery with innovative solutions for
                  countertop manufacturing. With a focus on automation and precision, Stone Fabrica's CNC machines,
                  bridge saws, and material handling systems have revolutionized the stone fabrication industry in
                  Canada and beyond.
                </p>
                <p className="text-gray-700 mb-4">
                  Founded in 1995, Stone Fabrica has built a reputation for reliability, innovation, and exceptional
                  customer support. Their K-Series CNC bridge saws and automated material handling systems are
                  particularly popular among Canadian fabricators for their durability in our climate and adaptability
                  to various workshop sizes.
                </p>
                <Button variant="outline" className="mt-2">
                  Learn more about Stone Fabrica
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=600&auto=format&fit=crop"
                  alt="Sasso Meccanica"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Sasso Meccanica</h3>
                <p className="text-gray-700 mb-4">
                  Sasso Meccanica represents Italian excellence in stone processing machinery, offering precision
                  engineering and cutting-edge technology. Since 1982, Sasso has been designing and manufacturing
                  high-quality edge polishers, bridge saws, and waterjet systems that combine innovation with
                  reliability.
                </p>
                <p className="text-gray-700 mb-4">
                  With a commitment to quality and continuous improvement, Sasso Meccanica has established itself as a
                  global leader in stone processing equipment. Their Flying Flat edge polishers and K-Kut bridge saws
                  have become industry standards in Canada, known for their precision, speed, and low maintenance
                  requirements even in high-volume production environments.
                </p>
                <Button variant="outline" className="mt-2">
                  Learn more about Sasso Meccanica
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=600&auto=format&fit=crop"
                  alt="Laser Products"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Laser Products</h3>
                <p className="text-gray-700 mb-4">
                  Laser Products is the industry leader in digital templating and measuring solutions for the stone,
                  woodworking, and glass industries. Their innovative laser measuring systems and software have
                  transformed how fabricators measure, template, and manage projects across Canada.
                </p>
                <p className="text-gray-700 mb-4">
                  Founded in 1994, Laser Products has pioneered digital templating technology, helping Canadian
                  fabricators increase accuracy, reduce errors, and improve efficiency in their operations. The LT-2D3D
                  digital templating system has become essential equipment for modern fabrication shops, allowing for
                  precise measurements in complex spaces and seamless integration with CAD/CAM software for production.
                </p>
                <Button variant="outline" className="mt-2">
                  Learn more about Laser Products
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Sasso Canada, we're committed to advancing the stone and surface fabrication industry through
              innovation, quality, and exceptional service tailored to the Canadian market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do, from the quality of our machinery to the service we
                provide our Canadian customers.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Partnership</h3>
              <p className="text-gray-700">
                We view our customers as partners and are committed to their success, providing ongoing support and
                solutions tailored to the Canadian fabrication industry.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We continuously innovate to develop new technologies and solutions that address the unique challenges of
                Canadian fabricators and help our customers succeed.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-gray-700">
                We build reliable machinery and provide dependable service that our Canadian customers can count on
                through all seasons and conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Canadian Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canadian Presence Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Canadian Presence</h2>
              <p className="text-gray-700 mb-4">
                Sasso Canada has a strong presence across the country, with our headquarters in Toronto and regional
                service centers in Vancouver, Calgary, Montreal, and Halifax. This nationwide network allows us to
                provide local support and service to our customers, no matter where they are located in Canada.
              </p>
              <p className="text-gray-700 mb-4">
                Our Canadian team includes factory-trained technicians, sales specialists, and support staff who
                understand the unique challenges of the Canadian market. We also maintain a comprehensive inventory of
                parts and consumables at our Toronto facility to ensure quick delivery and minimal downtime for our
                customers.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-700">Provinces Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1,000+</div>
                  <div className="text-gray-700">Canadian Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">25+</div>
                  <div className="text-gray-700">Service Technicians</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-700">Support</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=600&auto=format&fit=crop"
                alt="Canadian map with service locations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Sasso Canada Family</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how our comprehensive solutions can transform your stone and surface fabrication business in Canada
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Us Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20">
              Request a Demonstration
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample data with Canadian context and Unsplash images
const leadershipTeam = [
  {
    name: "John Smith",
    position: "Chief Executive Officer",
    bio: "With over 25 years of experience in the Canadian stone industry, John has led Sasso Canada since its formation, driving innovation and national expansion.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Maria Rodriguez",
    position: "Chief Technology Officer",
    bio: "Maria oversees all technology development across our brands, ensuring our machinery remains at the cutting edge of innovation and performance for Canadian fabricators.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Robert Chen",
    position: "Chief Operations Officer",
    bio: "Robert manages our Canadian operations, ensuring efficient distribution, quality control, and supply chain management across all our facilities.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sarah Johnson",
    position: "VP of Sales & Marketing",
    bio: "Sarah leads our Canadian sales and marketing efforts, developing strategies to expand our market presence and strengthen customer relationships across the country.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Marco Bianchi",
    position: "Director of Engineering",
    bio: "Marco heads our engineering team, bringing Italian craftsmanship and precision to the adaptation of our machinery for Canadian requirements and regulations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "David Wilson",
    position: "Customer Success Director",
    bio: "David ensures our Canadian customers receive exceptional support and training, maximizing the value they receive from our solutions in all provinces.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
]
