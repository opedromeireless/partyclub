import type { Achievement, PartyEvent, SocialPost, Ticket } from "@/types/domain";

export const events: PartyEvent[] = [
  {
    id: "neon-rooftop",
    title: "Neon Rooftop",
    organizer: "Purple Beats",
    genre: "Eletrônica",
    startsAt: "2026-07-04T23:00:00-03:00",
    venue: "Skyline Garden",
    city: "São Paulo, SP",
    distanceKm: 4.2,
    price: 45,
    coverUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    latitude: -23.5617,
    longitude: -46.6559,
    hypesReward: 120,
    capacity: 450,
    confirmed: 318,
    rules: ["Entrada 18+", "Documento obrigatório", "Proibido levar bebidas"],
    artists: ["DJ Luma", "Vini Pulse", "Maya Bass"],
    description:
      "Uma noite neon em rooftop com visual urbano, line-up eletrônico e check-in por QR code.",
    boosted: true,
  },
  {
    id: "baile-cosmico",
    title: "Baile Cósmico",
    organizer: "Club Aurora",
    genre: "Funk",
    startsAt: "2026-07-11T22:30:00-03:00",
    venue: "Arena Aurora",
    city: "Campinas, SP",
    distanceKm: 18.6,
    price: 30,
    coverUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
    latitude: -22.9056,
    longitude: -47.0608,
    hypesReward: 90,
    capacity: 900,
    confirmed: 651,
    rules: ["Classificação 18+", "Revista na entrada", "Meia mediante documento"],
    artists: ["MC Nox", "DJ Bruxa", "Beat Orion"],
    description:
      "Baile temático com ranking de HYPES, pulseiras digitais e lista de amigos confirmados.",
  },
  {
    id: "sertanejo-sunset",
    title: "Sertanejo Sunset",
    organizer: "Fazenda Live",
    genre: "Sertanejo",
    startsAt: "2026-07-18T17:00:00-03:00",
    venue: "Espaço Jaguari",
    city: "Jaguariúna, SP",
    distanceKm: 28.1,
    price: 65,
    coverUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    latitude: -22.7037,
    longitude: -46.9851,
    hypesReward: 140,
    capacity: 1200,
    confirmed: 802,
    rules: ["Evento 18+", "Open food vendido separadamente", "Estacionamento no local"],
    artists: ["Duo Horizonte", "Bia Campos", "Lucca Reis"],
    description:
      "Sunset com palcos externos, carteira digital de ingressos e recompensas por avaliação pós-festa.",
  },
];

export const posts: SocialPost[] = [
  {
    id: "post-1",
    author: "Marina Alves",
    avatar: "MA",
    eventId: "neon-rooftop",
    text: "Lista fechando rápido. Quem vai no Neon Rooftop comigo?",
    likes: 84,
    createdAt: "há 18 min",
  },
  {
    id: "post-2",
    author: "Rafa Lima",
    avatar: "RL",
    eventId: "baile-cosmico",
    text: "Ganhei badge Social Star chamando 5 amigos. O app vicia no melhor sentido.",
    likes: 132,
    createdAt: "há 1 h",
  },
];

export const tickets: Ticket[] = [
  {
    id: "ticket-001",
    eventId: "neon-rooftop",
    status: "active",
    qrCode: "PC-NEON-001-9K7Q",
  },
];

export const achievements: Achievement[] = [
  {
    id: "social-star",
    title: "Social Star",
    description: "Convide 5 amigos para um evento.",
    unlocked: true,
  },
  {
    id: "partymaster",
    title: "PartyMaster",
    description: "Faça check-in em 10 festas.",
    unlocked: false,
  },
  {
    id: "first-review",
    title: "Crítico da Noite",
    description: "Avalie sua primeira festa.",
    unlocked: true,
  },
];
