import Link from "next/link";
import {
  DollarSign,
  MapPin,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

interface ScholarshipCardProps {
  scholarship: any;
}

export default function ScholarshipCard({
  scholarship,
}: ScholarshipCardProps) {
  const coverImageUrl = scholarship.image
    ? scholarship.image
    : "/placeholder.jpg";

  return (
    <Link
      href={`/blog/${scholarship.slug}`}
      className="group block h-full"
    >
      <article
        className="
          h-full
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-[#071320]
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#D4AF37]/30
          hover:shadow-[0_25px_70px_rgba(212,175,55,0.12)]
        "
      >
        {/* IMAGE */}
        <div className="relative h-60 overflow-hidden">
          <img
            src={coverImageUrl}
            alt={scholarship.title || "Scholarship"}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Scholarship Badge */}
          <div className="absolute top-4 left-4">
            <span
              className="
                px-4
                py-2
                rounded-full
                bg-[#D4AF37]
                text-black
                text-xs
                font-semibold
                shadow-lg
              "
            >
              {scholarship.tag || "Scholarship"}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div
          className="
            relative
            flex
            flex-col
            p-6
            min-h-[260px]
            bg-gradient-to-b
            from-[#0D1B2A]
            to-[#071320]
          "
        >
          {/* Subtle Gold Glow */}
          <div
            className="
              absolute
              top-0
              right-0
              w-32
              h-32
              bg-[#D4AF37]/5
              blur-[70px]
              rounded-full
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
            "
          />

          {/* Title */}
          <h3
            className="
              text-xl
              md:text-2xl
              font-bold
              text-[#F8FAFC]
              leading-tight
              line-clamp-2
              mb-6
              transition-colors
              duration-300
              group-hover:text-[#D4AF37]
            "
          >
            {scholarship.title || "Untitled Scholarship"}
          </h3>

          {/* Metadata */}
          <div className="space-y-4 text-[#94A3B8]">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
              <span>{scholarship.author.name}</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>{scholarship.date}</span>
            </div>

            <div className="flex items-center gap-3">
              <DollarSign className="w-4 h-4 text-[#D4AF37]" />
              <span>{scholarship.readTime}</span>
            </div>
          </div>

          {/* CTA */}
          <div
            className="
              mt-auto
              pt-6
              border-t
              border-white/10
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-[#D4AF37]
                font-medium
                text-sm
                tracking-wide
              "
            >
              View Scholarship
            </span>

            <ArrowRight
              className="
                w-5
                h-5
                text-[#D4AF37]
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
