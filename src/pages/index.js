import Head from "next/head";
import { motion } from "framer-motion";
import {
  AboutCard,
  BirthdayCard,
  ClonCard,
  EmailCard,
  EnglishCard,
  GithubCard,
  LanguagueCard,
  LinkedinCard,
  InstagramCard,
  PlatziCard,
  ProjectsCard,
  Skills,
  SpotifyCard,
  ThemeCard,
  TimeCard,
  TwitterCard,
} from "@/components";
import { useTranslation } from "react-i18next";
import willy from "@/assets/images/willy_1x1.webp";

export default function Home() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="theme-color" content="#3F275C" />
        <meta name="apple-mobile-web-app-status-bar" content="#3F275C" />
        <meta
          name="description"
          content="Willy is a frontend developer with an interest in UX/UI design. He is an expert in HTML, CSS, JavaScript and React."
        />
        <meta name="googlebot" content="notranslate" />
        <meta name="author" content="Willy Prado" />
        <link rel="author" href="https://willyprados.dev" />
        <meta name="generator" content="Next.js" />
        <meta
          name="keywords"
          content="Next.js,React,JavaScript,Willy,Prado,Sanchez,CSS,HTML,Frontend,Developer,Web,Fullstack,"
        />
        <meta name="creator" content="Willy Prado" />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />

        <meta property="og:title" content="Willy Prado | Frontend Developer" />
        <meta
          property="og:description"
          content="Willy is a frontend developer with an interest in UX/UI design. He is an expert in HTML, CSS, JavaScript and React."
        />
        <meta property="og:url" content="https://willyprados.dev/" />
        <meta
          property="og:site_name"
          content="Willy Prado, Frontend Developer"
        />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:image:url" content={willy} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Willy Prado" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@willyprados" />
        <meta name="twitter:creator" content="@willyprado" />
        <meta name="twitter:title" content="Willy Prado | Frontend Developer" />
        <meta name="twitter:image" content={willy} />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: -2000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100, duration: 1 }}
        transition={{ duration: 2.5, delay: 0.5, type: "spring" }}
        className="flex flex-col m-5"
      >
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
          <AboutCard />
          <LanguagueCard />
          <ThemeCard />
          <BirthdayCard />
          <LinkedinCard />
          <ProjectsCard />
          <GithubCard />
          <Skills />
          <EnglishCard />
          <EmailCard />
          <InstagramCard />
          {/* <SpotifyCard /> */}
          <TimeCard />
          <TwitterCard />
          <ClonCard />
        </div>
      </motion.div>
    </>
  );
}
