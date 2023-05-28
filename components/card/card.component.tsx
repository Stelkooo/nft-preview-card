import Image from 'next/image';

import Equilibrium from 'public/images/image-equilibrium.jpg';
import Description from '../description/description.component';
import CostAndTime from '../cost-and-time/cost-and-time.component';
import Creator from '../creator/creator.component';

export default function Card() {
  return (
    <article className="flex max-w-xs flex-col gap-6 rounded-2xl bg-very-dark-blue-card p-6">
      <figure>
        <Image src={Equilibrium} alt="Equilibrium" className="rounded-lg" />
      </figure>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Description />
          <CostAndTime />
        </div>
        <Creator />
      </div>
    </article>
  );
}
