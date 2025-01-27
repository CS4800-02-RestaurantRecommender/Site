import type { YelpBiz } from '@/types/yelp';
import Image from 'next/image';
import React from 'react';
import DisplayReviewStars from '../../_components/stars';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { poppinsFont } from '@/styles/fonts';

interface Props {
  biz: YelpBiz;
}
const BizSearchResultCard: React.FC<Props> = ({ biz }) => {
  return (
    <a
      href={`/business/${biz.id}`}
      target="_blank"
      rel="noreferrer"
      className="flex cursor-pointer flex-row gap-4 rounded-md p-4 transition-all duration-300 ease-in-out hover:bg-secondary/80"
    >
      {/* image */}
      <div className="w-1/4 max-w-[150px] ">
        <Image
          src={biz.image_url ?? '/icon.png'}
          alt="res logo"
          width={400}
          height={400}
          priority
          className="aspect-square rounded-sm object-cover"
        />
      </div>
      {/* content */}
      <div className="flex w-full flex-col gap-1">
        <div className="flex w-full items-center justify-between gap-2">
          <div className={cn('text-xl font-bold', poppinsFont.className)}>
            {biz.name}
          </div>
          {biz.distance && (
            <div className="text-sm font-medium">
              {Number(biz.distance / 1000).toFixed(1)} miles
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 font-medium">
          <DisplayReviewStars
            rating={biz.rating ?? 0}
            className="text-primary"
          />
          {biz.rating ? (
            <>
              <span>{biz.rating}</span>
              <span className="text-foreground/70">
                ({biz.review_count} reviews)
              </span>
            </>
          ) : (
            'No reviews yet'
          )}
        </div>
        <div className="flex flex-wrap gap-1 text-xs font-semibold">
          {biz.categories.map((tag, index) => (
            <div key={index} className="rounded-sm bg-foreground/10 p-1">
              {tag.title}
            </div>
          ))}
        </div>
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 py-2 text-xs font-semibold">
            {biz.attributes.outdoor_seating !== undefined &&
              biz.attributes.outdoor_seating !== null && (
                <div className="flex items-center gap-1">
                  <FeatureIcon isTrue={biz.attributes.outdoor_seating} />
                  Outdoor seating
                </div>
              )}
            {biz.attributes.restaurants_delivery !== undefined &&
              biz.attributes.restaurants_delivery !== null && (
                <div className="flex items-center gap-1">
                  <FeatureIcon isTrue={biz.attributes.restaurants_delivery} />
                  Delivery
                </div>
              )}
            {biz.attributes.restaurants_take_out !== undefined &&
              biz.attributes.restaurants_take_out !== null && (
                <div className="flex items-center gap-1">
                  <FeatureIcon isTrue={biz.attributes.restaurants_take_out} />
                  Takeout
                </div>
              )}
            {biz.attributes.dogs_allowed !== undefined &&
              biz.attributes.dogs_allowed !== null && (
                <div className="flex items-center gap-1">
                  <FeatureIcon isTrue={biz.attributes.dogs_allowed} />
                  Dogs {!biz.attributes.dogs_allowed && 'Not '}Allowed
                </div>
              )}
          </div>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(biz.location.display_address.join(', '))}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: 'default', size: 'sm' }),
              'w-fit flex-none',
            )}
          >
            Get direction
          </a>
        </div>
      </div>
    </a>
  );
};

export default BizSearchResultCard;

const FeatureIcon = ({ isTrue }: { isTrue: boolean }): JSX.Element => {
  return isTrue ? (
    <Check className="text-success" size={16} />
  ) : (
    <X className="text-error" size={16} />
  );
};
