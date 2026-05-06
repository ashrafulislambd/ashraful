import { Star } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { GitForkIcon } from "lucide-react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface OpenSourceCardProps {
  name: string;
  stars: string | number;
  details: string;
  repo: string;
  fork: string | number;
}

export function OpenSourceCard({ name, stars, details, repo, fork }: OpenSourceCardProps) {
  return (
    <div className="p-4 bg-card border rounded-lg shadow-md flex flex-col justify-center gap-2 h-[140px] hover:shadow-lg transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <GitHubLogoIcon width="18" height="18" />
          <h3 className="text-md md:text-lg">{name}</h3>
        </div>
        <Link href={repo} target="_blank">
        <ExternalLink className="w-5 h-5 text-gray-400"  />
        </Link>
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-gray-400" />
          <span className="text-sm">{stars}</span>
        </div>
        <div className="flex items-center space-x-1">
          <GitForkIcon className="w-4 h-4 text-gray-400" />
          <span className="text-sm">{fork}</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{details}</p>
    </div>
  );
}