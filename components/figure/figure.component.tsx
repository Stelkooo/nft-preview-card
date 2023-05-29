import Image from 'next/image';

import Equilibrium from 'public/images/image-equilibrium.jpg';

export default function Figure() {
  return (
    <figure className="relative cursor-pointer overflow-hidden rounded-lg after:transition-colors hover:after:absolute hover:after:inset-0 hover:after:h-full hover:after:w-full hover:after:bg-cyan hover:after:bg-opacity-50 hover:after:bg-[url('/images/icon-view.svg')] hover:after:bg-center hover:after:bg-no-repeat">
      <Image src={Equilibrium} alt="Equilibrium" />
    </figure>
  );
}
