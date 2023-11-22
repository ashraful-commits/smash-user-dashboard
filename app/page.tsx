import MaxWidthContainer from "@/components/MaxWidthContainer";
import Image from "next/image";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";

export default function Home() {
  return (
    <MaxWidthContainer>
      <Header />
      <MainContainer />
    </MaxWidthContainer>
  );
}
