'use client'

import { urlFor } from "@/sanity/lib/client"
import { PortableText } from "@portabletext/react"
import Link from "next/link"
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share"

// Custom components for Portable Text
const ptComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(1200).height(800).fit('max').auto('format').url()}
          className="my-8 rounded-lg shadow-lg"
        />
      )
    },
  },
  block: {
    h2: ({ children }: { children: any }) => <h2 className="text-3xl font-bold my-4 text-gray-800">{children}</h2>,
    h3: ({ children }: { children: any }) => <h3 className="text-2xl font-bold my-3 text-gray-700">{children}</h3>,
    blockquote: ({ children }: { children: any }) => <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-600">{children}</blockquote>,
    normal: ({ children }: { children: any }) => <p className="mb-4">{children}</p>,
  },
  marks: {
    link: ({ children, value }: { children: any; value: any }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="text-blue-600 hover:underline">
          {children}
        </a>
      )
    },
  },
}

const Post = ({ post, relatedPosts }: { post: any, relatedPosts: any[] }) => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <main className="lg:col-span-2">
            <article>
              {/* Post Header */}
              <header className="mb-12">
                <div className="flex flex-wrap items-center text-sm mb-4">
                  {post.categories?.map((category: string) => (
                    <span key={category} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-3 py-1 rounded-full uppercase">
                      {category}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                  {post.title}
                </h1>
                <p className="text-lg text-gray-500 mt-2">
                  {post.excerpt}
                </p>
              </header>

              {/* Cover Image */}
              <div className="mb-12">
                <img
                  className="w-full h-auto object-cover rounded-2xl shadow-xl border-4 border-white"
                  src={urlFor(post.coverImage).width(1600).height(900).url()}
                  alt={post.title}
                />
              </div>

              {/* Post Body */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <PortableText value={post.body} components={ptComponents} />
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28">
              {/* Author Box */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-4">About the Author</h3>
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-200 p-1"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                />
                <h4 className="text-xl font-bold text-gray-900">{post.author.name}</h4>
                <p className="text-sm text-gray-500 mt-1 mb-4">
                  {new Date(post._createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.author.bio}
                </p>
              </div>

              {/* Share Box */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Share This Post</h3>
                <div className="flex justify-center space-x-4">
                  <FacebookShareButton url={shareUrl} className="transition-transform transform hover:scale-110">
                    <FacebookIcon size={40} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={shareUrl} className="transition-transform transform hover:scale-110">
                    <TwitterIcon size={40} round />
                  </TwitterShareButton>
                  <LinkedinShareButton url={shareUrl} className="transition-transform transform hover:scale-110">
                    <LinkedinIcon size={40} round />
                  </LinkedinShareButton>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg mt-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to take the next step?</h3>
                <p className="mb-6">Our team of experts is here to help you on your journey. Get in touch for a free consultation.</p>
                <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-colors duration-300 shadow-md">
                    Book a consultation
                </Link>
              </div>
            </div>
          </aside>

        </div>

        {/* Related Posts Section */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Related Reads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost._id} href={`/post/${relatedPost.slug}`} className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={urlFor(relatedPost.coverImage).width(800).height(600).url()} 
                      alt={relatedPost.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {new Date(relatedPost._createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Post
