'use client';
import React, { useState } from 'react';
import type { NextPage } from 'next';
import type { YelpBiz } from '@/types/yelp';
import BizSearchResultCard from './_components/biz-card';
import { Separator } from '@/components/ui/separator';
import MapResults from './_components/maps-results';
import { Skeleton } from '@/components/ui/skeleton';
import { saveBiz } from '@/hooks/firebase/biz';
import FindCoffeeSpot from '@/components/find-coffee/FindCoffeeSpot';
import { Icons } from '@/components/icons';
import { searchCafes } from '@/hooks/yelp/search';

/**
 * Represents the properties of the Page component.
 */
interface PageProps {
  /**
   * the search parameters passed to the page
   */
  searchParams: Record<string, string>;
}

/**
 * Search Params Page Component
 *
 * This component demonstrates how to use search parameters to filter or display content dynamically.
 * It expects `searchParams` as a prop, specifically looking for `tags` and coordinates parameters to display.
 * If `tags` are provided, they are displayed as badges; if not, a default message is shown. The `address`
 * is shown directly, with a fallback message if not provided.
 * @param {PageProps} searchParams the search parameters passed to the page
 * @returns {JSX.Element} The JSX for the business search page or a redirection effect.
 */
const Page: NextPage<PageProps> = ({
  searchParams,
}: PageProps): JSX.Element => {
  // Check if 'tags' param exists and is not just whitespace
  // const tagsExistAndNotEmpty = searchParams.tags?.trim();

  // If 'tags' param exists, split into array, else default to empty array
  // const tags = tagsExistAndNotEmpty
  //   ? searchParams.tags
  //       .trim()
  //       .split(',')
  //       .filter((tag) => tag !== '')
  //   : [];

  const [bizList, setBizList] = React.useState<YelpBiz[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchData = async (): Promise<{ businesses: YelpBiz[] }> => {
    setIsReloading(true);
    const q = searchParams.q; // Combine tags with a comma separator
    const lng = searchParams.lng || '';
    const lat = searchParams.lat || '';
    if (!q || q === '' || !lng || !lat) {
      throw Error('Invalid request');
    }

    // const response = await apiClient.get<{ businesses: YelpBiz[] }>(
    //   `/business?q=${encodeURIComponent(q)}&lng=${lng}&lat=${lat}`,
    // );
    const yelpBizList = await searchCafes(Number(lat), Number(lng), q);
    setTimeout(() => {
      setIsReloading(false);
    }, 500);
    return { businesses: yelpBizList };
    // Handle the API response data as needed
    // return response.data;
  };

  React.useEffect(
    () => {
      setIsLoading(true);
      // setBizList(sampleCafes);
      fetchData()
        .then((data) => {
          setBizList(data.businesses);
          for (const biz of data.businesses) {
            saveBiz(biz).catch((e) => {});
          }
        })
        .catch((e) => {
          // console.error('error fetching data', e);
          // toast.error('an error happened');
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const [isReloading, setIsReloading] = useState(false);

  React.useEffect(
    () => {
      fetchData()
        .then((data) => {
          setBizList(data.businesses);
          for (const biz of data.businesses) {
            saveBiz(biz).catch((e) => {});
          }
        })
        .catch((e) => {
          // console.error('error fetching data', e);
          // toast.error('an error happened');
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams.lat, searchParams.lng, searchParams.q],
  );

  if (!searchParams.lat || !searchParams.lng) {
    return (
      <div className="w-full">
        <Skeleton className="h-12 w-full" />
      </div>
    );
  }
  return (
    <div className="p-4">
      {isReloading ? (
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">Searching</div>
          <Icons.spinner className="animate-spin" />
        </div>
      ) : (
        <div className="flex w-full flex-col-reverse gap-3 lg:flex-row">
          <div className="relative mt-4 flex max-w-5xl flex-1 flex-col gap-4">
            <div>
              <FindCoffeeSpot defaultQuery={searchParams.q ?? ''} />
            </div>
            <div className="text-xl font-semibold">Search Results</div>
            {bizList.length === 0 && (
              <div className="font-medium text-foreground/50">No biz yet..</div>
            )}
            <div className="flex flex-col">
              {bizList.map((biz, index) => (
                <div key={index} className="flex flex-col">
                  <BizSearchResultCard key={index} biz={biz} />
                  <Separator />
                </div>
              ))}
            </div>
          </div>

          <div className="h-[30dvh] w-full flex-none lg:sticky lg:top-10 lg:h-[80dvh] lg:w-[500px]">
            <MapResults
              position={{
                lat: Number(searchParams.lat),
                lng: Number(searchParams.lng),
              }}
              bizList={bizList}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
