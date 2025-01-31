import { getAtFromRt } from '@/app/_utils/api/server/reissue.server';
import Image from 'next/image';
import React, { use } from 'react';
import PlusIcon from '@public/Plus.svg';
import ProfileIcon from '@public/Profile.svg';
import OutgressIcon from '@public/Outgress.svg';
import IngressIcon from '@public/Ingress.svg';
import HeaderButton from './HeaderButton';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { logout } from '@/app/_hooks/server/logout';

const Header = () => {
  const accessToken = use(getAtFromRt());

  return (
    <header className="absoulte top-0 z-50 flex justify-between pt-[24px] w-[1140px] m-[0_auto]">
      <div className="flex">
        <Link href={'/'} className="w-[40px] h-[40px]">
          <Image src="/Logo.svg" alt="gamza-logo" width={40} height={40} />
        </Link>
        <div className="flex ml-[24px]">
          <button className="text-center px-[16px] --font-pretendard font-bold text-[16px] rounded-lg hover:bg-gray-200">
            프로젝트
          </button>
          <button
            className="text-center px-[16px] --font-pretendard font-bold text-[16px] disabled:text-[#ddd] hover:cursor-not-allowed"
            disabled={true}
          >
            팀원
          </button>
        </div>
      </div>

      <div className="flex">
        {accessToken ? (
          <>
            <Link href={'/post'} className="w-[40px] h-[40px]">
              <HeaderButton imageSrc={PlusIcon} desc={'프로젝트 생성'} />
            </Link>
            <Link href={'/mypage'} className="w-[40px] h-[40px]">
              <HeaderButton imageSrc={ProfileIcon} desc={'마이페이지'} />
            </Link>
            <HeaderButton
              imageSrc={OutgressIcon}
              desc={'로그아웃'}
              onClick={logout}
            />
          </>
        ) : (
          <Link href={'/login'}>
            <HeaderButton imageSrc={IngressIcon} desc={'로그인'} />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
