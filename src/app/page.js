
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {

  return (
    <div className={styles.page}>
    <header>
        <h1>Welcome to "How the Human Body Works"!</h1>
    </header>
    <main className={styles.main}>
        <h1>Introduction</h1>
        <p>
            This site is your guide to understanding the incredible machine that is the human body.
            My aim is to make science accessible and engaging for everyone, regardless of your background.
        </p>
        <p>
            The human body is a masterpiece of biology—an intricate network of systems working in harmony to keep us alive and thriving.
            From the beating of your heart to the signals traveling through your nerves, every function has its own story to tell.
            Here, you’ll find easy-to-understand explanations, diagrams, and fascinating facts to help you explore the amazing processes that make you, <em>you</em>.
        </p>
        <p>
            Whether you’re a curious student, a parent answering your child’s questions, or someone simply fascinated by the human body,
            this site is here to provide knowledge and spark wonder. Let’s dive in and uncover the secrets of how we work!
        </p>
        <h1>What You Will Find Here</h1>
        <p>
            In this site, you will find a variety of resources designed to help you understand the human body and its functions.
            Here are some of the key sections:
        </p>
        <ul>
            <li><Link href="/cells"><strong>Cells</strong>: a study of the human cells and processes.</Link></li>
            <li><Link href="/endocrine-system"><strong>Endocrine System</strong>: a thorough look at hormones and how they affect behavior.</Link></li>
            <li><Link href="/health"><strong>Health</strong>: how different foods affect body processes.</Link></li>
        </ul>
        
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
