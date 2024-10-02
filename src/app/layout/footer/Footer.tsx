import React from 'react'

const Footer = () => {
    return (
        <div className='grid grid-cols-3'>
            <div className='px-8 flex flex-col justify-center'>
                <p className='font-bold text-[1.5rem]'>About</p>
                <p className='text-justify'>Melodies is a website that has been created for over <span className='text-primaryColorPink'>5 year&apos;s</span> now and it is one of the most famous music player website&apos;s in the world. in this website you can listen and download songs for free. also of you want no limitation you can buy our <span className='text-primaryColorBlue'>premium pass&apos;s</span>.</p>
            </div>
            <div className='flex'>
                <div className='mx-4 flex flex-col items-center'>
                    <p className='font-semibold text-[1.2rem]'>Melodies</p>
                    <hr className='w-[8rem] border-t-4 border-white my-5' />
                    <ul className='flex flex-col items-center cursor-pointer'>
                        <li className='text-[0.9rem] mb-3'>Songs</li>
                        <li className='text-[0.9rem] mb-3'>Radio</li>
                        <li className='text-[0.9rem] mb-3'>Podcast</li>
                    </ul>
                </div>
                <div className='mx-4 flex flex-col items-center'>
                    <p className='font-semibold text-[1.2rem]'>Acess</p>
                    <hr className='w-[8rem] border-t-4 border-white my-5' />
                    <ul className='flex flex-col items-center cursor-pointer'>
                        <li className='text-[0.9rem] mb-3'>Explore</li>
                        <li className='text-[0.9rem] mb-3'>Artists</li>
                        <li className='text-[0.9rem] mb-3'>Playlists</li>
                        <li className='text-[0.9rem] mb-3'>Albums</li>
                        <li className='text-[0.9rem] mb-3'>Trending</li>
                    </ul>
                </div>
                <div className='mx-4 flex flex-col items-center'>
                    <p className='font-semibold text-[1.2rem]'>Contact</p>
                    <hr className='w-[8rem] border-t-4 border-white my-5' />
                    <ul className='flex flex-col items-center cursor-pointer'>
                        <li className='text-[0.9rem] mb-3'>About</li>
                        <li className='text-[0.9rem] mb-3'>Policy</li>
                        <li className='text-[0.9rem] mb-3'>Social Media</li>
                        <li className='text-[0.9rem] mb-3'>Support</li>
                    </ul>
                </div>
            </div>
            <div className='ml-20 flex flex-col justify-center items-center'>
                <svg className='mb-12' width="129" height="25" viewBox="0 0 129 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.17188 1.25H6.14062L11.9844 17.9531L17.8281 1.25H21.7969L13.5781 24H10.3906L2.17188 1.25ZM0.03125 1.25H3.98438L4.70312 17.5312V24H0.03125V1.25ZM19.9844 1.25H23.9531V24H19.2656V17.5312L19.9844 1.25ZM35.5625 24.3125C33.8125 24.3125 32.3073 23.9479 31.0469 23.2188C29.7865 22.4792 28.8177 21.4896 28.1406 20.25C27.474 19.0104 27.1406 17.6354 27.1406 16.125V15.5C27.1406 13.7917 27.4583 12.2865 28.0938 10.9844C28.7292 9.67188 29.6406 8.64583 30.8281 7.90625C32.0156 7.15625 33.4271 6.78125 35.0625 6.78125C36.6667 6.78125 38.0208 7.13021 39.125 7.82812C40.2292 8.51562 41.0677 9.47917 41.6406 10.7188C42.2135 11.9583 42.5 13.4062 42.5 15.0625V16.9375H29.0625V13.9375H38.0781V13.5938C38.0781 12.9688 37.9635 12.4115 37.7344 11.9219C37.5156 11.4219 37.1823 11.026 36.7344 10.7344C36.2865 10.4427 35.7135 10.2969 35.0156 10.2969C34.224 10.2969 33.5781 10.5208 33.0781 10.9688C32.5781 11.4167 32.2135 12.0365 31.9844 12.8281C31.7656 13.6094 31.6562 14.5 31.6562 15.5V16.125C31.6562 17.0312 31.8229 17.8385 32.1562 18.5469C32.4896 19.2448 32.9688 19.7969 33.5938 20.2031C34.2188 20.599 34.9688 20.7969 35.8438 20.7969C36.6562 20.7969 37.4115 20.6406 38.1094 20.3281C38.8177 20.0052 39.4271 19.5208 39.9375 18.875L42.125 21.25C41.5938 22.0208 40.776 22.724 39.6719 23.3594C38.5677 23.9948 37.1979 24.3125 35.5625 24.3125ZM49.8125 0V24H45.2969V0H49.8125ZM52.8125 15.7188V15.3906C52.8125 13.7448 53.125 12.276 53.75 10.9844C54.375 9.68229 55.2812 8.65625 56.4688 7.90625C57.6562 7.15625 59.099 6.78125 60.7969 6.78125C62.5052 6.78125 63.9583 7.15625 65.1562 7.90625C66.3542 8.65625 67.2656 9.68229 67.8906 10.9844C68.5156 12.276 68.8281 13.7448 68.8281 15.3906V15.7188C68.8281 17.3646 68.5156 18.8385 67.8906 20.1406C67.2656 21.4323 66.3542 22.4531 65.1562 23.2031C63.9688 23.9427 62.526 24.3125 60.8281 24.3125C59.1198 24.3125 57.6667 23.9427 56.4688 23.2031C55.2812 22.4531 54.375 21.4323 53.75 20.1406C53.125 18.8385 52.8125 17.3646 52.8125 15.7188ZM57.3125 15.3906V15.7188C57.3125 16.6562 57.4271 17.5104 57.6562 18.2812C57.8854 19.0521 58.2552 19.6667 58.7656 20.125C59.276 20.5729 59.9635 20.7969 60.8281 20.7969C61.6719 20.7969 62.349 20.5729 62.8594 20.125C63.3698 19.6667 63.7396 19.0521 63.9688 18.2812C64.1979 17.5104 64.3125 16.6562 64.3125 15.7188V15.3906C64.3125 14.474 64.1979 13.6302 63.9688 12.8594C63.7396 12.0885 63.3698 11.4688 62.8594 11C62.349 10.5312 61.6615 10.2969 60.7969 10.2969C59.9531 10.2969 59.276 10.5312 58.7656 11C58.2552 11.4688 57.8854 12.0885 57.6562 12.8594C57.4271 13.6302 57.3125 14.474 57.3125 15.3906ZM81.5781 20.3125V0H86.1094V24H82.0312L81.5781 20.3125ZM70.8906 15.75V15.4219C70.8906 13.7031 71.1458 12.1979 71.6562 10.9062C72.1667 9.60417 72.9167 8.59375 73.9062 7.875C74.8958 7.14583 76.0938 6.78125 77.5 6.78125C78.8229 6.78125 79.9271 7.15104 80.8125 7.89062C81.6979 8.61979 82.3958 9.625 82.9062 10.9062C83.4271 12.1771 83.7865 13.6354 83.9844 15.2812V16C83.7865 17.5625 83.4271 18.974 82.9062 20.2344C82.3958 21.4844 81.6927 22.4792 80.7969 23.2188C79.9115 23.9479 78.8021 24.3125 77.4688 24.3125C76.0729 24.3125 74.8802 23.9427 73.8906 23.2031C72.9115 22.4531 72.1667 21.4323 71.6562 20.1406C71.1458 18.849 70.8906 17.3854 70.8906 15.75ZM75.3906 15.4219V15.75C75.3906 16.6771 75.4948 17.526 75.7031 18.2969C75.9115 19.0573 76.25 19.6615 76.7188 20.1094C77.1875 20.5469 77.8177 20.7656 78.6094 20.7656C79.3802 20.7656 80.0156 20.5938 80.5156 20.25C81.0156 19.8958 81.3958 19.4115 81.6562 18.7969C81.9271 18.1823 82.0833 17.474 82.125 16.6719V14.625C82.0938 13.9688 82 13.3802 81.8438 12.8594C81.6979 12.3281 81.4792 11.875 81.1875 11.5C80.9062 11.125 80.5521 10.8333 80.125 10.625C79.7083 10.4167 79.2135 10.3125 78.6406 10.3125C77.8594 10.3125 77.2292 10.5417 76.75 11C76.2812 11.4479 75.9375 12.0573 75.7188 12.8281C75.5 13.599 75.3906 14.4635 75.3906 15.4219ZM94.375 7.09375V24H89.8594V7.09375H94.375ZM89.5781 2.6875C89.5781 2.03125 89.8073 1.48958 90.2656 1.0625C90.724 0.635417 91.3385 0.421875 92.1094 0.421875C92.8698 0.421875 93.4792 0.635417 93.9375 1.0625C94.4062 1.48958 94.6406 2.03125 94.6406 2.6875C94.6406 3.34375 94.4062 3.88542 93.9375 4.3125C93.4792 4.73958 92.8698 4.95312 92.1094 4.95312C91.3385 4.95312 90.724 4.73958 90.2656 4.3125C89.8073 3.88542 89.5781 3.34375 89.5781 2.6875ZM105.875 24.3125C104.125 24.3125 102.62 23.9479 101.359 23.2188C100.099 22.4792 99.1302 21.4896 98.4531 20.25C97.7865 19.0104 97.4531 17.6354 97.4531 16.125V15.5C97.4531 13.7917 97.7708 12.2865 98.4062 10.9844C99.0417 9.67188 99.9531 8.64583 101.141 7.90625C102.328 7.15625 103.74 6.78125 105.375 6.78125C106.979 6.78125 108.333 7.13021 109.438 7.82812C110.542 8.51562 111.38 9.47917 111.953 10.7188C112.526 11.9583 112.812 13.4062 112.812 15.0625V16.9375H99.375V13.9375H108.391V13.5938C108.391 12.9688 108.276 12.4115 108.047 11.9219C107.828 11.4219 107.495 11.026 107.047 10.7344C106.599 10.4427 106.026 10.2969 105.328 10.2969C104.536 10.2969 103.891 10.5208 103.391 10.9688C102.891 11.4167 102.526 12.0365 102.297 12.8281C102.078 13.6094 101.969 14.5 101.969 15.5V16.125C101.969 17.0312 102.135 17.8385 102.469 18.5469C102.802 19.2448 103.281 19.7969 103.906 20.2031C104.531 20.599 105.281 20.7969 106.156 20.7969C106.969 20.7969 107.724 20.6406 108.422 20.3281C109.13 20.0052 109.74 19.5208 110.25 18.875L112.438 21.25C111.906 22.0208 111.089 22.724 109.984 23.3594C108.88 23.9948 107.51 24.3125 105.875 24.3125ZM124.516 19.3281C124.516 19.0052 124.422 18.7135 124.234 18.4531C124.047 18.1927 123.698 17.9531 123.188 17.7344C122.688 17.5052 121.964 17.2969 121.016 17.1094C119.87 16.8594 118.844 16.5208 117.938 16.0938C117.031 15.6667 116.318 15.1198 115.797 14.4531C115.276 13.7865 115.016 12.9688 115.016 12C115.016 11.0625 115.281 10.1979 115.812 9.40625C116.354 8.61458 117.13 7.97917 118.141 7.5C119.151 7.02083 120.359 6.78125 121.766 6.78125C123.234 6.78125 124.495 7.01562 125.547 7.48438C126.609 7.95312 127.422 8.59896 127.984 9.42188C128.557 10.2344 128.844 11.1615 128.844 12.2031H124.344C124.344 11.5469 124.135 11 123.719 10.5625C123.302 10.1146 122.646 9.89062 121.75 9.89062C121.25 9.89062 120.818 9.97917 120.453 10.1562C120.089 10.3229 119.807 10.5521 119.609 10.8438C119.422 11.125 119.328 11.4375 119.328 11.7812C119.328 12.125 119.427 12.4271 119.625 12.6875C119.833 12.9375 120.167 13.1615 120.625 13.3594C121.083 13.5469 121.708 13.7188 122.5 13.875C123.719 14.125 124.807 14.4531 125.766 14.8594C126.724 15.2552 127.484 15.7969 128.047 16.4844C128.609 17.1615 128.891 18.0521 128.891 19.1562C128.891 20.1458 128.599 21.0312 128.016 21.8125C127.432 22.5938 126.609 23.2083 125.547 23.6562C124.484 24.0938 123.229 24.3125 121.781 24.3125C120.208 24.3125 118.875 24.0312 117.781 23.4688C116.698 22.9062 115.875 22.1927 115.312 21.3281C114.76 20.4531 114.484 19.5573 114.484 18.6406H118.75C118.771 19.2552 118.927 19.75 119.219 20.125C119.521 20.5 119.901 20.7708 120.359 20.9375C120.828 21.1042 121.333 21.1875 121.875 21.1875C122.458 21.1875 122.943 21.1094 123.328 20.9531C123.714 20.7865 124.005 20.5677 124.203 20.2969C124.411 20.0156 124.516 19.6927 124.516 19.3281Z" fill="url(#paint0_linear_418_76)" />
                    <defs>
                        <linearGradient id="paint0_linear_418_76" x1="-10.5038" y1="15" x2="219.167" y2="16.0109" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#EE10B0" />
                            <stop offset="1" stopColor="#0E9EEF" stopOpacity="0.92" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className='flex'>
                    <a href="">
                        <svg className='mx-3 transition-transform duration-300 hover:translate-y-[-5px]' width="32" height="32" viewBox="0 0 61 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60.0317 28.1706C60.0317 12.6108 46.5948 0 30.0158 0C13.4368 0 0 12.6108 0 28.1706C0 42.2339 10.9745 53.8872 25.3259 56V36.3136H17.7046V28.1706H25.3259V21.9642C25.3259 14.905 29.8048 11.0041 36.6638 11.0041C39.9468 11.0041 43.3823 11.5543 43.3823 11.5543V18.4869H39.5951C35.8665 18.4869 34.7058 20.6603 34.7058 22.8886V28.1706H43.0304L41.6997 36.3136H34.7058V56C49.0571 53.8872 60.0317 42.2339 60.0317 28.1706Z" fill="#1877F2" />
                            <path d="M41.6045 35.4369L42.9352 27.2939H34.6106V22.0119C34.6106 19.7836 35.7713 17.6102 39.4999 17.6102H43.287V10.6776C43.287 10.6776 39.8516 10.1274 36.5686 10.1274C29.7096 10.1274 25.2306 14.0284 25.2306 21.0875V27.2939H17.6094V35.4369H25.2306V55.1233C26.7607 55.3489 28.326 55.4644 29.9206 55.4644C31.5152 55.4644 33.0805 55.3489 34.6106 55.1233V35.4369H41.6045Z" fill="white" />
                        </svg>
                    </a>
                    <a href="">
                        <svg className='mx-3 transition-transform duration-300 hover:translate-y-[-5px]' width="32" height="32" viewBox="0 0 61 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.4377 0C22.2585 0 21.2321 0.0332505 18.0196 0.169167C14.8135 0.305667 12.625 0.777584 10.7101 1.47C8.72935 2.18517 7.0491 3.14183 5.37513 4.69875C3.69991 6.25508 2.67093 7.81725 1.89919 9.65825C1.15256 11.4392 0.644343 13.4744 0.500035 16.4541C0.356982 19.4408 0.319336 20.3957 0.319336 28C0.319336 35.6043 0.355727 36.5558 0.50129 39.5424C0.648735 42.5233 1.15632 44.5579 1.90045 46.3383C2.6703 48.1798 3.69928 49.742 5.37388 51.2983C7.04722 52.8558 8.72747 53.8148 10.707 54.53C12.6232 55.2224 14.8122 55.6943 18.0178 55.8308C21.2302 55.9668 22.256 56 30.4345 56C38.6143 56 39.6376 55.9668 42.85 55.8308C46.0562 55.6943 48.2471 55.2224 50.1633 54.53C52.1435 53.8148 53.8212 52.8558 55.4945 51.2983C57.1698 49.742 58.1987 48.1798 58.9705 46.3388C59.7108 44.5579 60.219 42.5227 60.3696 39.543C60.5139 36.5563 60.5516 35.6043 60.5516 28C60.5516 20.3957 60.5139 19.4413 60.3696 16.4547C60.219 13.4738 59.7108 11.4392 58.9705 9.65883C58.1987 7.81725 57.1698 6.25508 55.4945 4.69875C53.8193 3.14125 52.1441 2.18458 50.1614 1.47C48.2415 0.777584 46.0518 0.305667 42.8456 0.169167C39.6332 0.0332505 38.6105 0 30.4289 0H30.4377ZM27.736 5.04583C28.5378 5.04467 29.4325 5.04583 30.4377 5.04583C38.4787 5.04583 39.4318 5.07267 42.6072 5.20683C45.5436 5.33167 47.1372 5.78783 48.1988 6.17108C49.6043 6.67858 50.6063 7.28525 51.6597 8.26525C52.7138 9.24525 53.3663 10.1786 53.9134 11.4853C54.3256 12.4711 54.8169 13.9528 54.9506 16.6828C55.0949 19.6344 55.1262 20.5211 55.1262 27.9936C55.1262 35.4661 55.0949 36.3528 54.9506 39.3044C54.8163 42.0344 54.3256 43.5161 53.9134 44.5019C53.3676 45.8086 52.7138 46.739 51.6597 47.7184C50.6056 48.6984 49.6049 49.3051 48.1988 49.8126C47.1385 50.1976 45.5436 50.6526 42.6072 50.7774C39.4324 50.9116 38.4787 50.9408 30.4377 50.9408C22.3959 50.9408 21.4429 50.9116 18.2681 50.7774C15.3318 50.6514 13.7381 50.1953 12.6759 49.812C11.2704 49.3045 10.2665 48.6978 9.21247 47.7178C8.15839 46.7378 7.50587 45.8068 6.95876 44.4996C6.54654 43.5138 6.05526 42.0321 5.92162 39.3021C5.77731 36.3504 5.74845 35.4638 5.74845 27.9866C5.74845 20.5094 5.77731 19.6274 5.92162 16.6758C6.05589 13.9458 6.54654 12.4641 6.95876 11.4771C7.50462 10.1704 8.15839 9.23708 9.21247 8.25708C10.2665 7.27708 11.2704 6.67042 12.6759 6.16175C13.7375 5.77675 15.3318 5.32175 18.2681 5.19633C21.0463 5.07967 22.123 5.04467 27.736 5.03883V5.04583Z" fill="url(#paint0_radial_125_1656)" />
                            <path d="M46.4488 9.62622C45.734 9.62622 45.0352 9.82331 44.4408 10.1926C43.8465 10.5618 43.3833 11.0866 43.1098 11.7007C42.8363 12.3147 42.7648 12.9903 42.9044 13.6422C43.0439 14.294 43.3882 14.8927 43.8938 15.3625C44.3993 15.8324 45.0434 16.1523 45.7445 16.2818C46.4456 16.4113 47.1723 16.3446 47.8327 16.0901C48.493 15.8356 49.0574 15.4048 49.4543 14.8521C49.8513 14.2994 50.063 13.6496 50.0628 12.9851C50.0628 11.1301 48.444 9.62505 46.4488 9.62505V9.62622Z" fill="url(#paint1_radial_125_1656)" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.3729 13.5521C21.8317 13.5521 14.9068 19.9903 14.9068 27.9312C14.9068 35.8721 21.8317 42.3075 30.3729 42.3075C38.914 42.3075 45.8371 35.8721 45.8371 27.9312C45.8371 19.9903 38.914 13.5521 30.3729 13.5521ZM30.4355 37.1876C35.8931 37.1876 40.3173 33.0742 40.3173 28.0001C40.3173 22.9259 35.8931 18.8126 30.4355 18.8126C24.9779 18.8126 20.5536 22.9259 20.5536 28.0001C20.5536 33.0742 24.9779 37.1876 30.4355 37.1876Z" fill="url(#paint2_radial_125_1656)" />
                            <path d="M30.4377 0C22.2585 0 21.2321 0.0332505 18.0196 0.169167C14.8135 0.305667 12.625 0.777584 10.7101 1.47C8.72935 2.18517 7.04911 3.14183 5.37513 4.69875C3.69991 6.25508 2.67093 7.81725 1.89919 9.65825C1.15256 11.4392 0.644343 13.4744 0.500035 16.4541C0.356982 19.4408 0.319336 20.3957 0.319336 28C0.319336 35.6043 0.355727 36.5558 0.50129 39.5424C0.648735 42.5233 1.15632 44.5579 1.90045 46.3383C2.6703 48.1798 3.69928 49.742 5.37388 51.2983C7.04722 52.8558 8.72747 53.8148 10.707 54.53C12.6232 55.2224 14.8122 55.6943 18.0178 55.8308C21.2302 55.9668 22.256 56 30.4345 56C38.6143 56 39.6376 55.9668 42.85 55.8308C46.0562 55.6943 48.2471 55.2224 50.1633 54.53C52.1435 53.8148 53.8212 52.8558 55.4945 51.2983C57.1698 49.742 58.1987 48.1798 58.9705 46.3388C59.7108 44.5579 60.219 42.5227 60.3696 39.543C60.5139 36.5563 60.5516 35.6043 60.5516 28C60.5516 20.3957 60.5139 19.4413 60.3696 16.4547C60.219 13.4738 59.7108 11.4392 58.9705 9.65883C58.1987 7.81725 57.1698 6.25508 55.4945 4.69875C53.8193 3.14125 52.1441 2.18458 50.1614 1.47C48.2415 0.777584 46.0518 0.305667 42.8456 0.169167C39.6332 0.0332505 38.6105 0 30.4289 0H30.4377ZM27.736 5.04583C28.5378 5.04467 29.4325 5.04583 30.4377 5.04583C38.4787 5.04583 39.4318 5.07267 42.6072 5.20683C45.5436 5.33167 47.1372 5.78783 48.1988 6.17108C49.6043 6.67858 50.6063 7.28525 51.6597 8.26525C52.7138 9.24525 53.3663 10.1786 53.9134 11.4853C54.3256 12.4711 54.8169 13.9527 54.9506 16.6827C55.0949 19.6344 55.1262 20.5211 55.1262 27.9936C55.1262 35.4661 55.0949 36.3527 54.9506 39.3044C54.8163 42.0344 54.3256 43.5161 53.9134 44.5019C53.3676 45.8086 52.7138 46.739 51.6597 47.7184C50.6056 48.6984 49.6049 49.3051 48.1988 49.8126C47.1385 50.1976 45.5436 50.6526 42.6072 50.7774C39.4324 50.9116 38.4787 50.9408 30.4377 50.9408C22.3959 50.9408 21.4429 50.9116 18.2681 50.7774C15.3318 50.6514 13.7381 50.1953 12.6759 49.812C11.2704 49.3045 10.2665 48.6978 9.21247 47.7178C8.15839 46.7378 7.50587 45.8068 6.95876 44.4996C6.54654 43.5138 6.05526 42.0321 5.92162 39.3021C5.77731 36.3504 5.74845 35.4638 5.74845 27.9866C5.74845 20.5094 5.77731 19.6274 5.92162 16.6758C6.05589 13.9458 6.54654 12.4641 6.95876 11.4771C7.50462 10.1704 8.15839 9.23708 9.21247 8.25708C10.2665 7.27708 11.2704 6.67042 12.6759 6.16175C13.7375 5.77675 15.3318 5.32175 18.2681 5.19633C21.0463 5.07967 22.123 5.04467 27.736 5.03883V5.04583Z" fill="url(#paint3_radial_125_1656)" />
                            <path d="M46.4488 9.62622C45.734 9.62622 45.0352 9.82331 44.4408 10.1926C43.8465 10.5618 43.3833 11.0866 43.1098 11.7007C42.8363 12.3147 42.7648 12.9903 42.9044 13.6422C43.0439 14.294 43.3882 14.8927 43.8938 15.3625C44.3993 15.8324 45.0434 16.1523 45.7445 16.2818C46.4456 16.4113 47.1723 16.3446 47.8327 16.0901C48.493 15.8356 49.0574 15.4048 49.4543 14.8521C49.8513 14.2994 50.063 13.6496 50.0628 12.9851C50.0628 11.1301 48.444 9.62505 46.4488 9.62505V9.62622Z" fill="url(#paint4_radial_125_1656)" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.3729 13.5521C21.8317 13.5521 14.9068 19.9903 14.9068 27.9312C14.9068 35.8721 21.8317 42.3075 30.3729 42.3075C38.914 42.3075 45.8371 35.8721 45.8371 27.9312C45.8371 19.9903 38.914 13.5521 30.3729 13.5521ZM30.4355 37.1876C35.8931 37.1876 40.3173 33.0742 40.3173 28.0001C40.3173 22.9259 35.8931 18.8126 30.4355 18.8126C24.9779 18.8126 20.5536 22.9259 20.5536 28.0001C20.5536 33.0742 24.9779 37.1876 30.4355 37.1876Z" fill="url(#paint5_radial_125_1656)" />
                            <defs>
                                <radialGradient id="paint0_radial_125_1656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.3186 60.3132) rotate(-90) scale(55.5001 55.5207)">
                                    <stop stopColor="#FFDD55" />
                                    <stop offset="0.1" stopColor="#FFDD55" />
                                    <stop offset="0.5" stopColor="#FF543E" />
                                    <stop offset="1" stopColor="#C837AB" />
                                </radialGradient>
                                <radialGradient id="paint1_radial_125_1656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.3186 60.3132) rotate(-90) scale(55.5001 55.5207)">
                                    <stop stopColor="#FFDD55" />
                                    <stop offset="0.1" stopColor="#FFDD55" />
                                    <stop offset="0.5" stopColor="#FF543E" />
                                    <stop offset="1" stopColor="#C837AB" />
                                </radialGradient>
                                <radialGradient id="paint2_radial_125_1656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.3186 60.3132) rotate(-90) scale(55.5001 55.5207)">
                                    <stop stopColor="#FFDD55" />
                                    <stop offset="0.1" stopColor="#FFDD55" />
                                    <stop offset="0.5" stopColor="#FF543E" />
                                    <stop offset="1" stopColor="#C837AB" />
                                </radialGradient>
                                <radialGradient id="paint3_radial_125_1656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-9.76988 4.03415) rotate(77.8497) scale(24.8836 109.661)">
                                    <stop stopColor="#3771C8" />
                                    <stop offset="0.128" stopColor="#3771C8" />
                                    <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                                </radialGradient>
                                <radialGradient id="paint4_radial_125_1656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-9.76988 4.03415) rotate(77.8497) scale(24.8836 109.661)">
                                    <stop stopColor="#3771C8" />
                                    <stop offset="0.128" stopColor="#3771C8" />
                                    <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                                </radialGradient>
                                <radialGradient id="paint5_radial_125_1656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-9.76988 4.03415) rotate(77.8497) scale(24.8836 109.661)">
                                    <stop stopColor="#3771C8" />
                                    <stop offset="0.128" stopColor="#3771C8" />
                                    <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </a>
                    <a href="">
                        <svg className='mx-3 transition-transform duration-300 hover:translate-y-[-5px]' width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333335 333336" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path d="M72464 0h188407c39856 0 72464 32609 72464 72465v188407c0 39855-32608 72464-72464 72464H72464C32608 333336 0 300727 0 260872V72465C0 32609 32608 0 72464 0zm127664 70642c337 2877 825 5661 1461 8341l6304 2c1170 9991 4006 19119 8465 26697 7282 6745 16797 10904 28280 11641v9208c2131 444 4350 746 6659 894v29690c-14847 1462-27841-3426-42981-12531l2324 50847c0 16398 61 23892-8738 38977-20546 35222-58194 36677-82176 18323-12269-4256-23069-12466-29881-23612-19875-32516-1959-85512 55687-90966l-94 7835v1970c3105-646 6365-1144 9794-1468v31311c-12484 2057-20412 5890-24119 12980-7424 14197-4049 26526 3716 34309 16276 2796 34401-8481 31673-43351V70644h33628z" fill="#1a121f" /><path d="M200128 70642c3093 26406 18915 45038 44510 46681v25046l-165 15v-21275c-25595-1642-40311-17390-43404-43796l-27114-1v111095c3912 50005-35050 51490-49955 32531 17482 10934 45867 3826 42501-39202V70641h33628zm-72854 184165c-15319-3153-29249-12306-37430-25689-19875-32516-1959-85512 55687-90966l-94 7835c-53444 8512-58809 65920-44009 89802 5707 9209 15076 15686 25846 19019z" fill="#26f4ee" /><path d="M207892 78985c1761 15036 7293 28119 16454 36903-12866-6655-20630-19315-23062-36905l6609 2zm36580 47511c2181 463 4456 777 6824 929v29690c-14847 1462-27841-3426-42981-12531l2324 50847c0 16398 61 23892-8738 38977-21443 36760-61517 36743-85239 15810 30930 17765 84928 3857 84829-56453v-55496c15141 9105 28134 13993 42981 12530v-24302zm-99036 21460c3105-646 6365-1144 9794-1468v31311c-12484 2057-20412 5890-24119 12980-10441 19964 474 36238 14923 41365-18075-649-36010-19214-23555-43031 3707-7089 10474-10923 22958-12980v-28177z" fill="#fb2c53" /><path d="M201068 77313c3093 26406 17809 42154 43404 43796v29689c-14847 1462-27841-3425-42981-12530v55496c119 72433-77802 77945-100063 42025-14800-23881-9435-81290 44009-89802v30147c-12483 2057-19250 5891-22958 12980-22909 43808 56997 69872 51475-706V77313l27114 1z" fill="#fefefe" /></svg>
                    </a>
                    <a href="">
                        <svg className='mx-3 transition-transform duration-300 hover:translate-y-[-5px]' width="32" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.66868 0.844846L6.86507 0.183281C7.8649 -0.118361 8.94034 -0.045843 9.89062 0.387298C10.8409 0.82044 11.6011 1.5846 12.0293 2.53713L13.396 5.57769C13.7643 6.39679 13.8669 7.31064 13.6894 8.19102C13.5119 9.07139 13.0633 9.8741 12.4063 10.4865L10.0181 12.7133C9.98858 12.7409 9.96437 12.7736 9.94664 12.8099C9.69657 13.3206 10.0763 14.6848 11.2658 16.7462C12.6075 19.0697 13.6435 19.9879 14.1238 19.8463L17.2583 18.8871C18.1167 18.6249 19.0356 18.638 19.8863 18.9244C20.7369 19.2108 21.4766 19.7561 22.0017 20.4841L23.944 23.174C24.5539 24.0186 24.8363 25.0559 24.739 26.093C24.6416 27.1302 24.1711 28.0968 23.4148 28.8132L21.7437 30.3943C21.1626 30.9448 20.4569 31.3465 19.6869 31.5651C18.9169 31.7838 18.1055 31.8129 17.3218 31.65C12.6683 30.6815 8.49914 26.9343 4.7785 20.4907C1.05653 14.0431 -0.103859 8.55208 1.39128 4.03624C1.64156 3.28021 2.07014 2.59553 2.64082 2.04005C3.21149 1.48458 3.90616 1.07463 4.66868 0.844846ZM5.24291 2.74486C4.78539 2.88267 4.36775 3.12858 4.0253 3.46182C3.68285 3.79506 3.42565 4.20583 3.27542 4.65943C1.98669 8.55076 3.03064 13.494 6.49724 19.4983C9.9612 25.4987 13.7162 28.8727 17.7253 29.7063C18.1958 29.8041 18.6829 29.7866 19.1451 29.6553C19.6073 29.5239 20.0308 29.2827 20.3795 28.9521L22.0493 27.3723C22.4567 26.9867 22.7103 26.4662 22.7628 25.9077C22.8154 25.3492 22.6634 24.7906 22.3351 24.3357L20.3928 21.6445C20.1101 21.2526 19.7119 20.959 19.2539 20.8047C18.796 20.6505 18.3013 20.6434 17.8391 20.7844L14.6967 21.7463C12.9581 22.2637 11.3227 20.8149 9.54706 17.7373C8.04266 15.1333 7.52135 13.2518 8.16439 11.938C8.28876 11.6839 8.45812 11.455 8.66453 11.2619L11.0528 9.03503C11.4066 8.70528 11.6484 8.273 11.744 7.79886C11.8396 7.32473 11.7844 6.83255 11.586 6.39141L10.2192 3.35218C9.98866 2.83915 9.57926 2.42757 9.06745 2.19432C8.55565 1.96106 7.97644 1.92206 7.43799 2.08462L5.24159 2.74619L5.24291 2.74486Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer