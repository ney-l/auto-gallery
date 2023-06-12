'use client';

import { useRouter } from 'next/navigation';
import Button from '../Button';
import { SearchParams } from '@/utils';

type Props = {
  pageNumber: number;
  isNext: boolean;
};

const ShowMore = ({ pageNumber, isNext }: Props) => {
  const router = useRouter();

  const handleNavigation = () => {
    const INITIAL_LIMIT = 10;
    const newLimit = (pageNumber + 1) * INITIAL_LIMIT;
    const newPathName = SearchParams.updateParams('limit', newLimit.toString());

    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          label="Show more"
          handleClick={handleNavigation}
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
        />
      )}
    </div>
  );
};

export default ShowMore;
