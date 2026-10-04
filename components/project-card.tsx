"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function ProjectCard({
  href,
  index,
  title,
  description,
  image,
  tags,
}: {
  href: string;
  index: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="project-card"
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.22 }}
    >
      <Link href={href} className="project-card__media" aria-label={"Abrir case " + title}>
        <motion.div whileHover={reduce ? undefined : { scale: 1.015 }} transition={{ duration: 0.32 }}>
          <Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 55vw" priority={index === "01"} />
        </motion.div>
      </Link>
      <div className="project-card__content">
        <p className="eyebrow">{index} / CASE</p>
        <h3>{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="tag-list">
          {tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
        <Link className="text-link" href={href}>
          Explorar projeto <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
