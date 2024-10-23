'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import envConfig from "@/config"

import {
    HomeIcon,
    GlobeIcon,
    DiscIcon,
    AvatarIcon,
    ExitIcon,
    GearIcon,
    HeartIcon,
    CounterClockwiseClockIcon,
    ClockIcon,
    ListBulletIcon
} from '@radix-ui/react-icons'
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useAppContext } from '@/app/AppProvider';
import { useAppContext as useSongContext } from '@/components/provider/songProvider';


const Sidebar = () => {
    const { accessToken } = useAppContext()
    const { currentSong } = useSongContext();
    const [pb, setPb] = useState(false)

    useEffect(() => {
        if (currentSong) {
            setPb(true);
        }
    }, [currentSong]);

    const [activeMenu, setActiveMenu] = useState('');
    const { toast } = useToast()
    const router = useRouter();

    const handleMenuClick = (menuItem: string) => {
        setActiveMenu(menuItem);
    };

    const handleLogout = async () => {
        try {
            const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/auth/logout`,
                {
                    headers: {
                        'token': `Bearer ${accessToken}`,
                    },
                    method: 'POST'
                }).then(async (res) => {
                    // console.log(res);

                    const payload = await res.json()
                    const data = {
                        status: res.status,
                        payload
                    }
                    if (!res.ok) {
                        throw data
                    }
                    return data
                })
            console.log(result);
            document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            document.cookie = 'role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            router.push('/');
            toast({
                variant: "success",
                title: "Congratulation!!",
                description: "Logout Successfully",
            })
        } catch (error) {
            console.log(error);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                // description:,
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }

    const getMenuClass = (menuItem: string) => {
        return activeMenu === menuItem ? 'bg-primaryColorPink rounded-xl px-2 font-semibold' : 'text-[0.9rem]';
    };
    return (
        <div
            className={
                `${pb ? 'pb-[4.5rem] overflow-auto h-screen [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-inherit hover:[&::-webkit-scrollbar-thumb]:bg-white/30 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 hover:dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 ' : ''} 
                fixed top-0 left-0 w-1/6 border-r-2 border-primaryColorPink pt-8 pl-10 pr-7 drop-shadow-lg`
            }
            style={{ boxShadow: '5px 0 10px rgba(238, 16, 176, 0.2)' }}
        >
            <Link href="/" passHref>
                <svg className='mb-5 cursor-pointer' width="129" height="25" viewBox="0 0 129 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.17188 1.25H6.14062L11.9844 17.9531L17.8281 1.25H21.7969L13.5781 24H10.3906L2.17188 1.25ZM0.03125 1.25H3.98438L4.70312 17.5312V24H0.03125V1.25ZM19.9844 1.25H23.9531V24H19.2656V17.5312L19.9844 1.25ZM35.5625 24.3125C33.8125 24.3125 32.3073 23.9479 31.0469 23.2188C29.7865 22.4792 28.8177 21.4896 28.1406 20.25C27.474 19.0104 27.1406 17.6354 27.1406 16.125V15.5C27.1406 13.7917 27.4583 12.2865 28.0938 10.9844C28.7292 9.67188 29.6406 8.64583 30.8281 7.90625C32.0156 7.15625 33.4271 6.78125 35.0625 6.78125C36.6667 6.78125 38.0208 7.13021 39.125 7.82812C40.2292 8.51562 41.0677 9.47917 41.6406 10.7188C42.2135 11.9583 42.5 13.4062 42.5 15.0625V16.9375H29.0625V13.9375H38.0781V13.5938C38.0781 12.9688 37.9635 12.4115 37.7344 11.9219C37.5156 11.4219 37.1823 11.026 36.7344 10.7344C36.2865 10.4427 35.7135 10.2969 35.0156 10.2969C34.224 10.2969 33.5781 10.5208 33.0781 10.9688C32.5781 11.4167 32.2135 12.0365 31.9844 12.8281C31.7656 13.6094 31.6562 14.5 31.6562 15.5V16.125C31.6562 17.0312 31.8229 17.8385 32.1562 18.5469C32.4896 19.2448 32.9688 19.7969 33.5938 20.2031C34.2188 20.599 34.9688 20.7969 35.8438 20.7969C36.6562 20.7969 37.4115 20.6406 38.1094 20.3281C38.8177 20.0052 39.4271 19.5208 39.9375 18.875L42.125 21.25C41.5938 22.0208 40.776 22.724 39.6719 23.3594C38.5677 23.9948 37.1979 24.3125 35.5625 24.3125ZM49.8125 0V24H45.2969V0H49.8125ZM52.8125 15.7188V15.3906C52.8125 13.7448 53.125 12.276 53.75 10.9844C54.375 9.68229 55.2812 8.65625 56.4688 7.90625C57.6562 7.15625 59.099 6.78125 60.7969 6.78125C62.5052 6.78125 63.9583 7.15625 65.1562 7.90625C66.3542 8.65625 67.2656 9.68229 67.8906 10.9844C68.5156 12.276 68.8281 13.7448 68.8281 15.3906V15.7188C68.8281 17.3646 68.5156 18.8385 67.8906 20.1406C67.2656 21.4323 66.3542 22.4531 65.1562 23.2031C63.9688 23.9427 62.526 24.3125 60.8281 24.3125C59.1198 24.3125 57.6667 23.9427 56.4688 23.2031C55.2812 22.4531 54.375 21.4323 53.75 20.1406C53.125 18.8385 52.8125 17.3646 52.8125 15.7188ZM57.3125 15.3906V15.7188C57.3125 16.6562 57.4271 17.5104 57.6562 18.2812C57.8854 19.0521 58.2552 19.6667 58.7656 20.125C59.276 20.5729 59.9635 20.7969 60.8281 20.7969C61.6719 20.7969 62.349 20.5729 62.8594 20.125C63.3698 19.6667 63.7396 19.0521 63.9688 18.2812C64.1979 17.5104 64.3125 16.6562 64.3125 15.7188V15.3906C64.3125 14.474 64.1979 13.6302 63.9688 12.8594C63.7396 12.0885 63.3698 11.4688 62.8594 11C62.349 10.5312 61.6615 10.2969 60.7969 10.2969C59.9531 10.2969 59.276 10.5312 58.7656 11C58.2552 11.4688 57.8854 12.0885 57.6562 12.8594C57.4271 13.6302 57.3125 14.474 57.3125 15.3906ZM81.5781 20.3125V0H86.1094V24H82.0312L81.5781 20.3125ZM70.8906 15.75V15.4219C70.8906 13.7031 71.1458 12.1979 71.6562 10.9062C72.1667 9.60417 72.9167 8.59375 73.9062 7.875C74.8958 7.14583 76.0938 6.78125 77.5 6.78125C78.8229 6.78125 79.9271 7.15104 80.8125 7.89062C81.6979 8.61979 82.3958 9.625 82.9062 10.9062C83.4271 12.1771 83.7865 13.6354 83.9844 15.2812V16C83.7865 17.5625 83.4271 18.974 82.9062 20.2344C82.3958 21.4844 81.6927 22.4792 80.7969 23.2188C79.9115 23.9479 78.8021 24.3125 77.4688 24.3125C76.0729 24.3125 74.8802 23.9427 73.8906 23.2031C72.9115 22.4531 72.1667 21.4323 71.6562 20.1406C71.1458 18.849 70.8906 17.3854 70.8906 15.75ZM75.3906 15.4219V15.75C75.3906 16.6771 75.4948 17.526 75.7031 18.2969C75.9115 19.0573 76.25 19.6615 76.7188 20.1094C77.1875 20.5469 77.8177 20.7656 78.6094 20.7656C79.3802 20.7656 80.0156 20.5938 80.5156 20.25C81.0156 19.8958 81.3958 19.4115 81.6562 18.7969C81.9271 18.1823 82.0833 17.474 82.125 16.6719V14.625C82.0938 13.9688 82 13.3802 81.8438 12.8594C81.6979 12.3281 81.4792 11.875 81.1875 11.5C80.9062 11.125 80.5521 10.8333 80.125 10.625C79.7083 10.4167 79.2135 10.3125 78.6406 10.3125C77.8594 10.3125 77.2292 10.5417 76.75 11C76.2812 11.4479 75.9375 12.0573 75.7188 12.8281C75.5 13.599 75.3906 14.4635 75.3906 15.4219ZM94.375 7.09375V24H89.8594V7.09375H94.375ZM89.5781 2.6875C89.5781 2.03125 89.8073 1.48958 90.2656 1.0625C90.724 0.635417 91.3385 0.421875 92.1094 0.421875C92.8698 0.421875 93.4792 0.635417 93.9375 1.0625C94.4062 1.48958 94.6406 2.03125 94.6406 2.6875C94.6406 3.34375 94.4062 3.88542 93.9375 4.3125C93.4792 4.73958 92.8698 4.95312 92.1094 4.95312C91.3385 4.95312 90.724 4.73958 90.2656 4.3125C89.8073 3.88542 89.5781 3.34375 89.5781 2.6875ZM105.875 24.3125C104.125 24.3125 102.62 23.9479 101.359 23.2188C100.099 22.4792 99.1302 21.4896 98.4531 20.25C97.7865 19.0104 97.4531 17.6354 97.4531 16.125V15.5C97.4531 13.7917 97.7708 12.2865 98.4062 10.9844C99.0417 9.67188 99.9531 8.64583 101.141 7.90625C102.328 7.15625 103.74 6.78125 105.375 6.78125C106.979 6.78125 108.333 7.13021 109.438 7.82812C110.542 8.51562 111.38 9.47917 111.953 10.7188C112.526 11.9583 112.812 13.4062 112.812 15.0625V16.9375H99.375V13.9375H108.391V13.5938C108.391 12.9688 108.276 12.4115 108.047 11.9219C107.828 11.4219 107.495 11.026 107.047 10.7344C106.599 10.4427 106.026 10.2969 105.328 10.2969C104.536 10.2969 103.891 10.5208 103.391 10.9688C102.891 11.4167 102.526 12.0365 102.297 12.8281C102.078 13.6094 101.969 14.5 101.969 15.5V16.125C101.969 17.0312 102.135 17.8385 102.469 18.5469C102.802 19.2448 103.281 19.7969 103.906 20.2031C104.531 20.599 105.281 20.7969 106.156 20.7969C106.969 20.7969 107.724 20.6406 108.422 20.3281C109.13 20.0052 109.74 19.5208 110.25 18.875L112.438 21.25C111.906 22.0208 111.089 22.724 109.984 23.3594C108.88 23.9948 107.51 24.3125 105.875 24.3125ZM124.516 19.3281C124.516 19.0052 124.422 18.7135 124.234 18.4531C124.047 18.1927 123.698 17.9531 123.188 17.7344C122.688 17.5052 121.964 17.2969 121.016 17.1094C119.87 16.8594 118.844 16.5208 117.938 16.0938C117.031 15.6667 116.318 15.1198 115.797 14.4531C115.276 13.7865 115.016 12.9688 115.016 12C115.016 11.0625 115.281 10.1979 115.812 9.40625C116.354 8.61458 117.13 7.97917 118.141 7.5C119.151 7.02083 120.359 6.78125 121.766 6.78125C123.234 6.78125 124.495 7.01562 125.547 7.48438C126.609 7.95312 127.422 8.59896 127.984 9.42188C128.557 10.2344 128.844 11.1615 128.844 12.2031H124.344C124.344 11.5469 124.135 11 123.719 10.5625C123.302 10.1146 122.646 9.89062 121.75 9.89062C121.25 9.89062 120.818 9.97917 120.453 10.1562C120.089 10.3229 119.807 10.5521 119.609 10.8438C119.422 11.125 119.328 11.4375 119.328 11.7812C119.328 12.125 119.427 12.4271 119.625 12.6875C119.833 12.9375 120.167 13.1615 120.625 13.3594C121.083 13.5469 121.708 13.7188 122.5 13.875C123.719 14.125 124.807 14.4531 125.766 14.8594C126.724 15.2552 127.484 15.7969 128.047 16.4844C128.609 17.1615 128.891 18.0521 128.891 19.1562C128.891 20.1458 128.599 21.0312 128.016 21.8125C127.432 22.5938 126.609 23.2083 125.547 23.6562C124.484 24.0938 123.229 24.3125 121.781 24.3125C120.208 24.3125 118.875 24.0312 117.781 23.4688C116.698 22.9062 115.875 22.1927 115.312 21.3281C114.76 20.4531 114.484 19.5573 114.484 18.6406H118.75C118.771 19.2552 118.927 19.75 119.219 20.125C119.521 20.5 119.901 20.7708 120.359 20.9375C120.828 21.1042 121.333 21.1875 121.875 21.1875C122.458 21.1875 122.943 21.1094 123.328 20.9531C123.714 20.7865 124.005 20.5677 124.203 20.2969C124.411 20.0156 124.516 19.6927 124.516 19.3281Z" fill="url(#paint0_linear_418_76)" />
                    <defs>
                        <linearGradient id="paint0_linear_418_76" x1="-10.5038" y1="15" x2="219.167" y2="16.0109" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#EE10B0" />
                            <stop offset="1" stopColor="#0E9EEF" stopOpacity="0.92" />
                        </linearGradient>
                    </defs>
                </svg >
            </Link>
            <div id="menu-section" className='mb-5'>
                <p className='text-primaryColorPink/60 text-[0.8rem]'>Menu</p>
                <div className={`flex my-2 cursor-pointer ${getMenuClass('home')} py-2 items-center `}
                    onClick={() => handleMenuClick('home')}
                >
                    <HomeIcon className='w-[24px] h-[24px] mr-3' />
                    <Link href="/">Home</Link>
                    {/* <p>Home</p> */}
                </div>
                <div className={`flex my-2 cursor-pointer ${getMenuClass('discover')} py-2 items-center`}
                    onClick={() => handleMenuClick('discover')}
                >
                    <GlobeIcon className='w-[24px] h-[24px] mr-3' />
                    <Link href="/discover">Discover</Link>
                    {/* <p>Discover</p> */}
                </div>
                <div className={`flex my-2 cursor-pointer ${getMenuClass('album')} py-2 items-center`}
                    onClick={() => handleMenuClick('album')}
                >
                    <DiscIcon className='w-[24px] h-[24px] mr-3' />
                    <Link href="/albums">Albums</Link>

                    {/* <p>Albums</p> */}
                </div>
                <div className={`flex my-2 cursor-pointer ${getMenuClass('artist')} py-2 items-center`}
                    onClick={() => handleMenuClick('artist')}
                >
                    <AvatarIcon className='w-[24px] h-[24px] mr-3' />
                    <Link href="/artists">Artists</Link>
                    {/* <p>Artists</p> */}
                </div>
            </div>
            <div id="library-section" className='mb-5'>
                <p className='text-primaryColorPink/60 text-[0.8rem]'>Library</p>
                <div className={`flex my-2 cursor-pointer ${getMenuClass('recently-added')} py-2 items-center`}
                    onClick={() => handleMenuClick('recently-added')}
                >
                    <ClockIcon className='w-[24px] h-[24px] mr-3' />
                    <Link href="/recently_added">Recently added</Link>
                    {/* <p>Recently Added</p> */}
                </div>
                <div className={`flex my-2 cursor-pointer ${getMenuClass('most-played')} py-2 items-center`}
                    onClick={() => handleMenuClick('most-played')}
                >
                    <CounterClockwiseClockIcon className='w-[24px] h-[24px] mr-3' />
                    <Link href="/most_played">Most played</Link>
                    {/* <p>Most played</p> */}
                </div>
            </div>
            <div id="playlist-section" className='mb-5'>
                <p className='text-primaryColorPink/60 text- text-[0.8rem]'>Playlist and favorite</p>
                <div className={`flex my-2 cursor-pointer ${getMenuClass('your-favorites')} py-2 items-center`}
                    onClick={() => handleMenuClick('your-favorites')}
                >
                    <HeartIcon className='w-[24px] h-[24px] mr-3' />
                    <Link href="/your_favorites">Your favorites</Link>
                    {/* <p>Your favorites</p> */}
                </div>
                <div className={`flex my-2 cursor-pointer ${getMenuClass('your-playlist')} py-2 items-center`}
                    onClick={() => handleMenuClick('your-playlist')}
                >
                    <ListBulletIcon className='w-[24px] h-[24px] mr-3' />
                    <Link href="/your_playlists">Your playlists</Link>
                </div>
            </div>
            <div id="general-section" className='mb-5'>
                <p className='text-primaryColorPink/60 text-[0.8rem]'>General</p>
                <div className={`flex my-2 cursor-pointer ${getMenuClass('Setting')} py-2 items-center `}
                    onClick={() => handleMenuClick('Setting')}
                >
                    <GearIcon className='w-[24px] h-[24px] mr-3' />
                    <Link href="/setting">Setting</Link>

                    {/* <p>Setting</p> */}
                </div>
                <div
                    className={`flex my-2 cursor-pointer py-2 items-center`}
                    onClick={() => handleLogout()}
                >
                    <ExitIcon className='w-[24px] h-[24px] mr-3 text-primaryColorPink' />
                    <p
                        className='text-primaryColorPink text-[0.9rem]'
                    >Logout</p>

                    {/* <p className='text-primaryColorPink'>Logout</p> */}
                </div>
            </div>
        </div >
    )
}

export default Sidebar