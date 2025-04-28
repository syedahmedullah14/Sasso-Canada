"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X, ChevronDown, Phone } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Stone Fabrica</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Brands</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {brands.map((brand) => (
                      <li key={brand.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={brand.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">{brand.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">{brand.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {productCategories.map((category) => (
                      <li key={category.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={category.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">{category.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">{category.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">{service.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {industries.map((industry) => (
                      <li key={industry.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={industry.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">{industry.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">{industry.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="ml-4">
            <Phone className="mr-2 h-4 w-4" />
            Contact Sales
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 py-3 bg-white">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <MobileAccordion title="Our Brands" items={brands} onItemClick={() => setMobileMenuOpen(false)} />
            <MobileAccordion title="Products" items={productCategories} onItemClick={() => setMobileMenuOpen(false)} />
            <MobileAccordion title="Services" items={services} onItemClick={() => setMobileMenuOpen(false)} />
            <MobileAccordion title="Industries" items={industries} onItemClick={() => setMobileMenuOpen(false)} />
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Button className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function MobileAccordion({
  title,
  items,
  onItemClick,
}: {
  title: string
  items: { title: string; href: string; description: string }[]
  onItemClick: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-1">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
              onClick={onItemClick}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

const productCategories = [
  {
    title: "CNC Machinery",
    description: "Advanced CNC machines for stone cutting, routing, and carving",
    href: "/products/cnc-machinery",
  },
  {
    title: "Bridge Saws",
    description: "Precision bridge saws for dimensional stone cutting",
    href: "/products/bridge-saws",
  },
  {
    title: "Edge Polishers",
    description: "Automatic edge polishing machines for perfect finishes",
    href: "/products/edge-polishers",
  },
  {
    title: "Waterjet Systems",
    description: "High-pressure waterjet cutting for intricate designs",
    href: "/products/waterjet-systems",
  },
  {
    title: "Digital Templating",
    description: "Laser measuring and digital templating solutions",
    href: "/products/digital-templating",
  },
  {
    title: "Software Solutions",
    description: "CAD/CAM and production management software",
    href: "/products/software",
  },
]

const services = [
  {
    title: "Installation & Training",
    description: "Professional installation and comprehensive operator training",
    href: "/services/installation-training",
  },
  {
    title: "Technical Support",
    description: "Remote and on-site technical assistance for all equipment",
    href: "/services/technical-support",
  },
  {
    title: "Maintenance Programs",
    description: "Preventive maintenance plans to maximize uptime",
    href: "/services/maintenance",
  },
  {
    title: "Parts & Supplies",
    description: "Genuine parts and consumables for all our machinery",
    href: "/services/parts",
  },
]

const industries = [
  {
    title: "Countertop Fabrication",
    description: "Solutions for residential and commercial countertop manufacturing",
    href: "/industries/countertop-fabrication",
  },
  {
    title: "Architectural Stone",
    description: "Equipment for architectural stone applications",
    href: "/industries/architectural-stone",
  },
  {
    title: "Monument & Memorials",
    description: "Specialized solutions for monument makers",
    href: "/industries/monuments",
  },
  {
    title: "Tile Production",
    description: "High-volume tile manufacturing equipment",
    href: "/industries/tile-production",
  },
]

const brands = [
  {
    title: "Stone Fabrica",
    description: "Advanced CNC machinery and automated systems for stone fabrication",
    href: "/brands/stone-fabrica",
  },
  {
    title: "Sasso Meccanica",
    description: "Italian excellence in edge polishers, bridge saws, and waterjet systems",
    href: "/brands/sasso-meccanica",
  },
  {
    title: "Laser Products",
    description: "Digital templating and measuring solutions for precision fabrication",
    href: "/brands/laser-products",
  },
  {
    title: "All Brands",
    description: "Overview of our complete family of brands and their specialties",
    href: "/brands",
  },
]
