// Import React and React Native components
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  ViewPropTypes,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
// import Carousel from "react-native-snap-carousel";

import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import DetailVenue from "../screen/DetailVenue";

// Define sample data for EO and venue
const eoData = [
  {
    id: 1,
    name: "EO Wedding A",
    description: "Description of EO Wedding A",
    image:
      "https://plus.unsplash.com/premium_photo-1661771928377-3c0ad5a0e85a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lokasi: "Jakarta",
    contact: "+62-9999-9999",
    experience: "7 years",
    startingPrice: 15000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
  },
  {
    id: 2,
    name: "EO Wedding B",
    description: "Description of EO Wedding B",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lokasi: "Jakarta",
    contact: "+62-9999-9999",
    experience: "7 years",
    startingPrice: 15000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
  },
  {
    id: 3,
    name: "EO Wedding C",
    description: "Description of EO Wedding C",
    image:
      "https://plus.unsplash.com/premium_photo-1661749718537-2f38910a016e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    lokasi: "Jakarta",
    contact: "+62-9999-9999",
    experience: "7 years",
    startingPrice: 15000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
  },
  {
    id: 4,
    name: "EO Wedding D",
    description: "Description of EO Wedding D",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lokasi: "Jakarta",
    contact: "+62-9999-9999",
    experience: "7 years",
    startingPrice: 15000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
  },
  {
    id: 5,
    name: "EO Wedding E",
    description: "Description of EO Wedding E",
    image:
      "https://plus.unsplash.com/premium_photo-1664297535795-48cfc1c20018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    lokasi: "Jakarta",
    contact: "+62-9999-9999",
    experience: "7 years",
    startingPrice: 15000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
  },
  {
    id: 6,
    name: "EO Wedding F",
    description: "Description of EO Wedding F",
    image:
      "https://plus.unsplash.com/premium_photo-1661299248692-d58e3b299b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    lokasi: "Jakarta",
    contact: "+62-9999-9999",
    experience: "7 years",
    startingPrice: 15000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
  },
  // Add more EO data if needed
  // ...
];

const venueData = [
  {
    id: 1,
    name: "Venue 1",
    description: "Description of Venue 1",
    image:
      "https://images.summitmedia-digital.com/preview/images/2019/04/26/cebu-wedding-venue-nm.jpg",
    location: "Jakarta",
    capacity: 500,
    facility: ["Stage, Ballroom, Parking Car"],
    rating: 4.8,
    price: 25000000,
    type: "Ballroom",
    portofolio: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1620735692151-26a7e0748429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1625619080917-7d6ff39e0675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    ],
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 2,
    name: "Venue 2",
    description: "Description of Venue 2",
    image:
      "https://cdn-2.tstatic.net/kaltim/foto/bank/images/venue-wedding-terbaik.jpg",
    location: "Medan",
    capacity: 300,
    facility: ["Stage, Ballroom"],
    rating: 4.5,
    price: 20000000,
    type: "Garden",
    portofolio: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1620735692151-26a7e0748429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1625619080917-7d6ff39e0675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    ],
  },
  {
    id: 3,
    name: "Venue 1",
    description: "Description of Venue 1",
    image:
      "https://images.summitmedia-digital.com/preview/images/2019/04/26/cebu-wedding-venue-nm.jpg",
    location: "Bandung",
    capacity: 100,
    facility: ["Stage, Ballroom, Parking Car"],
    rating: 4.9,
    price: 35000000,
    type: "Beach",
    portofolio: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1620735692151-26a7e0748429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1625619080917-7d6ff39e0675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    ],
  },
  {
    id: 4,
    name: "Venue 2",
    description: "Description of Venue 2",
    image:
      "https://medinacatering.id/wp-content/uploads/2019/10/Rekomendasi-Wedding-Venue-Terbaik-di-Jakarta-Selatan-menara-165.jpg",
    location: "Surabaya",
    capacity: 400,
    facility: ["Stage, Ballroom, Parking Car"],
    rating: 4.9,
    price: 35000000,
    type: "Ballroom",
    portofolio: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1620735692151-26a7e0748429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1625619080917-7d6ff39e0675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    ],
  },
  {
    id: 5,
    name: "Venue 1",
    description: "Description of Venue 1",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/fab.thebridedept/2022/07/shutterstock_387640156-1658290895-828x552.jpg",
    location: "Jakarta",
    capacity: 400,
    facility: ["Stage, Ballroom, Parking Car"],
    rating: 4.7,
    price: 35000000,
    type: "Ballroom",
    portofolio: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1620735692151-26a7e0748429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1625619080917-7d6ff39e0675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    ],
  },
  {
    id: 6,
    name: "Venue 2",
    description: "Description of Venue 2",
    image:
      "https://assets.venuecrew.com/wp-content/uploads/2022/08/01233727/London-hotel-wedding-venue-The-Kimpton-Fitzroy-ballroom.jpg",
    location: "Jakarta",
    capacity: 400,
    facility: ["Stage, Ballroom, Parking Car"],
    rating: 4.2,
    price: 30000000,
    type: "Ballroom",
    portofolio: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1620735692151-26a7e0748429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1625619080917-7d6ff39e0675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    ],
  },
  // Add more venue data if needed
  // ...
];
// List of photographers
const photographers = [
  {
    id: 1,
    name: "Hifzul",
    image:
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=858&q=80",
    portofolio: [
      {
        judul: "Wedding Photoshoot",
        deskripsi: "Memorable moments captured during weddings",
        gambar:
          "https://plus.unsplash.com/premium_photo-1661281280766-8b39804dfa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://plus.unsplash.com/premium_photo-1675107358573-e059060d7006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "Yazid",
    image:
      "https://images.unsplash.com/photo-1603574670812-d24560880210?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    portofolio: [
      {
        judul: "Wedding Photoshoot",
        deskripsi: "Memorable moments captured during weddings",
        gambar:
          "https://plus.unsplash.com/premium_photo-1661281280766-8b39804dfa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://plus.unsplash.com/premium_photo-1675107358573-e059060d7006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
    ],
  },
  {
    id: 3,
    name: "Franky",
    image:
      "https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    portofolio: [
      {
        judul: "Wedding Photoshoot",
        deskripsi: "Memorable moments captured during weddings",
        gambar:
          "https://plus.unsplash.com/premium_photo-1661281280766-8b39804dfa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://plus.unsplash.com/premium_photo-1675107358573-e059060d7006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
    ],
  },
  {
    id: 4,
    name: "Damar",
    image:
      "https://images.unsplash.com/photo-1625492922105-5914617fd869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
    portofolio: [
      {
        judul: "Wedding Photoshoot",
        deskripsi: "Memorable moments captured during weddings",
        gambar:
          "https://plus.unsplash.com/premium_photo-1661281280766-8b39804dfa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        judul: "Portrait Photography",
        deskripsi: "Capturing beautiful portraits of individuals",
        gambar:
          "https://plus.unsplash.com/premium_photo-1675107358573-e059060d7006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
    ],
  },
];

const successStories = [
  {
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    caption: "Success Story 1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    caption: "Success Story 2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    caption: "Success Story 3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    caption: "Success Story 4",
  },
];

const Package = [
  {
    id: 1,
    title: "EO Wedding A",
    description: "Description of EO Wedding A",
    image:
      "https://plus.unsplash.com/premium_photo-1661771928377-3c0ad5a0e85a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lokasi: "Jakarta Pusat",
    experience: "7 years",
    startingPrice: 60000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 1,
    CatheringId: 1,
    PhotographyId: 1,
    venueName: "Istora Senayan",
    catheringName: "Warung Mama",
    photographerName: "Dimas",
    pax: 300,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 2,
    title: "EO Wedding B",
    description: "Description of EO Wedding B",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lokasi: "Jakarta Barat",
    experience: "7 years",
    startingPrice: 70000000,
    service: ["Planner", "Decoration"],
    rating: 4.5,
    VenueId: 2,
    CatheringId: 2,
    PhotographyId: 2,
    venueName: "Gelora Bung Karno",
    catheringName: "Warung Papa",
    photographerName: "Damar",
    pax: 350,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 3,
    title: "EO Wedding C",
    description: "Description of EO Wedding C",
    image:
      "https://plus.unsplash.com/premium_photo-1661749718537-2f38910a016e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    lokasi: "Jakarta Timur",
    experience: "7 years",
    startingPrice: 80000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 3,
    CatheringId: 3,
    PhotographyId: 3,
    venueName: "Gelora Bung Pattimura",
    catheringName: "Warung Kakak",
    photographerName: "Hifzul",
    pax: 300,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 4,
    title: "EO Wedding D",
    description: "Description of EO Wedding D",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lokasi: "Jakarta",
    experience: "7 years",
    startingPrice: 72000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.4,
    VenueId: 4,
    CatheringId: 4,
    PhotographyId: 4,
    venueName: "Gelora Bung Hatta",
    catheringName: "Warung Adik",
    photographerName: "Franky",
    pax: 400,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 5,
    title: "EO Wedding E",
    description: "Description of EO Wedding E",
    image:
      "https://plus.unsplash.com/premium_photo-1664297535795-48cfc1c20018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    lokasi: "Jakarta",
    experience: "7 years",
    startingPrice: 78000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 5,
    CatheringId: 5,
    PhotographyId: 5,
    venueName: "Gelora Bung Sudirman",
    catheringName: "Warung Paman",
    photographerName: "Yazid",
    pax: 250,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 6,
    title: "EO Wedding F",
    description: "Description of EO Wedding F",
    image:
      "https://plus.unsplash.com/premium_photo-1661299248692-d58e3b299b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    lokasi: "Jakarta",
    experience: "7 years",
    startingPrice: 95000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 6,
    CatheringId: 6,
    PhotographyId: 6,
    venueName: "Gelora Bung Tomo",
    catheringName: "Warung Bibi",
    photographerName: "Ciptandaru",
    pax: 500,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 7,
    title: "EO Wedding A",
    description: "Description of EO Wedding A",
    image:
      "https://plus.unsplash.com/premium_photo-1661771928377-3c0ad5a0e85a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lokasi: "Jakarta Pusat",
    experience: "7 years",
    startingPrice: 60000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 1,
    CatheringId: 1,
    PhotographyId: 1,
    venueName: "Istora Senayan",
    catheringName: "Warung Mama",
    photographerName: "Dimas",
    pax: 300,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 8,
    title: "EO Wedding B",
    description: "Description of EO Wedding B",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lokasi: "Jakarta Barat",
    experience: "7 years",
    startingPrice: 70000000,
    service: ["Planner", "Decoration"],
    rating: 4.5,
    VenueId: 2,
    CatheringId: 2,
    PhotographyId: 2,
    venueName: "Gelora Bung Karno",
    catheringName: "Warung Papa",
    photographerName: "Damar",
    pax: 350,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 9,
    title: "EO Wedding C",
    description: "Description of EO Wedding C",
    image:
      "https://plus.unsplash.com/premium_photo-1661749718537-2f38910a016e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    lokasi: "Jakarta Timur",
    experience: "7 years",
    startingPrice: 80000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 3,
    CatheringId: 3,
    PhotographyId: 3,
    venueName: "Gelora Bung Pattimura",
    catheringName: "Warung Kakak",
    photographerName: "Hifzul",
    pax: 300,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 10,
    title: "EO Wedding D",
    description: "Description of EO Wedding D",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lokasi: "Jakarta",
    experience: "7 years",
    startingPrice: 72000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.4,
    VenueId: 4,
    CatheringId: 4,
    PhotographyId: 4,
    venueName: "Gelora Bung Hatta",
    catheringName: "Warung Adik",
    photographerName: "Franky",
    pax: 400,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 11,
    title: "EO Wedding E",
    description: "Description of EO Wedding E",
    image:
      "https://plus.unsplash.com/premium_photo-1664297535795-48cfc1c20018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    lokasi: "Jakarta",
    experience: "7 years",
    startingPrice: 78000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 5,
    CatheringId: 5,
    PhotographyId: 5,
    venueName: "Gelora Bung Sudirman",
    catheringName: "Warung Paman",
    photographerName: "Yazid",
    pax: 250,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 12,
    title: "EO Wedding F",
    description: "Description of EO Wedding F",
    image:
      "https://plus.unsplash.com/premium_photo-1661299248692-d58e3b299b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    lokasi: "Jakarta",
    experience: "7 years",
    startingPrice: 95000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 6,
    CatheringId: 6,
    PhotographyId: 6,
    venueName: "Gelora Bung Tomo",
    catheringName: "Warung Bibi",
    photographerName: "Ciptandaru",
    pax: 500,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 13,
    title: "EO Wedding A",
    description: "Description of EO Wedding A",
    image:
      "https://plus.unsplash.com/premium_photo-1661771928377-3c0ad5a0e85a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lokasi: "Jakarta Pusat",
    experience: "7 years",
    startingPrice: 60000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 1,
    CatheringId: 1,
    PhotographyId: 1,
    venueName: "Istora Senayan",
    catheringName: "Warung Mama",
    photographerName: "Dimas",
    pax: 300,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 14,
    title: "EO Wedding B",
    description: "Description of EO Wedding B",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lokasi: "Jakarta Barat",
    experience: "7 years",
    startingPrice: 70000000,
    service: ["Planner", "Decoration"],
    rating: 4.5,
    VenueId: 2,
    CatheringId: 2,
    PhotographyId: 2,
    venueName: "Gelora Bung Karno",
    catheringName: "Warung Papa",
    photographerName: "Damar",
    pax: 350,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 15,
    title: "EO Wedding C",
    description: "Description of EO Wedding C",
    image:
      "https://plus.unsplash.com/premium_photo-1661749718537-2f38910a016e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    lokasi: "Jakarta Timur",
    experience: "7 years",
    startingPrice: 80000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 3,
    CatheringId: 3,
    PhotographyId: 3,
    venueName: "Gelora Bung Pattimura",
    catheringName: "Warung Kakak",
    photographerName: "Hifzul",
    pax: 300,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 16,
    title: "EO Wedding D",
    description: "Description of EO Wedding D",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lokasi: "Jakarta",
    experience: "7 years",
    startingPrice: 72000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.4,
    VenueId: 4,
    CatheringId: 4,
    PhotographyId: 4,
    venueName: "Gelora Bung Hatta",
    catheringName: "Warung Adik",
    photographerName: "Franky",
    pax: 400,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 17,
    title: "EO Wedding E",
    description: "Description of EO Wedding E",
    image:
      "https://plus.unsplash.com/premium_photo-1664297535795-48cfc1c20018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    lokasi: "Jakarta",
    experience: "7 years",
    startingPrice: 78000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 5,
    CatheringId: 5,
    PhotographyId: 5,
    venueName: "Gelora Bung Sudirman",
    catheringName: "Warung Paman",
    photographerName: "Yazid",
    pax: 250,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 18,
    title: "EO Wedding F",
    description: "Description of EO Wedding F",
    image:
      "https://plus.unsplash.com/premium_photo-1661299248692-d58e3b299b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    lokasi: "Jakarta",
    experience: "7 years",
    startingPrice: 95000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 6,
    CatheringId: 6,
    PhotographyId: 6,
    venueName: "Gelora Bung Tomo",
    catheringName: "Warung Bibi",
    photographerName: "Ciptandaru",
    pax: 500,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 19,
    title: "EO Wedding E",
    description: "Description of EO Wedding E",
    image:
      "https://plus.unsplash.com/premium_photo-1664297535795-48cfc1c20018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    lokasi: "Jakarta",
    experience: "7 years",
    startingPrice: 78000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 5,
    CatheringId: 5,
    PhotographyId: 5,
    venueName: "Gelora Bung Sudirman",
    catheringName: "Warung Paman",
    photographerName: "Yazid",
    pax: 250,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  {
    id: 20,
    title: "EO Wedding F",
    description: "Description of EO Wedding F",
    image:
      "https://plus.unsplash.com/premium_photo-1661299248692-d58e3b299b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    lokasi: "Jakarta",
    experience: "7 years",
    startingPrice: 95000000,
    service: ["Planner", "Decoration", "Catering"],
    rating: 4.6,
    VenueId: 6,
    CatheringId: 6,
    PhotographyId: 6,
    venueName: "Gelora Bung Tomo",
    catheringName: "Warung Bibi",
    photographerName: "Ciptandaru",
    pax: 500,
    paxOptions: [200, 300, 500, 700],
    pricePerPax: 40000,
    googleMapsLocation: {
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
];

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const handlePressVenue = () => {
    navigate("DetailVenue");
  };
  const handlePressFotografer = () => {
    navigate("DetailFotografer");
  };
  const handlePressEO = (eo) => {
    navigate("DetailEventOrganizer", { eo });
  };
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>Weddingku</Text>
      <Text style={styles.promo}>
        Book now discount <Text style={styles.promoDiscount}>5%</Text>
      </Text>

      <Text style={styles.subtitle}>Available Package</Text>
      <FlatList
        data={Package}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Set number of columns to 2
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePressEO(item)}
            style={styles.card}
          >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <View style={styles.cardInfo}>
                <Ionicons name="location-outline" size={16} color="#00bce1" />
                <Text style={styles.cardInfoText}>{item.venueName}</Text>
              </View>
              <View style={styles.cardInfo}>
                <Ionicons name="people-outline" size={16} color="#00bce1" />
                <Text style={styles.cardInfoText}>{`${item.pax} people`}</Text>
              </View>
              <View style={styles.cardInfo}>
                <Ionicons name="pricetag-outline" size={16} color="#00bce1" />
                <Text
                  style={styles.cardInfoText}
                >{`Rp. ${item.startingPrice}`}</Text>
              </View>
              <View style={styles.cardInfo}>
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text style={styles.cardInfoText}>{item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const FilterScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Filter</Text>
    {/* Add filter options */}
  </View>
);

const CartScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Cart</Text>
    {/* Add cart items */}
  </View>
);

const ChatScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Chat</Text>
    {/* Add chat messages */}
  </View>
);

// Define the styles
const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00bce1",
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase", // Convert text to uppercase
  },
  promo: {
    fontSize: 18,
    color: "#00bce1",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  promoDiscount: {
    fontSize: 18,
    color: "#ff0000",
    fontWeight: "bold",
  },
  cardList: {
    flexDirection: "row",
    marginBottom: 20,
  },
  card: {
    flex: 0.5, // Set flex to 0.5 for 2 cards per row
    aspectRatio: 0.6, // Maintain aspect ratio of card
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardVenue: {
    flex: 0.5, // Set flex to 0.5 for 2 cards per row
    aspectRatio: 0.7, // Maintain aspect ratio of card
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 5,
    // marginBottom: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "50%",
    marginBottom: 10,
    borderRadius: 5,
  },
  cardContent: {
    padding: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  cardInfoText: {
    marginLeft: 4,
    // color: "#fff",
  },
  photographerList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  photographerItem: {
    alignItems: "center",
    margin: 10,
  },
  photographerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  photographerName: {
    fontSize: 14,
    textAlign: "center",
    color: "red",
  },
  successStoryItem: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  successStoryImage: {
    width: "100%",
    height: "100%",
  },
  successStoryCaption: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  successStoryCaptionText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    marginRight: 5,
  },
  locationText: {
    fontSize: 12,
    color: "#777",
  },
});
export default HomeScreen;
