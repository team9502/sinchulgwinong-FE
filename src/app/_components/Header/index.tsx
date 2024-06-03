import Image from "next/image";
import Link from "next/link";
import Paths from "@/constants/paths";
import logo from "@/assets/logos/logo_main.png";

const PATHS = [
  { ko: "채용 정보", to: Paths.JOB_INFO },
  { ko: "기업 정보", to: Paths.ORGAN_INFO },
  { ko: "커뮤니티", to: Paths.COMMUNITY },
  { ko: "고객센터", to: Paths.QNA },
];

const Header = () => {
  return (
    <>
      <div className="flex justify-end gap-[20px] pt-[30px] pb-[16px] pr-[60px] border-b border-[#B0B0B0]">
        <div>번역</div>
        <Link href={"/sign-in"}>로그인</Link>
        <Link href={"/sign-in"}>회원가입</Link>
      </div>
      <header className="flex justify-between items-center px-[100px] py-[13px]  border-b border-[#777777]">
        <Link href="/">
          <Image src={logo} alt="신출귀농 로고" width={142} height={88} />
        </Link>
        <nav className="flex">
          {PATHS.map((path) => (
            <Link key={path.ko} href={path.to} className="w-[144px]">
              {path.ko}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
