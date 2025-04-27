import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Contact Machinery Alliance"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Get in touch with our team for sales, support, or any questions about our machinery solutions
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Whether you're interested in learning more about our products, need technical support, or want to
                discuss a custom solution, our team is here to help. Fill out the form below, and we'll get back to you
                as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input id="last-name" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                    <Input id="company" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="country" className="text-sm font-medium">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <Select>
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="mx">Mexico</SelectItem>
                        <SelectItem value="it">Italy</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry-type" className="text-sm font-medium">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <Select>
                    <SelectTrigger id="inquiry-type">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="service">Service Request</SelectItem>
                      <SelectItem value="parts">Parts & Supplies</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea id="message" rows={5} required />
                </div>

                <div className="flex items-start">
                  <input type="checkbox" id="privacy-policy" className="mt-1 mr-2" required />
                  <label htmlFor="privacy-policy" className="text-sm text-gray-700">
                    I agree to the{" "}
                    <a href="/privacy-policy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to having my data processed as outlined therein.
                  </label>
                </div>

                <Button type="submit" size="lg">
                  Submit Inquiry
                </Button>
              </form>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Headquarters</h4>
                      <p className="text-gray-700">
                        123 Machinery Way
                        <br />
                        Industrial Park, CA 90210
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-700">
                        Sales: +1 (800) 555-1234
                        <br />
                        Support: +1 (800) 555-5678
                        <br />
                        Service: +1 (800) 555-9012
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-700">
                        Sales: sales@machineryalliance.com
                        <br />
                        Support: support@machineryalliance.com
                        <br />
                        General: info@machineryalliance.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Hours of Operation</h4>
                      <p className="text-gray-700">
                        Monday - Friday: 8:00 AM - 5:00 PM (PST)
                        <br />
                        Saturday: 9:00 AM - 1:00 PM (PST)
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Global Offices</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium flex items-center">
                      <Globe className="h-4 w-4 text-blue-600 mr-2" />
                      North America
                    </h4>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">United States (HQ)</p>
                        <p className="text-gray-700 text-sm">
                          123 Machinery Way
                          <br />
                          Industrial Park, CA 90210
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Canada</p>
                        <p className="text-gray-700 text-sm">
                          456 Stone Avenue
                          <br />
                          Toronto, ON M5V 2H1
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium flex items-center">
                      <Globe className="h-4 w-4 text-blue-600 mr-2" />
                      Europe
                    </h4>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">Italy</p>
                        <p className="text-gray-700 text-sm">
                          Via Industria 78
                          <br />
                          Verona, 37100
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">United Kingdom</p>
                        <p className="text-gray-700 text-sm">
                          Unit 5, Industrial Estate
                          <br />
                          Manchester, M15 4QT
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium flex items-center">
                      <Globe className="h-4 w-4 text-blue-600 mr-2" />
                      Asia Pacific
                    </h4>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">China</p>
                        <p className="text-gray-700 text-sm">
                          Building 3, Technology Park
                          <br />
                          Shanghai, 200120
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Australia</p>
                        <p className="text-gray-700 text-sm">
                          42 Industrial Drive
                          <br />
                          Sydney, NSW 2000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg relative">
            {/* This would be replaced with an actual map component */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">How quickly can I expect a response to my inquiry?</h3>
                <p className="text-gray-700">
                  We strive to respond to all inquiries within 24 business hours. For urgent matters, we recommend
                  calling our customer service line directly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Do you offer demonstrations of your machinery?</h3>
                <p className="text-gray-700">
                  Yes, we offer both in-person demonstrations at our showrooms and virtual demonstrations via video
                  conference. Contact our sales team to schedule a demonstration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-700">
                  We accept various payment methods including wire transfer, credit card, and financing options. Our
                  sales team can provide detailed information based on your location and needs.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">How do I order replacement parts?</h3>
                <p className="text-gray-700">
                  Replacement parts can be ordered through our online parts store, by emailing
                  parts@machineryalliance.com, or by calling our parts department directly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Do you provide international shipping and support?</h3>
                <p className="text-gray-700">
                  Yes, we ship our machinery worldwide and have a global network of technicians and support staff to
                  assist customers in over 80 countries.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">What training options are available for new machinery?</h3>
                <p className="text-gray-700">
                  We offer comprehensive training programs including on-site training during installation, training at
                  our facilities, and online training resources for ongoing education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Production?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our team is standing by to help you find the perfect machinery solution for your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Sales Team
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Request a Callback
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
