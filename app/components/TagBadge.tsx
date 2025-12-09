import Link from 'next/link';
import { getTagInfo } from '@/data/tags-config';
import type { CityTag } from '@/data/flags';

type TagBadgeProps = {
  tag: CityTag;
  size?: 'sm' | 'md';
  showIcon?: boolean;
  clickable?: boolean;
};

export default function TagBadge({ tag, size = 'sm', showIcon = true, clickable = false }: TagBadgeProps) {
  const tagInfo = getTagInfo(tag);

  const sizeClasses = size === 'sm'
    ? 'text-xs px-2 py-1'
    : 'text-sm px-3 py-1.5';

  const baseClasses = `inline-flex items-center gap-1 rounded-full font-sans font-medium border ${tagInfo.color} ${sizeClasses}`;

  const content = (
    <>
      {showIcon && <span aria-hidden="true">{tagInfo.icon}</span>}
      <span>{tagInfo.label}</span>
    </>
  );

  if (clickable) {
    return (
      <Link
        href={`/tags/${tag}`}
        className={`${baseClasses} hover:opacity-80 transition-opacity`}
        title={`Voir toutes les villes : ${tagInfo.description}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <span className={baseClasses} title={tagInfo.description}>
      {content}
    </span>
  );
}
