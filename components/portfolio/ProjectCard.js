import Image from "next/image";
import {
  ShoppingCartIcon,
  PlusIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="flex">
        <div className="relative w-80 min-h-[200px] bg-gray-100">
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <PhotoIcon className="h-12 w-12 text-gray-400" />
            </div>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 line-clamp-3">
                {project.description}
              </p>

              <div className="mt-4">
                <p className="text-sm font-medium text-gray-500 uppercase">
                  {project.category}
                </p>
                <p className="text-sm text-gray-700">Oleh {project.author}</p>
              </div>
            </div>

            <div className="flex gap-2 ml-4">
              <button
                className="p-2 text-gray-500 hover:text-orange-600 rounded-full hover:bg-orange-50 transition-colors"
                title="Add to cart"
              >
                <ShoppingCartIcon className="h-5 w-5" />
              </button>
              <button
                className="p-2 text-gray-500 hover:text-orange-600 rounded-full hover:bg-orange-50 transition-colors"
                title="Add to collection"
              >
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
