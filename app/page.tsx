import MaxWidthContainer from "@/components/user/MaxWidthContainer";
import Image from "next/image";
import Header from "@/components/user/Header";
import MainContainer from "@/components/user/MainContainer";

export default function Home() {
  return (
    <MaxWidthContainer>
      <Header />
      <MainContainer />
    </MaxWidthContainer>
  );
}
