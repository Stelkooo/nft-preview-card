import Image from 'next/image';

import Eth from 'public/images/icon-ethereum.svg';
import Clock from 'public/images/icon-clock.svg';

export default function CostAndTime() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <Image src={Eth} alt="Ethereum Logo" />
        <p className="text-base font-semibold text-cyan ">0.041 ETH</p>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src={Clock}
          alt="Icon of clock representing the time remaining of NFT"
        />
        <p className="text-base text-soft-blue">3 days left</p>
      </div>
    </div>
  );
}
