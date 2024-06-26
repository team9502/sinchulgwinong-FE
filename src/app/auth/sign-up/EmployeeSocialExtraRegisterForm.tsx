import postEmployeeSignUp, {
  EmployeeSignUpBody,
} from "@/api/auth/postEmployeeSignUp";
import postEmployeeSocialSignUpExtraInfo, {
  EmployeeSocialSignUpExtraBody,
} from "@/api/auth/postEmployeeSocialSignUpEtraInfo";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import InputAgree from "../ui/InputAgree";
import InputAuthenticationNumber from "../ui/InputAuthenticationNumber";
import Paths from "@/constants/paths";
import postSendAuthenticationNumber from "@/api/auth/postSendAuthenticationNumber";
import postVerifyAuthenticationNumber from "@/api/auth/postVerifyAuthenticationNumber";
import { useForm } from "react-hook-form";

function allElementsOn(arr: string[]) {
  return arr.every((element) => element === "on");
}

const EmployeeSocialExtraRegisterForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type")!;
  const code = searchParams.get("code")!;

  const { register, handleSubmit } =
    useForm<Omit<EmployeeSocialSignUpExtraBody, "loginType">>();

  const onSubmit = (data: Omit<EmployeeSocialSignUpExtraBody, "loginType">) => {
    postEmployeeSocialSignUpExtraInfo({
      ...data,
      code,
      loginType: "GOOGLE",
      agreeToTerms: true,
    });

    router.push(Paths.LOGIN);
  };

  return (
    <form
      className="flex flex-col gap-[25px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        placeholder="이름 입력"
        {...register("username", { required: true })}
      />
      <Input
        placeholder="닉네임 입력"
        {...register("nickname", { required: true })}
      />
      <Input
        placeholder="전화번호 입력"
        {...register("phoneNumber", { required: true })}
      />
      <div>
        <InputAgree
          onChecked={register("agreeToTerms", { required: true })}
          name="agreeToTerms"
          label="서비스 이용 약관 동의"
        />
        <InputAgree
          onChecked={register("agreeToTerms", { required: true })}
          name="agreeToTerms"
          label="개인정보 수집 및 이용 동의"
        />
        <InputAgree
          onChecked={register("agreeToTerms", { required: true })}
          name="agreeToTerms"
          label="위치기반 서비스 이용 동의"
        />
      </div>
      <Button
        variants="yellow"
        text="회원가입"
        className="px-[30px] py-[17px]"
        isRound
      />
    </form>
  );
};

export default EmployeeSocialExtraRegisterForm;
