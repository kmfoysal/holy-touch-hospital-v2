// src/data/index.js
import {
  Activity,
  Ambulance,
  Award,
  Bed,
  Building2,
  Clock,
  HeartPulse,
  Microscope,
  Smile,
  Stethoscope,
  Thermometer,
  User,
  Users,
  Zap,
} from "lucide-react";

import Doc1 from "../assets/images/nazimul-haq.jpg";
import Doc2 from "../assets/images/Zakia.jpg";
import FrontDesk from "../assets/images/whyUs1.jpg";
import OtRoom from "../assets/images/whyUs2.jpg";
import Cabin from "../assets/images/whyUs5.jpg";
import LaproscopyUnit from "../assets/images/whyUs4.jpg";

export const stats = [
  { id: 1, label: "Years Experience", value: "8+", icon: Clock },
  { id: 2, label: "Expert Doctors", value: "15+", icon: User },
  { id: 3, label: "Happy Patients", value: "5k+", icon: Smile },
  { id: 4, label: "Successful Surgeries", value: "1200+", icon: Activity },
];

export const features = [
  {
    title: "Expert Surgeons",
    desc: "Highly qualified surgeons from Dhaka & Barisal.",
    icon: Award,
  },
  {
    title: "Modern Technology",
    desc: "Latest laparoscopic & pathology equipment.",
    icon: Microscope,
  },
  {
    title: "24/7 Support",
    desc: "Emergency admission and ambulance service anytime.",
    icon: Clock,
  },
  {
    title: "Affordable Care",
    desc: "Premium treatment at minimal cost for common people.",
    icon: HeartPulse,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rahim Uddin",
    location: "Patuakhali",
    text: "The laparoscopic surgery was painless and recovery was very fast. Best hospital in town!",
    rating: 5,
  },
  {
    id: 2,
    name: "Salma Begum",
    location: "Borguna",
    text: "Staff behavior is very polite. Dr. Zakia Sultana is a gem for maternity care.",
    rating: 5,
  },
  {
    id: 3,
    name: "Kamrul Hasan",
    location: "Bauphal",
    text: "Clean environment and affordable pathology tests. Highly recommended.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Do you have 24/7 Emergency service?",
    a: "Yes, our emergency unit and ambulance service are operational 24 hours a day, 7 days a week.",
  },
  {
    q: "How can I book an appointment?",
    a: "You can call our hotline numbers or visit the hospital reception directly.",
  },
  {
    q: "Do you accept health insurance?",
    a: "Currently, we accept cash and selected corporate health cards. Please contact reception for details.",
  },
];

// Re-exporting previous data...
export const hospitalInfo = {
  name: "Holy Touch Hospital",
  phone: ["01742-121212", "01836-999136"],
  email: "hth.ptk.bd@gmail.com",
  address: "Power House Road, Patuakhali",
  openHours: "24/7 Emergency Service",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.7281300538616!2d90.33516519999999!3d22.363892099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aac7500e25b8f9%3A0xce4888ee84232451!2sHoli%20Touch%20Hospital!5e0!3m2!1sen!2sbd!4v1771011069512!5m2!1sen!2sbd",
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Doctors", path: "/doctors" },
  { name: "Contact", path: "/contact" },
];

export const services = [
  {
    id: 1,
    title: "General Surgery",
    desc: "Specialized surgical procedures with 24/7 post-op care.",
    icon: Activity,
  },
  {
    id: 2,
    title: "Laparoscopy",
    desc: "Minimally invasive surgery for faster recovery and less pain.",
    icon: Microscope,
  },
  {
    id: 3,
    title: "Digital Pathology",
    desc: "Accurate diagnostics using modern laboratory equipment.",
    icon: Zap,
  },
  {
    id: 4,
    title: "Maternity Care",
    desc: "Compassionate care for mothers and newborns.",
    icon: User,
  },
];

export const doctors = [
  {
    id: 1,
    name: "অধ্যাপক ডাঃ জি. এম. নাজিমুল হক",
    degrees: "এমবিবিএস, এফসিপিএস (সার্জারী), এফএমএএস (ইন্ডিয়া)",
    specialty: "জেনারেল, ল্যাপারোস্কপিক সার্জন",
    position: "বিভাগীয় প্রধান (সার্জারী), শেবাচিম",
    image: Doc1, // Put real images in public/images/
  },
  {
    id: 2,
    name: "ডাঃ জাকিয়া সুলতানা",
    degrees: "এমবিবিএস, বিসিএস, এফসিপিএস (গাইনী)",
    specialty: "গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ",
    position: "সহকারী অধ্যাপক, পটুয়াখালী মেডিকেল কলেজ",
    image: Doc2,
  },
  {
    id: 3,
    name: "ডা. মো. অহিদুজ্জামান শামীম",
    degrees: "এমবিবিএস, বিসিএস, এফসিপিএস (স্বাস্থ্য)",
    specialty: "শিশু বিশেষজ্ঞ",
    position: "অধ্যাপক, পটুয়াখালী মেডিকেল কলেজ",
    image: "/images/doctor-2.jpg",
  },
];

export const galleryImages = [
  {
    id: 1,
    category: "Interior",
    title: "Main Reception",
    src: FrontDesk,
  },
  {
    id: 2,
    category: "Operation Theater",
    title: "Advanced OT Room",
    src: OtRoom,
  },
  { id: 3, category: "Wards", title: "VIP Cabin", src: Cabin },
  {
    id: 4,
    category: "Events",
    title: "Free Medical Camp 2025",
    src: Cabin,
  },
  {
    id: 5,
    category: "Interior",
    title: "Waiting Area",
    src: FrontDesk,
  },
  {
    id: 6,
    category: "Operation Theater",
    title: "Laparoscopy Unit",
    src: LaproscopyUnit,
  },
];

export const newsItems = [
  {
    id: 1,
    title: "Free Medical Camp for Rural Patients",
    date: "10 Feb, 2026",
    category: "Community",
    excerpt:
      "Over 500 patients received free checkups and medicine in our latest outreach program.",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "Introduction of New Laparoscopic Machine",
    date: "25 Jan, 2026",
    category: "Technology",
    excerpt:
      "We have upgraded our OT with the latest 4K Laparoscopic tower for precision surgery.",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    title: "Best Hygiene Award 2025",
    date: "15 Dec, 2025",
    category: "Awards",
    excerpt:
      "Holy Touch Hospital has been recognized by the district health office for exceptional cleanliness.",
    image: "/images/news3.jpg",
  },
];

export const hospitalFacilities = [
  {
    id: 1,
    title: "Expert Surgical Care",
    desc: "All types of surgeries performed by specialist doctors with comprehensive inpatient care.",
    original:
      "বিশেষজ্ঞ চিকিৎসক দিয়ে রোগী ভর্তি রেখে সব ধরনের অপারেশন করা হয়।",
    icon: Stethoscope,
  },
  {
    id: 2,
    title: "Advanced Laparoscopy",
    desc: "Affordable laparoscopic surgeries including Gallbladder Stone removal.",
    original: "ল্যাপারোস্কপির সাহায্যে স্বল্প খরচে পিত্ত থলির পাথর অপারেশন।",
    icon: Microscope,
  },
  {
    id: 3,
    title: "Modern OT Complex",
    desc: "3 (Three) state-of-the-art, air-conditioned Operation Theaters.",
    original: "শীতাতপ নিয়ন্ত্রিত ০৩ (তিন) টি অত্যাধুনিক অপারেশন থিয়েটার।",
    icon: Building2,
  },
  {
    id: 4,
    title: "Painless Piles Surgery",
    desc: "Advanced painless piles operation using modern Longo Machine.",
    original:
      "ব্যাথা মুক্ত আধুনিক উপায়ে লঙ্ঘ মেশিনের সাহায্যে পাইলস্ অপারেশন।",
    icon: Activity,
  },
  {
    id: 5,
    title: "Premium Cabins",
    desc: "VVIP, VIP, Deluxe, AC & Non-AC cabins with modern amenities.",
    original: "সর্বাধুনিক ব্যবস্থাসহ ভি.ভি.আই.পি, ভি.আই.পি, ডিলাক্স কেবিন।",
    icon: Bed,
  },
  {
    id: 6,
    title: "Separate Wards",
    desc: "Spacious and separate wards dedicated for Male and Female patients.",
    original:
      "মহিলা ও পুরুষ রোগীদের জন্য সু-প্রশস্ত আলাদা ওয়ার্ড-এর ব্যবস্থা।",
    icon: Users,
  },
  {
    id: 7,
    title: "Digital Pathology",
    desc: "All types of modern pathological tests and diagnostics available.",
    original: "সকল প্রকার প্যাথলজিক্যাল পরীক্ষা করা হয়।",
    icon: Thermometer,
  },
  {
    id: 8,
    title: "24/7 Ambulance",
    desc: "Round-the-clock ambulance service for patient transport.",
    original: "রোগী আনা-নেয়ার জন্য সার্বক্ষণিক এম্বুলেন্স সেবা।",
    icon: Ambulance,
  },
  {
    id: 9,
    title: "Uninterrupted Power",
    desc: "24/7 electricity backup ensuring zero downtime.",
    original: "সার্বক্ষণিক বিদ্যুতের ব্যবস্থা আছে।",
    icon: Zap,
  },
];
