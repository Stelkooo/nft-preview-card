import Description from '../description/description.component';
import CostAndTime from '../cost-and-time/cost-and-time.component';
import Creator from '../creator/creator.component';
import Figure from '../figure/figure.component';

export default function Card() {
  return (
    <article className="flex max-w-xs flex-col gap-6 rounded-2xl bg-very-dark-blue-card p-6 lg:max-w-[350px] lg:pb-8">
      <Figure />
      <div className="flex flex-col gap-4 lg:gap-6">
        <div className="flex flex-col gap-4 lg:gap-6">
          <Description />
          <CostAndTime />
        </div>
        <Creator />
      </div>
    </article>
  );
}
