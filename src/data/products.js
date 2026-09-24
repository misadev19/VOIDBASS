import vb01 from "../assets/products/vb-01.jpg";
import vb02 from "../assets/products/vb-02.jpg";
import vbS01 from "../assets/products/vb-s01.jpg";
import vbS02 from "../assets/products/vb-s02.jpg";

const products = [
  {
    id: "vb-01",
    name: "VB-01",
    category: "Headphones",
    price: 48000,
    image: vb01,
    description:
      "Precision-engineered headphones designed for immersive, uncompromised sound.",
    features: [
      "High-resolution audio",
      "Active noise cancellation",
      "40-hour battery life",
      "Memory foam ear cushions",
    ],
    specifications: {
      Driver: "40mm Dynamic",
      Frequency: "5Hz – 40kHz",
      Impedance: "32Ω",
      Weight: "285g",
      Connectivity: "Bluetooth 5.4 / USB-C",
    },
  },

  {
    id: "vb-02",
    name: "VB-02",
    category: "Headphones",
    price: 68000,
    image: vb02,
    description:
      "Flagship wireless headphones built for powerful, detailed listening.",
    features: [
      "High-resolution audio",
      "Adaptive noise cancellation",
      "50-hour battery life",
      "Premium aluminum construction",
    ],
    specifications: {
      Driver: "45mm Planar Magnetic",
      Frequency: "4Hz – 50kHz",
      Impedance: "32Ω",
      Weight: "310g",
      Connectivity: "Bluetooth 5.4 / USB-C",
    },
  },

  {
    id: "vb-s01",
    name: "VB-S01",
    category: "Speakers",
    price: 72000,
    image: vbS01,
    description:
      "A compact wireless speaker delivering deep bass and precise spatial detail.",
    features: [
      "360° sound",
      "Deep bass response",
      "Wireless stereo pairing",
      "Aluminum body",
    ],
    specifications: {
      Driver: "2-Way Stereo",
      Frequency: "45Hz – 25kHz",
      Output: "100W",
      Weight: "3.8kg",
      Connectivity: "Bluetooth 5.4 / Wi-Fi",
    },
  },

  {
    id: "vb-s02",
    name: "VB-S02",
    category: "Speakers",
    price: 128000,
    image: vbS02,
    description:
      "A high-performance speaker engineered to fill the room with uncompromising sound.",
    features: [
      "High-fidelity stereo sound",
      "Powerful low-frequency response",
      "Wireless multi-room audio",
      "Precision-machined aluminum body",
    ],
    specifications: {
      Driver: "3-Way Stereo",
      Frequency: "32Hz – 30kHz",
      Output: "180W",
      Weight: "8.2kg",
      Connectivity: "Bluetooth 5.4 / Wi-Fi / USB-C",
    },
  },
];

export default products;
