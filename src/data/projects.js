// data/projects.js

export const projectData = {Leluri: {
  name: 'Leluri',
  description: 'Digital Cultural Community Platform',
  type: 'Web Dev Competition IITC 2025',
  role: 'Team Lead, UI/UX Designer, Frontend Developer',
  year: '2025',
  techStack: ["Next.js", "Typescript", "React", "Tailwind CSS", "ShadCN UI", "Supabase", "Vercel"],
  challenge: "Many cultural projects in Indonesia focus only on introducing traditions, without building systems to sustain them. This leads to fading interest among youth, fewer opportunities for artisans, and traditions being treated as static displays instead of living practices. Culture risks being archived rather than experienced, losing its connection to daily life and future generations.",
  solution: "Leluri was built as a digital community platform where artisans, studios, and youth can connect, learn, and collaborate. The platform supports cultural exchange through product showcases, shared experiences, and knowledge sharing, making culture participatory instead of passive. By integrating modern web technologies with community-driven design, Leluri reframes culture as something dynamic and relevant for younger audiences.",
  images: [
    "/leluri.png",
    "/leluri 2.png",
    "/leluri 3.png",
    "/leluri 4.png",
    "/leluri 5.png",
    "/leluri 6.png",
    "/leluri 7.png",
  ],
  highlights: [
    "Led team, coordinating roles and tasks under competition time constraints.",
    "Designed user-friendly interfaces in Figma, aligning UX flows with cultural storytelling.",
    "Developed modular frontend components with ShadCN UI for scalable development.",
    "Deployed the platform on Vercel and managed bug-fixing to ensure stability during demos."
  ],
  result: "Top 5 of IITC 2025 Web Development Competition. The project strengthened my leadership skills by managing a team under pressure while balancing design and development responsibilities. I realized the importance of clearer coordination to prevent overlapping tasks, and gained hands-on experience in translating cultural vision into a functional digital product.",
  liveUrl: "https://leluri.vercel.app",
  githubUrl: "https://github.com/medlynhan/Leluri",
  videoUrl: "https://drive.google.com/file/d/1RzA4qnUSOQO6-vuTADqf4ch201KTUi3L/view"
},

Tapaknusa: {
  name: 'Tapaknusa',
  description: 'Cultural E-commerce Attraction Platform',
  type: 'Web Design Competition PARAS ICT X 2025',
  role: 'UI/UX Designer & Fullstack Developer',
  year: '2025',
  techStack: ["Laravel","HTML","CSS","JQuery","MySQL","Railway"],
  challenge: "Cultural tourism in Indonesia is still underappreciated, even by locals. Tickets for festivals and attractions are often difficult to find, and mainstream e-commerce platforms rarely feature them. This gap limits access, visibility, and appreciation of Indonesia’s cultural wealth, making it harder for people to engage with and support cultural events.",
  solution: "Tapaknusa was built as a dedicated e-commerce platform tailored for cultural attractions and festivals. The platform provides a seamless experience for discovering events and purchasing tickets online, supported by responsive design and intuitive navigation. By centralizing access to cultural offerings, Tapaknusa bridges the gap between culture and digital commerce, making heritage exploration as convenient as shopping for everyday products.",
  images: [
    "/tapaknusa.png",
    "/tapaknusa 2.png",
    "/tapaknusa 3.png",
    "/tapaknusa 4.png",
    "/tapaknusa 5.png",
    "/tapaknusa 6.png",
    "/tapaknusa 7.png",
  ],
  highlights: [
    "Make UI/UX design, ensuring intuitive flows and visually appealing interfaces aligned with cultural branding.",
    "Engineered full-stack e-commerce features (cart, orders, authentication) with clean MVC architecture.",
    "Developed responsive frontend with custom CSS and jQuery to deliver a smooth user experience.",
    "Designed and optimized database schema to ensure reliable data relationships and performance."
  ],
  result: "The project secured a Top 6 position in PARAS ICT X 2025 and earned jury recognition for outstanding UX design. The experience validated the potential of technology to make culture more accessible and engaging. Future iterations will focus on image optimization, faster loading times, and enhancing mobile usability to scale the impact further.",
  liveUrl: "https://tapaknusa.up.railway.app/",
  githubUrl: "https://github.com/medlynhan/Tapaknusa",
  videoUrl: "https://drive.google.com/file/d/1r9EAn5lX4WhL6F5K789aDp_1Qf2Zr4E2/view?usp=drivesdk"
},

Irrigo: {
  name: 'Irrigo',
  description: 'Irrigation Recommendation System',
  type: 'Self Learning Project',
  role: 'Fullstack Developer',
  year: '2025',
  techStack: ["Next.js","Node.js","Flask","Python","Random Forest","Mapbox API","OpenWeatherAPI","EOSDA API","Docker"],
  challenge: "Small farmers in Indonesia often lack access to advanced irrigation systems, leaving them unable to optimize water usage. This creates inefficiencies, increases costs, and puts them at a disadvantage compared to larger farms with better resources. Water scarcity and unpredictable weather patterns make this problem even more pressing, threatening both productivity and sustainability in agriculture.",
  solution: "Irrigo is a web application designed to give farmers practical and affordable irrigation recommendations. It combines soil and weather data with a Random Forest model to predict water requirements up to five days ahead. By translating complex data into simple, actionable insights, Irrigo empowers farmers to save water, reduce costs, and improve crop health. The system leverages APIs for geospatial visualization and weather forecasting, ensuring guidance stays accurate and context-aware.",
  highlights: [
    "Developed full-stack web app integrating AI predictions with interactive geospatial maps.",
    "Engineered backend APIs with Flask and Node.js, connected to Next.js frontend for seamless data flow.",
    "Preprocessed soil and weather datasets, applying Random Forest for irrigation forecasting.",
    "Containerized services with Docker to enable scalable and modular deployment."
  ],
  result: "As a self-learning project, Irrigo deepened my understanding of client-server interactions, AI-driven decision systems, and containerized deployments. It demonstrated how technology can bring accessible solutions to small farmers facing structural disadvantages. The next step is to integrate real-world datasets and refine the model for higher accuracy and broader adoption in agricultural communities.",
  images: [
    "/irrigo.png",
    "/irrigo 2.png",
    "/irrigo 3.png"
  ],
  githubUrl: "https://github.com/medlynhan/Irrigo"
}
};
