import React, { useEffect } from "react";
import AudioBar from "@/components/organisms/layout/AudioBar";
import { useRecoilValue } from "recoil";
import { resultGainState } from "../../lib/recoil/resultGain_state";
import { Button } from "@mui/material";
import Link from "next/link";
import Footer from "@/components/organisms/layout/Footer";

const Test = () => {
  const resultGain = useRecoilValue(resultGainState);

  useEffect(() => {
    console.log(resultGain);
  }, []);

  return (
    <>
      <div style={{ height: "calc(100vh - 200px)" }}>
        <div>
          <Link href="/AllItems">◀ 一覧ページへ</Link>
          <h1>テストページ</h1>
        </div>
      </div>
      <AudioBar />
      <Footer />
    </>
  );
};

export default Test;
