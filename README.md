# PartyClub

PartyClub é um aplicativo mobile de portfólio feito com React Native, Expo Router e Supabase. A proposta é demonstrar uma experiência completa de descoberta de eventos, compra simulada de ingressos, carteira digital, feed social, gamificação e painel de organizador.

> Projeto criado para portfólio. O app evita dependências pagas e mantém pagamentos como fluxo simulado até a integração real ser necessária.

## Stack

- Expo SDK 56 + React Native 0.85
- Expo Router com navegação file-based
- TypeScript em modo strict
- TanStack Query para cache de dados
- Zustand para estado local
- Supabase Auth/Postgres/Storage/Realtime preparado

## Funcionalidades atuais

- Home com eventos em destaque, favoritos e HYPES
- Detalhe do evento com regras, artistas e compra simulada
- Carteira com ticket e QR code mockado
- Feed social com posts vinculados a eventos
- Mapa visual de eventos sem API paga
- Perfil com conquistas e gamificação
- Dashboard do organizador com receita e ocupação
- Login por magic link preparado para Supabase

## Como rodar

```bash
npm install
npm start
```

Para testar no Android:

```bash
npm run android
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

```bash
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Sem essas variáveis, o app continua funcionando em modo demo.

## Banco de dados

O arquivo `supabase/schema.sql` contém as tabelas principais:

- `profiles`
- `events`
- `tickets`
- `follows`
- `posts`
- `ratings`
- `messages`
- `achievements`
- `hypes_log`

## Roadmap

- Conectar listagem de eventos ao Supabase
- Criar CRUD completo de festas para organizadores
- Adicionar chat realtime
- Implementar upload de fotos no Supabase Storage
- Adicionar `expo-location` e mapa nativo
- Gerar APK local ou build via EAS

## Créditos

Desenvolvido por Pedro como reconstrução técnica do PartyClub para GitHub e LinkedIn.
