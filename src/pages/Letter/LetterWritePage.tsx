import * as S from "@/pages/Letter/LetterWritePage.style";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";

import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";

import Flower1 from "@/assets/Soft Flower_l.svg";
import Flower2 from "@/assets/six_leaf_flower_l.svg";
import Flower3 from "@/assets/five_leaf_flower_l.svg";
import Flower4 from "@/assets/5_Dots_l.svg";

type LetterLocationState = {
  letterText?: string;
};

export default function LetterWritePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [toName, setToName] = useState<string>("");
  const [fromName, setFromName] = useState<string>("");

  const [letterPreview, setLetterPreview] = useState<string>("");

  useEffect(() => {
    const state = location.state as LetterLocationState | null;
    if (state?.letterText !== undefined) {
      setLetterPreview(state.letterText);
    }
  }, [location.state]);

  const hasLetter = letterPreview.trim().length > 0;

  const handleWriteClick = () => {
    navigate("/letterdetail", {
      state: { letterText: letterPreview },
    });
  };

  const handleToChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToName(e.target.value);
  };

  const handleFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFromName(e.target.value);
  };

  return (
    <S.Container>
      <Header />
      <S.TopMessage>STEP BY STEP, YOU’RE MOVING FORWARD!</S.TopMessage>

      <S.LeftPane>
        <S.FlowerLayer>
          <img src={Flower1} className="flower f1" />
          <img src={Flower2} className="flower f2" />
          <img src={Flower3} className="flower f3" />
          <img src={Flower4} className="flower f4" />
        </S.FlowerLayer>

        <S.LeftInner>
          <S.InnerOutline className="to">
            <S.ToBar>
              <div>TO.</div>
              <S.NameInput
                type="text"
                value={toName}
                onChange={handleToChange}
              />
            </S.ToBar>
          </S.InnerOutline>

          <S.InnerOutline className="body">
            <S.LetterBody>
              {hasLetter && (
                <S.PreviewText>
                  {letterPreview.split("\n").map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </S.PreviewText>
              )}

              <S.LineList>
                {Array.from({ length: 17 }).map((_, idx) => (
                  <S.LineRow key={idx} />
                ))}
              </S.LineList>

              <S.WriteRow>
                <S.LineSegment />
                <S.WriteButton type="button" onClick={handleWriteClick}>
                  {hasLetter ? "SAVE" : "WRITE"}
                </S.WriteButton>
                <S.LineSegment />
              </S.WriteRow>
            </S.LetterBody>
          </S.InnerOutline>

          <S.InnerOutline className="from">
            <S.FromBar>
              <div>FROM.</div>
              <S.NameInput
                type="text"
                value={fromName}
                onChange={handleFromChange}
              />
            </S.FromBar>
          </S.InnerOutline>
        </S.LeftInner>
      </S.LeftPane>

      <NavBar />
    </S.Container>
  );
}
