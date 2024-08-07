import Badge from "@/components/Badge";
import Link from "next/link";
import { SalaryType } from "@/types";

interface JobCardProps {
  id: number;
  title: string;
  content: string;
  address: string;
  salaryType: SalaryType;
  salaryAmount: number;
}

const regex = /<p>(.*?)<\/p>/;

const JobCard = ({
  title,
  id,
  content,
  address,
  salaryAmount,
  salaryType,
}: JobCardProps) => {
  return (
    <Link href={`/job-info/detail/?jobBoardId=${id}`}>
      <div className="flex flex-col justify-between p-[20px] items-end border-t-[11px] border-t-primary3 border-l-[1px] border-l-primary4 border-r-[1px] border-r-primary4 border-b-[1px] border-b-primary4 bg-white h-full">
        <div className="relative w-full">
          <div className="title2">{title}</div>
          <div className="title1">{content.match(regex)?.[1] ?? content}</div>
          <div className="title1">[{address}]</div>
        </div>
        <div>
          <Badge text={salaryType} />
          <span className="title2 text-primary4">{salaryAmount}원</span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
