"use client"
import { ShowMoreProps } from '@/types'
import React from 'react'
import CustomButton from './CustomButton'
import { useRouter } from "next/navigation";
import { updateSearchParams } from '@/utils';


const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter();
    const handleNavigation = () => {
        // Calculate the new limit based on the page number and navigation type
        const newLimit = (pageNumber + 1) * 10;

        // Update the "limit" search parameter in the URL with the new value
        const newPathname = updateSearchParams("limit", `${newLimit}`);

        router.push(newPathname, { scroll: false });
    }
    return (
        <div className='w-full flex-center gap-5 mt-10'>

            {!isNext && (
                <CustomButton
                    title="Show More"
                    btnType='button'
                    containerStyles="bg-primary-blue text-white rounded-full"
                    handleClick={handleNavigation}
                />

            )

            }

        </div>
    )
}

export default ShowMore