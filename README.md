# Thin Blue BBQ

Ignite your senses with Thin Blue BBQ – where mouthwatering competition BBQ meets live, real-time streaming action, bringing the smoky thrill of the grill straight to your screen from the heart of the pit.

<img width="1910" height="910" alt="image" src="https://github.com/user-attachments/assets/f0b30b66-4d24-45e7-a81f-602c3ae408d4" />

## Welcome to the Pit

Step into the world of Thin Blue BBQ, a competition-style restaurant site that's more than just a menu – it's a front-row seat to the art of BBQ mastery. Savor the sizzle of award-winning ribs while watching live cooks unfold in real time. Whether you're a die-hard competition fan or just craving that next smoky bite, this site blends restaurant vibes with edge-of-your-seat streaming excitement.

**Taste It Live:** [Visit the Demo](https://www.thinbluebbq.com) – Fire up your browser and join the action now!

<img width="1706" height="727" alt="image" src="https://github.com/user-attachments/assets/5142b669-a8c5-46af-83ce-522a26f87f55" />

## What's Cooking? Key Features

Think of this site as your ultimate BBQ menu – but interactive and alive. We've grilled up features that go beyond the basics, spotlighting real-time streaming as the star of the show. Hotter than our signature sauce, these keep foodies and grill watchers coming back for seconds.

| Dish (Feature) | Description | Why It's Finger-Lickin' Good |
|---------------|-------------|------------------------------|
| **Real-Time Streaming** | Live video feeds from the pit, competitions, and cook-offs – no delays, just pure grill-side action. | Stream that's smokier and faster than a pulled pork pull; engage with events as they happen. |
| **Menu Showcase** | High-res photos and details of our competition-grade BBQ lineup, from ribs to sauces. | Drool-worthy visuals that make ordering feel like browsing a trophy case. |
| **Event Calendar** | Upcoming competitions, pop-up cooks, and live stream schedules at a glance. | Plan your watch party or pit stop – never miss a rib-rub reveal. |
| **Easy Reservations** | Book tables or stream access with a few clicks, complete with real-time availability. | Seamless as slicing brisket; perfect for mobile users on the go. |
| **Responsive Design** | Works flawlessly on desktop, tablet, or phone – grill on-the-go without missing a beat. | Adaptive layout that handles heat (and traffic) like a pro smoker. |
| **Interactive Chat** | Join live discussions during streams – share tips, vote on cuts, or just say "Pass the sauce!" | Builds community around the fire, turning viewers into pit crew. |

These aren't just features; they're the secret spices that make Thin Blue BBQ stand out in a sea of static restaurant sites.

## Behind the Smoker: Tech Stack

We've built this bad boy with tools that handle the heat of real-time demands without breaking a sweat. It's a modern stack focused on speed, reliability, and that seamless streaming magic – all while keeping things developer-friendly for tweaks and expansions.

- **React**: Powers the dynamic UI – think interactive menus and stream overlays that respond instantly to user clicks.
- **Next.js**: Handles server-side rendering for lightning-fast loads, ensuring your first bite (page) is always fresh and optimized for SEO.
- **TypeScript**: Adds type-safe reliability to our code, catching errors before they burn – perfect for scaling BBQ events.
- **Node.js**: The backend backbone, managing APIs and real-time data flows like a steady smoke signal.
- **Docker**: Containerizes everything for easy deployment – spin up the full stack with one command, no mess.

Together, Next.js + Node.js enable those instant updates via WebSockets, so streams refresh without a single page reload. It's performant, scalable, and ready to serve crowds.

<img width="86" height="28" alt="image" src="https://github.com/user-attachments/assets/4b612413-20bb-4cf8-af92-8915e5778919" />
<img width="78" height="28" alt="image" src="https://github.com/user-attachments/assets/ff821480-43db-40bb-958b-96ad3380294b" />
<img width="127" height="28" alt="image" src="https://github.com/user-attachments/assets/ffcf1154-a366-4d81-ac60-a3a43c399704" />
<img width="101" height="28" alt="image" src="https://github.com/user-attachments/assets/af7540d9-6eb8-485b-b206-f066f5ae0bbd" />
<img width="98" height="28" alt="image" src="https://github.com/user-attachments/assets/9d9a5796-dab4-4280-9417-edcb58a8cf30" />

## Fire It Up: Local Setup

Ready to marinate your own environment and run this pit locally? We've kept it straightforward, leveraging Docker for a full-stack sizzle with minimal fuss. Perfect for devs wanting to tinker with the streaming setup or add their own BBQ flair.

### Prep Your Ingredients (Prerequisites)
- Node.js (v18+) and npm/yarn installed
- Docker and Docker Compose (for the easy containerized run)
- Git for cloning

### Step 1: Clone the Repo
```bash
git clone https://github.com/girll235/ThinBlueBBQ.git
cd ThinBlueBBQ
```

### Step 2: Install Dependencies
Fire up the frontend and backend packages – like seasoning your rub.
```bash
npm install  # Or yarn install
```

### Step 3: Set Environment Vars
Create a `.env.local` file in the root (or use Docker's env file). Add keys for streaming services (e.g., Twitch API or your custom WebSocket endpoint):
```
NEXT_PUBLIC_STREAM_API_KEY=your_key_here
DATABASE_URL=your_db_connection
# Add more for auth, etc., as needed
```

### Step 4: Launch with Docker
Compose the full stack – backend, frontend, and any DB – in one go. It's like lighting the pit: set it and forget it.
```bash
docker-compose up -d
```
- Visit `http://localhost:3000` for the site.
- Streams will connect via WebSockets; check logs with `docker-compose logs` if needed.

### Troubleshooting Tips
- **WebSocket Issues?** Ensure your firewall allows port 3001 (default for streams). Restart with `docker-compose down && docker-compose up --build`.
- **Port Conflicts?** Edit `docker-compose.yml` to tweak exposed ports – no biggie.
- For dev mode without Docker: `npm run dev` after env setup.

Once running, tweak the stream component in `/components/StreamPlayer.tsx` to test real-time magic. Pro tip: Pair with a cold one while it builds!

## Join the Grill Master Community

Love the vibe? Got feedback on the BBQ lineup, stream quality, or even a wild idea for new features like AR menu views? We're all ears (and pits)!

- **Drop Us a Line:** Use the [contact form on the live site](https://www.thinbluebbq.com/contact) for general chit-chat or recipe shares.
- **Tech Tweaks & Bugs:** Head to [GitHub Issues](https://github.com/girll235/ThinBlueBBQ/issues) – suggest streaming upgrades or report any "over-smoked" glitches.
- **Follow the Smoke:** Connect on socials [@ThinBlueBBQ](https://twitter.com/thinbluebbq) for live event alerts and behind-the-scenes peeks.

## Contact
Got a killer recipe or stream idea? Let's BBQ about it – fire away! 🌭🔥

Sabrine Ben Tili - [@girll235](https://www.linkedin.com/in/sabrine-ben-tili/)
Project Link: [https://github.com/girll235/ThinBlueBBQ](https://github.com/girll235/ThinBlueBBQ)

