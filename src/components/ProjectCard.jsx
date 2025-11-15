import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, tags, image, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      className="group block overflow-hidden rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md shadow-sm hover:shadow-xl transition-all"
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img src={image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((t) => (
            <span key={t} className="text-xs rounded-full bg-gradient-to-br from-blue-500/10 to-violet-600/10 border border-blue-500/20 px-2 py-1 text-blue-700 dark:text-blue-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
