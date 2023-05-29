import Image from 'next/image';

import AvatarImg from 'public/images/image-avatar.png';

export default function Creator() {
  return (
    <div className="flex items-center gap-4 border-t border-very-dark-blue-line pt-4">
      <Image
        src={AvatarImg}
        alt="Profile image of the NFT creator"
        className="aspect-square w-[33px] rounded-full border border-white"
      />
      <p className="text-base text-soft-blue lg:text-baseLg">
        Creation of{' '}
        <span className="text-white transition-colors hover:cursor-pointer hover:text-cyan">
          Jules Wyvern
        </span>
      </p>
    </div>
  );
}
